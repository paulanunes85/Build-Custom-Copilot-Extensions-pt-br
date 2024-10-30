import express from 'express'
import {
  prompt,
  getFunctionCalls,
  createTextEvent,
  createDoneEvent,
  verifyRequestByKeyId,
  createConfirmationEvent
} from '@copilot-extensions/preview-sdk'
import { functions } from './client.js'
import { staticPrompts } from './prompts.js'
import { functionMappings } from './functionMappings.js'

const app = express()

// Prettify the response with ID and description of items
function populateDescription(description, args) {
  let populatedDescription = description
  const parsedArgs = JSON.parse(args)
  // Replace placeholders in the description with values from parsedArgs
  populatedDescription = populatedDescription.replace(/{(\w+)}/g, (_, key) => {
    return parsedArgs[key] !== undefined ? parsedArgs[key] : `{${key}}`
  })
  return populatedDescription
}

// This function tries to find a function to call based on the Copilot instructions
// If the function requires a confirmation, that even is sent to the user
// Otherwise, the function is called.
async function callFunction(name, args, confirmed) {
  const tool = functions.find(f => f.name === name)
  if (tool) {
    const f = functionMappings.find(fm => fm.function.name === name)
    if (!confirmed && f.requiresConfirmation) {
      const populatedDescription = populateDescription(f.description, args)
      return {
        confirmation: createConfirmationEvent({
          title: f.title,
          message: populatedDescription,
          metadata: {
            arguments: args,
            name: f.function.name
          }
        })
      }
    } else {
      console.log('Calling tool with args:', tool, args)
      const response = await tool(args)
      console.log('Response: ', response)
      return { response }
    }
  } else {
    console.error('Unknown function', name)
  }
}

// Connection endpoint for Copilot agent
app.get('/', (_, res) => {
  res.send('OK')
})

// Entrypoint for the agent interaction
app.post('/', express.json(), async (req, res) => {
  console.log('Received a POST request to the extensibility platform')
  const signature = req.get('Github-Public-Key-Signature')
  const keyID = req.get('Github-Public-Key-Identifier')
  const tokenForUser = req.get('X-GitHub-Token')
  const payload = req.body

  // Verify request authenticity
  try {
    await verifyRequestByKeyId(JSON.stringify(payload), signature, keyID, {
      token: tokenForUser
    })
  } catch (err) {
    console.error(err)
    return res.status(401).json({ error: 'Invalid signature' })
  }

  // Consider only last 3 messages to reduce context
  let messages = payload.messages.slice(-3)

  const confirmation =
    payload.messages[payload.messages.length - 1].copilot_confirmations[0]

  // If latest message is a confirmation, we have to call the confirmed function
  if (confirmation && confirmation.state === 'accepted') {
    const response = await callFunction(
      confirmation.confirmation.name,
      confirmation.confirmation.arguments,
      true
    )
    console.log(
      'Response from accepted function call',
      JSON.stringify(response)
    )
    messages.push({
      role: 'user',
      content: `The function ${confirmation.confirmation.name} responded with ${JSON.stringify(response.response)}`
    })
  }

  // If latest confirmation was dismissed, do nothing
  if (confirmation && confirmation.state === 'dismissed') {
    res.write(createTextEvent('You dismissed the confirmation'))
    res.end(createDoneEvent())
    return
  }

  messages = [...staticPrompts, ...messages]

  // If not a confirmation, iteratively forward context to Copilot
  for (let i = 0; i < 5; i++) {
    console.log('Prompting for iteration: ', i + 1)

    let result
    try {
      // The actual interaction with the Copilot API
      result = await prompt({
        model: 'gpt-4o',
        token: tokenForUser,
        messages,
        tools: functionMappings
      })
    } catch (err) {
      // May be rate-limited
      if (err.response.status === 429) {
        console.log('Rate limited')
        res.write(
          createTextEvent(
            'You have exceeded the rate limit. Please try again later.'
          )
        )
        res.end(createDoneEvent())
        return
      }
    }

    console.log('Result from prompt', JSON.stringify(result))

    const functionCalls = getFunctionCalls(result)

    // If response is a message, send to user
    if (functionCalls.length === 0) {
      res.write(createTextEvent(result.message.content))
      res.end(createDoneEvent())
      return
    }

    // If response is a function, prepare to call it
    for (const functionCall of functionCalls) {
      const response = await callFunction(
        functionCall.function.name,
        functionCall.function.arguments
      )
      if (response.confirmation) {
        res.send(response.confirmation)
        res.end(createDoneEvent)
        return
      }
      messages.push({
        role: 'user',
        content: `The function ${functionCall.function.name} responded with ${JSON.stringify(response.response)}`
      })
    }
  }

  res.write(createTextEvent('Exceeeded maximum number of function calls'))
  res.end(createDoneEvent())
})

const port = process.env.PORT || '3000'
app.listen(port)
console.log(`Server running at http://localhost:${port}`)

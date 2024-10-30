# Lab 3.2 - Integrating with the Shopping List API's Update Endpoint

In this lab, you'll extend the functionality of your Copilot extension by integrating it with the Shopping List API's Update endpoint. This will allow Copilot to understand update requests and modify items in the shopping list.

Before diving into the implementation, let's first ensure that there's an item added to the list, so we can later update it.

### Step 1: Adding an Item to the Shopping List

1. Open the GitHub Copilot Chat panel by clicking the Copilot icon at the bottom-right of any page on GitHub.com.
2. Invoke your extension by typing `@EXTENSION-NAME`.
3. In the chat window, ask your Copilot agent to add something to the shopping list. For example:

    **"Add 1 Plush Octocat to the shopping list."**

4. Verify that the item has been added successfully by reviewing the response in the chat window.

### Step 2: Reviewing the API Specification for the Update Function

Before we implement the update functionality, let’s examine the Shopping List API’s specification for updating an item.

<img src="images/update-specification.png" width="600px" alt="Screenshot of Swagger UI endpoint specification" />


### Step 3: Implementing the Update Function in `client.js`
Now, let's code the update functionality inside the `client.js` file to handle updates to the items in the shopping list.

Open the `client.js` file in your repository.
Implement the update function based on the API specification. The function should look something like this:

```javascript
async function updateShoppingListItem(details) {
  const { id, quantity, description } = details
  const url = `${baseurl}/items/${id}`

  const updateData = { id, quantity, description }

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    })

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error processing API call:', error)
    throw error
  }
}
```

Save the changes to the `client.js` file.

### Step 4: Configuring Metadata for the Update Function
Now that the update function is implemented, we need to configure the metadata in functionMappings.js so that Copilot can understand how to invoke this functionality.

Open the `functionMappings.js` file.

Add a new entry for the update function.

The metadata should look something like this:

```javascript
{
    type: 'function',
    title: 'Updates an item in the shopping list.',
    description: 'This action will update item {id} in the shopping list.',
    requiresConfirmation: true,
    function: {
      name: 'updateShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'The name of the item to update.'
          },
          quantity: {
            type: 'number',
            description: 'The new quantity for the item.'
          },
          description: {
            type: 'string',
            description: 'The new description of the item being updated.'
          }
        },
        required: ['id']
      }
    }
  }
```

Finally update the function array `functions` to include the name of your new function.

Save your changes to `functionMappings.js`.

### Step 5: Testing the Update Function
Now that the update function is implemented and the metadata is configured, it's time to test it.

Open the GitHub Copilot Chat panel.
Invoke your extension by typing @EXTENSION-NAME.
Ask Copilot to update the quantity of the item you added earlier. For example:
"@EXTENSION-NAME Update the list because I would now like 2 Plush Octocats instead of 1."

Verify that Copilot processes the request and updates the item in the list.

If the quantity is successfully updated, the metadata and implementation are correctly set, and Copilot can now handle update actions.


### Summary
In this lab, you've integrated your Copilot extension with the Shopping List API's update functionality by:

- Implementing the update function in api.js.
- Configuring the metadata for the update function in functionMappings.js.
- Testing the update functionality via the chat window.

---

Now that you’ve completed this task, your Copilot extension is capable of updating items in the shopping list. Move on to the next lab to explore further capabilities.

Continue to [Lab 3.3 - Modifying Agent Behaviour](./../Lab%203.3%20-%20Modifying%20Agent%20Behaviour/README.md).

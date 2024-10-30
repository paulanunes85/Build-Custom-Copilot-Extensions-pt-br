# Lab 3.3 - Modifying Agent Behaviour by Editing Prompts

In this lab, you'll modify the behaviour of your Copilot agent by adjusting the static prompts defined in the `prompts.js` file. This enables you to control how the agent interprets user requests and responds to them.

### Step 1: Review the Existing Prompts

Open the `prompts.js` file in your repository. The current contents of the file define how the agent interprets requests, handles IDs, assumes quantities, and displays raw data.

### Step 2: Modify the Prompts to Change Agent Behaviour

Now, you will modify these prompts to adjust the agent’s behaviour. For example, let's make the agent respond in a **happy, positive, and joking manner** in all its interactions. To achieve this, we will add a new system prompt.

1. In the `prompts.js` file, add a new system prompt at the end of the array to tell the agent to always respond in a happy and joking manner.

```javascript
{
  role: 'system',
  content: 'Always respond in a happy, positive, and joking manner.'
}
```

### Step 3: Testing the Modified Agent Behaviour

Now, let’s test the changes by interacting with the Copilot agent.

1. Open the GitHub Copilot Chat panel and invoke your extension by typing `@EXTENSION-NAME`.
2. Ask your agent to perform an action. For example:

    **"@EXTENSION-NAME Add 2 bananas to the shopping list."**

    Observe how the agent responds. With the new behaviour, it should reply in a happy and joking tone.

<img src="images/happy-positive-response.png" alt="Screenshot of copilot chat with a positive response." />

### Step 4: Experiment with Other Behavioural Changes

Feel free to explore other prompt modifications. You can instruct the agent to behave in different ways, such as being more formal or providing verbose explanations. Or to correct bad behaviour, for example you might need to guide it that it should update the quanity when an item already exists rather than adding a new item. Modify the `prompts.js` file to experiment with different agent behaviours, then test your changes in the Copilot chat window.

#### Some examples:

Think about how to apply these as generically as possible.

- Prevent copilot from adding items which wouldn't usually be on a shopping list.
- Default quantity values.
- Remove unnessisary descriptive text like `a bunch of grapes` to just `grapes`.

---

### Conclusion

In this lab, you learned how to modify the behaviour of your Copilot agent by adjusting the static prompts. This gives you control over how the agent responds and allows you to create more tailored interactions.

Continue to [Walkthrough - Extension Publication](./../Walkthrough%20-%20Extension%20Publication/README.md)

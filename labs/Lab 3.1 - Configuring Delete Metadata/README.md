# Lab 3.1 - Enabling Copilot to Understand the Delete Function

In this lab, you'll configure the metadata for your Copilot extension to enable it to understand and process the delete function. This will be done by mapping the implementation of the delete functionality from your API into the metadata that Copilot requires.

Before we begin, let's add some items to the shopping list through the chat window by interacting with the configured agent.

### Step 1: Adding Items to the Shopping List

1. Open the GitHub Copilot Chat panel by clicking the Copilot icon at the bottom-right of any page on GitHub.com.
2. Invoke your extension by typing `@EXTENSION-NAME`, replacing any spaces in the name with hyphens.
3. In the chat window, ask your Copilot agent to add something to the shopping list. For example:

<img src="images/chat-add-apples.png" alt="Chat window showing how to add apples to the list." width="600px" />

4. Verify that the item has been added successfully by reviewing the response in the chat window.

### Step 2: Configuring Metadata for the Delete Function

To enable Copilot to process deletion requests, we will need to look at the existing delete function which has been implemented and turn that into the metadata that Copilot can understand.

1. Open the `client.js` file in your repository.
2. Locate the function responsible for deleting items from the shopping list. The code should resemble something like this:

    ```javascript
        async function deleteShoppingListItem(id) {
        const url = `${baseurl}/items/${JSON.parse(id).id}`
          // implementation
        }
    ```

3. Now, navigate to `functionMappings.js`. This is where you will configure the metadata for your Copilot extension.
4. Add a new entry for the delete function, mapping it to the functionality defined in `client.js`. The structure should define how Copilot can understand and invoke this action. For example:

    ```javascript
    {
        type: 'function',
        title: 'Delete an item from the shopping list',
        description: 'This item will remove ID {id} from the shopping list.',
        requiresConfirmation: true,
        function: {
           name: 'deleteShoppingListItem',
           parameters: {
               type: 'object',
               properties: {
               id: {
                   type: 'string'
               }
               },
               required: ['id']
           }
        }
    }
    ```

    `title`, `description`, function `name` and `parameters` are the fields that you need to pay attention to. `requiresConfirmation` is a boolean that indicates if the function requires a confirmation from the user before being invoked and should be used for all destructuve operations.

5. Save your changes to `functionMappings.js`.

### Step 3: Testing the Delete Function

Now that you've configured the metadata for the delete function, it's time to test it in the chat window.

1. Open the GitHub Copilot Chat panel again.
2. Invoke your extension by typing `@EXTENSION-NAME`.
3. Ask Copilot to delete the item you added earlier. For example:

    **"@shopping-list-agent Delete the apples from the shopping list."**

4. Verify that Copilot processes the request and removes the item from the list.

5. If the item is successfully deleted, your metadata is correctly configured, and Copilot can now handle delete actions.

### Summary

In this lab, you've enabled your Copilot extension to understand the delete function by:

- Translating the delete functionality from `client.js` into metadata in `functionMappings.js`.
- Testing the delete functionality via the chat window.

Now that you've successfully completed this task, you can move on to the next lab to extend the capabilities of your Copilot extension further.

---

Continue to [Lab 3.2 - Integrating with the Shopping List API's Update Endpoint](./../Lab%203.2%20-%20Integrating%20Update%20Function/README.md)

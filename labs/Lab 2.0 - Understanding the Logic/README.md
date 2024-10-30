In this lab, you will explore the codebase of a project that integrates with a shopping list API using GitHub Copilot. This guide will walk you through the key files and their functionalities.

## Steps to Complete

### 1. Overview of the Codebase

The project consists of several key files that you need for the workshop:

- `index.js`: The main server file that handles incoming requests and interacts with the Copilot extension.
- `client.js`: Contains functions to interact with the shopping list API.
- `functionMappings.js`: Maps function names to their descriptions and parameters.
- `prompts.js`: Defines static prompts used by the Copilot extension.

### 2. Explore `index.js`

This file sets up an Express server and handles incoming requests. It includes functions to call API functions and manage confirmations.

### 3. Explore `client.js`

This file contains functions to interact with the shopping list API.

- **getShoppingList**: Fetches the current shopping list.
- **addShoppingListItem**: Adds an item to the shopping list.
- **deleteShoppingListItem**: Deletes an item from the shopping list.

### 4. Explore `functionMappings.js`

This file maps function names to their descriptions and parameters. It helps the Copilot extension understand what each function does and what parameters it requires.

- **functionMappings**: An array of objects, each representing a function with its title, description, and parameters.

### 5. Explore `prompts.js`

This file defines static prompts used by the Copilot extension to guide its interactions.

- **staticPrompts**: An array of objects, each representing a prompt with a role and content.

---

Continue to [Lab 3.1 - Configuring Delete Metadata](./../Lab%203.1%20-%20Configuring%20Delete%20Metadata/README.md).
// Metadata that defines how Copilot should interpret each available function
export const functionMappings = [
  {
    type: 'function',
    title: 'List all items on the shopping list',
    description:
      'The function returns the current shopping list including id, description of the item, quantity required and whether it has been purchased or not.',
    function: {
      name: 'getShoppingList',
      parameters: {
        type: 'object',
        properties: {
          prerequisite: {
            type: 'string'
          }
        }
      }
    }
  },
  {
    type: 'function',
    title: 'Add item to shopping list',
    description: 'This will add {quantity} x {description} to the list.',
    requiresConfirmation: true,
    function: {
      name: 'addShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          description: {
            type: 'string'
          },
          quantity: {
            type: 'number'
          }
        }
      }
    }
  }
]

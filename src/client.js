import fetch from 'node-fetch'

const baseurl = process.env.BASE_URL || 'http://localhost:3001'

// GET all items from the shopping list
async function getShoppingList() {
  try {
    const response = await fetch(`${baseurl}/items`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: undefined
    })

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error processing API call:', error)
    throw error
  }
}

// POST an item to the shoppoing list
async function addShoppingListItem(item) {
  try {
    const response = await fetch(`${baseurl}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: item
    })

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error processing API call:', error)
    throw error
  }
}

// DELETE an item from the shopping list
async function deleteShoppingListItem(id) {
  const url = `${baseurl}/items/${JSON.parse(id).id}`

  console.log(url)

  try {
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: undefined
    })

    return 'Deleted item'
  } catch (error) {
    console.error('Error processing API call:', error)
    throw error
  }
}

// Export functions to make them available outside of the file
export const functions = [
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem
]

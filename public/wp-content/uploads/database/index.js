async function loadDB() {
  const resp = await fetch('/wp-content/uploads/database/books.json')
  const data = await resp.json()
  localStorage.setItem('store', JSON.stringify({ books: data }))
}
loadDB()

const { useState } = React

function Books() {
  const [books, setBooks] = useState([])

  async function loadBooks() {
    const resp = await fetch('/wp-content/uploads/components/books.json')
    const data = await resp.json()
    setBooks(data)
  }

  loadBooks()

  return books.length
    ? books.map(book => (
        <ul>
          <li>
            <span>{book.titulo}</span>
          </li>
        </ul>
      ))
    : <p>Cargando Libros...</p>
}

ReactDOM.createRoot(document.getElementById('app')).render(<Books />)

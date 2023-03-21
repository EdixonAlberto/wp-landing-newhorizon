// DYNAMIC-URL
const { search } = window.location
const queryString = search.substring(1)
const [category] = queryString.split('&')[0].split('=')
const categoryName = category.toLowerCase()
history.pushState(null, '', categoryName)

// _____________________________________________________________________________________________________________________

const { useState, useEffect } = React

function usePagination({ items = [], size = 12 }) {
  const pagesFloat = items.length / size
  const pagesInt = Number.parseInt(pagesFloat)
  const [current, setCurrent] = useState(0)
  const [display, setDisplay] = useState(getDisplay())
  const [pages] = useState(Number.isInteger(pagesFloat) ? pagesInt : pagesInt + 1)

  useEffect(() => {
    setDisplay(getDisplay())
  }, [current])

  function getDisplay() {
    return items.filter((_item, i) => i >= current * size && i < (current + 1) * size)
  }

  function next() {
    if (current < pages - 1) {
      setCurrent(current + 1)
    }
  }

  function previous() {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  return { current, pages, display, next, previous }
}

function Books() {
  const [books] = useState(JSON.parse(localStorage.getItem('store'))['books'][categoryName])
  const { current, pages, display, next, previous } = usePagination({ items: books })

  const name = 'Arte'

  return (
    <div className="books">
      <h2 className="books-title">
        Libros de {name} ({books.length})
      </h2>

      {books.length ? (
        <ul className="books-container">
          {display.map(book => (
            <li key={book.id} className="books-item">
              <img className="books-item-image" src={`/wp-content/uploads/${book.id}.GIF`} alt={book.title} />
              <div className="books-item-content">
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
                <div className="available">
                  <span>{book.availability}</span>
                </div>
                <p className="price">{book.price}</p>

                <button>
                  <span>Comprar</span>
                </button>
              </div>
            </li>
          ))}
          {/* <button onClick={previous}>Previous Page</button> */}
          {/* <button onClick={next}>Next Page</button> */}
        </ul>
      ) : (
        <p>No hay libros disponibles</p>
      )}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Books />)

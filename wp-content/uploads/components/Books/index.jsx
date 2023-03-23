// DYNAMIC-URL _________________________________________________________________________________________________________
const { search, origin } = window.location
const queryString = search.substring(1)
if (!queryString) window.location.href = origin

const [categoryLink] = queryString.split('&')[0].split('=')
const categoryKey = decodeURI(categoryLink)
history.pushState(null, '', categoryKey)

const books = JSON.parse(localStorage.getItem('store'))['books'][categoryKey]

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
  const { current, pages, display, next, previous } = usePagination({ items: books })

  function getTitle(key) {
    const name = key.split('-').join(' ')
    const title = name.substring(0, 1).toUpperCase() + name.substring(1)
    return title
  }

  function goBook(id) {
    window.location.href = `${origin}/book/${categoryKey}_${id}`
  }

  return (
    <div className="books">
      <h2 className="books-title">
        Libros de {getTitle(categoryKey)} ({books.length})
      </h2>

      {display.length ? (
        <ul className="books-container">
          {display.map(book => (
            <li key={book.id} className="books-item">
              <img
                className="books-item-image"
                src={`/wp-content/uploads/${book.id}.${book.id === 'NOportada' ? 'jpg' : 'GIF'}`}
                alt={book.title}
                draggable="false"
                onClick={() => goBook(book.id)}
              />
              <div className="books-item-content">
                <p className="title" onClick={() => goBook(book.id)}>
                  {book.title}
                </p>
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

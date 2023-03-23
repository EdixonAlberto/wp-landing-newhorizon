// DYNAMIC-URL _________________________________________________________________________________________________________
const { search, origin } = window.location
const queryString = search.substring(1)
if (!queryString) window.location.href = origin

const [categoryKeyBookLink] = queryString.split('&')[0].split('=')
const categoryKeyBook = decodeURI(categoryKeyBookLink)
history.pushState(null, '', categoryKeyBook)

const [categoryKey, bookId] = categoryKeyBook.split('_')
const books = JSON.parse(localStorage.getItem('store'))['books']
const book = books[categoryKey].find(book => book.id === bookId)

// _____________________________________________________________________________________________________________________

function Book() {
  return (
    <div className="book">
      <div className="book-container-1">
        <div className="main">
          <img
            className="book-img"
            src={`/wp-content/uploads/${book.id}.${book.id === 'NOportada' ? 'jpg' : 'GIF'}`}
            alt={book.title}
            draggable="false"
          />
          <div className="book-data">
            <h2>{book.title}</h2>
            <p>{book.author}</p>

            <div className="book-content">
              <div className="content-key">
                <p>Editorial:</p>
                <p>Año de edición:</p>
                <p>Materia:</p>
                <p>ISBN</p>
                <p>Páginas:</p>
                <p>Encuadernación</p>
                <p>Colección</p>
              </div>

              <div className="content-value">
                <p>{book.content.publisher}</p>
                <p>{book.content.year}</p>
                <p>{book.content.subject}</p>
                <p>{book.content.isbn}</p>
                {book.content.pages && <p>{book.content.pages}</p>}
                {book.content.binding && <p>{book.content.binding}</p>}
                <p>{book.content.collection}</p>
              </div>
            </div>

            <div className="book-share">
              <span style={{ marginRight: '30px' }}>Compartir</span>
              <span>Tweet</span>
            </div>
          </div>
        </div>

        <div className="shopingcart">
          <div className="book-shopingcart-card">
            <p className="title">{book.price}</p>
            <p className="available">{book.availability}</p>
            <button>Añadir a la cesta</button>
          </div>
        </div>
      </div>

      <div className="book-container-2">
        <div className="block-title">
          <h3>Sinopsis</h3>
          <div className="line"></div>
        </div>

        <div className="block-text" dangerouslySetInnerHTML={{ __html: book.content.synopsis }}></div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(<Book />)

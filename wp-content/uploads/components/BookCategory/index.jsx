const body = document.querySelector('body')
const bookCategoryLink = document.getElementById('book-category-link')
const bookCategory = document.getElementById('book-category')

bookCategoryLink.addEventListener('click', () => {
  bookCategoryLink.classList.toggle('dropdown-open')
})

body.addEventListener('click', e => {
  if (!bookCategoryLink.contains(e.target)) {
    bookCategoryLink.classList.remove('dropdown-open')
  }
})

// _____________________________________________________________________________________________________________________

function BookCategory() {
  const bookKeyList = Object.keys(JSON.parse(localStorage.getItem('store'))['books'])

  function getTitle(key) {
    const name = key.split('-').join(' ')
    const title = name.substring(0, 1).toUpperCase() + name.substring(1)
    return title
  }

  return (
    <div className="book-category">
      <div className="book-category-explorer">
        <h2 className="book-category-title">EXPLORAR</h2>
        <p>Novedades</p>
      </div>

      <div className="book-category-subjects">
        <h2 className="book-category-title">MATERIAS</h2>
        <ul className="book-category-container">
          {bookKeyList.map((key, index) => (
            <li key={index} className="book-category-item">
              <a href={`${window.origin}/books/${key}`} target="_self" rel="noopener noreferrer">
                {getTitle(key)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('book-category')).render(<BookCategory />)

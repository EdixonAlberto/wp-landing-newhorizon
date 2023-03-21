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

const { useState } = React

function BookCategory() {
  const [booksAll] = useState(JSON.parse(localStorage.getItem('store'))['books'])
  const bookNameList = Object.keys(booksAll)

  return (
    <div className="book-category">
      <div className="book-category-explorer">
        <h2 className="book-category-title">EXPLORAR</h2>
        <p>Novedades</p>
      </div>

      <div className="book-category-subjects">
        <h2 className="book-category-title">MATERIAS</h2>
        <ul className="book-category-container">
          {bookNameList.map((name, index) => (
            <li key={index} className="book-category-item">
              <a href={`${window.origin}/books/?${name}`} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('book-category')).render(<BookCategory />)

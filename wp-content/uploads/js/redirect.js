const { pathname, origin } = window.location
const [, path, subpath] = pathname.split('/')
const link = decodeURI(subpath)
const books = JSON.parse(localStorage.getItem('store'))['books']
let pathRedirect = origin

if (path.toLowerCase() === 'books') {
  const categoryKeyList = Object.keys(books)
  for (let i = 0; i < categoryKeyList.length; i++) {
    const categoryKey = categoryKeyList[i]
    if (categoryKey === link) {
      pathRedirect = `${origin}/books/?${categoryKey}`
      break
    }
  }
}

if (path.toLowerCase() === 'book') {
  const [categoryKey, bookId] = link.split('_')
  if (categoryKey && bookId) {
    const book = books[categoryKey].find(book => book.id === bookId)
    if (book) {
      pathRedirect = `${origin}/book/?${link}`
    }
  }
}

window.location.href = pathRedirect

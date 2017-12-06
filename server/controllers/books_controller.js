const books = []
let id = 0

const create = (req, res, next) => {
  const { title, author } = req.body
  books.push({ id, title, author })
  id++
  res.status(200).send(books)
}

const read = (req, res, next) => {
  if (books.length === 0) return res.json({ message: 'No books' })
  else return res.json(books)
}

const update = (req, res, next) => {
  const updateID = req.params.id
  let index = books.findIndex(book => book.id === updateID)

  books[index] = {
    id: books[index].id,
    title: req.body.title || books[index].title,
    author: req.body.author || books[index].author
  };

  res.status(200).send(books);
};

const destroy = (req, res, next) => {
  const deleteID = req.params.id
  bookID = books.findIndex(book => book.id === deleteID)
  books.splice(bookID, 1)
  res.status(200).send(books)
}

module.exports = {
  create,
  read,
  update,
  destroy
}

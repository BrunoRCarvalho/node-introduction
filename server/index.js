const express = require('express')
const { json } = require('body-parser')

const port = 3000

const app = express()

app.use(express.static(__dirname + '/../public/build'))

const bc = require('./controllers/books_controller')

app.use(json())

app.get('api/books', bc.read)
app.post('api/books', bc.create)
app.put('api/books/:id', bc.update)
app.delete('api/books/:id', bc.destroy)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

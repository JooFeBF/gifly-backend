require('dotenv').config()

const express = require('express')
const app = express()

require('./moongodb/moongose.js')

const favoritesRouter = require('./controllers/favorites')
const usersRouter = require('./controllers/user')

app.use(express.json())

app.use('/favorites', favoritesRouter)

app.use('/users', usersRouter)

app.use((req, res) => {
  console.log('hola')
  res.status(404).end()
})

app.listen(process.env.PORT)

console.log(`Listening on port ${process.env.PORT}`)

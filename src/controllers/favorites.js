const { Router } = require('express')

const userData = {
  user: 'elpepe',
  favorites: ['asdj23ei3', 'waidjiajw221']
}

const favoritesRouter = Router()

favoritesRouter.get('/', (req, res) => {
  res.status(200).send(userData.favorites)
})

module.exports = favoritesRouter

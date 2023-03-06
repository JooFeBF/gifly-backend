const { Router } = require('express')

const User = require('../moongodb/models/User.js')

const usersRouter = Router()

usersRouter.post('/', (req, res) => {
  console.log(req.body)
  const { body } = req
  const { username, password } = body
  const newUser = new User({ username, password })
  newUser.save()
    .then(result => res.status(200).json(result))
    .catch(e => {
      console.log(e)
      res.end()
    })
})

module.exports = usersRouter

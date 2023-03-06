const moongose = require('mongoose')

moongose.connect(`${process.env.MONGODB_URI}`)
  .then(console.log('Connection successful'))
  .catch(e => console.log(e))

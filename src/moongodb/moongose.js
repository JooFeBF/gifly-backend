const moongose = require('mongoose')

moongose.connect('mongodb+srv://admin:BON4n5bkEN57KfDu@cluster0.xiqvfzd.mongodb.net/gifly?retryWrites=true&w=majority')
  .then(console.log('Connection successful'))
  .catch(e => console.log(e))

const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://root:root12345@ds231956.mlab.com:31956/fql', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('Database connected!!')
})

module.exports = db
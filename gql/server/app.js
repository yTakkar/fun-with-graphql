const express = require('express')
const app = express()
const PORT = 3001
const expressGraphQL = require('express-graphql')
const cors = require('cors')
const schema = require('./schema/index.js')

require('./config/db')

app.use(cors())

app.use('/', expressGraphQL({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => console.log(`App running on ${PORT}`))

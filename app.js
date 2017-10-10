const app = require('express')()
const PORT = 5006
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

app.use('/', expressGraphQL({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => console.log('App running..') )

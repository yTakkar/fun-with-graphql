const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require('graphql')
const axios = require('axios')

const countryType = new GraphQLObjectType({
  name: 'countryType',
  description: 'Country type',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    city: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is root query type..',
  fields: () => ({
    country: {
      type: countryType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async (root, { id }) => {
        let { data } = await axios.get(`http://localhost:3000/countries/${id}`)
        return data
      }
    },
    countries: {
      type: new GraphQLList(countryType),
      resolve: async () => {
        let { data } = await axios.get('http://localhost:3000/countries/')
        return data
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})

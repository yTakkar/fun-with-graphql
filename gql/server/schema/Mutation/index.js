const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = require('graphql')
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    addAuthor: {
      type: require('../types/author').AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve: async (source, args) => {
        const { name, age } = args || {}
        return await Author.create({ name, age })
      }
    },
    addBook: {
      type: require('../types/book').BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: async (source, args) => {
        const { name, genre, authorId } = args || {}
        return await Book.create({ name, genre, authorId })
      }
    }
  }
})

module.exports = RootMutation
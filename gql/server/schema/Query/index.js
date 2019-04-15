const { GraphQLObjectType, GraphQLList, GraphQLID, } = require('graphql')
const { BookType } = require('../types/book')
const { AuthorType } = require('../types/author')
const Author = require('../../models/Author')
const Book = require('../../models/Book')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'RootQuery description',
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (source, args) => Book.findById(args.id)
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve: (source, args) => Author.findById(args.id)
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: async () => await Book.find({}) 
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: async () => await Author.find({})
    }
  })
})

module.exports = RootQuery

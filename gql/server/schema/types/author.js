const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql')
const Book = require('../../models/Book')

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Author',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(require('./book').BookType),
      resolve: (source, args) => Book.find({ authorId: source._id })
    }
  })
})

module.exports = {
  AuthorType,
}

const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const Author = require('../../models/Author')

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: {
      type: require('./author').AuthorType,
      resolve: (source, args) => {
        const author = Author.findById(source.authorId)
        return author
      }
    }
  })
})

module.exports = {
  BookType,
}
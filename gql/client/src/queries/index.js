import { gql } from 'apollo-boost'

export const getBooksQuery = gql `
  query GetBooks {
    books {
      name
      id
    }
  }
`

export const getAuthorsQuery = gql`
  {
    authors {
      name
      id: _id
    }
  }
`

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      authorId {
        id: _id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`
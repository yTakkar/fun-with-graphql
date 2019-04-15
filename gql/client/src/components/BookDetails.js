import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries';

const BookDetails = props => {
  console.log(props)
  const { data } = props
  const { book, loading } = data || {};

  const renderBookDetails = () => {
    if (loading) {
      return <h4>Loading Book Details..</h4>
    } else {
      if (book) {
         return(
          <div>
            <h2>Name: {book.name}</h2>
            <p>Genre: {book.genre}</p>
            <p>Author Name: {book.authorId.name}</p>
            <p>All books by this author:</p>
            <ul>
              {book.authorId.books.map(item => {
                  return <li key={item.id}>{item.name}</li>
              })}
            </ul>
          </div>
        )
      } else {
        return <h4>No Book Selected!!</h4>
      }
    }
  }

  return (
    <div>
      {renderBookDetails()}
    </div>
  )
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: { id: props.bookId }
  })
})(BookDetails)
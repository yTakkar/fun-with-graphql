import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries';
import BookDetails from './BookDetails';

const BookList = props => {
  const { data } = props
  const [selectedBook, setSelectedBook] = useState(null)

  const renderBooks = () => {
    if (data.loading) {
      return <h4>Loading Books...</h4>
    } else {
      return data.books.map(b => <li key={b.name} onClick={() => setSelectedBook(b.id)} >{b.name}</li>)
    }
  }

  return (
    <div>
      <ul>
        {renderBooks()}
      </ul>
      <BookDetails bookId={selectedBook} />
    </div>
  )
}

export default graphql(getBooksQuery)(BookList)
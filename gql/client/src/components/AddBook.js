import React, { useState } from 'react'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries';
import { graphql, compose } from 'react-apollo'

const AddBook = props => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [author, setAuthor] = useState('')

  const { getAuthorsQuery } = props
  const { authors = [], loading } = getAuthorsQuery || {};

  const onSubmit = e => {
    e.preventDefault()
    props.addBookMutation({
      variables: {
        name,
        genre,
        authorId: author
      },
      refetchQueries: [{ query: getBooksQuery }]
    })
  }

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>
    } else {
      return authors.map(a => <option key={a.id} value={a.id} >{a.name}</option>)
    }
  }

  return (
    <form id="add-book" onSubmit={onSubmit} >
      <div className="field">
        <label>Book name:</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input value={genre} onChange={e => setGenre(e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthor(e.target.value)} >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  )
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);

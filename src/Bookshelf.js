import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

  render() {
    const { books } = this.props

    console.log(this.props.books)
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}><Book book={book} /></li>
            ))}
          </ol>
        </div>
      </div>
    )
  }

}

export default Bookshelf

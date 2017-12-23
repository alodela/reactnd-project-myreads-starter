import React, { Component } from 'react'

class Book extends Component {

  render() {
    const { book, onMoveToShelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => onMoveToShelf(book, e.target.value)}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {(book.authors).map((author, index) => (
          <div key={index} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }

}

export default Book

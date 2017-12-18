import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  onMoveToShelf = (book, toShelf) => {
    this.setState((prevState) => {
      let { books } = prevState;

      books[books.indexOf(book)].shelf = toShelf;
      // Update book on remote server
      BooksAPI.update(book, toShelf);

      return prevState;
    });
  }

  booksForShelf(shelf) {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              books={this.booksForShelf('currentlyReading')}
              onMoveToShelf={this.onMoveToShelf}
              title="Currently Reading" />

            <Shelf
              books={this.booksForShelf('wantToRead')}
              onMoveToShelf={this.onMoveToShelf}
              title="Want to Read" />

            <Shelf
              books={this.booksForShelf('read')}
              onMoveToShelf={this.onMoveToShelf}
              title="Read" />
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp

import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {

  render() {
    const { books, onUptadeShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={ book }
            key={ book.id }
            onUptadeShelf={ onUptadeShelf }
          />
        ))}
      </ol>
    )
  }
}

export default Shelf
import React, { Component } from 'react';
import Shelf from './Shelf'

class BookShelf extends Component {

  render() {
    const { books, onUptadeShelf } = this.props
    const shelves = [{ id: 'currentlyReading', title: 'Currently Reading' },
                        { id: 'wantToRead',  title: 'Want to Read' },
                        { id: 'read', title: 'Read'}]

    return (
      <div className="list-books-content">
        {shelves.map((shelf, index) =>  {
          const shelfBooks = books.filter( book => book.shelf === shelf.id)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <Shelf
                  books={ shelfBooks }
                  onUptadeShelf={ onUptadeShelf }
                />
              </div>
            </div> )
        })}
      </div>
    )
  }
}

export default BookShelf
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUptadeShelf: PropTypes.func.isRequired

  }



  render() {
    const { book, onUptadeShelf } = this.props

    //just an image i found on internet
    const bookThumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'https://hazlitt.net/sites/default/files/default-book.png'
    const bookTitle = book.title ? book.title : "No title available"
    const currentShelf = book.shelf
    const bookRating = book.averageRating ? book.averageRating : "Not rated yet"
    const bookPublisher = book.publisher ? book.publisher : "Unknown"
 



    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ width:128, height:193, backgroundImage: `url(${bookThumbnail})`}}>
                </div>
                <div className="book-shelf-changer">
                  <select  onChange={(event) => onUptadeShelf(book, event.target.value)} defaultValue={ currentShelf }>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{ bookTitle }</div>
              <div className="book-authors">{book.authors && book.authors.length > 0 && book.authors[0]}</div>
              <div className="book-publisher">Publisher: { bookPublisher } </div>
              <div className="book-review">Book Average Rating: <span>{ bookRating }</span></div>
            </div>
          </li>
    )
  }
}

export default Book
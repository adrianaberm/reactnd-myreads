import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class Search extends Component {

  static propTypes = {
    onUptadeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }

  state = {
    query: '',
    books: [],
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then(response => {
        let books = [];
        if (Array.isArray(response)) {
          books = response;
        }
        books.map((book) => {
            const {books} = this.props;
            let item = books.find((item) => (item.id === book.id));
            if (item) {
              book.shelf = item.shelf;
            } else {
              book.shelf = 'none';
            }
            return book;
          })
        this.setState({books});
      });
    } else {
      this.setState({books: []});
    }
  }


  updateQuery = (query) => {
    this.setState({ query });
    this.searchBooks(query);
  }



  render() {
    const { query, books } = this.state
    const { onUptadeShelf } = this.props


    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className='search-books-results'>
          <ol className='books-grid'>
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                onUptadeShelf={onUptadeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
 

    state = {
        query: '',
        searchResults: [],

    }

    searchBooks = (e) => {

        const query = e.target.value.trim()

        this.setState(() => ({
            query: query
        }))

      
        if (query) {
            BooksAPI.search(query, 20).then((books) => {

                if (books && !books.items) {
                    this.setState({
                        searchResults: books
                    })
                } else {
                    this.setState({
                        searchResults: []
                    });
                }
            })

          
        } else this.setState({
            searchResults: []
        })
    }

    render() {

        const { query, searchResults } = this.state
        const { onUptadeShelf } = this.props

        return ( 
        	<div className = "search-books" >
            <div className = "search-books-bar" >
            <Link className = "close-search"
            to = "/" > Close </Link> 
            <div className = "search-books-input-wrapper" >
            <input type = "text"
            placeholder = "Search by title or author"
            value = { query }
            onChange = { this.searchBooks }/> 
            </div> 
            </div> 
            <div className = "search-books-results" >

            <div>

	            <ol className = "books-grid" > 
	            	{searchResults.map((book) => ( <
	                    Book book = { book }
	                    key = { book.id }
	                    onUptadeShelf = { onUptadeShelf }
	            	/>
	           		 ))} 
	            </ol> 
            </div>

            </div> 
            </div>
        )
    }
}
export default Search
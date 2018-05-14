import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf'

import Search from "./Search"

import './App.css'

class BooksApp extends React.Component {
  state = {
  books: [],
}

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => this.setState({books}))
  }


  onUptadeShelf = ( book, shelf ) => {
   
    BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
    })

  }

  render() {

    const { books } = this.state
    
    return (
      
      <div className="app">

      <Route exact path='/' render={() =>(

           <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                 
                   <BookShelf 
                    books = { books}
                    onUptadeShelf = {this.onUptadeShelf}
                   />
                 
              </div>
            </div>
            <div className="open-search">
              <Link
                to='/search'
              >Add a book
              </Link>
              
            </div>
          </div>

        )}/>

        <Route path='/search' render={({ history}) => (

               <Search
                  books={ books}
                  onUptadeShelf = { this.onUptadeShelf}
               />
          )
        }
        />
      
      </div>
    )
  }
}

export default BooksApp

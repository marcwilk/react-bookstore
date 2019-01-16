import React from 'react'
import Book from './Book'
import Cart from './Cart'

export default class BookList extends React.Component {

  render() {
    return (
      <div className="book-list text-center">
        <h1>{this.props.title}</h1>
          <div className="container">
            <div className="row justify-content-center">
            <form onSubmit={this.props.search}>
              <div className="col text-left">
                <input type="text" name="search" id="search" className="form-control" placeholder="Search book title..." />
                <button type="submit" class="btn btn-primary" href="#">Search</button>
              </div>
            </form>
          <div className="col text-center">
            <button onClick={this.props.sortByTitle} type="button" class="btn btn-primary">Sort by Title</button>
            <button onClick={this.props.sortByAuthor} type="button" class="btn btn-primary">Sort by Author</button>
          </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
              <br/>
              <div className="books-style text-center">
                Books
              </div>
              <ul className="list-group text-left">
                {this.props.books.map(book => <Book addToCart={this.props.addToCart} key={book.id} title={book.title} author={book.author} pages={book.pages} price={book.price}/>)}
              </ul>
            </div>
            <div className="col-lg-6">
            <br />
              <div className="books-style text-center">
                Cart
              </div>
              <ul className="list-group text-left">
                <Cart cart = {this.props.books} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BookList.defaultProps = {
  books: []
}

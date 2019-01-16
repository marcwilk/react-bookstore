import React, { Component } from 'react'

class Cart extends Component {

  render () {
    return (
      <React.Fragment>
      <div>
      {this.props.cart.filter(book=> (book.inCart === true)).map(book=> <div className="list-group-item">Title: {book.title}<br/>Price: ${book.price}</div>)}
      </div>
      <br>
      </br>
      <div className="books-style text-center">
      Cart Total: $
      {this.props.cart.filter(book=> (book.inCart === true)).map(book=> book.price).reduce((sum, price) => sum + price,0)}
      </div>
      </React.Fragment>
    )
  }
}

export default Cart

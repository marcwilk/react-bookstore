import React, { Component } from 'react'

class Cart extends Component {

  render () {
    return (
      <React.Fragment> {this.props.cart.filter(book=> (book.inCart === true)).map(book=> <div className="list-group-item">Title: {book.title}<br/>Price: ${book.price}</div>)} </React.Fragment>
    )
  }
}

export default Cart

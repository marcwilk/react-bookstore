import React, { Component } from 'react'

class Cart extends Component {

  render () {
    return (
      <div> {this.props.cart.filter(book=> (book.inCart === true)).map(book=> <div>{book.title}</div>)} </div>
    )
  }
}

export default Cart

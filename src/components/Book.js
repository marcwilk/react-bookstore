import React from 'react'

export default class Book extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        <div> Title: {this.props.title} </div>
        <div> Author: {this.props.author} </div>
        <div> Pages: {this.props.pages} </div>
        <div> Price: ${this.props.price} </div>
        <button class="btn btn-primary" name={this.props.title} onClick={this.props.addToCart}>Add To Cart</button>
      </li>
    )
  }
}

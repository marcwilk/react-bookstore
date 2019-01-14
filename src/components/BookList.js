import React from 'react'
import Book from './Book'

export default class BookList extends React.Component {

  renderBooks() {
    return this.props.books.map((book, i) => {
      return <Book {...book} key={i} />
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>{this.props.title}</h1>
        <ul className="list-group">
          {this.renderBooks()}
        </ul>
      </div>
    )
  }

}

BookList.defaultProps = {
  books: []
}

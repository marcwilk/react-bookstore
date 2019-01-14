import React from 'react';

export default class Book extends React.Component {

  render() {
    return (
      <div>
      {this.props.bookList.map(book => book.title)}
      </div>
    )
  }

}

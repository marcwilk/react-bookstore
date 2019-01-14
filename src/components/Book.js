import React from 'react';

export default class Book extends React.Component {

  render() {
    return (
      <li className="list-group-item">
        {this.props.title}
      </li>
    )
  }

}

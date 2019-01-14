import React, { Component } from 'react';
import Book from './components/Book.js';

class App extends Component {

  state = { books: [] }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState ({books: json})
  }

  render() {
    return (
      <div className="App">
        <Book bookList={this.state.books} />
      </div>
    )
  }
}

export default App;

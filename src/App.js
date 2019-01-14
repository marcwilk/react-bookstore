import React, { Component } from 'react';
import BookList from './components/BookList';

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
        <BookList title="Books" books={this.state.books} />
      </div>
    )
  }
}

export default App;

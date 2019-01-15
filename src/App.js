import React, { Component } from 'react'
import BookList from './components/BookList'
import './App.css'

class App extends Component {

  state = { books: [], filteredBooks: [] }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState ({books: json})
  }

  search = (e) => {
    e.preventDefault()
    this.setState({
      books: this.state.books.filter(book => book.title.toLowerCase().includes(e.target.search.value.toLowerCase()))
    })
  }

  sortByTitle = (e) => {
    e.preventDefault()
    this.setState({
      books: this.state.books.sort((a,b) => {
        if(a.title < b.title){
          return -1
        }
        if(b.title < a.title){
          return 1
        } else {
          return 0
        }
      })
    })
  }

  sortByAuthor = (e) => {
    e.preventDefault()
    this.setState({
      books: this.state.books.sort((a,b) => {
        if(a.author < b.author){
          return -1
        }
        if(b.author < a.author){
          return 1
        } else {
          return 0
        }
      })
    })
  }

  render() {
    return (
      <main>
        <BookList title="Bookstore" books={this.state.books} search={this.search} sortByTitle={this.sortByTitle} sortByAuthor={this.sortByAuthor}/>
      </main>
    )
  }
}

export default App

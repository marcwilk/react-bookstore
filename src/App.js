import React, { Component } from 'react'
import BookList from './components/BookList'
import './App.css'

class App extends Component {

  state = { books: [] }

  async componentDidMount() {
    const response = await fetch('https://collective-api-mww.herokuapp.com/api/books')
    const json = await response.json()
    this.setState ({books: json})
  }

  search = async (e) => {
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

  addToCart=(e)=>{
    e.preventDefault()
    let title = e.target.name
    let newState = this.state
    let avail = newState.books
    let selection = avail.filter(book=> book.title===title)[0]
    let newSelection = {...selection, inCart: true}
    let selectionIndex = this.state.books.indexOf(selection)
    this.setState(
      {
        books: [...this.state.books.slice(0, selectionIndex), newSelection ,...this.state.books.slice(selectionIndex+1)]
      }
    )
  }

  render() {
    return (
      <main>
        <BookList title="Bookstore" books={this.state.books} search={this.search} sortByTitle={this.sortByTitle} sortByAuthor={this.sortByAuthor} booksInCart={this.state.books} addToCart={this.addToCart} cartTotal={this.cartTotal}/>
      </main>
    )
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import IndexPage from './Components/IndexPage'

class App extends Component {
  constructor(){
    super()
      this.state = {
        movies: []
      };
    }
  

  componentDidMount() {
    fetch('https://reds-movie-backend.herokuapp.com/')
      .then(response => response.json())
      .then(data => this.setState({ movies : data }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={ HomePage } />
          <Route path='/movies' render = {props => <IndexPage {...props} movies = {this.state.movies} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

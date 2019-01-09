import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import IndexPage from './Components/IndexPage'
import Footer from './Components/Footer'
import AddMovie from './Components/AddMovie'
import ShowMovie from './Components/ShowMovie'


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
          <div className="container-fluid">
            <Route path='/' exact component={ HomePage } />
            <div className="row">
              <ShowMovie />
              <div>
                <Route path='/movies' render = {props => <IndexPage {...props} movies = {this.state.movies} />} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

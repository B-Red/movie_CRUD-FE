import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import IndexPage from './Components/IndexPage'
import Footer from './Components/Footer'
import AddMovie from './Components/AddMovie'
import ShowMovie from './Components/ShowMovie'
import EditMovie from './Components/EditMovie'


class App extends Component {
  constructor(){
    super()
      this.state = {
        movies: [],
        selectedMovie: [],
        selected: false,
        editMovie: false,
        newMovie: [],
        addMovie: false,
        id: 0,
        Director: '',
        Title: '',
        Poster_URL: '',
        My_Rating: 0,
        Year: 0
      };
    }
  currentState = () => {
    fetch('https://reds-movie-backend.herokuapp.com/')
      .then(response => response.json())
      .then(data => this.setState({ 
        movies : data,
        Director:this.state.selectedMovie.Director,
        Title:this.state.selectedMovie.Title,
        Poster_URL:this.state.selectedMovie.Poster_URL,
        My_Rating:this.state.selectedMovie.My_Rating,
        Year:this.state.selectedMovie.Year
      }));
  }

  componentDidMount() {
    this.currentState()
  }

  selectMovie = (event) => {
    fetch(`https://reds-movie-backend.herokuapp.com/${event.target.id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie : data }))
      .then(this.setState({ selected : true }))
  }

  showEdit = () => {
    this.setState({editMovie : true })
  }

  saveEdit = () => {
    this.setState({editMovie : false })
  }

  addMovie = () => {
    this.setState({addMovie : true })
  }

  cancelAdd = () => {
    this.setState({addMovie : false })
  }

  changeHandler = (event) => {
    let {value, name} = event.target
    this.setState({  
      [name] : value
      }
    )
  }

  deleteMovie = (event) => {
    fetch(`https://reds-movie-backend.herokuapp.com/${event.target.id}`, { method : 'DELETE' })
      .then(response => {
        this.currentState()
        this.saveEdit()
        this.setState ({ selectedMovie : [] })
      }
    )
  }

  updateMovie = (event) => {
    event.preventDefault()
    const updatedMovie = {
      id : event.target.id,
      Director : this.state.Director,
      Title : this.state.Title,
      Poster_URL: this.state.Poster_URL,
      Year : this.state.Year,
      My_Rating : this.state.My_Rating
    }
    fetch(`https://reds-movie-backend.herokuapp.com/${event.target.id}`, { 
      method:'PUT',
      body: JSON.stringify(updatedMovie),
      headers : {
        'Content-Type': 'application/json'
        }
      }
    )
    .then(response => response.json())
    .then(() => this.currentState(), this.saveEdit())
  }
  
  addNewMovie = (event) => {
    event.preventDefault()
    const movieForm = new FormData(event.target) 
    const newMovie = {
      Title : movieForm.get('Title'),
      Director : movieForm.get('Director'),
      Year : movieForm.get('Year'),
      My_Rating : movieForm.get('My_Rating'),
      Poster_URL : movieForm.get('Poster_URL')
    }
    fetch('https://reds-movie-backend.herokuapp.com/', {
      method : 'POST',
      body: JSON.stringify(newMovie),
      headers : {
        'Content-Type': 'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(jsonresponse => this.setState({movies :[jsonresponse[0], ...this.state.movies]}))
  }

  clearSelectedMovie = () => {
    this.setState({ selectedMovie : [], selected : false })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar addMovie={this.addMovie} />
          <div className='container-fluid'>
            <Route path='/' exact component={ HomePage } />
            <div className='container row'>
              <div className='col-4'>
                <Route path='/movies' render={props => <IndexPage {...props} alt={this.state.movies.Title} movies={this.state.movies} selectMovie ={this.selectMovie} />} />
              </div>
              <div className='col-8'>
                { this.state.selected ?
                <ShowMovie selectedMovie={this.state.selectedMovie} showEdit={this.showEdit} /> : '' }
                
                {this.state.addMovie ?
                <AddMovie addNewMovie={this.addNewMovie} cancelAdd={this.cancelAdd} /> : ''}
                
                <EditMovie 
                editMovie={this.state.editMovie ? 'modal display-block' : 'modal display-none'} 
                showEdit={this.showEdit} saveEdit={this.saveEdit} 
                selectedMovie={this.state.selectedMovie} deleteMovie={this.deleteMovie} changeHandler={this.changeHandler} 
                updateMovie={this.updateMovie}/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
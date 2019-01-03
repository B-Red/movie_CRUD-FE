import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage';
import IndexPage from './Components/IndexPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={ HomePage } />
          <Route path='/movies' component={ IndexPage } />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component, useState,useEffect } from 'react';
// import './App.css';
import {Route, Link} from 'react-router-dom';
// import NavBar from './components/navbar.jsx';
// import Home from './components/pages/home.jsx';
// import Search from './components/pages/search.jsx';
// import Movie from './components/movie.jsx';
import {Home} from './components/pages/home.js';
import {Search} from './components/pages/search.js';

function App() {

  return (
    // <div class='App'>
    //   <div class='movie-search'>
    //     <h1 class='movie-text'>Search a Movie</h1>
    //     <form>
    //       <input type='text'  placeholder='Search' class='movie-input' onChange={handleChange}/>
    //     </form>
    //   </div>
    //   <Movie />
    // </div>

      // <div>
      //   <Home />
      // </div>

      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </React.Fragment>
  );
}

// class App extends Component {
//   //state = {  }
//   render() { 
//     return (
      // <React.Fragment>
      //   <NavBar />
      //   <Route exact path="/" component={Home} />
      //   <Route exact path="/search" component={Search} />
      //   <Movie></Movie>
      // </React.Fragment>
//     );
//   }
// }
 
export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import SearchResults from './SearchResults';
import Profile from './Profile';

import './styles.css';
// import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element = {<HomePage/>} />
        <Route path="/search-results" element = {<SearchResults/>} />
        <Route path="/profile" element = {<Profile/>} />
      </Routes>
      <Footer/>
    </Router>
    
    // <div className="App">
    //   <Header/>
    //   {/* <Profile/> */}
    //   {/* <SearchResults/> */}
    //   <HomePage/>
    //   <Footer/>
    // </div>
  );
}

export default App;

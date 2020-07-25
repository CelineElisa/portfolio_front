import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Footer from './Footer'
import '../../App.css';


function AppPortfolio() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default AppPortfolio;

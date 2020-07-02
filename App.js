import React from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel'
import Ordernow from './Ordernow';
import Footer from './Footer';
import {Router, Route, Link}from 'react-router';


function App() {
  return (
    <div className="App">
      <div className="main-container">
         <Header></Header>      
        <Carousel></Carousel>
        <Ordernow></Ordernow>
        <Footer></Footer>

      </div>
      
    </div>
  );
}

export default App;

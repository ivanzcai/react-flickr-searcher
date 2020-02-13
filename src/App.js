import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav';
import Search from './components/Search';
import Cards from './components/Cards';


function App() {

  return (
    <div className="App">
      <TopNav />
      <Search />
      <Cards />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import Search from './Components/Search';
import Cards from './Components/Cards';


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

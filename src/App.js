import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import Search from './Components/Search';
import Cards from './Components/Cards';
import Feeds from './Services/feeds'


function App() {
  const [data, setData] = useState()
  useEffect(() => {
    Feeds.byTags("sun,beach").then((response) => {  // just a quick test
      setData(response);
    }).catch(error => {
      setData(JSON.stringify(error));
    })

  }, [])
  return (
    <div className="App">
      <TopNav />
      <Search />
      <Cards />
      {JSON.stringify(data)}
    </div>
  );
}

export default App;

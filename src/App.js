import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const url = 'https://swapi.dev/api/people/?page[limit]=10';
  const [characters, setCharList] = useState([]);
              
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const getList = () => {
    axios
    .get(`${url}`)
    .then((response) => {
      setCharList(response.data);
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    });
  }

  useEffect(() => {
    getList();
  }, []);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    
      <Character characters={characters} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import Parent from './Parent';
import './App.css';
import ValueContext from './ValueContext';

function App() {
  let [number, setNumber]=useState(45);
  let value=81;
  return (
    <ValueContext.Provider value={value}>
      <div >
          Hello World
          <Parent ></Parent> <br/>
          
      </div>
    </ValueContext.Provider> 
  );
}

export default App;

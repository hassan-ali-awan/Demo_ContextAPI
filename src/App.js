import React, { useState, useContext, useReducer } from 'react';
import logo from './logo.svg';
import Parent from './Parent';
import './App.css';
import ValueContext from './ValueContext';

function App() {
  let [number, setNumber]=useState(45);
  

  let value=useState(50);
  return (
    <ValueContext.Provider value={value}>
      <div >
          
          <Parent ></Parent> <br/>
          
      </div>
    </ValueContext.Provider> 
  );
}

export default App;

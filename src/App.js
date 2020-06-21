import React, { useState } from 'react';
import logo from './logo.svg';
import Parent from './Parent';
import './App.css';

function App() {
  let [number, setNumber]=useState(45);
  return (
    <div >
          Hello World
          <Parent num={number}></Parent> <br/>
          <button onClick={()=>{setNumber(++number)}}> Update number</button>
    </div>
  );
}

export default App;

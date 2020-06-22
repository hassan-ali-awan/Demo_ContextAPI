
import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './numberReducer';


function Child2() {
  let value=useContext(ValueContext);
  let [state,dispatch] = useReducer(numberReducer,52);
  return (
    <div >
          Child2 Number {state}<br/>
          <button onClick={()=>{dispatch({type:"Increment"});}}>Increment</button> <br/> 
          <button onClick={()=>{dispatch({type:"Decrement"});}}>Decrement</button>
    </div>
  );
}

export default Child2;
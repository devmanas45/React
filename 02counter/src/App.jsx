import { useState } from 'react';
import './App.css'; 
const App=()=>{
  let [counter,setCounter]=useState(0);
  const addValue=()=>{
    counter+=1;
    setCounter(counter);
    console.log(`clicked${counter}`);
    
  }
  const removeValue=()=>{
    if(counter>0){
      counter-=1;
    } 
    setCounter(counter)
    console.log("removed"+counter);
    
  }
  
  return(
    <>
    <div className="container">
      <h1>Counter:{counter}</h1>
      <button onClick={addValue} >Add</button>
      <button onClick={removeValue}>Remove</button>
    </div>
      
    </>
  )
}
export default App;
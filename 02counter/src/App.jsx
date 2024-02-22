import { useState } from 'react'

import './App.css'


function App() {
 
 let [count, setCount]=useState(15)
// We might think that UI should change after this code but it will not and it's the problem in React JS. To solve this problem we have to use Hook (useState)
// const addValue= ()=>{
  //   console.log('Pressed',count);
  // count=count+1
  // }

  
  // In React, useState is a hook that allows functional components to manage state. Prior to the introduction of hooks in React 16.8, state management was only possible in class components. And now UI will change using useState hook
 const addValue= ()=>{
     if (count<20) {
       setCount(count+1)
      
     }
  }
  
 const subtValue= ()=>{
     if(count>0){
     setCount(count-1)
    }
  }





  return (
    <>
    <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br/>
      <button onClick={subtValue}>Decrease Value</button>
      
    </>
  )
}

export default App

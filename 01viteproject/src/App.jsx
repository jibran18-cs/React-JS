

function App() {
  //How we can inject our variavles in our HTML? Solution is given below
   const name="With chai aur code" //Suppose we want to inject it we can do it using curly brace syntax
   //But the most impotant thing is to understand we can only inject (evaluated expression) to our html. Means we cannot write JS in html we only write final outcome . Like we cannot write {if(true) name} this is JS but we are only allowed to write final executed JS.
  return (
  <h1>Hello from Jibran | Vite app {name}</h1>//We cannot play with JS here just pass executed expression. But why we can't do that? see main.jsx to see reason
  )
}

export default App

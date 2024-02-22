import React from 'react' //It's a core foundational library to take all refrences
import ReactDOM from 'react-dom/client' //It is implementation of react on web
import App from './App.jsx'


//As we have seen previously that how function is created through object by babel so let's try to pass that object directly to react library we might save one step for react. But it is not working becuase react library deosn't accept this kind of syntax it has a constant syntax defined by react which we can se in next element
//==>It will not work as it is made by us not by react
//  const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// } 

//==> It will work as react knows this syntax==> const reactanotherElement=(
//   <a href='https://google.com' target='_blank'>Click here </a>
// )

//==> Given below is also syntax known by react . Let's check could how we add another variable to it
//==> Answer to App.jsx question.  If we want to add a variable in the given below element how will do that? Let's see

const name="With chai aur code"
const reactanotherElement=React.createElement(
  'a',
  {
     href: 'https://google.com',
      target:'_blank'
  },
  'Click me to visit google',
  name
  //We cant do if-else or loop on this variable here as it's against the syntax JS
)
// function App(){
//   return(
//     <h1>Hello from app function</h1>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    // App() Basically app is function which we are rendering here but due to coding conventions we use the above syntax to call function 

    reactanotherElement

    // reactElement ++It will not work
    )

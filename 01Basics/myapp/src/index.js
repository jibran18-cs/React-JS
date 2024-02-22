import React from 'react';//It's a core foundational library to take all refrences
import ReactDOM from 'react-dom/client';//It is implementation of react on web

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//In above line we have created our own virtual dom and pass root element to const root

root.render(
  
    <App />
  
);//Here we have render a tag to root(Simple JS itself render element to dom)




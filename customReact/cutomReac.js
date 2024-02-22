/*In this file we are trying to understand how react library do the work to make element in JS and 
we simply use JSX to render our elements

1=> JSX 
JSX stands for JavaScript XML. It's a syntax extension for JavaScript often used with React, a popular JavaScript library for building user interfaces. JSX allows developers to write HTML-like code directly within JavaScript, which can then be transformed into standard JavaScript code by tools like Babel before being executed in the browser.

2=> And in the following code we see how babel converts our code into standard JS code so that browser can understan it
becuase browser doesn't understand react or JSX

1- First we got a mainContainer element then we made a reactElement which we renderd in mainContainer
2- For rendering we need a method so we created a method named as renderReact after making element we have appendid to 
anohter element to display on screen 
*/

function renderReact(reactElement, container){
//This optimized code
 const domElement= document.createElement(reactElement.type)
 domElement.innerHTML=reactElement.children
 for (const prop in reactElement.props) {
   domElement.setAttribute(prop, reactElement.props[prop])
 }
 container.appendChild(domElement)


//=>This is unoptimized code
// const domElement= document.createElement(reactElement.type)
// domElement.innerHTML=reactElement.children
// domElement.setAttribute('href', reactElement.props.href) 
// domElement.setAttribute('target', reactElement.props.target) 
// container.appendChild(domElement)
}




const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer= document.querySelector('#root')
renderReact(reactElement, mainContainer )
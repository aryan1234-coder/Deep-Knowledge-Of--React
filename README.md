# Welcome to React 

# Parcel
-It is doing dev build serever for us
-Local Server
-Refreshinf fast HMR Hot Module Replacement
-File Watching Algorithm C++ change anything as Build in 4msIt is reducing the time actually because -Parcel is caching this for us
-if we delete parcel cache it will take 456 ms random
Image Optimization
Hinification
Bundling
Compress our file
Consistent Hashing
Code Splitting
Differential Bundling our app may be open in different oldr browser
HTTPS 
Hot Reloding
Diagonist
Reliable Caching
Tree shaking remove unnecessary code
Different Dev and Prod bundles

# React Element

React.createElement==> React Element -JS ==>Objectbasically its an object and when we renderer in the DOM===> then this become HTMLELEMENT(render)

JSX is a javascript syntax which is to create javascript element
JSX is basically basically you can merge javascript with html and css
JSX is HTML Like or XML like  syntax
JSX is not jAvascript

parcel install babel 
babel package manger
//JSX (transpiled before it reaches the JS)-paarcel-Babel
Babel is basically transpiled compiler and converts in code that browser understand and React understand 

convert basically jsx code to react code

JSX==>React.createElement=>ReactElemet-JSObject=HTMLElemetn render
babel is converting

# React Components

everthing in React  is Components

1 Class Based Components--OLD javascript classes to create components 
2 Functional Components--NEW it is normal javascript function BAsically  A function which return a React Element

ReactElement

const heading=(
    <!-- <h1 className="head>
    Namste Aryan</h1> -->
)

React Functional Component
const HeadingComponent=()=>{
    <!-- return <h2>Aryan Sachan Sachan</h2> -->
}

Component inside component is called Component Composition

JSX takes care of data itself
it will sanitise basically your data inside curly braces{}






<!-- const jsxHeading=  -->



// const fn1=()=> true;
// const fn2=()=>{
//     return true;
// }
// These two fn1 and fn2 are same

//if you writing jsx in multiple lines then you need to put brackets in that

// given attributes to jsx then it is in camelcase

// const heading=React.createElement("h1",{id: "heading"},"Hello from React");
    // This is one creating h1 inside react
    // now if I want to put into my browsser we will use rect dom
    // console.log(heading);
    // // it is basicall return an object not heading
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    // this render tag is responsible to take this object and convert into heading tag and put into DOM

    // {} this is basically a object where you give attribute in that
    // tilde(~) and caret(^)

    // We can write jsx also which is same as react ConvolverNode;
    // const jsxHeading=<h1 id="heading">Namaste Aryan</h1>

// suppose there is minor upgrade then we use 
// for majoe version we used tilde
    // Create Nested Element
    // Bundlers ,webpack,parcel it packages our app so we can push to in our productions

    // parcel will give strength in our app 
    //parcel is a beast
    // Dev Dependencies and Normal Dependencies
    //npm is a package manager its biggest package all the package libraries all comes from npm

    // package.json is basically configuration of npm files
    // packagelock.json keep lock record of exact version of dependencies
    // node modules kind of database which contains all the dependencies we install only parcel but parcel has own dependencies so this
    // is called Transitive dependencies
//     const parent=React.createElement("div",{id:"parent"}
//     ,[
//         React.createElement("div",{id:"child1"}
//     ,[React.createElement("h1",{}," This is H1 rrTag"),
//     React.createElement("h1",{},"This isH2 Tag")]),

//     React.createElement("div",{id:"child2"}
//     ,[React.createElement("h1",{},"That is H1 Tag"),
//     React.createElement("h1",{},"That is H2 Tag")])
// ]);
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent);

    // this look messy right now thats why we use jsx..


Props are just passing an arguements to function
When you pass dynamically data to a component you passed an using props

# Config Driven UI

in swiggy we see differnt card in different cities
controlling UI according your data


# JSX 
// const jsxHeading=(<h1 className="head" 
// tabIndex="5 delievery time" >Namaste React using JSX</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

/// const Title=()=>(
//     <h1 className="head">
//         Title Component
//     </h1>
// )

// const number=1000;

// const HeadingComponent=()=>(
//     <div id="container">
//         {Title()}
//         {/* this is aslo written i */}
//         {number}
//      <h1 className="heading">Aryan Sachan Sachan</h1>
//     </div>
// )

# Export

Default Export 

export default Component
import Component from "path
Name Export 
--to export multiple things in a file we used this
export const Component
import {Component} from path;

# React Hook

like a features of all the top rated restaurant like a button ,clickHandlers

A hook is also normal javascript function thaat function have some logics written
Written by Facebook Developer
two important hooks are:
-useState()--generate supepowerful state variable
it maintains state of the component
it is just a normal javascript variablw
 const[listOfRestaurant]=useState([])
 where you can modify that
-useEffect()

# DOM Manipulation (Importaant) React Fibre 

When there is changes in UI called Reconciliation

if the data changes my UI changes
efficient DOM Manipulation
Vitual DOM
WhenEver a state variable update React re render the component

React uses Reconcialitiation Algorithm known as React Fibre
How it Works?

Suppose it is res container and it has 15 restaurant card suppose my UI changes on filtering on !5 cards to 7 filtered cards?
now React do?
React to ---Virtual DOM is reprensentation of actual DOM(<div>)
also VD is normal Javascript function
Diff Algorithm-- it finds out the difference between Updated Virtual DOM and actual Virtual DOm

# Monoloithic Architecture 
everything inside the same packaage 
like API written
UI
Authentication
Database
SMS sending
backend written

if i want to change single element like so We have render all the inside the package

# Microservice Architecture

separate Backaend
separaate UI
separate Authentication
everything is separate

known as Separation of Concern

Ui sevice need sto talk to everyone all the services talk to each other

# Two Aproaches
1 As the page load We call an API as the data comes from API then it render the page

Loads-->API-->Render

2. As the page load then we render the page what we have then we call an API and get the data and then render the page

Loads-->render-API-->Render
(Atleast we can seet the page in this second approach)

Overall we used the second approach

# Use Effect

two arguements function
useEffect(()=>{

},[])
first one is callback function and the second one is 
dependecies

whatever we called in callback function it is rendered after the Body Components

# Optional Chaining

Optional chaining is a feature in React (and in JavaScript in general) that allows you to access properties of an object without worrying if the object itself is null or undefined. It's denoted by the question mark (?) placed before the dot (.) when accessing properties.

Here's a basic example to illustrate its usage:

javascript
Copy code
// Consider a nested object like this
const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anytown",
    // No zip property
  }
};

// Without optional chaining
const zipCode = user.address.zip; // This would throw an error since address is defined but zip is not

// With optional chaining

# Shimmer UI
its called fake UI when you load something and it takes time and show some fake cards

# Why Normal javscript normal variable not work in changing state??


beacause it didn't refresh the header component
Whenever we  changes th local state variable React re render the components

# UseEffect


    //if there is no dependency array in useEffect =>use Effect is called everytime when component is rendered
      // if dependency array is empty =[]=useEffect is called on initial rendered
      //if dependency array is [btnNameReact]=> useEffect is called everytime btnName is updated

# 2 types of Routing

Client Side Routing :

We are not making any network call


Server Side Routing:

to make a network call and html page is coming from server

# Class Based Component:

import React from "react"

class UserClass extends React.Component{

    render(){
        return(

        )
    }
}
class based component is normal javascript class which has render function that will return some piece of JSX

# ComponentDidMount

to call an api Class based component

# ComponentDidUpdate (Important )

Here the main things comes 
In Function bAse Component
Like in UseEffect we write like this
useEffect(()=>{

},[count])

now useffect will called everytime when count updated

Now The same things We have to write in Class Based Component is

ComponentDidUpdate(prevProps,prevState){
    if(this.state.count!=prevstate.count){

    }
    else{

    }
}

We have to write this for every update in Class BAsed that why it is harder to write it is
when new data show in API

# ComponentWillUnMount 

When you go back from the recent web page













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







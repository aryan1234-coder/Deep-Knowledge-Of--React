import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("h1",{id: "heading"},"Hello from React");
    // This is one creating h1 inside react
    // now if I want to put into my browsser we will use rect dom
    // console.log(heading);
    // // it is basicall return an object not heading
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    // this render tag is responsible to take this object and convert into heading tag and put into DOM

    // {} this is basically a object where you give attribute in that
    // tilde(~) and caret(^)

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
    const parent=React.createElement("div",{id:"parent"}
    ,[
        React.createElement("div",{id:"child1"}
    ,[React.createElement("h1",{}," This is H1 rrTag"),
    React.createElement("h1",{},"This isH2 Tag")]),

    React.createElement("div",{id:"child2"}
    ,[React.createElement("h1",{},"That is H1 Tag"),
    React.createElement("h1",{},"That is H2 Tag")])
]);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    // this look messy right now thats why we use jsx..
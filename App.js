const heading=React.createElement("h1",{id: "heading"},"Hello from React");
    // This is one creating h1 inside react
    // now if I want to put into my browsser we will use rect dom
    // console.log(heading);
    // // it is basicall return an object not heading
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    // this render tag is responsible to take this object and convert into heading tag and put into DOM

    // {} this is basically a object where you give attribute in that

    // Create Nested Element
    const parent=React.createElement("div",{id:"parent"}
    ,[
        React.createElement("div",{id:"child1"}
    ,[React.createElement("h1",{},"H1 Tag"),
    React.createElement("h1",{},"H2 Tag")]),

    React.createElement("div",{id:"child2"}
    ,[React.createElement("h1",{},"H1 Tag"),
    React.createElement("h1",{},"H2 Tag")])
]);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    // this look messy right now thats why we use jsx..
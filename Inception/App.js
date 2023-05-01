// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Now let's talk about the structure in which there are more child elements
// e.g. 
{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"This is h1"),
        React.createElement("h2",{},"This is h2")
        
        ]
        ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"This is h1"),
        React.createElement("h2",{},"This is h2")
        
        ]
        )
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent)
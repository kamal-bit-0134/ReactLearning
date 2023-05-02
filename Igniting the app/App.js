import React from "react";
import ReactDOM from "react-dom/client";



// React Element





// const jsxElement = (
//     <div>
//     <h1 id="heading">This is jsxElement</h1>
//     <h1 id="heading2">This is jsxElement</h1>
//     </div>
// );
// console.log(jsxElement)

// the above things were about creating the react element 

// Now let's discuss react componenets:-

// 1) Functional Components 
// const TitleComp = ()=>{
//     {var va = 29}
//     return <h1>Titlr- {va}</h1>
// }
// const HeadingComponent = ()=>{
//     return (
//         <>
//         <TitleComp/>
//         <h1>React Functional Component</h1>
//         </>
//         )
// }


// For multiple elements use react fragment

const TitleComp = ()=>{
    {var va = 29}
    return <h1>Titlr- {va}</h1>
}
// const HeadingComponent = ()=>{
//     return (
//         <React.Fragment>
//         <TitleComp/>
//         <h1>React Functional Component</h1>
//         </React.Fragment>
//         )
// }

const HeadingComponent = ()=>{
    return (
        <>
        <TitleComp/>
        <h1>React Functional Component</h1>
        <>
            <h2>React fragment inside react fragment</h2>
        </>
        </>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
const root2 = ReactDOM.createRoot(document.getElementById("root2"))

// root.render(jsxElement)
root.render(<HeadingComponent/>)
root2.render(<HeadingComponent/>)



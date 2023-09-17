import React from "react";
// function Greet(props){
//     return <h1>Hello</h1>
// }
export const Greets = (props) =>{
    console.log(props)
    return (
        <>
        <div>
            <h1>Hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
        </div>
        
        </>
    )
}

export default Greets

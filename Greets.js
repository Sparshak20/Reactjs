import React from "react";

// function Greet(props){
//     return <h1>Hello</h1>
// }
// export const Greets = ({name,heroname}) =>{
    const Greets = props =>{
        const {name,heroname}=props
    return (
        <>
        <div>
            <h1>Hello {name} a.k.a {heroname}</h1>
        
        </div>
        
        </>
    )
}

 export default Greets

import React from "react";


const Hello=()=>{
    // return (
    //     <div>
    // <h6>Hello</h6>
    //     </div>
        
    // )
    //Without using Jsx
   // return React.createElement('div', null, <h1>hello</h1>)
    // return React.createElement('div',null,React.createElement('h1',null,'Hello'))
    // return React.createElement('div',{id:'hello'},React.createElement('h1',{id:'hellow'},'Hello'))
    return React.createElement('div',{id:'hello', className:'dummyclass'},React.createElement('h1',{id:'hellow'},'Hello'))
}

export default Hello
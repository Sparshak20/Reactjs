import React from "react";
function Childcomponent({greethandler}){
    return(
        <div>
            <button onClick={greethandler}>Greet Parent</button>
        </div>
    )
}


export default Childcomponent
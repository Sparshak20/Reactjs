import React, { Component } from 'react'

class Classclick extends Component {
  clickhandler(){
    console.log("Clicked the button")
  }
    render() {
    return (
      <div>
        <button onClick={this.clickhandler} >Click Me</button>
      </div>
    )
  }
}

export default Classclick
import React, { Component } from 'react'
import Forwardrefinput from './Forwardrefinput'

class Forwardparentinput extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Forwardrefinput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Forwardparentinput
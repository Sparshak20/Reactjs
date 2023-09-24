import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
      console.log('Lifecycle A Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerived Statefrom Props')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentdid mount')
    }


    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getsnapshotbeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA component didupdate')
    }

    changeState=()=>{
        this.setState({
            name:'Code'
        })
    }

  render() {
    console.log('Lifecycle A render')
    return (
        <div>
            <div>
        LifecycleA
      </div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB />
        </div>
      
    )
  }
}

export default LifecycleA
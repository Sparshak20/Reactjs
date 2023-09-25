import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vishwas'
      }
      console.log('Lifecycle B Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerived Statefrom Props')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentdid mount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getsnapshotbeforeupdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB component didupdate')
    }
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
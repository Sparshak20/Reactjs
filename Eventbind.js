import React, { Component } from "react";

class Eventbind extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello",
        };
        // this.clickhandler=this.clickhandler.bind(this)
    }
    // clickhandler(){
    //     this.setState({
    //         message:'Goodbye'
    //     })
    //     console.log(this)
    // }

    clickhandler = () => {
        this.setState({
            message: "Goodbye",
        });
    };

    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=> this.clickhandler()}>Click</button> */}

                <button onClick={this.clickhandler}>Click</button>
            </div>
        );
    }
}

export default Eventbind;

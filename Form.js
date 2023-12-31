import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments:'',
            topic:'react'
        }
    }
    handleusernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlecommentschange = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }

    handletopicchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handlesubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>
                        Username
                    </label>
                    <input type='text' value={this.state.username} onChange={this.handleusernamechange} ></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handlecommentschange}></textarea>
                </div>

                <div>
                    <label>
                        Topic
                    </label>
                    <select value={this.state.topic} onChange={this.handletopicchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
import React, { Component } from "react";
import Todo from "./Todo";

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
        };

        this.addTask = this.addTask.bind(this);
    }

    watchInput(val) {
        this.setState({userInput: val});
    }

    addTask() {
        this.props.add(this.state.userInput);
        this.setState({userInput: ''});
    }
    
    
    render() {
        return (
            <div>
                <input
                onChange={(e) => this.watchInput(e.target.value)}
                value={this.state.userInput}
                placeholder="Enter new task"
                />
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }

}
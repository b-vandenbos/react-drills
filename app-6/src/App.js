import React, { Component } from "react";
import "./App.css";

import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: []
    }

    this.addTask = this.addTask.bind(this);
  }

  watchChange(val) {
    this.setState({userInput: val});
  }

  addTask() {
    this.setState({list: [...this.state.list, this.state.userInput] });
    this.setState({userInput: ''});
  }

render() {
  let list = this.state.list.map((element, index) => {
    return <Todo key={index} task={element} />;
  })

  return (
    <div className='App'>
    <input onChange={(e) => this.watchChange(e.target.value)}/>
    <button onClick={this.addTask}>Add</button>
    {list}
    </div>
  )
}

}

export default App;

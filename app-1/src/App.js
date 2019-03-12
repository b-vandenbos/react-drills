gimport React, { Component } from "react";
import "./App.css";

class App extends Component {
 constructor() {
   super();

   this.state = {
     userInput: ''
   }
 }

 watchChange(val) {
   this.setState({userInput: val});
 }

  render() {
    return (
      <div className='App'>
        <input onChange={(e) => this.watchChange(e.target.value)}/>
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default App;

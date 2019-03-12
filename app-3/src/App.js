import React, { Component } from "react";
import "./App.css";

class App extends Component {
 constructor() {
   super();

   this.state = {
     array: ['one', 'two', 'three', 'four', 'five'],
     userInput: ''
   };
 }

 trackChange(val) {
   this.setState({userInput: val});
 }

 makeList() {

 }

  render() {
    let filteredList = this.state.array.filter(str => str.includes(this.state.userInput))
    let bulletList = filteredList.map((element, index) => {
      return <p key={index}>{element}</p>;
    })


    return (
      <div className='App'>
      <input onChange={(e) => this.trackChange(e.target.value)}/>
      <h1>{bulletList}</h1>
      </div>


    )
  }
}

export default App;

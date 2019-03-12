import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['one', 'two', 'three', 'four', 'five']
    };
  }



  render() {
    let list = this.state.list.map((item, index) => {
      return <h1 key={index}>{item}</h1>;
    })


    return (
      <div className='App'>
        {list}
      </div>
    )
  }
}

export default App;

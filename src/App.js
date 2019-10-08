/* eslint-disable */
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("+");
  };
  min = () => {
    console.log("-");
  };

  render() {
    return (
      <div>
        <h1>The number : {this.state.count}</h1>
        <button onClick={this.add}> + </button>
        <button onClick={this.min}> - </button>
      </div>
    );
  }
}

export default App;

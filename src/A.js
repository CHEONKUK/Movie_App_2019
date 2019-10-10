import React from "react";

class A extends React.Component {
  state = {
    num: 0
  };

  plus = () => {
    this.setState(current => ({ num: current.num + 10 }));
  };

  minus = () => {
    this.setState(current => ({ num: current.num - 10 }));
  };
  render() {
    return (
      <div>
        <h3>The NUM : {this.state.num} </h3>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default A;

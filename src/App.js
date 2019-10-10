/* eslint-disable */
import React from "react";
import A from "./A";
import LifeCycleAPI from "./LifeCycleAPI";

class App extends React.Component {
  state = {
    num: 1
  };
  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };
  render() {
    return (
      <div>
        <br />
        <A />
        <br />
        <LifeCycleAPI value={this.state.num} />
        <button onClick={this.handleClick}>ClickMe</button>
      </div>
    );
  }
}

export default App;

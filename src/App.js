/* eslint-disable */
import React from "react";
import A from "./A";
import LifeCycleAPI from "./LifeCycleAPI";

class App extends React.Component {
  state = {
    num: 1,
    error: false
  };

  handleClick = () => {
    this.setState({ num: this.state.num + 1 });
  };

  componentDidCatch(error, info) {
    console.log("# Error  : " + error);
    console.log("# Info   : " + info.value);
    this.setState({
      error:true
    })
  }

  render() {
    
    if(this.state.error){
      return(
        <div>ERROR</div>
      )
    }
    
    return(
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

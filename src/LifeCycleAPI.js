import React from "react";

class LifeCycleAPI extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor");
  }

  componentDidMount() {
    console.log("2. CompoentDidMount");
    console.log(this.myDiv.getBoundingClientRect());
  }

  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      console.log("prevState  : " + prevState.value);
      console.log("nextProps  : " + nextProps.value);

      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log("# propsValue Change", this.props.value);
    }
  }
  render() {
    return (
      <div ref={ref => (this.myDiv = ref)}>
        <h3>LifeCycleAPI</h3>
        <div>
          {/* <p> error test : {this.props.missing.what} </p> */}
          <p>props : {this.props.value} </p>
          <p>state : {this.state.value} </p>
        </div>
      </div>
    );
  }
}

export default LifeCycleAPI;

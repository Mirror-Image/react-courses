import React from "react";

class Counter2 extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.value !== this.props.value) {
      return true;
    }

    return false;
  }

  render() {
    console.log("Counter 2 is calling");
    return (
      <div>
        <h2>Counter 2</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default Counter2;

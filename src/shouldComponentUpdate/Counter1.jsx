import React from "react";

class Counter1 extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.value !== this.props.value) {
      return true;
    }

    return false;
  }

  render() {
    console.log("Counter 1 is calling");
    return (
      <div>
        <h2>Counter 1</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default Counter1;

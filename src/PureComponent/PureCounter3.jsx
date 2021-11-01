import React from "react";

class PureCounter3 extends React.Component {
  render() {
    console.log("PureCounter 3 is calling");
    return (
      <div>
        <h2>Counter 3</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default PureCounter3;

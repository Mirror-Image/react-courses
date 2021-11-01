import React from "react";

class PureCounter2 extends React.PureComponent {
  render() {
    console.log("PureCounter 2 is calling");
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

export default PureCounter2;

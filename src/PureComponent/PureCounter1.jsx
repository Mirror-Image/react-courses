import React from "react";

class PureCounter1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 7,
    }
  }

  handleCountSeven = () => {
    this.setState({ counter: 7 });
  }

  render() {
    console.log("PureCounter 1 is calling");
    return (
      <div>
        <h2>Counter 1</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleClick}>
          Add
        </button>

        <button onClick={this.handleCountSeven}>
          Count 7
        </button>

        <div>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default PureCounter1;

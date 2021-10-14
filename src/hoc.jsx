import React from "react";

function Counter({ count = 0, increment, decrement}) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

function withCounter({ min, max }) {
  return Component => class WrappedComponent extends React.Component {
    static displayName = 'TEST';
    state = {
      count: 0,
    };

    increment = () => this.setState(state => state.count < max
      ? ({ count: state.count + 1 })
      : null
    );

    decrement = () => this.setState(state => state.count > min
      ? ({ count: state.count - 1 })
      : null
    );

    render() {
      return (
        <Component
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          { ...this.props }
        />
      );
    }
  }
}

export default withCounter({ min: 0, max: 15 })(Counter);

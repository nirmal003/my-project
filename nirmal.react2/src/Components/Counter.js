import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter Demo</h1>
        <h2>Counter = {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <br />
        <br />
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <br />
        <br />
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

export default Counter;

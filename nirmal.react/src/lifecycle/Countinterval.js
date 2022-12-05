import React, { Component } from "react";

class Countinterval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.Interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.Interval);
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.componentWillUnmount}>Stop Counting</button>
      </div>
    );
  }
}

export default Countinterval;

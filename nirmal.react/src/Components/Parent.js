import React, { Component } from "react";
import Child from "./Child";

// class and constructor

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "My son name is",
    };

    this.parent = this.parent.bind(this);
  }

  // method

  parent(childName) {
    alert(`${this.state.message} ${childName}`);
  }

  render() {
    return (
      <div>
        <Child call={this.parent} />
      </div>
    );
  }
}

export default Parent;

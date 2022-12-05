//                                    state method in class components

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0, //                       its object key and value
    };
  }

  addcount() {
    //       this is called method

    //    1st method for setState using object modify

    // this.setState(
    // 	{
    // 		count: this.state.count + 1, //     its like a object and we modify the original object
    // 	},
    // 	() => {
    // 		console.log("Callback value", this.state.count); //    after setState call it will execute
    // 	}
    // );

    //    2nd method for setState using function modify

    this.setState((value, props) => ({
      count: value.count + 1, //              its like a function modify
    }));

    // console.log(this.state.count); //            before setState call it will execute
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <br />
        <button onClick={() => this.addcount()}>Add Count</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hi how are you?",
    };

    //  3rd method in evenclick with bind

    this.Change = this.Change.bind(this);
  }

  //    this is 1st,2nd and 3rd method will applicable

  Change() {
    this.setState({
      message: "yeh I'm good what about you?",
    });
  }

  // now we will see the 4th method in evenclick(easy and best)

  Change = () => {
    this.setState({
      message: "yeh I'm good what about you?",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <br />
        <button onClick={this.Change.bind(this)}>Ask me 1st method</button>
        <br />
        <br />
        <button onClick={() => this.Change()}>Ask me 2nd method</button>
        <br />
        <br />
        <button onClick={this.Change}>Ask me 3rd method</button>
        <br />
        <br />
        <button onClick={this.Change}>Ask me 4th method</button>
        <br />
        <br />
      </div>
    );
  }
}

export default EventClass;

//   1st method inline binding in render evenclick it will take performance

//   2nd method is arrow function in render using pass the parameters

//   3rd method is binding in Class Constructor(also called react method)(easy)

//  4th method in the Claass property as arrow functions(very easy)

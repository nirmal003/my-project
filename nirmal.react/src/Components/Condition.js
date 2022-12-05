import React, { Component } from "react";

class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    //  Sortlist condition way to use inside the render

    return this.state.isLogin && <h1>Hello Nirmal</h1>;

    //  ternary Operator condition way to use inside the render(is this best)

    // return this.state.isLogin ? <h1>Hello Nirmal</h1> : <h1>Hello Nirmal</h1>;

    //  variable with if/else condition way to use inside the render

    // let message;

    // if (this.state.isLogin) {
    //   return (message = <h1>Hello Nirmal</h1>);
    // } else {
    //   return (message = <h1>Hello Guest</h1>);
    // }

    //  if/else condition way to use inside the render

    if (this.state.isLogin) {
      return <h1>Hello Nirmal</h1>;
    } else {
      return <h1>Hello Guest</h1>;
    }

    // return <div></div>;
  }
}

export default Condition;

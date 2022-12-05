import React, { Component } from "react";

class Mousemove extends Component {
  constructor(props) {
    super(props);

    this.state = {
      X: 0,
      Y: 0,
      Z: true,
    };
  }

  logMousePosition = (e) => {
    console.log("EventClicked");

    this.setState({ X: e.clientX, Y: e.clientY });
  };

  componentDidMount() {
    console.log("MountEvent");

    // window.onmousemove = (e) => {
    //   console.log("MouseEvent");

    //   this.setState({ X: e.clientX, Y: e.clientY });
    // };

    window.addEventListener("mousemove", this.logMousePosition);
  }

  // if we need to remove the Event then simply go this way

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.logMousePosition);

    // window.removeEventListener("mousemove", (e) => {
    //   console.log("EventRemoved");

    //   this.setState({ X: e.clientX, Y: e.clientY });
    // });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.componentWillUnmount}
          onDoubleClick={() => this.setState({ Z: !this.state.Z })}
        >
          Toggle btn
        </button>
        {this.state.Z ? `X - ${this.state.X} Y - ${this.state.Y}` : ``}
      </div>
    );
  }
}

export default Mousemove;

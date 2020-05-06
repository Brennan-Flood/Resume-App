import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.state;
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.setState(this.props.state);
    }
  }
  render() {
    return (
      <div className="resume">
        This is the 
        <h1> {this.props.state.name} </h1>
      </div>
    )
  }

}

export default Resume;
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
        <div className="resume-header">
          <h1 className="name"> {this.props.state.name} </h1>
          <h1 className="years"> {this.props.state.yearsExperience} YEARS of recruiting experience </h1>
        </div>

        <div className="current-position-div">
          <h1 className="current-position-title">CURRENT POSITION</h1>
          <div className="current-position-header">
          <h1 className="current-position">{this.props.state.currentTitle}</h1>
          </div>
        </div>
      </div>
    )
  }

}

export default Resume;
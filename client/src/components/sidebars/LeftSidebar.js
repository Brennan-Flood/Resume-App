import React from "react";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  update(field) {
   return e => this.props.update(field, e.target.value);
  }

  // name: "",
  // title: "",
  // yearsExperience: "",
  // currentTitle: "",
  // currentCompany: "",
  // currentPositionTime: "",
  // currentPositionParagraph: "",
  // recentSearches: "",
  // educationAndEmployment: [],
  // LinkedinReviews: [],

  render() {
    return (
      <div className="left-sidebar">
        <input 
        type="text"
        placeholder="Name"
        onChange={this.update("name")}
        />

        <input 
        type="number"
        placeholder="Years of Recruitment Experience"
        onChange={this.update("yearsExperience")}
        />

        <input 
        type="text"
        placeholder="Current Title"
        onChange={this.update("currentTitle")}
        />

        <input 
        type="number"
        placeholder="Starting Year of Current Position"
        onChange={this.update("currentPositionStartTime")}
        />

        <input
          type="number"
          placeholder="Current Year"
          onChange={this.update("currentPositionTime")}
        />
      </div>
    )
  }

}

export default LeftSidebar;
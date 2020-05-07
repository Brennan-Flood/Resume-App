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
        <h1 className="sidebar-header">INPUTS</h1>

        <h1 className="sidebar-section-name"> Basic Info</h1>

        <input 
        type="text"
        placeholder="First Name"
        onChange={this.update("firstName")}
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={this.update("lastName")}
        />

        <input 
        type="number"
        placeholder="Years of Recruitment Experience"
        onChange={this.update("yearsExperience")}
        />
        
        <h1 className="sidebar-section-name"> Current Position</h1>

        <input 
        type="text"
        placeholder="Current Title"
        onChange={this.update("currentTitle")}
        />

        <input
          type="text"
          placeholder="Current Company"
          onChange={this.update("currentCompany")}
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

        <textarea
          placeholder="Description"
          onChange={this.update("currentPositionParagraph")}
        />

        <h1 className="sidebar-section-name"> Recruiting Toolkit </h1>

        <h1 className="sidebar-section-name"> Recent Searches</h1>

        <textarea 
        type="text"
        placeholder="Recent Searches"
        onChange={this.update("recentSearches")}
        />

        
      </div>
    )
  }

}

export default LeftSidebar;
import React from "react";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {educationInputs: 1, educationValues: {1: ""}};

    this.addEducationField = this.addEducationField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.updateEducationField = this.updateEducationField.bind(this);
  }

  update(field) {
   return e => this.props.update(field, e.target.value);
  }

  addEducationField() {
    const numInputs = this.state.educationInputs + 1;
    
    let newEducationValues = this.state.educationValues;
    newEducationValues[numInputs] = "";

    this.setState({educationInputs: numInputs, educationValues: newEducationValues});
    this.props.updateEducationField(numInputs);
  }

  removeEducationField() {
    const numInputs = this.state.educationInputs - 1;
    if (numInputs > 0) {
    let newEducationValues = this.state.educationValues;
    newEducationValues[numInputs] = "";
    this.setState({educationInputs: numInputs, educationValues: newEducationValues});
    this.props.updateEducationField(numInputs);
    } else {
      return
    }
  }
  
  updateEducationField(field) {
    return (e) => {
      let newEducationValues = this.state.educationValues
      newEducationValues[field] = e.target.value
      this.setState({educationValues: newEducationValues});
      this.props.updateEducationField(this.state.educationInputs, field, e.target.value);
    }
  }

  render() {
    let eduInputs = new Array(this.state.educationInputs).fill(0);
    
    console.log(eduInputs);
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
        placeholder="Years of Experience"
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
        placeholder="Starting Year"
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

        <h1 className="sidebar-section-name"> {"HOBBIES & INTERESTS"}</h1>

        
        <h1 className="sidebar-section-name">{"EDUCATION & EMPLOYMENT"}</h1>

        <div className="education-field">
          <button className="add-field-button" onClick={this.addEducationField}>ADD</button>
          <button className="remove-field-button" onClick={this.removeEducationField}>REMOVE</button>
          {eduInputs.map((e, i) => {
            return (<input
              type="text"
              id={i + 1}
              className="education-input"
              placeholder="EDUCATION / EMPLOYMENT"
              onChange={this.updateEducationField(i + 1)}
            />
            )
          })}
        </div>

        <h1 className="sidebar-section-name">LinkedIn Reviews</h1>
        <div className="last-left-div">
        <input className="" placeholder="LinkedIn Review"/>
        </div>

      </div>
    )
  }

}

export default LeftSidebar;
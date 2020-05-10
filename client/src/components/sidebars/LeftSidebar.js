import React from "react";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      educationInputs: 1, 
      educationValues: {1: {title: "", entity: "", startTime: "", endTime: ""}},
      linkedinInputs: 1,
      linkedinValues: {1: {author: "", body: ""}}
    };

    this.addMultiField = this.addMultiField.bind(this);
    this.removeMultiField = this.removeMultiField.bind(this);
    this.updateMultiField = this.updateMultiField.bind(this);
  }

  update(field) {
   return e => this.props.update(field, e.target.value);
  }

  addMultiField(field) {
    
    let newValues;
    let inputs;
    if (field === "edu") {
      inputs = this.state.educationInputs + 1;
      newValues = this.state.educationValues;
      newValues[inputs] = { title: "", entity: "", startTime: "", endTime: "" };
      this.setState({educationInputs: inputs, educationValues: newValues });

    } else if (field === "linkedin") {

      newValues = this.state.linkedinValues;
      inputs = this.state.linkedinInputs + 1;
      newValues[inputs] = { author: "", body: "" };
      this.setState({ linkedinInputs: inputs, linkedinValues: newValues });

    }

    this.props.updateMultiField(field, inputs);
  }

  removeMultiField(field) {
    let newValues;
    let inputs;
    if (field === "edu") {
      inputs = this.state.educationInputs - 1;
      if (inputs <= 0) {
        return;
      }
      newValues = this.state.educationValues;
      newValues[inputs] = { title: "", entity: "", startTime: "", endTime: "" };
      this.setState({ educationInputs: inputs, educationValues: newValues });
      this.props.updateMultiField(field, inputs);

    } else if (field === "linkedin") {

      inputs = this.state.linkedinInputs - 1;
      if (inputs <= 0) {
        return;
      }
      newValues = this.state.linkedinValues;
      newValues[inputs] = { author: "", body: "" };
      this.setState({ linkedinInputs: inputs, linkedinValues: newValues });
      this.props.updateMultiField(field, inputs);
    }
    
  }
  
  updateMultiField(metaField, index, field) {
    return (e) => {
      let newValues;
      let inputs;
      if (metaField === "edu") {

        newValues = this.state.educationValues;
        inputs = this.state.educationInputs;
        newValues[index][field] = e.target.value;
        this.setState({ educationValues: newValues });
        
      } else if (metaField === "linkedin") {

        newValues = this.state.linkedinValues;
        inputs = this.state.linkedinInputs;
        newValues[index][field] = e.target.value;
        this.setState({ linkedinValues: newValues });

      }
      this.props.updateMultiField(metaField, inputs, index, field, e.target.value);
    }
  }

  updateClearenceSlider(field) {
    return e => this.props.updateClearenceLevel(field, e.target.value);
  }

  render() {
    let eduInputs = new Array(this.state.educationInputs).fill(0);
    let linkedinInputs = new Array(this.state.linkedinInputs).fill(0);

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
          <button className="add-field-button" onClick={() => this.addMultiField("edu")}>ADD</button>
          <button className="remove-field-button" onClick={() => this.removeMultiField("edu")}>REMOVE</button>
          {eduInputs.map((e, i) => {
            let k = i * 5;
            return (
            <div key={k} className="education-cluster">
              <h1 className="education-index">Experience #{i + 1}</h1>
              <input
                type="text"
                id={k + 1}
                key={k + 1}
                className="education-input"
                placeholder="Study or Title"
                onChange={this.updateMultiField("edu", i + 1, "title")}
              />
              <input
                  type="text"
                  id={k + 2}
                  key={k + 2}
                  className="education-input"
                  placeholder="School or Company"
                  onChange={this.updateMultiField("edu", i + 1, "entity")}
              />
                <input
                  type="text"
                  id={k + 3}
                  key={k + 3}
                  className="education-input"
                  placeholder="Starting Year"
                  onChange={this.updateMultiField("edu", i + 1, "startTime")}
                />
                <input
                  type="text"
                  id={k + 4}
                  key={k + 4}
                  className="education-input"
                  placeholder="Ending Year"
                  onChange={this.updateMultiField("edu", i + 1, "endTime")}
                />
            </div>
            )
          })}
        </div>

        <div className="agencies-and-clearence">
          <div className="agencies">
            <h1 className="sidebar-section-name">FEDERAL AGENCIES</h1>
            
          </div>

          <div className="clearences">
            <h1 className="sidebar-section-name">CLEARENCE LEVELS</h1>
            <div className="clearence-div">
              <h1>Secret</h1>
              <input onChange={this.updateClearenceSlider("secret")} 
                type="range" 
                min="0" 
                max="100" 
                value={this.props.state.clearenceLevels.secret} 
                className="slider" 
                id="myRange" 
                />
              <h1>{this.props.state.clearenceLevels.secret}%</h1>
            </div>

            <div className="clearence-div">
              <h1>Top Secret</h1>
              <input onChange={this.updateClearenceSlider("topSecret")}
                type="range"
                min="0"
                max="100"
                value={this.props.state.clearenceLevels.topSecret}
                className="slider"
                id="myRange"
              />
              <h1>{this.props.state.clearenceLevels.topSecret}%</h1>
            </div>

            <div className="clearence-div">
              <h1>TS/SCI</h1>
              <input onChange={this.updateClearenceSlider("TSSCI")}
                type="range"
                min="0"
                max="100"
                value={this.props.state.clearenceLevels.TSSCI}
                className="slider"
                id="myRange"
              />
              <h1>{this.props.state.clearenceLevels.TSSCI}%</h1>
            </div>

            <div className="clearence-div">
              <h1>TS/SCI CI Polygraph</h1>
              <input onChange={this.updateClearenceSlider("TSSCICIPolygraph")}
                type="range"
                min="0"
                max="100"
                value={this.props.state.clearenceLevels.TSSCICIPolygraph}
                className="slider"
                id="myRange"
              />
              <h1>{this.props.state.clearenceLevels.TSSCICIPolygraph}%</h1>
            </div>

            <div className="clearence-div">
              <h1>TS/SCI Full Scope Polygraph</h1>
              <input onChange={this.updateClearenceSlider("TSSCIFullScopePolygraph")}
                type="range"
                min="0"
                max="100"
                value={this.props.state.clearenceLevels.TSSCIFullScopePolygraph}
                className="slider"
                id="myRange"
              />
              <h1>{this.props.state.clearenceLevels.TSSCIFullScopePolygraph}%</h1>
            </div>

          </div>
        </div>

        <div className="last-left-div">
          <h1 className="sidebar-section-name">LinkedIn Reviews</h1>

          <button className="add-field-button" onClick={() => this.addMultiField("linkedin")}>ADD</button>
          <button className="remove-field-button" onClick={() => this.removeMultiField("linkedin")}>REMOVE</button>
          {linkedinInputs.map((e, i) => {
            let k = i*3
            return (
              <div key={k} className="linkedin-cluster">
                <textarea key={k + 1} id={i} className="linkedin-textarea" placeholder="Author Info" onChange={this.updateMultiField("linkedin", i + 1, "author")} />
                <textarea key={k + 2} id={i} className="linkedin-textarea" placeholder="Review" onChange={this.updateMultiField("linkedin", i + 1, "body")} />
              </div>
            )
          })}
        </div>

      </div>
    )
  }

}

export default LeftSidebar;
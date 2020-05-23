import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import ResumeContainer from "../resume/ResumeContainer";


class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      yearsExperience: "",
      currentTitle: "",
      currentCompany: "",
      currentPositionStartTime: "",
      currentPositionTime: "",
      currentPositionParagraph: "",
      recentSearches: "",
      educationAndEmployment: [[1, { title: "", entity: "", startTime: "", endTime: "" }]],
      clearenceLevels: {secret: 50, topSecret: 50, TSSCI: 50, TSSCICIPolygraph: 50, TSSCIFullScopePolygraph: 50},
      linkedinReviews: [[1, {author: "", body: ""}]],
      themeColor: {backgroundColor: "rgb(229, 229, 229)"},
      recruitingToolkit: [[1, {name: "", value: 10}]],
      federalAgencies: {},
      hobbies: {},
      image: ""
    }

    this.update = this.update.bind(this);
    this.updateMultiField = this.updateMultiField.bind(this);
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
    this.updateClearenceLevel = this.updateClearenceLevel.bind(this);
    this.addImageToField = this.addImageToField.bind(this);
    this.removeImageFromField = this.removeImageFromField.bind(this);
    this.saveImageString = this.saveImageString.bind(this);
  }

  saveImageString(string) {
    this.setState({image: string});
  }

  addImageToField(field, url, id) {
    let currentFieldState = this.state[field];
    currentFieldState[id] = url;
    this.setState({ [field]: currentFieldState })
  }

  removeImageFromField(field, id) {
    let currentFieldState = this.state[field];
    delete currentFieldState[id]
    this.setState({ [field]: currentFieldState})
  }

  update(field, value) {
    this.setState({ [field]: value })
  }

  updateMultiField(metaField, inputs, index="", field="", value="") {
    const newArr = [];
    let currentField;
    let pushObject;
    let key;
    let i;


    if (metaField === "edu") {
      currentField = this.state.educationAndEmployment;
      pushObject = { title: "", entity: "", startTime: "", endTime: "" };
      key = "educationAndEmployment";
      i = currentField.length;
    } else if (metaField === "linkedin" ) {
      currentField = this.state.linkedinReviews;
      pushObject = { author: "", body: "" };
      key = "linkedinReviews";
      i = currentField.length;
    } else if (metaField === "recruitingToolkit") {
      currentField = this.state.recruitingToolkit;
      pushObject = { name: "", value: 50};
      key = "recruitingToolkit";
      i = currentField.length
    } 

    let newField = newArr.concat(currentField);

    if (inputs > newField.length) {
      while (inputs !== newField.length) {
        i += 1
        newField.push([i, pushObject]);
      }
    } else if (inputs < newField.length) {
      while (inputs !== newField.length) {
        newField = newField.slice(0, newField.length - 1);
      }
    }
    if (currentField) {
      newField.forEach(arr => {
        if (arr[0] === index) {
          arr[1][field] = value;
        }
      });

      if (key === "educationAndEmployment") {
        this.setState({ educationAndEmployment: newField })
      } else if (key === "linkedinReviews") {
        this.setState({ linkedinReviews: newField })
      } else if (key === "recruitingToolkit") {
        this.setState({recruitingToolkit: newField})
      } 
    }
  }

  updateBackgroundColor(color) {
    this.setState({themeColor: {backgroundColor: color}});
  }

  updateClearenceLevel(field, value) {
    const currentClearenceLevels = this.state.clearenceLevels;
    currentClearenceLevels[field] = value;
    this.setState({clearenceLevels: currentClearenceLevels});
  }

  render() {
    return(
      <div className="builder">

        <LeftSidebar 
        update={this.update} 
        updateMultiField={this.updateMultiField} 
        updateClearenceLevel={this.updateClearenceLevel}
        addImageToField={this.addImageToField}
        removeImageFromField={this.removeImageFromField}
        state={this.state}
        />

        <ResumeContainer state={this.state}/> 

        <RightSidebar saveImageString={this.saveImageString} updateBackgroundColor={this.updateBackgroundColor} />

      </div>
    )
  }

}

export default Builder
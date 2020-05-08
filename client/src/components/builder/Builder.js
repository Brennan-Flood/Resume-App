import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import Resume from "../resume/Resume";


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
      linkedinReviews: [[1, {author: "", body: ""}]],
    }

    this.update = this.update.bind(this);
    this.updateMultiField = this.updateMultiField.bind(this);
  }

  componentDidMount() {
    
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
      }
    }

    console.log(this.state);
  }

  render() {
    return(
      <div className="builder">

        <LeftSidebar 
        update={this.update} 
        updateMultiField={this.updateMultiField} 
        />

        <Resume state={this.state}/> 

        <RightSidebar />

      </div>
    )
  }

}

export default Builder
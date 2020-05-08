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
      educationAndEmployment: [[1, ""]],
      LinkedinReviews: [],
    }

    this.update = this.update.bind(this);
    this.updateEducationField = this.updateEducationField.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  update(field, value) {
    this.setState({ [field]: value })
  }

  updateEducationField(educationInputs, field=undefined, value="") {
    const newArr = [];
    const currentEducationField = this.state.educationAndEmployment;
    const newEducationField = newArr.concat(currentEducationField);

    let i = currentEducationField.length;
    if (educationInputs > newEducationField.length) {
      while (educationInputs !== newEducationField.length) {
        i += 1
        newEducationField.push([i, ""]);
      }
    } else if (educationInputs < newEducationField.length) {
      while (educationInputs !== newEducationField.length) {
        newEducationField.shift();
      }
    }
    console.log(newEducationField);

    currentEducationField.forEach(arr => {
      if (arr[0] === field) {
        arr[1] = value
      }
    });

    console.log(newEducationField);

    this.setState({educationAndEmployment: newEducationField})
  }

  render() {
    return(
      <div className="builder">

        <LeftSidebar 
        update={this.update} 
        updateEducationField={this.updateEducationField} 
        />

        <Resume state={this.state}/> 

        <RightSidebar />

      </div>
    )
  }

}

export default Builder
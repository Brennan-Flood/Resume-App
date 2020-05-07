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
      educationAndEmployment: [],
      LinkedinReviews: [],

    }

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  update(field, value) {
    this.setState({ [field]: value })
  }

  render() {
    return(
      <div className="builder">
        <LeftSidebar update={this.update} />
        <Resume state={this.state}/> 
        <RightSidebar />
      </div>
    )
  }

}

export default Builder
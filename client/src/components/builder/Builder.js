import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import Resume from "../resume/Resume";


class Builder extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    return(
      <div className="builder">
        This is the Builder
        <LeftSidebar />
        <Resume /> 
        <RightSidebar />
      </div>
    )
  }

}

export default Builder
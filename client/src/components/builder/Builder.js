import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import Resume from "../resume/Resume";

class Builder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
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
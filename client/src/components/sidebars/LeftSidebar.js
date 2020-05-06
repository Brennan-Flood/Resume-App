import React from "react";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  update(field) {
   return e => this.props.update(field, e.target.value);
  }

  render() {
    return (
      <div className="left-sidebar">
        LeftSidebar

        

        <input 
        type="text"
        placeholder="Name"
        onChange={this.update("name")}
        />
      </div>
    )
  }

}

export default LeftSidebar;
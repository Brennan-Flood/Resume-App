import React from "react";


class RightSidebar extends React.Component {

  render() {
    return (
      <div className="right-sidebar">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(229, 229, 229)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(232, 235, 238)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 245)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 233)")}></button>
        </ul>

      </div>
    )
  }

}

export default RightSidebar;
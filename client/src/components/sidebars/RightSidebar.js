import React from "react";

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="right-sidebar col-sm-8">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateTheme("rgb(229, 229, 229)", "rgb(69, 69, 69)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateTheme("rgb(232, 235, 238)", "rgb(0, 100, 0)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateTheme("rgb(243, 240, 245)", "rgb(0, 0, 0)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateTheme("rgb(243, 240, 233)", "rgb(0, 0, 0)")}></button>
        </ul>
      </div>
    )
  }

}

export default RightSidebar;
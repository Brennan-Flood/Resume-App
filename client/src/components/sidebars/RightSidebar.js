import React from "react";

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="right-sidebar col-sm-8">
        <h1 className="sidebar-header">THEMES</h1>

        <h1 className="sidebar-section-header">Background Color</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateThemeBackground("rgb(229, 229, 229)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateThemeBackground("rgb(232, 235, 238)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateThemeBackground("rgb(243, 240, 245)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateThemeBackground("rgb(243, 240, 233)")}></button>
        </ul>

        <h1 className="sidebar-section-header"> Font Color </h1>
        <ul className="theme-list">
          <button className="theme"
            style={{ backgroundColor: "black" }}
            onClick={e => this.props.updateThemeFont("black")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(102, 101, 95)" }}
            onClick={e => this.props.updateThemeFont("rgb(102, 101, 95)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(69, 73, 85)" }}
            onClick={e => this.props.updateThemeFont("rgb(69, 73, 85)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(39, 77, 120)" }}
            onClick={e => this.props.updateThemeFont("rgb(39, 77, 120)")}></button>
        </ul>
      </div>
    )
  }

}

export default RightSidebar;
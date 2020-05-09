import React from "react";

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="right-sidebar">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(245, 243, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(245, 243, 233)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 236, 235)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(232, 236, 235)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(228, 228, 223)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(228, 228, 223)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(173,216,230)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(173,216,230)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(192,192,192)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(192,192,192)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(245, 243, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(245, 243, 233)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(245, 243, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(245, 243, 233)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(245, 243, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(245, 243, 233)")}></button>
        </ul>
      </div>
    )
  }

}

export default RightSidebar;
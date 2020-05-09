import React from "react";

class RightSidebar extends React.Component {

  render() {
    return (
      <div className="right-sidebar">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <li className="theme" style={{backgroundColor: "rgb(245, 243, 233)"}}></li>
        </ul>
      </div>
    )
  }

}

export default RightSidebar;
import React from "react";

const Header = (props) => {
  return (
    <div className="resume-header">
      <img className="logo" src="talent-spring-logo.png" alt="TS logo"/>
      <div className="resume-name">
        <h1 className="first-name">{props.state.firstName}</h1>
        <h1 className="last-name">{props.state.lastName}</h1>
        <h1 className="applicant-title">{props.state.title}</h1>
      </div>

      <div className="recruiting-experience-div" style={props.state.themeColor}>
        <div className="arrow-left" style={
          { borderTop: `60px solid ${props.state.themeColor.backgroundColor}`, borderBottom: `60px solid ${props.state.themeColor.backgroundColor}` }}></div>
        <div className="header-right-text">
          <div className="header-years">
            <h1 className="years"> {props.state.yearsExperience}</h1>
            <h1 className="years-inner">YEARS</h1>
          </div>
          <h1 className="recruiting-experience-1">recruiting</h1>
          <h1 className="recruiting-experience-2">experience</h1>
        </div>
        <div className="arrow-right" style={{ borderLeft: `40px solid ${props.state.themeColor.backgroundColor}` }}></div>
      </div>

    </div>
  )
}

export default Header;
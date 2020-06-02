import React from "react";

const CurrentPosition = (props) => {
  return (
    <div className="current-position-div">

      <h1 className="title">CURRENT POSITION</h1>

      <div className="current-position-header">

        <ul className="current-position-list">

          <h1 className="current-title">{props.state.currentTitle}</h1>
          <h1 className="current-company">{props.state.currentCompany}</h1>
          <h1 className="current-company-time">
            {props.state.currentPositionStartTime} - Present
          </h1>
        </ul>

      </div>

      <h1 className="current-position-description">{props.state.currentPositionParagraph}</h1>

    </div>
  )
};

export default CurrentPosition;
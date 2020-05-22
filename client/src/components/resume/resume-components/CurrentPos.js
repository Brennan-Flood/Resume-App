import React from "react";

const CurrentPosition = (props) => {
  return (
    <div className="current-position-div">

      <h1 className="title">CURRENT POSITION</h1>

      <div className="current-position-header">

        <div className="image-placeholder-outer" width="50px" height="50px" >
          <h1 className="image-placeholder-inner" width="48px" height="48px"> </h1>
        </div>

        <ul className="current-position-list">

          <h1 className="current-title">{props.state.currentTitle}</h1>
          <h1 className="current-company">{props.state.currentCompany}</h1>
          <h1 className="current-company-time">
            {props.state.currentPositionStartTime} - {props.state.currentPositionTime}
          </h1>
        </ul>

      </div>

      <h1 className="current-position-description">{props.state.currentPositionParagraph}</h1>

    </div>
  )
};

export default CurrentPosition;
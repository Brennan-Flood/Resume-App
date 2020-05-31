import React from "react";

const CurrentPosition = (props) => {
  return (
    <div className="current-position-div">

      <h1 className="title">CURRENT POSITION</h1>

      <div className="current-position-header">

        <img className="current-image" src={props.state.currentImage ? props.state.currentImage : "image-placeholder.jpg"} alt="profile" ></img>

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
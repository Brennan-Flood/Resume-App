import React from "react";

const CurrentPosEdit = (props) => {
  return (
    <div id="current-pos-edit" className="current-pos-edit edit-section hidden-section">

      <input
        className="left-input"
        type="text"
        placeholder="Current Title"
        onChange={props.update("currentTitle")}
      />

      <input
        className="left-input"
        type="text"
        placeholder="Current Company"
        onChange={props.update("currentCompany")}
      />

      <input
        className="left-input"
        type="number"
        placeholder="Starting Year"
        onChange={props.update("currentPositionStartTime")}
      />

      <input
        className="left-input"
        type="number"
        placeholder="Current Year"
        onChange={props.update("currentPositionTime")}
      />

      <textarea
        className="left-text"
        placeholder="Description"
        onChange={props.update("currentPositionParagraph")}
      />

    </div>
  )
};

export default CurrentPosEdit;
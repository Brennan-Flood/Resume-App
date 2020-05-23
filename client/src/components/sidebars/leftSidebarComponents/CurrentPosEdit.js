import React from "react";

const CurrentPosEdit = (props) => {
  return (
    <div id="current-pos-edit" className="current-pos-edit edit-section hidden-section">
      <input
        type="text"
        placeholder="Current Title"
        onChange={props.update("currentTitle")}
      />

      <input
        type="text"
        placeholder="Current Company"
        onChange={props.update("currentCompany")}
      />

      <input
        type="number"
        placeholder="Starting Year"
        onChange={props.update("currentPositionStartTime")}
      />

      <input
        type="number"
        placeholder="Current Year"
        onChange={props.update("currentPositionTime")}
      />

      <textarea
        placeholder="Description"
        onChange={props.update("currentPositionParagraph")}
      />

    </div>
  )
};

export default CurrentPosEdit;
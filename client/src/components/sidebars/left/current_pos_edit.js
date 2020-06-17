import React from "react";

const CurrentPosEdit = (props) => {
  return (
    <div id="current-pos-edit" className="current-pos-edit edit-section hidden-section">

      <input
        className="left-input"
        type="text"
        placeholder="Current Title"
        onChange={props.update("currentTitle")}
        value={props.state.currentTitle}
      />

      <input
        className="left-input"
        type="text"
        placeholder="Current Company"
        onChange={props.update("currentCompany")}
        value={props.state.currentCompany}

      />

      <input
        className="left-input"
        type="number"
        onChange={props.update("currentPositionStartTime")}
        // defaultValue={new Date().getFullYear()}
        value={props.state.currentPositionStartTime}

      />

      {/* <input
        className="left-input"
        type="number"
        placeholder="Current Year"
        onChange={props.update("currentPositionTime")}
      /> */}

      <textarea
        className="left-text"
        placeholder="Description"
        onChange={props.update("currentPositionParagraph")}
        value={props.state.currentPositionParagraph}

      />

    </div>
  )
};

export default CurrentPosEdit;
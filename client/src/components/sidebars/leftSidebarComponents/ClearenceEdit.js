import React from "react";

const ClearenceEdit = (props) => {
  return (
    <div id="clearence-edit" className="clearences hidden-section">
      <div className="clearence-div edit-section">
        <h1>Secret: {props.state.clearenceLevels.secret}%</h1>
        <input onChange={props.updateClearenceSlider("secret")}
          type="range"
          min="0"
          max="100"
          value={props.state.clearenceLevels.secret}
          className="slider"
          id="myRange"
        />
      </div>

      <div className="clearence-div">
        <h1>Top Secret: {props.state.clearenceLevels.topSecret}%</h1>
        <input onChange={props.updateClearenceSlider("topSecret")}
          type="range"
          min="0"
          max="100"
          value={props.state.clearenceLevels.topSecret}
          className="slider"
          id="myRange"
        />
      </div>

      <div className="clearence-div">
        <h1>TS/SCI: {props.state.clearenceLevels.TSSCI}%</h1>
        <input onChange={props.updateClearenceSlider("TSSCI")}
          type="range"
          min="0"
          max="100"
          value={props.state.clearenceLevels.TSSCI}
          className="slider"
          id="myRange"
        />
      </div>

      <div className="clearence-div">
        <h1>TS/SCI CI Polygraph: {props.state.clearenceLevels.TSSCICIPolygraph}%</h1>
        <input onChange={props.updateClearenceSlider("TSSCICIPolygraph")}
          type="range"
          min="0"
          max="100"
          value={props.state.clearenceLevels.TSSCICIPolygraph}
          className="slider"
          id="myRange"
        />
      </div>

      <div className="clearence-div">
        <h1>TS/SCI Full Scope Polygraph: {props.state.clearenceLevels.TSSCIFullScopePolygraph}%</h1>
        <input onChange={props.updateClearenceSlider("TSSCIFullScopePolygraph")}
          type="range"
          min="0"
          max="100"
          value={props.state.clearenceLevels.TSSCIFullScopePolygraph}
          className="slider"
          id="myRange"
        />
      </div>

    </div>
  )
}

export default ClearenceEdit;
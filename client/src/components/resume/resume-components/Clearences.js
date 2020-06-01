import React from "react";

const ClearenceLevels = (props) => {
  return (
    <div className="clearence-levels">
      <h1 className="title">CLEARENCE LEVELS</h1>
      <h1 className="clearence-type">Secret</h1>
      <div className="clearence-bar-outer">
        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.secret * 5}%`, paddingRight: `${props.state.clearenceLevels.secret > 0 ? 2 : 0}px` }}>
        </div>
      </div>

      <h1 className="clearence-type">Top Secret</h1>
      <div className="clearence-bar-outer">
        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.topSecret * 5}%`, paddingRight: `${props.state.clearenceLevels.topSecret > 0 ? 2 : 0}px` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI</h1>
      <div className="clearence-bar-outer">
        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCI * 5}%`, paddingRight: `${props.state.clearenceLevels.TSSCI > 0 ? 2 : 0}px` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI CI Polygraph</h1>
      <div className="clearence-bar-outer">
        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCICIPolygraph * 5}%`, paddingRight: `${props.state.clearenceLevels.TSSCICIPolygraph > 0 ? 2 : 0}px` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI Full Scope Polygraph</h1>
      <div className="clearence-bar-outer">
        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCIFullScopePolygraph * 5}%`, paddingRight: `${props.state.clearenceLevels.TSSCIFullScopePolygraph > 0 ? 2 : 0}px` }}>
        </div>
      </div>
    </div>
  )
};

export default ClearenceLevels;
import React from "react"

const ClearenceLevels = (props) => {
  return (
    <div className="clearence-levels">
      <h1 className="title">CLEARENCE LEVELS</h1>
      <h1 className="clearence-type">Secret</h1>
      <div className="clearence-bar-outer"
      >

        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.secret}%` }}>
        </div>
      </div>

      <h1 className="clearence-type">Top Secret</h1>
      <div className="clearence-bar-outer"
      >

        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.topSecret}%` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI</h1>
      <div className="clearence-bar-outer"
      >

        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCI}%` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI CI Polygraph</h1>
      <div className="clearence-bar-outer"
      >

        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCICIPolygraph}%` }}>
        </div>
      </div>

      <h1 className="clearence-type">TS/SCI Full Scope Polygraph</h1>
      <div className="clearence-bar-outer"
      >

        <div className="clearence-bar-inner"
          style={{ width: `${props.state.clearenceLevels.TSSCIFullScopePolygraph}%` }}>
        </div>
      </div>
    </div>
  )
};

export default ClearenceLevels;
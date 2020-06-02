import React from "react";
import { arc } from "d3-shape";

const Ats = (props) => {
  return (
    <div className="ats-div">
      <h1 className="title"> APPLICANT TRACKING SYSTEMS </h1>
      <div className="recruiting-toolkit-sliders ats">
        {Object.values(props.state.ats).map((e, i) => {
          return (
            <img alt="ATS" style={{ border: `2px solid ${props.state.themeColor.backgroundColor}` }} className="ats-image" crossOrigin="anonymous" src={e.url + "?" + new Date().getTime()} />
          )
        })}

      </div>
    </div>
  )
};

export default Ats;
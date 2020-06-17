import React from "react";

const Ats = (props) => {
  return (
    <div className="ats-div">
      <h1 className="title"> APPLICANT TRACKING SYSTEMS </h1>
      <div className="recruiting-toolkit-sliders ats">
        {Object.values(props.state.ats).map((e, i) => {
          return (
            <div key={i} className="ATS-container">
              <img alt="ATS" style={{ border: `2px solid ${props.state.themeColor.backgroundColor}` }} className="ats-image" crossOrigin="anonymous" src={e.url + "?" + new Date().getTime()} />
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Ats;
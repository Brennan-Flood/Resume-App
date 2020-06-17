import React from "react";
import { arc } from "d3-shape";

const Toolkit = (props) => {
  return (
    <div className="recruiting-toolkit-div">
      <h1 className="title"> RECRUITING TOOLKIT </h1>
      <div className="recruiting-toolkit-sliders">
        {Object.values(props.state.toolkit).map((e, i) => {
          const arcGenerator = arc()
            .innerRadius(23)
            .outerRadius(20)
            .startAngle(0)
            .endAngle((e.value / 20) * 6.3)
            .padAngle(0)
            .cornerRadius(0)

          const arcPath = arcGenerator()
          let k = i * 3
          return (
            <div key={k} className="arc-container">
              <svg 
                key={k + 1} width="46" height="46"
              >
               
                <path key={k + 2}
                  fill="rgb(0, 172, 105)"
                  d={arcPath}
                  style={{ transform: "translate(50%, 50%)" }}
                />
                
              </svg>
              <div style={{ border: `2px solid ${props.state.themeColor.backgroundColor}` }} className="arc-image-container">
              <img alt="Toolkit"  className="arc-image" crossOrigin="anonymous" src={e.url + "?" + new Date().getTime()} /> 
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Toolkit;
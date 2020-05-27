import React from "react";
import { arc } from "d3-shape";

const Toolkit = (props) => {
  return (
    <div className="recruiting-toolkit-div">
      <h1 className="title"> RECRUITING TOOLKIT </h1>
      <div className="recruiting-toolkit-sliders">
        {Object.values(props.state.toolkit).map((e, i) => {
          const arcGenerator = arc()
            .innerRadius(20)
            .outerRadius(16)
            .startAngle(0)
            .endAngle((e.value / 20) * 6.3)
            .padAngle(0)
            .cornerRadius(0)

          const arcPath = arcGenerator()
          let k = i * 3
          return (
            <div key={k} className="arc-container">
              <svg 
                key={k + 1} width="40" height="40"
              >
               
                <path key={k + 2}
                  fill="rgb(0, 167, 0)"
                  d={arcPath}
                  style={{ transform: "translate(50%, 50%)" }}
                />
                
              </svg>
              
              <img style={{border: `2px solid ${props.state.themeColor.backgroundColor}`}} className="arc-image" crossOrigin="anonymous" src={e.url + "?" + new Date().getTime()} /> 
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Toolkit;
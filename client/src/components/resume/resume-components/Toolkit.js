import React from "react";
import { arc } from "d3-shape";

const Toolkit = (props) => {
  return (
    <div className="recruiting-toolkit-div">
      <h1 className="title"> RECRUITING TOOLKIT </h1>
      <div className="recruiting-toolkit-sliders">
        {props.state.recruitingToolkit.map((e, i) => {
          const arcGenerator = arc()
            .innerRadius(20)
            .outerRadius(16)
            .startAngle(0)
            .endAngle((e[1].value / 100) * 6.3)
            .padAngle(0)
            .cornerRadius(0)

          const arcPath = arcGenerator()
          const k = i * 2
          return (
            <div className="arc-container">
              <svg key={k} width="40" height="40"
              >
                <path
                  fill="rgb(0, 167, 0)"
                  d={arcPath}
                  style={{ transform: "translate(50%, 50%)" }}
                />
              </svg>
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default Toolkit;
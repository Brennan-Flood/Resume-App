import React from "react";

const Education = (props) => {
  return (
    <div className="education-and-employment-div">
      <h1 className="title">{"EDUCATION & EMPLOYMENT HISTORY"}</h1>
      <div className="experience-timeline">
        {props.state.educationAndEmployment.map((e, i) => {
          let k = i * 3;
          return (
            <div className="experience-node" key={i}>
              <img className="edu-image" src={(e[1] && e[1].image) ? e[1].image : "image-placeholder.jpg"} alt="edu-photo" ></img>
              <h1 className="experience-title" style={{ height: "14px" }} key={k + 1}>{e[1].title}</h1>
              <h1 className="experience-loc" style={{ height: "14px" }} key={k + 2}>{e[1].entity}</h1>
              <div className="experience-tag" style={props.state.backgroundColor}></div>
              <h1 className="experience-years" key={k + 3}>{e[1].startTime}-{e[1].endTime}</h1>

            </div>)
        })}
      </div>
      <div className="experience-bar"></div>

    </div>
  )
}

export default Education;
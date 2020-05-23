import React from "react";

const EduEdit = (props) => {
  let eduInputs = new Array(props.state.educationInputs).fill(0);

  return (
    <div id="edu-edit" className="education-field hidden-section">
      <button className="add-field-button" onClick={() => props.addMultiField("edu")}>ADD</button>
      <button className="remove-field-button" onClick={() => props.removeMultiField("edu")}>REMOVE</button>
      {eduInputs.map((e, i) => {
        let k = i * 5;
        return (
          <div key={k} className="education-cluster">
            <h1 className="education-index">Experience #{i + 1}</h1>
            <input
              type="text"
              id={k + 1}
              key={k + 1}
              className="education-input"
              placeholder="Study or Title"
              onChange={props.updateMultiField("edu", i + 1, "title")}
            />
            <input
              type="text"
              id={k + 2}
              key={k + 2}
              className="education-input"
              placeholder="School or Company"
              onChange={props.updateMultiField("edu", i + 1, "entity")}
            />
            <input
              type="text"
              id={k + 3}
              key={k + 3}
              className="education-input"
              placeholder="Starting Year"
              onChange={props.updateMultiField("edu", i + 1, "startTime")}
            />
            <input
              type="text"
              id={k + 4}
              key={k + 4}
              className="education-input"
              placeholder="Ending Year"
              onChange={props.updateMultiField("edu", i + 1, "endTime")}
            />
          </div>
        )
      })}
    </div>
  )
};

export default EduEdit;
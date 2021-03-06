import React from "react";

const EduEdit = (props) => {
  const eduInputs = Object.values(props.state.educationAndEmployment)
  return (
    <div id="edu-edit" className="education-field edit-section hidden-section">
      <div className="edit-buttons">
      <button className="add-field-button" onClick={() => props.addMultiField("edu")}><i className="fas fa-plus"></i></button>
      <button className="remove-field-button" onClick={() => props.removeMultiField("edu")}><i className="fas fa-minus"></i></button>
      </div>
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
              value={props.state.educationAndEmployment[i][1].title}            />
            <input
              type="text"
              id={k + 2}
              key={k + 2}
              className="education-input"
              placeholder="School or Company"
              onChange={props.updateMultiField("edu", i + 1, "entity")}
              value={props.state.educationAndEmployment[i][1].entity}            />
            <input
              type="text"
              id={k + 3}
              key={k + 3}
              className="education-input"
              placeholder="Starting Year"
              onChange={props.updateMultiField("edu", i + 1, "startTime")}
              value={props.state.educationAndEmployment[i][1].startTime}
            />
            <input
              type="text"
              id={k + 4}
              key={k + 4}
              className="education-input"
              placeholder="Ending Year"
              onChange={props.updateMultiField("edu", i + 1, "endTime")}
              value={props.state.educationAndEmployment[i][1].endTime}
            />
          </div>
        )
      })}
    </div>
  )
};

export default EduEdit;
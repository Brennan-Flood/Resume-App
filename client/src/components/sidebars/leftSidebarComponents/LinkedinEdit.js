import React from "react";

const LinkedinEdit = (props) => {
  let linkedinInputs = new Array(props.state.linkedinInputs).fill(0);

  return (
    <div id="linkedin-edit" className="last-left-div edit-section hidden-section">

      <button className="add-field-button" onClick={() => props.addMultiField("linkedin")}>ADD</button>
      <button className="remove-field-button" onClick={() => props.removeMultiField("linkedin")}>REMOVE</button>
      {linkedinInputs.map((e, i) => {
        let k = i * 3
        return (
          <div key={k} className="linkedin-cluster">
            <textarea key={k + 1} id={i} className="linkedin-textarea" placeholder="Author Info" onChange={props.updateMultiField("linkedin", i + 1, "author")} />
            <textarea key={k + 2} id={i} className="linkedin-textarea" placeholder="Review" onChange={props.updateMultiField("linkedin", i + 1, "body")} />
          </div>
        )
      })}

    </div>
  )
};

export default LinkedinEdit;
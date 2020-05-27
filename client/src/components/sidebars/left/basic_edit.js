import React from "react";

const BasicInfoEdit = (props) => {
  return (
    <div id="basic" className="edit-section hidden-section">
      <input
        className="left-input"
        type="text"
        placeholder="First Name"
        onChange={props.update("firstName")}
      />

      <input
        className="left-input"
        type="text"
        placeholder="Last Name"
        onChange={props.update("lastName")}
      />

      <input
        className="left-input"
        type="text"
        placeholder="Title"
        onChange={props.update("title")}
      />

      <input
        className="left-input"
        type="number"
        placeholder="Years of Experience"
        onChange={props.update("yearsExperience")}
      />
    </div>
  )
};

export default BasicInfoEdit;
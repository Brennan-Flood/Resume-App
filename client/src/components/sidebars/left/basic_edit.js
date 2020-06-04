import React from "react";

const BasicInfoEdit = (props) => {
  return (
    <div id="basic" className="edit-section hidden-section">
      <input
        className="left-input"
        type="text"
        placeholder="First Name"
        onChange={props.update("firstName")}
        value={props.state.firstName}
      />

      <input
        className="left-input"
        type="text"
        placeholder="Last Name"
        onChange={props.update("lastName")}
        value={props.state.lastName}

      />

      <input
        className="left-input"
        type="text"
        placeholder="Title"
        onChange={props.update("title")}
        value={props.state.title}
      />

      <input
        className="left-input"
        type="number"
        placeholder="Years of Experience"
        onChange={props.update("yearsExperience")}
        value={props.state.yearsExperience}
      />
    </div>
  )
};

export default BasicInfoEdit;
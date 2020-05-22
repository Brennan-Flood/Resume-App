import React from "react";

const Hobbies = (props) => {
  return (
    <div className="hobbies-and-interests">
      <h1 className="title">{"HOBBIES & INTERESTS"}</h1>
      <div className="hobbies-images">
        {Object.values(props.state.hobbies).map((url, i) => {
          return (
            <img key={i} className="hobbies-image" src={url} alt="hobby" />
          )
        })}
      </div>
    </div>
  )
};

export default Hobbies;
import React from "react";

const Hobbies = (props) => {

  return (
    <div className="hobbies-and-interests">
      <h1 className="title">{"HOBBIES & INTERESTS"}</h1>
      <div className="hobbies-images">
        {Object.values(props.state.hobbies).map((url, i) => {
          console.log(url)
          return (
            <img key={i} crossOrigin="anonymous" className="hobbies-image" src={url + "?" + new Date().getTime() } alt="hobby" />
          )
        })}
      </div>
    </div>
  )
};

export default Hobbies;
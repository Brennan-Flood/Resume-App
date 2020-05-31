import React from "react";
import ImageCategory from "./image_category";

const ATS = (props) => {

  let atsIds = Object.keys(props.state.ats);
  let ats = props.state.ats;
  return (
    <div id="ats-edit" className="recruiting-toolkit-left-sidebar edit-section hidden-section">
      <ImageCategory
        addImageToField={props.addImageToField}
        removeImageFromField={props.removeImageFromField}
        field={"ats"}
        state={props.state}
        imageCategoryId={"5ed0a46462348f113e475199"}
        toggleModal={props.toggleModal}
      />
      {atsIds.map((id, i) => {
        let k = i * 3
        return (
          <div className="toolkit-node" key={id}>
            <img alt="ats" className="toolkit-image" src={ats[id].url}></img>
            <input
              key={k + 2}
              onChange={(e) => props.updateAts(e, id)}
              type="range"
              min="0"
              max="20"
              value={ats[id].value}
              className="slider"
              id="myRange"
            />
          </div>
        )
      })}

    </div>
  )
};

export default ATS;
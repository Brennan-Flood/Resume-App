import React from "react";
import ImageCategory from "./image_category";

const ToolkitEdit = (props) => {
  
  let toolkitIds = Object.keys(props.state.toolkit);
  let toolkit = props.state.toolkit;
  return (
    <div id="toolkit-edit" className="recruiting-toolkit-left-sidebar edit-section hidden-section">
      <ImageCategory 
        addImageToField={props.addImageToField}
        removeImageFromField={props.removeImageFromField}
        field={"toolkit"}
        state={props.state}
        imageCategoryId={props.imageCategoryId} 
        toggleModal={props.toggleModal}
      />
      {toolkitIds.map((id, i) => {
        let k = i * 3
        return (
          <div className="toolkit-node" key={id}>
            <div className="toolkit-info">
              <img alt="toolkit" className="toolkit-image" src={toolkit[id].url}></img>
              <h1>{toolkit[id].value * 5}%</h1>
            </div>
            <input
              key={k + 2}
              onChange={(e) => props.updateToolkit(e, id)}
              type="range"
              min="0"
              max="20"
              value={toolkit[id].value}
              className="slider"
              id="myRange"
            />
          </div>
        )
      })}

    </div>
  )
};

export default ToolkitEdit;
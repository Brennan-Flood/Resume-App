import React from "react";

const ToolkitEdit = (props) => {
  let recruitingToolkitSliders = new Array(props.state.recruitingToolkitSliders).fill(0);

  return (
    <div id="toolkit-edit" className="recruiting-toolkit-left-sidebar hidden-section">
      <button className="add-field-button" onClick={() => props.addMultiField("recruitingToolkit")}>ADD</button>
      <button className="remove-field-button" onClick={() => props.removeMultiField("recruitingToolkit")}>REMOVE</button>
      {recruitingToolkitSliders.map((e, i) => {
        let k = i * 3
        return (
          <div className="toolkit-node" key={k}>
            <input
              key={k + 1}
              onChange={props.updateMultiField("recruitingToolkit", i + 1, "name")}
              type="text"
              placeholder="Recruiting Tool"
            />
            <input
              key={k + 2}
              onChange={props.updateMultiField("recruitingToolkit", i + 1, "value")}
              type="range"
              min="0"
              max="20"
              value={props.state.recruitingToolkit.linkedIn}
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
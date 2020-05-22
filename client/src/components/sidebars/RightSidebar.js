import React from "react";
import axios from "axios";

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
    this.parseData = this.parseData.bind(this);
  }

  parseData(data) {
    let str = data.reduce(function (a, b) { return a + String.fromCharCode(b) }, '');
    return btoa(str).replace(/.{76}(?=.)/g, '$&\n');
  }

  getImage() {
    axios.get(`http://localhost:5000/image`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      console.log(response);
      this.props.saveImageString(this.parseData(response.data))
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="right-sidebar">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(229, 229, 229)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(232, 235, 238)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 245)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 233)")}></button>
        </ul>
      <button onClick={this.getImage}>Image Get Test</button>
      </div>
    )
  }

}

export default RightSidebar;
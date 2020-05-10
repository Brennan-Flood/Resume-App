import React from "react";

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.state;

    this.drawRecruitingCanvas = this.drawRecruitingCanvas.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.drawRecruitingCanvas();

      this.setState(this.props.state);
    }
  }

  drawRecruitingCanvas() {
    const c = document.querySelector("#recruiting-canvas");
    const ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
  }

  render() {
    return (
      <div id="capture" className="resume" style={this.props.state.themeColor}>
        <div className="resume-header">

          <div>
            <h1 className="first-name">{this.props.state.firstName}</h1>
            <h1 className="last-name">{this.props.state.lastName}</h1>
          </div>

          <div className="recruiting-experience-div">
            <h1 className="years"> {this.props.state.yearsExperience} YEARS </h1>
            <h1 className="recruiting-experience">recruiting experience</h1>
          </div>

        </div>
        <div className="resume-row-1">

          <div className="current-position-div">

            <h1 className="current-position-title">CURRENT POSITION</h1>

            <div className="current-position-header">

              <ul className="current-position-list">
                <h1 className="current-title">{this.props.state.currentTitle}</h1>
                <h1 className="current-company">{this.props.state.currentCompany}</h1>
                <h1 className="current-company-time"> 
                  {this.props.state.currentPositionStartTime} - {this.props.state.currentPositionTime}
                </h1>
              </ul>

            </div>

            <h1 className="current-position-description">{this.props.state.currentPositionParagraph}</h1>

          </div>

          <div className="recruiting-toolkit-div">
            <h1 className="title"> RECRUITING TOOLKIT </h1>
            <canvas id="recruiting-canvas">

            </canvas>
          </div>

          <div className="recent-searches-div">
            <h1 className="title"> RECENT SEARCHES</h1>
            <h1 className="recent-searches"> {this.props.state.recentSearches}</h1>
            <h1 className="title">{"HOBBIES & INTERESTS"}</h1>
          </div>

          

        </div>

        <div className="education-and-employment-div">
          <h1 className="title">{"EDUCATION & EMPLOYMENT HISTORY"}</h1>
          <div className="experience-timeline">
          {this.props.state.educationAndEmployment.map((e, i) => {
            let k = i * 3;
            return (<div className="experience-node" key={i}>
              <h1 key={k + 1}>{e[1].title}</h1>
              <h1 key={k + 2}>{e[1].entity}</h1>
              <h1 key={k + 3}>{e[1].startTime} - {e[1].endTime}</h1>
              
            </div>)
          })}
          </div>
        </div>
        <div className="resume-last-row">
          <div className="agencies-and-clearences">
            <div className="resume-federal-agencies">
              <h1 className="title">FEDERAL AGENCIES</h1>
            </div>
            <div className="clearence-levels">
              <h1 className="title">CLEARENCE LEVELS</h1>
                <h1>Secret</h1>
                <div className="clearence-bar-outer"
                style={{width: "100px"}}>

                  <div className="clearence-bar-inner"
                  style={{width: `${this.props.state.clearenceLevels.secret}%`}}>
                  </div>
                </div>

                <h1>Top Secret</h1>
                <div className="clearence-bar-outer"
                  style={{ width: "100px" }}>

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.topSecret}%` }}>
                  </div>
                </div>

                <h1>TS/SCI</h1>
                <div className="clearence-bar-outer"
                  style={{ width: "100px" }}>

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.TSSCI}%` }}>
                  </div>
                </div>

                <h1>TS/SCI CI Polygraph</h1>
                <div className="clearence-bar-outer"
                  style={{ width: "100px" }}>

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.TSSCICIPolygraph}%` }}>
                  </div>
                </div>

                <h1>TS/SCI Full Scope Polygraph</h1>
                <div className="clearence-bar-outer"
                  style={{ width: "100px" }}>

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.TSSCIFullScopePolygraph}%` }}>
                  </div>
                </div>
            </div>
          </div>

          <div className="linkedin-review-div">
            <h1 className="title">LINKEDIN REVIEWS</h1>
            {
              this.props.state.linkedinReviews.map((e, i) => {
                let k = i * 3
                return (
                  <div key={k}>
                    <h1 key={k + 1}>{e[1].author}</h1>
                    <p key={k + 2}>{e[1].body}</p>
                  </div>
                )
              })
            }
          </div>
      </div> 
       
      </div>
    )
  }

}

export default Resume;
import React from "react";
import { arc } from "d3-shape";

class Resume extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.state;
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) {
      this.setState(this.props.state);
    }
  }

  render() {
    const arcGenerator = arc()
      .innerRadius(25)
      .outerRadius(20)
      .startAngle(0)
      .endAngle((this.props.state.recruitingToolkit.linkedIn/100)*6.3)
      .padAngle(0)
      .cornerRadius(0)

    const arcPath = arcGenerator()

    return (
      <div id="capture" className="resume" style={this.props.state.themeColor}>
        <div className="resume-header">

          <div className="resume-name">
            <h1 className="first-name">{this.props.state.firstName}</h1>
            <h1 className="last-name">{this.props.state.lastName}</h1>
            <h1 className="applicant-title">{this.props.state.title}</h1>
          </div>

          <div className="recruiting-experience-div">
            <div className="header-years">
              <h1 className="years"> {this.props.state.yearsExperience}</h1>
              <h1 className="years-inner">YEARS</h1>
            </div>
            <h1 className="recruiting-experience">recruiting</h1>
            <h1 className="recruiting-experience">experience</h1>

          </div>

        </div>
        <div className="resume-row-1">

          <div className="current-position-div">

            <h1 className="title">CURRENT POSITION</h1>

            <div className="current-position-header">
              
              <div className="image-placeholder-outer" width="50px" height="50px" >
                <h1 className="image-placeholder-inner" width="48px" height="48px"> </h1>
              </div>

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

            <svg width="50" height="50" 
            >
              <path
                fill="rgb(0, 167, 0)"
                d={arcPath}
                style={{transform: "translate(50%, 50%)"}}
              />
            </svg>

          </div>

          <div className="recent-searches-div">
            <h1 className="title"> RECENT SEARCHES</h1>
            <h1 className="recent-searches"> {this.props.state.recentSearches}</h1>
            <h1 className="title">{"HOBBIES & INTERESTS"}</h1>
            <div className="hobbies-and-interests">
              <div className="image-placeholder-outer-2" width="50px" height="50px" >
                <h1 className="image-placeholder-inner-2" width="48px" height="48px"> </h1>
              </div>
              <div className="image-placeholder-outer-2" width="50px" height="50px" >
                <h1 className="image-placeholder-inner-2" width="48px" height="48px"> </h1>
              </div>
            </div>

          </div>

          

        </div>

        <div className="education-and-employment-div">
          <h1 className="title">{"EDUCATION & EMPLOYMENT HISTORY"}</h1>
          <div className="experience-timeline">
          {this.props.state.educationAndEmployment.map((e, i) => {
            let k = i * 3;
            return (
            <div className="experience-node" key={i}>
              <div className="image-placeholder-outer-3">
                <h1 className="image-placeholder-inner-3"> </h1>
              </div>
              <h1 style={{height: "14px"}} key={k + 1}>{e[1].title}</h1>
              <h1 style={{ height: "14px" }} key={k + 2}>{e[1].entity}</h1>
              <div className="experience-tag" style={this.props.state.backgroundColor}></div>
              <h1 className="experience-years" key={k + 3}>{e[1].startTime}-{e[1].endTime}</h1>
              
            </div>)
          })}
          </div>
          <div className="experience-bar"></div>

        </div>
        <div className="resume-last-row">
          <div className="agencies-and-clearences">
            <div className="resume-federal-agencies">
              <h1 className="title">FEDERAL AGENCIES</h1>

              <div className="hobbies-and-interests">
                <div className="image-placeholder-outer-2" width="50px" height="50px" >
                  <h1 className="image-placeholder-inner-2" width="48px" height="48px"> </h1>
                </div>
                <div className="image-placeholder-outer-2" width="50px" height="50px" >
                  <h1 className="image-placeholder-inner-2" width="48px" height="48px"> </h1>
                </div>
              </div>
            </div>
            <div className="clearence-levels">
              <h1 className="title">CLEARENCE LEVELS</h1>
                <h1 className="clearence-type">Secret</h1>
                <div className="clearence-bar-outer"
                >

                  <div className="clearence-bar-inner"
                  style={{width: `${this.props.state.clearenceLevels.secret}%`}}>
                  </div>
                </div>

              <h1 className="clearence-type">Top Secret</h1>
                <div className="clearence-bar-outer"
                >

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.topSecret}%` }}>
                  </div>
                </div>

              <h1 className="clearence-type">TS/SCI</h1>
                <div className="clearence-bar-outer"
                >

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.TSSCI}%` }}>
                  </div>
                </div>

              <h1 className="clearence-type">TS/SCI CI Polygraph</h1>
                <div className="clearence-bar-outer"
                >

                  <div className="clearence-bar-inner"
                    style={{ width: `${this.props.state.clearenceLevels.TSSCICIPolygraph}%` }}>
                  </div>
                </div>

              <h1 className="clearence-type">TS/SCI Full Scope Polygraph</h1>
                <div className="clearence-bar-outer"
                >

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
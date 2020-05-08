import React from "react";

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
    return (
      <div id="capture" className="resume">
        <div className="resume-header">

          <div>
            <h1 className="name"> {this.props.state.firstName} </h1>
            <h1 className="name"> {this.props.state.lastName} </h1>
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
            <h1 className="recruiting-toolkit-title"> RECRUITING TOOLKIT </h1>
          </div>

          <div className="recent-searches-div">
            <h1 className="recent-searches-header"> RECENT SEARCHES</h1>
            <h1 className="recent-searches"> {this.props.state.recentSearches}</h1>
            <h1 className="hobbies-header">{"HOBBIES & INTERESTS"}</h1>
          </div>

          

        </div>

        <div className="education-and-employment-div">
          <h1>{"EDUCATION & EMPLOYMENT HISTORY"}</h1>
          {this.props.state.educationAndEmployment.map((e) => {
            return (<div>
              <h1>{e[1].title}</h1>
              <h1>{e[1].entity}</h1>
              <h1>{e[1].startTime} - {e[1].endTime}</h1>
              
            </div>)
          })}
        </div>

        <div className="linkedin-review-div">
          <h1>LINKEDIN REVIEWS</h1>
          {
            this.props.state.linkedinReviews.map((e, i) => {
              return (
                <div>
                  <h1>{e[1].author}</h1>
                  <p>{e[1].body}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

export default Resume;
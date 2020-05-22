import React from "react";
import ClearenceLevels from "./resume-components/Clearences";
import Header from "./resume-components/Header";
import Hobbies from "./resume-components/Hobbies";
import Searches from "./resume-components/RecentSearches";
import Toolkit from "./resume-components/Toolkit";
import CurrentPosition from "./resume-components/CurrentPos";
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
      <div ref={this.props.resumeRef} id="capture" className="resume" style={this.props.state.themeColor}>
        
        <Header state={this.props.state}/> 
        <div className="resume-row-1">

          <CurrentPosition state={this.props.state}/>

          <Toolkit state={this.props.state}/>

          <div className="recent-searches-div">
            
            <Searches state={this.props.state}/>
            <Hobbies state={this.props.state}/>

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
              <div className="agencies-images">
              {Object.values(this.props.state.federalAgencies).map((url, i) => {
                return(
                  <img key={i} className="federal-agency-icon" src={url} alt="federal-agency"/>
                )
              })}
              </div>
            </div>

              <ClearenceLevels state={this.props.state}/> 
  
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
import React from "react";
import ClearenceLevels from "./resume-components/Clearences";
import Header from "./resume-components/Header";
import Hobbies from "./resume-components/Hobbies";
import Searches from "./resume-components/RecentSearches";
import Toolkit from "./resume-components/Toolkit";
import CurrentPosition from "./resume-components/CurrentPos";
import Education from "./resume-components/Education";

class Resume extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = this.props.state;
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

        <Education state={this.props.state}/>
        
        <div className="resume-last-row">

          <div className="agencies-and-clearences">

            <div className="resume-federal-agencies">
              <h1 className="title">FEDERAL AGENCIES</h1>
              <div className="agencies-images">
              {Object.values(this.props.state.federalAgencies).map((url, i) => {
                return(
                  <img key={i} crossOrigin="anonymous" className="federal-agency-icon" src={url + "?" + new Date().getTime() } alt="federal-agency"/>
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
                  <div className="linkedin-resume" key={k}>
                    <h1 key={k + 1}>{e[1].author.toUpperCase()}</h1>
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
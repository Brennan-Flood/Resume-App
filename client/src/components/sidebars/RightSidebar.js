import React from "react";
import { Mutation } from "react-apollo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mutations from "../../graphql/mutations";

const { ADD_RECENT_DRAFT } = Mutations;

class RightSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.alertDraftSelection = this.alertDraftSelection.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  alertDraftSelection(state, addRecentDraft, draftName) {
    let currentStateString = JSON.stringify(this.props.state);
    let currentYear = new Date().getFullYear();
    let freshState = {
      firstName: "",
      lastName: "",
      title: "",
      yearsExperience: "",
      currentImage: "",
      currentTitle: "",
      currentCompany: "",
      currentPositionStartTime: currentYear,
      currentPositionTime: "",
      currentPositionParagraph: "",
      recentSearches: "",
      educationAndEmployment: [[1, { title: "", entity: "", startTime: "", endTime: "", image: "" }]],
      clearenceLevels: { secret: 10, topSecret: 10, TSSCI: 10, TSSCICIPolygraph: 10, TSSCIFullScopePolygraph: 10 },
      linkedinReviews: [[1, { author: "", body: "" }]],
      themeColor: { backgroundColor: "rgb(229, 229, 229)", color: "black" },
      federalAgencies: {},
      hobbies: {},
      image: "",
      toolkit: {},
      ats: {},
      federalExperience: true,
    };
    if (currentStateString === state) {
      toast("You are already viewing this draft", {type: "success"})
      return;
    }

    if (JSON.stringify(freshState) === currentStateString ) { 
      this.props.selectRecentDraft(state);
    } else if ( window.confirm("Save your progress to recent drafts?")) {
      addRecentDraft({
        variables: {
          id: this.props.currentUserId,
          state: currentStateString
        }
      }).then(() => {
        this.props.selectRecentDraft(state);
        toast(`Successfully saved your current progress and loaded ${draftName}!`, {type: "success"})
      });
    } else {
        if (window.confirm(`Would you like to proceed to your recent draft titled ${draftName} without saving? \n\nAll current progress will be lost...`)) {
        this.props.selectRecentDraft(state);
        toast(`Successfully loaded ${draftName}!`, {type: "success"})
      } else {
        return;
      }
    }
  }

  parseDate(dateString) {
    let dateInt = parseInt(dateString);
    let date = new Date(dateInt);
    return "Saved on " + date.getMonth() + "/" + date.getDate() + "/" +  date.getFullYear() + " at " + date.getHours() + ":" + date.getMinutes()
  }

  render() {
    return (
      <div className="right-sidebar col-sm-8">
        <ToastContainer />

        <h1 className="sidebar-header">THEMES</h1>

        <h1 className="sidebar-section-header">Background Color</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateThemeBackground("rgb(229, 229, 229)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateThemeBackground("rgb(232, 235, 238)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateThemeBackground("rgb(243, 240, 245)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateThemeBackground("rgb(243, 240, 233)")}></button>
        </ul>

        <h1 className="sidebar-section-header"> Font Color </h1>
        <ul className="theme-list">
          <button className="theme"
            style={{ backgroundColor: "black" }}
            onClick={e => this.props.updateThemeFont("black")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(0, 33, 105)" }}
            onClick={e => this.props.updateThemeFont("rgb(0, 33, 105)")}></button>
        </ul>

        <h1 className="sidebar-section-header">Recent Drafts</h1>
        <Mutation mutation={ADD_RECENT_DRAFT} update={(cache, data) => {this.props.updateRecentDrafts(cache, data)}}>
        {addRecentDraft => {
          return (
            <ul className="select-draft-list">
              {this.props.user.recentDrafts && this.props.user.recentDrafts.map((draft, i) => {
                if (draft) {
                  let draftState = JSON.parse(draft.state);
                  let draftName = draftState.firstName.toLowerCase() + "_" + draftState.lastName.toLowerCase() + "_resume";
                  return (
                    <button 
                    key={i}
                    className="select-draft-button"
                    onClick={() => this.alertDraftSelection(draft.state, addRecentDraft, draftName)}
                    >
                      <h1 className="draft-name">
                        {draftName}
                      </h1>
                      <h1 className="draft-date">
                        {this.parseDate(draft.date)}
                      </h1>
                    </button>
                  )
                } else {
                  return null;
                }
              })}
            </ul>
          )
        }}
        </Mutation>
      </div>
    )
  }

}

export default RightSidebar;
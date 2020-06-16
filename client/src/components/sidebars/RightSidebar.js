import React from "react";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";

const { ADD_RECENT_DRAFT } = Mutations;

class RightSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.alertDraftSelection = this.alertDraftSelection.bind(this);
  }

  alertDraftSelection(state, addRecentDraft) {
    let currentStateString = JSON.stringify(this.props.state);

    if (currentStateString === state) {
      return;
    }

    if (window.confirm("Save your current progress to your recent drafts?")) {
      addRecentDraft({
        variables: {
          id: this.props.currentUserId,
          state: currentStateString
        }
      }).then(() => {
        this.props.selectRecentDraft(state);
      })
    } else {
      this.props.selectRecentDraft(state);
    }
  }

  render() {
    // <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } } />
    // this.props.selectRecentDraft(draft.state)} className="recent-draft-button"
    return (
      <div className="right-sidebar col-sm-8">
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
            style={{ backgroundColor: "rgb(102, 101, 95)" }}
            onClick={e => this.props.updateThemeFont("rgb(102, 101, 95)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(69, 73, 85)" }}
            onClick={e => this.props.updateThemeFont("rgb(69, 73, 85)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(39, 77, 120)" }}
            onClick={e => this.props.updateThemeFont("rgb(39, 77, 120)")}></button>
        </ul>

        <h1 className="sidebar-section-header">Recent Drafts</h1>
        <Mutation mutation={ADD_RECENT_DRAFT}>
        {addRecentDraft => {
          return (
            <ul>
              {this.props.user.recentDrafts && this.props.user.recentDrafts.map((draft) => {
                if (draft) {
                  let draftState = JSON.parse(draft.state);
                  let draftName = draftState.firstName.toLowerCase() + "_" + draftState.lastName.toLowerCase() + "_resume"
                  return (
                    <button 
                    className="select-draft-button"
                    onClick={() => this.alertDraftSelection(draft.state, addRecentDraft)}
                    >
                      {draftName}
                    </button>
                  )
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
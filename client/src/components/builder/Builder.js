import React from "react";
import LeftSidebar from "../sidebars/LeftSidebar";
import RightSidebar from "../sidebars/RightSidebar";
import ResumeContainer from "../resume/ResumeContainer";
import { Mutation } from "react-apollo";
import Mutations from "../../graphql/mutations";

const { UPDATE_DRAFT } = Mutations;

class Builder extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(props.draft.state);

    this.update = this.update.bind(this);
    this.updateMultiField = this.updateMultiField.bind(this);
    this.updateThemeBackground = this.updateThemeBackground.bind(this);
    this.updateClearenceLevel = this.updateClearenceLevel.bind(this);
    this.addImageToField = this.addImageToField.bind(this);
    this.removeImageFromField = this.removeImageFromField.bind(this);
    this.saveImageString = this.saveImageString.bind(this);
    this.updateToolkit = this.updateToolkit.bind(this);
    this.toggleFederalExperience = this.toggleFederalExperience.bind(this);
    // this.updateAts = this.updateAts.bind(this);
    this.updateThemeFont = this.updateThemeFont.bind(this);
    this.resetDraft = this.resetDraft.bind(this);
    this.selectRecentDraft = this.selectRecentDraft.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.props.draft.state !== JSON.stringify(this.state)) {
        console.log("update running...")
        this.props.updateDraft({
          variables: {id: this.props.draftId, state: JSON.stringify(this.state)}
        })
      }
    }, 10000)
  }

  resetDraft() {
    let freshState = {
      firstName: "",
      lastName: "",
      title: "",
      yearsExperience: "",
      currentImage: "",
      currentTitle: "",
      currentCompany: "",
      currentPositionStartTime: 2020,
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
    this.setState(freshState);
    this.props.updateDraft({
      variables: {
        id: this.props.draftId,
        state: JSON.stringify(freshState)
      }
    })
    
  }

  toggleFederalExperience() {
    let clearence = document.getElementById("clearence-edit");
    // let ats = document.getElementById("ats");
      if (!clearence.classList.contains("hidden-section")) {
      clearence.classList.toggle("hidden-section"); 
      }
      // if (!ats.classList.contains("hidden-section")) {
      // ats.classList.toggle("hidden-section");
      // }
    this.setState({federalExperience: !this.state.federalExperience});
  }

  saveImageString(string) {
    this.setState({image: string});
  }

  addImageToField(field, url, id) {
    let currentFieldState = this.state[field];
    if (field !== "toolkit" && field !== "ats") {
      currentFieldState[id] = url;
      this.setState({ [field]: currentFieldState })
    } else {
      currentFieldState[id] = {url: url, value: 10}
      this.setState({ [field]: currentFieldState});
    }

  }

  updateToolkit(e, id) {
    let currentToolkit = this.state.toolkit;
    let currentNode = currentToolkit[id];
    currentNode.value = e.target.value;
    currentToolkit[id] = currentNode;
    this.setState({toolkit: currentToolkit})
  }

  selectRecentDraft(stateString) {
    this.setState(JSON.parse(stateString));
  }

  removeImageFromField(field, id) {
    let currentFieldState = this.state[field];
    delete currentFieldState[id]
    this.setState({ [field]: currentFieldState})
  }

  update(field, value) {
    this.setState({ [field]: value })
  }

  updateMultiField(metaField, inputs, index="", field="", value="") {
    const newArr = [];
    let currentField;
    let pushObject;
    let key;
    let i;

    if (metaField === "edu") {
      currentField = this.state.educationAndEmployment;
      pushObject = { title: "", entity: "", startTime: "", endTime: "", image: "" };
      key = "educationAndEmployment";
      i = currentField.length;
    } else if (metaField === "linkedin" ) {
      currentField = this.state.linkedinReviews;
      pushObject = { author: "", body: "" };
      key = "linkedinReviews";
      i = currentField.length;
    } else if (metaField === "recruitingToolkit") {
      currentField = this.state.recruitingToolkit;
      pushObject = { name: "", value: 50};
      key = "recruitingToolkit";
      i = currentField.length
    } 

    let newField = newArr.concat(currentField);

    if (inputs > newField.length) {
      while (inputs !== newField.length) {
        i += 1
        newField.push([i, pushObject]);
      }
    } else if (inputs < newField.length) {
      while (inputs !== newField.length) {
        newField = newField.slice(0, newField.length - 1);
      }
    }
    if (currentField) {
      newField.forEach(arr => {
        if (arr[0] === index) {
          arr[1][field] = value;
        }
      });

      if (key === "educationAndEmployment") {
        this.setState({ educationAndEmployment: newField })
      } else if (key === "linkedinReviews") {
        this.setState({ linkedinReviews: newField })
      } else if (key === "recruitingToolkit") {
        this.setState({recruitingToolkit: newField})
      } 
    }
  }

  updateThemeBackground(backgroundColor) {
    this.setState({ themeColor: { backgroundColor: backgroundColor, color: this.state.themeColor.color } });
  }

  updateThemeFont(fontColor) {
    this.setState({ themeColor: {backgroundColor: this.state.themeColor.backgroundColor, color: fontColor} });
  }

  updateClearenceLevel(field, value) {
    const currentClearenceLevels = this.state.clearenceLevels;
    currentClearenceLevels[field] = value;
    this.setState({clearenceLevels: currentClearenceLevels});
  }

  render() {
    console.log("Builder User ID:", this.props.currentUserId)
    return(

            <div className="builder">

              <LeftSidebar
                toggleFederalExperience={this.toggleFederalExperience}
                update={this.update}
                updateMultiField={this.updateMultiField}
                updateClearenceLevel={this.updateClearenceLevel}
                addImageToField={this.addImageToField}
                removeImageFromField={this.removeImageFromField}
                state={this.state}
                updateToolkit={this.updateToolkit}
                updateAts={this.updateAts}
              />

              <ResumeContainer resetDraft={this.resetDraft} 
              state={this.state} 
              user={this.props.user}
              currentUserId={this.props.currentUserId}
              />

              <RightSidebar saveImageString={this.saveImageString} 
              updateThemeBackground={this.updateThemeBackground} 
              updateThemeFont={this.updateThemeFont} 
              user={this.props.user}
              selectRecentDraft={this.selectRecentDraft}
              currentUserId={this.props.currentUserId}
              state={this.state}
              />

            </div>
          )
        

         
    
  }

}

export default Builder
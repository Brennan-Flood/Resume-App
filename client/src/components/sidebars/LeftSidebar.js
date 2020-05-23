import React from "react";
import ImageCategory from "./leftSidebarComponents/ImageCategory";
import BasicInfoEdit from "./leftSidebarComponents/BasicInfoEdit";
import CurrentPosEdit from "./leftSidebarComponents/CurrentPosEdit";
import ToolkitEdit from "./leftSidebarComponents/ToolkitEdit";
import SearchesEdit from "./leftSidebarComponents/SearchesEdit";
import EduEdit from "./leftSidebarComponents/EducationEdit";
import ClearenceEdit from "./leftSidebarComponents/ClearenceEdit";
import LinkedinEdit from "./leftSidebarComponents/LinkedinEdit";

class LeftSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      educationInputs: 1, 
      educationValues: {1: {title: "", entity: "", startTime: "", endTime: ""}},
      linkedinInputs: 1,
      linkedinValues: {1: {author: "", body: ""}},
      recruitingToolkitSliders: 1,
      recruitingToolkitValues: {1: {name: "", value: ""}},
    };

    this.addMultiField = this.addMultiField.bind(this);
    this.removeMultiField = this.removeMultiField.bind(this);
    this.updateMultiField = this.updateMultiField.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.update = this.update.bind(this);
  }

  toggleModal(field) {
    let modal = document.getElementById(field);
    modal.classList.toggle("hidden-modal");
  }

  toggleEditSection(field) {
    let section = document.getElementById(field);
    section.classList.toggle("hidden-section");
    section.classList.toggle("edit-section");
  }

  update(field) {
  if (field === "firstName" || field === "lastName" || field === "title") {
    return e => this.props.update(field, e.target.value.toUpperCase())
  } else {
   return e => this.props.update(field, e.target.value);
  }
  }

  addMultiField(field) {    
    let newValues;
    let inputs;
    if (field === "edu") {

      inputs = this.state.educationInputs + 1;
      newValues = this.state.educationValues;
      newValues[inputs] = { title: "", entity: "", startTime: "", endTime: "" };
      this.setState({educationInputs: inputs, educationValues: newValues });

    } else if (field === "linkedin") {

      newValues = this.state.linkedinValues;
      inputs = this.state.linkedinInputs + 1;
      newValues[inputs] = { author: "", body: "" };
      this.setState({ linkedinInputs: inputs, linkedinValues: newValues });

    } else if ( field === "recruitingToolkit") {

      newValues = this.state.recruitingToolkitValues;
      inputs = this.state.recruitingToolkitSliders + 1;
      newValues[inputs] = {name: "", values: ""};
      this.setState({ recruitingToolkitSliders: inputs, recruitingToolkitValues: newValues });

    }

    this.props.updateMultiField(field, inputs);
  }

  removeMultiField(field) {
    let newValues;
    let inputs;
    if (field === "edu") {
        inputs = this.state.educationInputs - 1;
        if (inputs <= 0) {
          return;
        }
        newValues = this.state.educationValues;
        newValues[inputs] = { title: "", entity: "", startTime: "", endTime: "" };
        this.setState({ educationInputs: inputs, educationValues: newValues });

    } else if (field === "linkedin") {

        inputs = this.state.linkedinInputs - 1;
        if (inputs <= 0) {
          return;
        }
        newValues = this.state.linkedinValues;
        newValues[inputs] = { author: "", body: "" };
        this.setState({ linkedinInputs: inputs, linkedinValues: newValues });
    } else if (field === "recruitingToolkit") {

        inputs = this.state.recruitingToolkitSliders - 1;
        if (inputs <= 0) {
          return;
        }
        newValues = this.state.recruitingToolkitValues;
        newValues[inputs] = { name: "", value: ""};
        this.setState({recruitingToolkitSliders: inputs, recruitingToolkitValues: newValues})

    }

    this.props.updateMultiField(field, inputs);
  }
  
  updateMultiField(metaField, index, field) {
    return (e) => {
      let newValues;
      let inputs;
      if (metaField === "edu") {

        newValues = this.state.educationValues;
        inputs = this.state.educationInputs;
        newValues[index][field] = e.target.value;
        this.setState({ educationValues: newValues });
        
      } else if (metaField === "linkedin") {

        newValues = this.state.linkedinValues;
        inputs = this.state.linkedinInputs;
        newValues[index][field] = e.target.value;
        this.setState({ linkedinValues: newValues });

      } else if (metaField === "recruitingToolkit") {
        newValues = this.state.recruitingToolkitValues;
        inputs = this.state.recruitingToolkitSliders;
        newValues[index][field] = e.target.value;
        this.setState({recruitingToolkitValues: newValues})
      }
      this.props.updateMultiField(metaField, inputs, index, field, e.target.value);
    }
  }

  updateClearenceSlider(field) {
    return e => this.props.updateClearenceLevel(field, e.target.value);
  }

  render() {

    return (
      <div className="left-sidebar">
        {/* <h1 className="font-test">Test BOOK</h1>
        <h1 className="font-comparison-1">Test MEDIUM</h1>
        <h1 className="font-comparison-2">Test ROMAN</h1>
        <h1 className="font-comparison-3">Test BLACK</h1>
        <h1 className="font-comparison-4">Test LIGHT</h1> */}
        
        <h1 className="sidebar-header">INPUTS</h1>

        <h1 className="sidebar-section-name"> Basic Info</h1>
        
        <button onClick={e => this.toggleEditSection("basic")}> toggle </button>
        <BasicInfoEdit update={this.update}/>
        
        <h1 className="sidebar-section-name"> Current Position</h1>

        <button onClick={e => this.toggleEditSection("current-pos-edit")}> toggle </button>
        <CurrentPosEdit update={this.update} />

        <h1 className="sidebar-section-name"> Recruiting Toolkit </h1>
        <button onClick={e => this.toggleEditSection("toolkit-edit")}> toggle </button>

        <ToolkitEdit state={this.props.state} 
          updateMultiField={this.updateMultiField}
          addMultiField={this.addMultiField}
          removeMultiField={this.removeMultiField}
        />

        <h1 className="sidebar-section-name"> Recent Searches</h1>
        <button onClick={e => this.toggleEditSection("searches-edit")}> toggle </button>
        <SearchesEdit update={this.update} />
        

        <h1 className="sidebar-section-name"> {"HOBBIES & INTERESTS"}</h1>
        <button className="show-modal" onClick={e => this.toggleModal("hobbies")}> Reveal </button>
        <ImageCategory 
          addImageToField={this.props.addImageToField}
          removeImageFromField={this.props.removeImageFromField}
          field={"hobbies"}
          state={this.props.state}
          imageCategoryId={"5ec7570efc7837539dc1dc33"}
          toggleModal={this.toggleModal}
        />

        <h1 className="sidebar-section-name">{"EDUCATION & EMPLOYMENT"}</h1>
        <button onClick={e => this.toggleEditSection("edu-edit")}> toggle </button>
        <EduEdit updateMultiField={this.updateMultiField} 
          addMultiField={this.addMultiField}
          removeMultiField={this.removeMultiField}
          state={this.props.state}
        />

        <h1 className="sidebar-section-name">FEDERAL AGENCIES</h1>
        <button onClick={e => this.toggleModal("federalAgencies")}> Reveal </button>

            <ImageCategory name={"Federal Agencies"} 
              imageCategoryId={"5ec7459c19eaed359f63641e"}
              addImageToField={this.props.addImageToField}
              removeImageFromField={this.props.removeImageFromField}
              field={"federalAgencies"}
              state={this.props.state}
              toggleModal={this.toggleModal}
            /> 
            
        <h1 className="sidebar-section-name">CLEARENCE LEVELS</h1>
        <button onClick={e => this.toggleEditSection("clearence-edit")}> toggle </button>
        <ClearenceEdit state={this.props.state} updateClearenceSlider={this.updateClearenceSlider} />

        <h1 className="sidebar-section-name">LinkedIn Reviews</h1>
        <button onClick={e => this.toggleEditSection("linkedin-edit")}> toggle </button>
        <LinkedinEdit addMultiField={this.addMultiField}
          removeMultiField={this.removeMultiField}
          updateMultiField={this.updateMultiField}
          state={this.props.state}
        />
        

      </div>
    )
  }

}

export default LeftSidebar;
import React from "react";
import ImageCategory from "./left/image_category.js";
import BasicInfoEdit from "./left/basic_edit.js";
import CurrentPosEdit from "./left/current_pos_edit.js";
import ToolkitEdit from "./left/toolkit_edit.js";
import SearchesEdit from "./left/searches_edit.js";
import EduEdit from "./left/education_edit.js";
import ClearenceEdit from "./left/clearence_edit.js";
import LinkedinEdit from "./left/linkedin_edit.js";
import AtsEdit from "./left/ats_edit.js";

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
    this.updateClearenceSlider = this.updateClearenceSlider.bind(this);
  }

  toggleModal(field) {
    let modal = document.getElementById(field);
    modal.classList.toggle("hidden-modal");
    let upload = document.getElementById(`${field}-upload`);
    if (upload.classList.contains("uploading")) {
      upload.classList.toggle("uploading");
    }

  }

  toggleEditSection(e, field) {
    let section = document.getElementById(field);
    section.classList.toggle("hidden-section");
    e.target.classList.toggle("collapsed");
  }

  update(field) {
  if (field === "firstName" || field === "lastName" || field === "title") {
    return e => this.props.update(field, e.target.value.toUpperCase())
  } else {
   return e => this.props.update(field, e.target.value);
  }
  }



  addMultiField( field ) { 
    const leftSidebar = document.getElementById("left-sidebar");
    
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
    window.setTimeout(() => {leftSidebar.scrollBy({top: 200, behavior: "smooth"});}, 200)
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
      <div id="left-sidebar" className="left-sidebar">
        
        <h1 className="sidebar-header">INPUTS</h1>

        <div className="sidebar-section">

          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "basic")} className="fas fa-chevron-down collapse-button collapsed" />
            <h1 className="sidebar-section-name"> Basic Info </h1>
          </div>
          <BasicInfoEdit update={this.update}/>

        </div>

        <div className="sidebar-section">
        
          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "current-pos-edit")} className="fas fa-chevron-down collapse-button collapsed" />

            <h1 className="sidebar-section-name"> Current Position</h1>

          </div>
        
          <CurrentPosEdit update={this.update} />

        </div>

        <div className="sidebar-section">


          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "toolkit-edit")} className="fas fa-chevron-down collapse-button collapsed" />
            <i onClick={e => this.toggleModal("toolkit")} className="fas fa-plus-square modal-button"></i>
            <h1 className="sidebar-section-name"> Recruiting Toolkit </h1>

            
          </div>

          <ToolkitEdit 
            imageCategoryId="5ecdde99c55fc37c75307070"
            addImageToField={this.props.addImageToField}
            removeImageFromField={this.props.removeImageFromField}
            field={"toolkit"}
            state={this.props.state} 
            updateMultiField={this.updateMultiField}
            addMultiField={this.addMultiField}
            removeMultiField={this.removeMultiField}
            toggleModal={this.toggleModal}
            updateToolkit={this.props.updateToolkit}
          />
        </div>

        <div className="sidebar-section">

          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "searches-edit")} className="fas fa-chevron-down collapse-button collapsed" />
            <h1 className="sidebar-section-name"> Recent Searches</h1>

          </div>
          <SearchesEdit update={this.update} />

          <div className="sidebar-section">
        </div>

        
          <div className="sidebar-section-header">
            <i onClick={e => this.toggleModal("hobbies")} className="fas fa-plus-square modal-button"></i>
            <h1 className="sidebar-section-name"> {"Hobbies & Interests"}</h1>

          </div>

          <ImageCategory 
            addImageToField={this.props.addImageToField}
            removeImageFromField={this.props.removeImageFromField}
            field={"hobbies"}
            state={this.props.state}
            imageCategoryId={"5ec7570efc7837539dc1dc33"}
            toggleModal={this.toggleModal}
          />
        </div>

        <div className="sidebar-section">

          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "edu-edit")} className="fas fa-chevron-down collapse-button collapsed" />
            <h1 className="sidebar-section-name">{"Education & Employment"}</h1>

          </div>

          <EduEdit updateMultiField={this.updateMultiField} 
            addMultiField={this.addMultiField}
            removeMultiField={this.removeMultiField}
            state={this.props.state}
          />

        </div>

        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <input className="fed-checkbox" onChange={this.props.toggleFederalExperience} defaultChecked={this.props.state.federalExperience} type="checkbox"></input>

            <h1 className="sidebar-section-name"> Federal Experience?</h1>
          </div>
        </div>

        <div className="sidebar-section">
          
            {this.props.state.federalExperience ? (
              <div className="sidebar-section-header">
              <i onClick={e => this.toggleModal("federalAgencies")} className="fas fa-plus-square modal-button"></i>
              <h1 className="sidebar-section-name">Federal Agencies</h1>
              </div>
            ) : (
              <div className="sidebar-section-header disabled">
                <i className="fas fa-plus-square modal-button disabled"></i>
                <h1 className="sidebar-section-name disabled">Federal Agencies</h1>
              </div>
            )}
            
            <ImageCategory name={"Federal Agencies"}
              imageCategoryId={"5ec7459c19eaed359f63641e"}
              addImageToField={this.props.addImageToField}
              removeImageFromField={this.props.removeImageFromField}
              field={"federalAgencies"}
              state={this.props.state}
              toggleModal={this.toggleModal}
            /> 
              
        </div>

       

        <div className="sidebar-section">

          {this.props.state.federalExperience ? (
            <div className="sidebar-section-header">
              <i onClick={e => this.toggleEditSection(e, "clearence-edit")} className="fas fa-chevron-down collapse-button collapsed" />
              <h1 className="sidebar-section-name">Clearence Levels</h1>
            </div>
          ) : (
              <div className="sidebar-section-header disabled">
                <i className="fas fa-chevron-down collapse-button collapsed disabled" />
                <h1 className="sidebar-section-name disabled">Clearence Levels</h1>
              </div>
            )}
          
          <ClearenceEdit state={this.props.state} updateClearenceSlider={this.updateClearenceSlider} />
          
        </div>

        <div className="sidebar-section">

          {!this.props.state.federalExperience ? (
            <div className="sidebar-section-header">
              <i onClick={e => this.toggleEditSection(e, "ats-edit")} className="fas fa-chevron-down collapse-button collapsed" />
              <i onClick={e => this.toggleModal("ats")} className="fas fa-plus-square modal-button"></i>
              <h1 className="sidebar-section-name">Applicant Tracking Systems</h1>
            </div>
          ) : (
              <div className="sidebar-section-header disabled">
                <i className="fas fa-chevron-down collapse-button collapsed disabled" />
                <i className="fas fa-plus-square modal-button disabled"></i>
                <h1 className="sidebar-section-name disabled">Applicant Tracking Systems</h1>
              </div>
            )}
          
            <AtsEdit
              addImageToField={this.props.addImageToField}
              removeImageFromField={this.props.removeImageFromField}
              field={"ats"}
              state={this.props.state}
              updateMultiField={this.updateMultiField}
              addMultiField={this.addMultiField}
              removeMultiField={this.removeMultiField}
              toggleModal={this.toggleModal}
              updateAts={this.props.updateAts} />
          
        </div>

        <div className="sidebar-section">

          <div className="sidebar-section-header">
            <i onClick={e => this.toggleEditSection(e, "linkedin-edit")} className="fas fa-chevron-down collapse-button collapsed" />

            <h1 className="sidebar-section-name">LinkedIn Reviews</h1>
          </div>

          <LinkedinEdit addMultiField={this.addMultiField}
            removeMultiField={this.removeMultiField}
            updateMultiField={this.updateMultiField}
            state={this.props.state}
          />
        </div>

      </div>
    )
  }

}

export default LeftSidebar;
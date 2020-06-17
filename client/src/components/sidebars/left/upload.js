import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mutation} from "react-apollo";
import Mutations from "../../../graphql/mutations";
import Queries from "../../../graphql/queries";
const { FETCH_CATEGORY } = Queries;
const { CREATE_IMAGE } = Mutations;

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
      uploading: false,
      name: null
    };

    this.updateCache = this.updateCache.bind(this);
    this.submitFile = this.submitFile.bind(this);
    this.getFormEnding = this.getFormEnding.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  updateCache(cache, data) {
    let imageCategory;
    try {
      imageCategory = cache.readQuery({
        query: FETCH_CATEGORY,
        variables: { id: this.props.imageCategoryId }
      });
    } catch (err) {
      toast(err, { type: "error" });
      return;
    }


    if (imageCategory) {
      let images = imageCategory.imageCategory.images.concat(data.data.createImage);
      cache.writeQuery({
        query: FETCH_CATEGORY,
        variables: {
          id: this.props.imageCategoryId
        },
        data: {
          imageCategory: {
            _id: this.props.imageCategoryId,
            images: images,
            name: imageCategory.imageCategory.name,
            __typename: "ImageCategoryType"
          }
        }
      })
      toast(`${this.state.file[0].name} uploaded successfully!`, {type: "success"});
      this.setState({file: null, uploading: false, name: null})
    }
  }

  submitFile = (event, createImage) => {
    event.preventDefault();
    const formData = new FormData();
    if (this.props.imageCategoryId === "5ec7459c19eaed359f63641e") {
      if (this.state.name === null) {
        toast("Please Name The Federal Agency", {type: "error"})
        return;
      }
    }
    if (this.state.file) {
    formData.append('file', this.state.file[0]);
    axios.post(`/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      let url = response.data.Location;

      createImage({
        variables: {
          name: this.state.name,
          url: url,
          category: this.props.imageCategoryId
        }
      })

    }).catch(error => {
      toast(error, {type: "error"});
    });
    } else {
      toast("Please select a file first", {type: "error"});
    }
  }

  updateName = (event) => {
    this.setState({ name: event.target.value});
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files, uploading: true });
  }

  getFormEnding() {
    if (this.props.imageCategoryId === "5ec7459c19eaed359f63641e") {
      return (
        <div className="upload-form-ending">
          <h1>{"2). Add the Name of the Federal Agency"}</h1>
          <input className="fed-name" onChange={this.updateName} placeholder="Agency Name" />
          <h1>then</h1>
          <button className="upload-button" type='submit'>{"3). Upload the file to the App"}</button>
        </div>
      )
    } else {
      return (
        <button className="upload-button" type='submit'>{"2). Upload the file to the App"}</button>
      )
    }
  }

  render() {
    return (
      <div id={`${this.props.field}-upload`} className="image-upload-modal">
        <ToastContainer />

        <Mutation
          mutation={CREATE_IMAGE}
          update={(cache, data) => this.updateCache(cache, data)}
        >
          {(createImage, {data}) => {

            return (             
              <form id={this.props.imageCategoryId} className="image-upload-form" onSubmit={e => this.submitFile(e, createImage)}>
                <input id={`${this.props.field}-file`} name="file" className="upload-input" label='upload file' type='file' onChange={this.handleFileUpload}></input>
                <h1 className="file-name" style={this.state.file ? {color: "green"} : {color: "red"}}>
                  {this.state.file && this.state.file[0] ? this.state.file[0].name : "No File Chosen"}
                </h1>
                <label className="upload-label" htmlFor={`${this.props.field}-file`}>{"1). Choose a file to upload"}</label>
                <h1>then</h1>
                {this.getFormEnding()}
              </form>
            )
          }}
        
        </Mutation>
      </div>
    );
  }
}

export default FileUpload;
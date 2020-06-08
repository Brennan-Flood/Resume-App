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
      uploading: false
    };

    this.updateCache = this.updateCache.bind(this);
    this.submitFile = this.submitFile.bind(this);
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
      this.setState({file: null, uploading: false})
    }
  }

  submitFile = (event, createImage) => {
    event.preventDefault();
    const formData = new FormData();
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

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files, uploading: true });
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
                <button className="upload-button" type='submit'>{"2). Upload the file to the App"}</button>
              </form>
            )
          }}
        
        </Mutation>
      </div>
    );
  }
}

export default FileUpload;
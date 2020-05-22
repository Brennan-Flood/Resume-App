import React, { Component } from 'react';
import axios from 'axios';
// import { Mutation } from "react-apollo";
// import Mutations from "../../graphql/mutations";
// import Queries from "../../graphql/queries";
// const { FETCH_CATEGORY } = Queries
// const { CREATE_IMAGE } = Mutations;

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
      name: "test"
    };
  }

  submitFile = (event) => {
    console.log("submitting...")
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:5000/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files });
  }

  render() {
    return (
      <div className="image-upload-modal">
        <form onSubmit={this.submitFile}>
          <input label='upload file' type='file' onChange={this.handleFileUpload} />
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}

export default FileUpload;
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

  // updateCategory(cache, data) {
  //   let imageCategory;
  //   try {
  //     imageCategory = cache.readQuery({
  //       query: FETCH_CATEGORY,
  //       variables: {
  //         id: this.props.categoryId
  //       }
  //     })
  //   } catch (err) {
  //     return
  //   }

  //   if (imageCategory) {
  //     let image = data.data.createImage;
  //     let categoryImages = imageCategory.images.concat(image);
  //     cache.writeQuery({
  //       query: FETCH_CATEGORY,
  //       variables: {
  //         _id: this.props.categoryId
  //       },
  //       data: {
  //         imageCategory: imageCategory.imageCategory,
  //         images: categoryImages
  //       }
  //     })
  //   }
  // }

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
        {/* <Mutation
          mutation={CREATE_IMAGE}
          update={(cache, data) => 
            this.updateCategory(cache, data)
          }
        > */}
        <form onSubmit={this.submitFile}>
          <input label='upload file' type='file' onChange={this.handleFileUpload} />
          <button type='submit'>Send</button>
        </form>
        {/* </Mutation> */}
      </div>
    );
  }
}

export default FileUpload;
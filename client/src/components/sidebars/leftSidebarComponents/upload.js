import React, { Component } from 'react';
import axios from 'axios';
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
      name: "test",
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
      this.setState({file: "", uploading: false})
    }
  }

  submitFile = (event, createImage) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:5000/test-upload`, formData, {
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
      console.log(error);
    });
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files, uploading: true });
  }

  render() {
    return (
      <div className="image-upload-modal">
        <Mutation
          mutation={CREATE_IMAGE}
          update={(cache, data) => this.updateCache(cache, data)}
        >
          {(createImage, {data}) => {
            return (             
              <form className="image-upload-form" onSubmit={e => this.submitFile(e, createImage)}>
                <input className="upload-input" label='upload file' type='file' onChange={this.handleFileUpload}></input>
                <button className="upload-button" type='submit'>Upload File</button>
              </form>
            )
          }}
        
        </Mutation>
      </div>
    );
  }
}

export default FileUpload;
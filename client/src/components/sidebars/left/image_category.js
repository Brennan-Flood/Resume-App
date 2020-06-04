import React from "react";
import { Query } from "react-apollo";
import Queries from "../../../graphql/queries";
import Upload from "./upload";
const { FETCH_CATEGORY } = Queries;

const ImageCategory = (props) => {

  const toggleImage = function(e, imageId, url) {
    if (props.state[props.field][imageId] === undefined) {
      props.addImageToField(props.field, url, imageId);
    } else {
      props.removeImageFromField(props.field, imageId);
    }
    // e.target.firstChild.classList.toggle("selected")
    document.getElementById(imageId).classList.toggle("selected");
  };

  const toggleUpload = function(field) {
    document.getElementById(`${field}-upload`).classList.toggle("uploading");
  };

  const getClass = function (id) {
    if (props.state[props.field][id]) {
      return "toggle-image selected";
    } else {
      return "toggle-image"
    }
  };

  return (
    <Query query={FETCH_CATEGORY} variables={{ id: props.imageCategoryId }}>
      {({ loading, error, data }) => {
        if (loading) return <div style={{width: "0px", height: "0px", visibility: "hidden"}}></div>;
        if (error) return <p>{error}</p>;
        return (
          <div id={props.field} className="image-selector-modal hidden-modal">
            <div className="image-selector-interior">
            <h1 className="image-selector-title">{data.imageCategory.name}</h1>
            <button onClick={e => props.toggleModal(props.field)}> Hide </button>
            <ul className="image-select-list">
              {data.imageCategory.images.map((img, i) => {
                return (
                  <button  key={i} className="image-toggle-button" onClick={e => toggleImage(e, img._id, img.url)}>
                    <img id={img._id} className={getClass(img._id)} key={i} src={img.url} alt={props.field} />
                  </button>
                )
              })}
            </ul>
            <button onClick={e => toggleUpload(props.field)}> Add an Image </button>
            <Upload name={data.imageCategory.name} imageCategoryId={props.imageCategoryId} field={props.field}/>

            </div>
            <div onClick={e => props.toggleModal(props.field)} className="close-modal" />


          </div>
        )
      }}
    </Query>
  )
}

export default ImageCategory
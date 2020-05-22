import React from "react";
import { Query } from "react-apollo";
import Queries from "../../../graphql/queries";
import Upload from "./upload";
const { FETCH_CATEGORY } = Queries;

const ImageCategory = (props) => {

  const toggleImage = function(imageId, url) {
    console.log(imageId);
    if (props.state[props.field][imageId] === undefined) {
      props.addImageToField(props.field, url, imageId);
    } else {
      props.removeImageFromField(props.field, imageId);
    }
  };

  return (
    <Query query={FETCH_CATEGORY} variables={{ id: props.imageCategoryId }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return (
          <div id={props.field} className="image-selector-modal hidden-modal">
            <div className="image-selector-interior">
            <h1 className="image-selector-title">{data.imageCategory.name}</h1>
            <button onClick={e => props.toggleModal(props.field)}></button>
            <ul>
              {data.imageCategory.images.map((img, i) => {
                return (
                  <button className="image-toggle-button" onClick={e => toggleImage(img._id, img.url)}>
                    <img className="toggle-image" key={i} src={img.url} alt={props.field} />
                  </button>
                )
              })}
            </ul>
            <Upload name={data.imageCategory.name} imageCategoryId={props.imageCategoryId} />
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default ImageCategory
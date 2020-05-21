import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
// import Upload from "../upload/upload";
const {FETCH_CATEGORIES} = Queries;

class RightSidebar extends React.Component {

  render() {
    return (
      <div className="right-sidebar">
        <h1 className="sidebar-header">THEMES</h1>
        <ul className="theme-list">
          <button className="theme" 
            style={{ backgroundColor: "rgb(229, 229, 229)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(229, 229, 229)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(232, 235, 238)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(232, 235, 238)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 245)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 245)")}></button>
          <button className="theme"
            style={{ backgroundColor: "rgb(243, 240, 233)" }}
            onClick={e => this.props.updateBackgroundColor("rgb(243, 240, 233)")}></button>
        </ul>
        <Query query={FETCH_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return data.imageCategories.map(({ _id, name, images }) => (
              
                <div className="">
                  <h1 className="">{name}</h1>
                  <img src={images[0].url} alt={name}/>
                </div>
              
            ));
          }}

        </Query>
        {/* <Upload /> */}
      </div>
    )
  }

}

export default RightSidebar;
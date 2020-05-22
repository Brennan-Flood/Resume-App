import React from "react";

const Searches = (props) => {
  return (
    <div className="recent-searches-div">
      <h1 className="title"> RECENT SEARCHES</h1>
      <h1 className="recent-searches"> {props.state.recentSearches}</h1>
    </div>
  )
};

export default Searches;
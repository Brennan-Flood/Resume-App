import React from "react";

const SearchesEdit = (props) => {
  return (
    <div id="searches-edit" className="searches-edit hidden-section">
      <textarea
        type="text"
        placeholder="Recent Searches"
        onChange={props.update("recentSearches")}
      />
    </div>
  )
};

export default SearchesEdit;
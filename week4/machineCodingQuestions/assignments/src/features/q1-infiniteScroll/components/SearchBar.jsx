import React from "react";
import "./searchBar.css";
const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

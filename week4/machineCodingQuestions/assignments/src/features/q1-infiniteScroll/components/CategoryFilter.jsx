import React from "react";
import "./categoryFilter.css";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <div className="filter-wrapper">
      <select
        className="filter-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        // onKeyUp={filterProduct}
      >
        <option value="">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
      </select>
    </div>
  );
};

export default CategoryFilter;

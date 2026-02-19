import React from "react";
import ProductCard from "./ProductCard";
import "./productList.css";

const ProductList = ({ filteredData }) => {
  return (
    <div className="product-list">
      {filteredData?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;

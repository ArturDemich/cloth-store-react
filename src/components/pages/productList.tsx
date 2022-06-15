import React from "react";
import ProductCard from "../productCard";

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h1> Category name </h1>
        <ProductCard />
      </div>
    );
  }
}

export default ProductList;

import React from "react";
import { Wrapper } from "../../styles/productList.styles";
import ProductCard from "../productCard";

class ProductList extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1> Category name </h1>
        <ProductCard />
      </Wrapper>
    );
  }
}

export default ProductList;

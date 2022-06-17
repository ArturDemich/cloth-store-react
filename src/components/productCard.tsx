import React from "react";
import { Link } from "react-router-dom";
import { Content, Price, Title, Wrapper } from "../styles/productCard.styles";
import Image from "../styles/icon/Image.png";

class ProductCard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/product-description">
          <img src={Image} alt="image" />

          <Content>
            <Title>Name product</Title>
            <Price>123.00</Price>
          </Content>
        </Link>
      </Wrapper>
    );
  }
}

export default ProductCard;

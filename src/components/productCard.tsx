import React from "react";
import { Link } from "react-router-dom";
import { Content, Price, Title, Wrapper } from "../styles/productCard.styles";
import Image from "../styles/icon/Image.png";

class ProductCard extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <Link to="/product-description">
          <img
            src={this.props.gallery[0]}
            width="354"
            height="330"
            alt="image"
          />
        </Link>
        <Content>
          <Title>{this.props.name}</Title>
          <Price>${this.props.prices[0].amount}</Price>
        </Content>
      </Wrapper>
    );
  }
}

export default ProductCard;

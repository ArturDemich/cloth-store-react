import React from "react";
import { Content, Price, Title, Wrapper } from "../styles/productCard.styles";

class ProductCard extends React.Component<any, any> {
  render() {
    return (
      <Wrapper>
        <img src={this.props.gallery[0]} width="354" height="330" alt="image" />

        <Content>
          <Title>{this.props.name}</Title>
          <Price>${this.props.prices[0].amount}</Price>
        </Content>
      </Wrapper>
    );
  }
}

export default ProductCard;

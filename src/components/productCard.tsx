import React from "react";
import {
  CartIcon,
  Content,
  ImageCard,
  Price,
  StockOut,
  Title,
  Wrapper,
} from "../styles/productCard.styles";

class ProductCard extends React.Component<any, any> {
  render() {
    console.log(this.props);
    return (
      <Wrapper
        theme={
          this.props.inCart && {
            main: "0px 4px 35px rgba(168, 172, 176, 0.19)",
          }
        }
      >
        {this.props.inCart && <CartIcon />}
        <ImageCard theme={{ gallery: this.props.gallery[0] }}>
          {this.props.inStock ? <StockOut>out of stock</StockOut> : null}
        </ImageCard>

        <Content>
          <Title>{this.props.name}</Title>
          {this.props.prices.map((el: any) =>
            el.currency.label === this.props.currency.label ? (
              <Price key={el.currency.label}>
                {el.currency.symbol} {el.amount}
              </Price>
            ) : null
          )}
        </Content>
      </Wrapper>
    );
  }
}

export default ProductCard;

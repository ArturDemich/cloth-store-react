import React from "react";
import { Price } from "../storeg/interfaces";
import {
  CartIcon,
  Content,
  ImageCard,
  PriceWrap,
  StockOut,
  Title,
  Wrapper,
} from "../styles/productCard.styles";
import { PropsProductCard } from "./interfaces";

class ProductCard extends React.Component<PropsProductCard> {
  render() {
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
          {this.props.prices.map((el: Price) =>
            el.currency.label === this.props.currency.label ? (
              <PriceWrap key={el.currency.label}>
                {el.currency.symbol} {el.amount}
              </PriceWrap>
            ) : null
          )}
        </Content>
      </Wrapper>
    );
  }
}

export default ProductCard;

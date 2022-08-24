import React, { MouseEvent } from "react";
import { connect } from "react-redux";
import { Data, Price } from "../storeg/interfaces";
import {
  CartIcon,
  Content,
  ImageCard,
  PriceWrap,
  StockOut,
  Title,
  Wrapper,
} from "../styles/productCard.styles";
import { PropsProductCard, StateProductCard } from "./interfaces";
import { setCartItems, setDefaultAttribute } from "../storeg/dataSlice";

class ProductCard extends React.Component<PropsProductCard, StateProductCard> {
  constructor(props: PropsProductCard) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  async handleClick(e: MouseEvent) {
    e.preventDefault();
    await this.props.setDefaultAttribute(this.props.product);
    this.props.setCartItems({
      product: this.props.productState,
      quantityProduct: 1,
    });
  }
  render() {
    return (
      <Wrapper
        theme={
          this.props.inCart && {
            main: "0px 4px 35px rgba(168, 172, 176, 0.19)",
          }
        }
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.state.hover && !this.props.product.inStock ? (
          <CartIcon onClick={(event) => this.handleClick(event)} />
        ) : null}

        <div>
          <ImageCard theme={{ gallery: this.props.product.gallery[0] }}>
            {this.props.product.inStock ? (
              <StockOut>out of stock</StockOut>
            ) : null}
          </ImageCard>

          <Content>
            <Title>{this.props.product.name}</Title>
            {this.props.product.prices.map((el: Price) =>
              el.currency.label === this.props.currency.label ? (
                <PriceWrap key={el.currency.label}>
                  {el.currency.symbol} {el.amount}
                </PriceWrap>
              ) : null
            )}
          </Content>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  productState: state.product,
});

export default connect(mapStateToProps, { setDefaultAttribute, setCartItems })(
  ProductCard
);

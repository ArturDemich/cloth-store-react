import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Data, ProductInCart } from "../storeg/interfaces";
import { link } from "../styles/link.styles";
import { setTottalCart } from "../storeg/dataSlice";
import {
  Button,
  ButtonBlock,
  Infoblock,
  ScrollWrap,
  TextQuantity,
  TextStrong,
  Title,
  Wrapper,
  theme,
} from "../styles/miniCart.styles";
import MiniCartItem from "./miniCartItem";
import { PropsMiniCart } from "./interfaces";

class MiniCart extends React.Component<PropsMiniCart> {
  keyCount: number;
  constructor(props: PropsMiniCart) {
    super(props);
    this.keyCount = 0;
  }

  getKey() {
    return this.keyCount++;
  }
  render() {
    return (
      <Wrapper>
        <Title>
          My Bag,
          <TextQuantity> {this.props.quantity} items</TextQuantity>
        </Title>
        <ScrollWrap>
          {this.props.cartItem.length ? (
            this.props.cartItem.map((elem: ProductInCart) => (
              <MiniCartItem key={this.getKey()} {...elem} />
            ))
          ) : (
            <Title key="empty">Your Cart is empty!</Title>
          )}
        </ScrollWrap>

        <Infoblock>
          <TextStrong>Tottal </TextStrong>
          <TextStrong>
            {this.props.currencySymbol}
            {this.props.tottal.toFixed(2)}
          </TextStrong>
        </Infoblock>
        <ButtonBlock>
          <Link to="/product-cart" style={link}>
            <Button onClick={this.props.hideModal}>View Bag</Button>
          </Link>
          <Button theme={theme}>Check Out</Button>
        </ButtonBlock>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  cartItem: state.cart.products,
  quantity: state.cart.quantity,
  tottal: state.cart.tottal,
  currencySymbol: state.currentCurrency.symbol,
});

export default connect(mapStateToProps, { setTottalCart })(MiniCart);

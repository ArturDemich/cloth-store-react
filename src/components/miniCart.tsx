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
  TextStrong,
  Title,
  Wrapper,
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
    // console.log(this.props);
    return (
      <Wrapper>
        <Title>My Bag, {this.props.quantity} items </Title>
        <ScrollWrap>
          {this.props.cartItem.map((elem: ProductInCart) =>
            elem.product.id ? (
              <MiniCartItem key={this.getKey()} {...elem} />
            ) : (
              <Title key="empty">Your Cart is empty!</Title>
            )
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
            <Button
              theme={{
                background: "#FFFFFF",
                color: "#1D1F22",
                border: "1px solid #1D1F22",
              }}
              onClick={this.props.hideModal}
            >
              View Bag
            </Button>
          </Link>
          <Button
            theme={{ background: "#5ECE7B;", color: "#FFFFFF", border: "0" }}
          >
            Check Out
          </Button>
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

import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Data, ProductInCart } from "../storeg/interfaces";
import { link } from "../styles/link.styles";
import { setTottalCart } from "../storeg/dataSlice";
import {
  Button,
  ButtonBlock,
  Infoblock,
  TextStrong,
  Title,
  Wrapper,
} from "../styles/miniCart.styles";
import MiniCartItem from "./miniCartItem";

class MiniCart extends React.Component<any, any> {
  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <Title>My Bag, {this.props.quantity} items </Title>

        {this.props.cartItem.map((elem: any) =>
          elem.product.id ? (
            <MiniCartItem key={elem.product.id} {...elem} />
          ) : (
            <Title key="empty">Your Cart is empty!</Title>
          )
        )}

        <Infoblock>
          <TextStrong>Tottal </TextStrong>
          <TextStrong>
            {" "}
            {this.props.currencySymbol}
            {Math.round(this.props.tottal)}
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
            onClick={() => this.props.setTottalCart("GBP")}
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

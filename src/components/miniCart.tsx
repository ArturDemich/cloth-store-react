import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Data, ProductInCart } from "../storeg/interfaces";
import {
  Button,
  ButtonBlock,
  Infoblock,
  TextStrong,
  Title,
  Wrapper,
} from "../styles/miniCart.styles";
import { link } from "../styles/productList.styles";
import MiniCartItem from "./miniCartItem";

class MiniCart extends React.Component<any> {
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
          <TextStrong>Tottal: </TextStrong>
          <TextStrong> ${Math.round(this.props.tottal)}</TextStrong>
        </Infoblock>
        <ButtonBlock>
          <Link to="/product-cart" style={link}>
            <Button
              theme={{
                background: "#FFFFFF",
                color: "#1D1F22",
                border: "1px solid #1D1F22",
              }}
              onClick={() => this.setState({ showMiniCart: false })}
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
});

export default connect(mapStateToProps, null)(MiniCart);

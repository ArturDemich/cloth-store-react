import React from "react";
import { Modal } from "react-overlays";
import { connect } from "react-redux";
import { Data, ProductInCart } from "../storeg/interfaces";
import {
  Button,
  Infoblock,
  TextStrong,
  Title,
  Wrapper,
} from "../styles/miniCart.styles";
import CartItem from "./CartItem";

class MiniCart extends React.Component<any> {
  componentDidUpdate(prevState: any) {
    console.log(prevState);
    if (prevState.quantity === 0) {
      this.render();
    }
  }
  render() {
    return (
      <Wrapper>
        <Title>My Bag, {this.props.quantity} items </Title>

        {this.props.cartItem.map((elem: any) =>
          elem.product.id ? (
            <CartItem key={elem.product.id} {...elem} />
          ) : (
            <Title key="empty">Your Cart is empty!</Title>
          )
        )}

        <Infoblock>
          <TextStrong>Tottal: ${Math.round(this.props.tottal)}</TextStrong>
          <Button>Check Out</Button>
        </Infoblock>
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

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
import MiniCartItem from "./miniCartItem";

class MiniCart extends React.Component<any> {
  render() {
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
          <TextStrong>Tottal: ${Math.round(this.props.tottal)}</TextStrong>
          <Button>View Bag</Button>
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

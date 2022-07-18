import React from "react";
import { connect } from "react-redux";
import { Data, ProductInCart } from "../../storeg/interfaces";
import {
  Button,
  Infoblock,
  TextStrong,
  Title,
  Wrapper,
} from "../../styles/cartPage.styles";
import CartItem from "../CartItem";

class CartPage extends React.Component<any> {
  render() {
    return (
      <Wrapper>
        <Title>Cart</Title>

        {this.props.cartItem[0].product.id ? (
          this.props.cartItem.map((elem: any) => (
            <CartItem key={elem.product.id} {...elem} />
          ))
        ) : (
          <Title>Your Cart is empty!</Title>
        )}

        <Infoblock>
          <TextStrong>Tax21%: $42.00</TextStrong>
          <TextStrong>Quantity: {this.props.quantity} </TextStrong>
          <TextStrong>Tottal: ${this.props.tottal}</TextStrong>
          <Button>Order</Button>
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

export default connect(mapStateToProps, null)(CartPage);

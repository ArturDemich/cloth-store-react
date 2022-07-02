import React from "react";
import {
  Button,
  Infoblock,
  TextStrong,
  Title,
  Wrapper,
} from "../../styles/cartPage.styles";
import CartItem from "../CartItem";

class CartPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Cart</Title>
        <CartItem />

        <Infoblock>
          <TextStrong>Tax21%: $42.00</TextStrong>
          <TextStrong>Quntity: 3</TextStrong>
          <TextStrong>Total: $200</TextStrong>
          <Button>Order</Button>
        </Infoblock>
      </Wrapper>
    );
  }
}

export default CartPage;

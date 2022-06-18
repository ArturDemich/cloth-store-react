import React from "react";
import { Button, TextStrong, Wrapper } from "../../styles/cartPage.styles";
import { Title } from "../../styles/productCard.styles";
import CartItem from "../CartItem";

class CartPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Cart</Title>
        <CartItem />

        <TextStrong>Tax21%: $42.00</TextStrong>
        <TextStrong>Quntity: 3</TextStrong>
        <TextStrong>Total: $200</TextStrong>
        <Button>Order</Button>
      </Wrapper>
    );
  }
}

export default CartPage;

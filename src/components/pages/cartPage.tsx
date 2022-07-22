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
  componentDidUpdate(prevState: any) {
    console.log(prevState);
    if (prevState.quantity === 0) {
      this.render();
    }
  }
  render() {
    return (
      <Wrapper>
        <Title>Cart</Title>

        {this.props.cartItem.map((elem: any) =>
          elem.product.id ? (
            <CartItem key={elem.product.id} {...elem} />
          ) : (
            <Title key="empty">Your Cart is empty!</Title>
          )
        )}

        <Infoblock>
          <TextStrong>
            Tax21%: ${Math.round(this.props.tottal * 0.21)}
          </TextStrong>
          <TextStrong>Quantity: {this.props.quantity} </TextStrong>
          <TextStrong>Tottal: ${Math.round(this.props.tottal)}</TextStrong>
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

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
import { PropsCartPage } from "./interfaces";

class CartPage extends React.Component<PropsCartPage> {
  keyCount: number;
  constructor(props: PropsCartPage) {
    super(props);
    this.keyCount = 0;
  }

  getKey() {
    return this.keyCount++;
  }
  render() {
    return (
      <Wrapper>
        <Title>Cart</Title>

        {this.props.cartItem.map((elem: ProductInCart) =>
          elem.product.id ? (
            <CartItem key={this.getKey()} {...elem} />
          ) : (
            <Title key="empty">Your Cart is empty!</Title>
          )
        )}

        <Infoblock>
          <TextStrong>
            Tax21%: {this.props.currencySymbol}
            {Math.round(this.props.tottal * 0.21)}
          </TextStrong>
          <TextStrong>Quantity: {this.props.quantity} </TextStrong>
          <TextStrong>
            Tottal: {this.props.currencySymbol}
            {this.props.tottal.toFixed(2)}
          </TextStrong>
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
  currencySymbol: state.currentCurrency.symbol,
});

export default connect(mapStateToProps)(CartPage);

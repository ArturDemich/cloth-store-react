import React from "react";
import { connect } from "react-redux";
import { Data, ProductInCart } from "../../storeg/interfaces";
import {
  Button,
  Infoblock,
  InfoRow,
  TextInfo,
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
        {this.props.cartItem.length ? (
          this.props.cartItem.map((elem: ProductInCart) => (
            <CartItem key={this.getKey()} {...elem} />
          ))
        ) : (
          <Title key="empty">Your Cart is empty!</Title>
        )}

        <Infoblock>
          <InfoRow>
            <TextInfo>Tax 21%: </TextInfo>

            <TextStrong>
              {this.props.currencySymbol}
              {Math.round(this.props.tottal * 0.21)}
            </TextStrong>
          </InfoRow>
          <InfoRow>
            <TextInfo>Quantity: </TextInfo>{" "}
            <TextStrong>{this.props.quantity} </TextStrong>
          </InfoRow>
          <InfoRow>
            <TextInfo>Tottal: </TextInfo>{" "}
            <TextStrong>
              {this.props.currencySymbol}
              {this.props.tottal.toFixed(2)}
            </TextStrong>
          </InfoRow>
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

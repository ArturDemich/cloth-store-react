import React from "react";
import { connect } from "react-redux";
import { Attribute, Data, Price } from "../storeg/interfaces";
import { withHocDescription } from "./hocs/productDescriptionHoc";
import { setQuantityProductInCart } from "../storeg/dataSlice";
import {
  AtributeBloc,
  ButtonQuantity,
  Images,
  ImageBloc,
  ItemActions,
  QuantityProduct,
  WrapperItemCart,
  LeftArrow,
  RightArrow,
} from "../styles/cartItem.styles";
import {
  BrandName,
  ButtonSize,
  Color,
  ColorSquare,
  PriceWrap,
  Size,
  TextStrong,
  ProductName,
} from "../styles/productDescription.styles";
import { PropsCartItem, StateCartItem } from "./interfaces";

class CartItem extends React.Component<PropsCartItem, StateCartItem> {
  constructor(props: PropsCartItem) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <WrapperItemCart>
        <AtributeBloc>
          <BrandName>{this.props.product.brand}</BrandName>
          <ProductName>{this.props.product.name}</ProductName>

          {this.props.product.prices.map((el: Price) =>
            el.currency.label === this.props.currency ? (
              <PriceWrap key={el.currency.label}>
                {el.currency.symbol}
                {el.amount}
              </PriceWrap>
            ) : null
          )}

          {this.props.size[0] && (
            <>
              <TextStrong>{this.props.sizeName + ":"}</TextStrong>
              <Size>
                {this.props.size.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.product.selectedSize === elem.id
                        ? { background: "#1D1F22", color: "#FFFFFF" }
                        : null
                    }
                    key={elem.id}
                  >
                    {elem.value}
                  </ButtonSize>
                ))}
              </Size>
            </>
          )}
          {this.props.capacity[0] && (
            <>
              <TextStrong>{this.props.capacityName + ":"}</TextStrong>
              <Size>
                {this.props.capacity.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.product.selectedCopacity === elem.id
                        ? { background: "#1D1F22", color: "#FFFFFF" }
                        : null
                    }
                    key={elem.id}
                  >
                    {elem.displayValue}
                  </ButtonSize>
                ))}
              </Size>
            </>
          )}

          {this.props.color[0] && (
            <>
              <TextStrong>{this.props.colorName + ":"}</TextStrong>
              <Color>
                {this.props.color.map((elem: Attribute) => (
                  <ColorSquare
                    key={elem.id}
                    theme={
                      this.props.product.selectedColor === elem.value
                        ? { main: elem.value, border: "3px solid #5ECE7B" }
                        : { main: elem.value }
                    }
                  />
                ))}
              </Color>
            </>
          )}
        </AtributeBloc>

        <ImageBloc>
          <ItemActions>
            <ButtonQuantity
              onClick={() =>
                this.props.setQuantityProductInCart({
                  product: this.props.product,
                  operator: "+",
                })
              }
            >
              +
            </ButtonQuantity>
            <QuantityProduct> {this.props.quantityProduct} </QuantityProduct>
            <ButtonQuantity
              onClick={() =>
                this.props.setQuantityProductInCart({
                  product: this.props.product,
                  operator: "-",
                })
              }
            >
              -
            </ButtonQuantity>
          </ItemActions>

          <Images
            theme={{
              gallery:
                this.state.index >= 0 &&
                this.state.index <= this.props.product.gallery.length
                  ? this.props.product.gallery[this.state.index]
                  : this.props.product.gallery[0],
            }}
          >
            <LeftArrow
              onClick={() =>
                this.setState((state: StateCartItem) => ({
                  index: (state.index = state.index - 1),
                }))
              }
            >
              ‹
            </LeftArrow>
            <RightArrow
              onClick={() =>
                this.setState((state: StateCartItem) => ({
                  index: (state.index = state.index + 1),
                }))
              }
            >
              ›
            </RightArrow>
          </Images>
        </ImageBloc>
      </WrapperItemCart>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  quantityInCart: state.cart.quantity,
  currency: state.currentCurrency.label,
});

let WithProductDescriptionHoc = withHocDescription(CartItem);

export default connect(mapStateToProps, { setQuantityProductInCart })(
  WithProductDescriptionHoc
);

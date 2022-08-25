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
  ButtonSize,
  Color,
  ColorSquare,
  PriceWrap,
  Size,
  Text,
  Title,
  buttonSize,
  colorSquare,
} from "../styles/miniCartItem.styles";
import { PropsMiniCartItem } from "./interfaces";

class MiniCartItem extends React.Component<PropsMiniCartItem> {
  render() {
    return (
      <WrapperItemCart>
        <AtributeBloc>
          <Title>
            {this.props.product.brand} <br></br> {this.props.product.name}
          </Title>

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
              <Text>{this.props.sizeName + ":"}</Text>
              <Size>
                {this.props.size.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.product.selectedSize === elem.id
                        ? {
                            background: buttonSize.background,
                            color: buttonSize.color,
                          }
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
              <Text>{this.props.capacityName + ":"}</Text>
              <Size>
                {this.props.capacity.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.product.selectedCopacity === elem.id
                        ? {
                            background: buttonSize.background,
                            color: buttonSize.color,
                          }
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
              <Text>{this.props.colorName + ":"}</Text>
              <Color>
                {this.props.color.map((elem: Attribute) => (
                  <ColorSquare
                    key={elem.id}
                    theme={
                      this.props.product.selectedColor === elem.value
                        ? { main: elem.value, border: colorSquare.border }
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

          <Images theme={{ gallery: this.props.product.gallery[0] }}></Images>
        </ImageBloc>
      </WrapperItemCart>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  quantityInCart: state.cart.quantity,
  currency: state.currentCurrency.label,
});

let WithProductDescriptionHoc = withHocDescription(MiniCartItem);

export default connect(mapStateToProps, { setQuantityProductInCart })(
  WithProductDescriptionHoc
);

import React from "react";
import { connect } from "react-redux";
import { Data } from "../storeg/interfaces";
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
  Price,
  Size,
  Text,
  Title,
} from "../styles/miniCartItem.styles";

class MiniCartItem extends React.Component<any, any> {
  render() {
    console.log("minicartItem", this.props);
    return (
      <WrapperItemCart>
        <AtributeBloc>
          <Title>
            {this.props.product.name} <br></br> {this.props.product.brand}
          </Title>

          {this.props.product.prices.map((el: any) =>
            el.currency.label === this.props.currency ? (
              <Price key={el.currency.label}>
                {el.currency.symbol} {el.amount}
              </Price>
            ) : null
          )}

          {this.props.size && (
            <>
              <Text>{this.props.sizeName}</Text>
              <Size>
                {this.props.size.map((size: any) => (
                  <ButtonSize key={size.id}>{size.value}</ButtonSize>
                ))}
              </Size>
            </>
          )}
          {this.props.capacity && (
            <>
              <Text>{this.props.capacityName}</Text>
              <Size>
                {this.props.capacity.map((elem: any) => (
                  <ButtonSize key={elem.id}>{elem.displayValue}</ButtonSize>
                ))}
              </Size>
            </>
          )}

          {this.props.color && (
            <>
              <Text>{this.props.colorName}</Text>
              <Color>
                {this.props.color.map((elem: any) => (
                  <ColorSquare key={elem.id} theme={{ main: elem.value }} />
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

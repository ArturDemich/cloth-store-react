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
  LeftArrow,
  RightArrow,
} from "../styles/cartItem.styles";
import {
  ButtonSize,
  Color,
  ColorSquare,
  Price,
  Size,
  TextStrong,
  Title,
} from "../styles/productDescription.styles";

class CartItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    console.log("cartItem", this.props);
    return (
      <WrapperItemCart>
        <AtributeBloc>
          <Title>{this.props.product.name}</Title>
          <p>{this.props.product.brand}</p>

          <TextStrong>Price:</TextStrong>
          <Price>{Math.round(this.props.product.prices[0].amount)}</Price>

          {this.props.size && (
            <>
              <TextStrong>{this.props.sizeName}</TextStrong>
              <Size>
                {this.props.size.map((size: any) => (
                  <ButtonSize key={size.id}>{size.value}</ButtonSize>
                ))}
              </Size>
            </>
          )}
          {this.props.capacity && (
            <>
              <TextStrong>{this.props.capacityName}</TextStrong>
              <Size>
                {this.props.capacity.map((elem: any) => (
                  <ButtonSize key={elem.id}>{elem.displayValue}</ButtonSize>
                ))}
              </Size>
            </>
          )}

          {this.props.color && (
            <>
              <TextStrong>{this.props.colorName}</TextStrong>
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

          <Images
            theme={{ gallery: this.props.product.gallery[this.state.index] }}
          >
            <LeftArrow onClick={() => this.setState({ index: -1 })}>
              ‹
            </LeftArrow>
            <RightArrow onClick={() => this.setState({ index: +1 })}>
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
});

let WithProductDescriptionHoc = withHocDescription(CartItem);

export default connect(mapStateToProps, { setQuantityProductInCart })(
  WithProductDescriptionHoc
);

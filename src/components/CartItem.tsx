import React from "react";
import { connect } from "react-redux";
import { Data } from "../storeg/interfaces";
import { withHocDescription } from "./hocs/productDescriptionHoc";
import {
  AtributeBloc,
  ButtonAdd,
  ButtonMinus,
  Images,
  ImageBloc,
  ItemActions,
  QuantityProduct,
  WrapperItemCart,
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

class CartItem extends React.Component<any> {
  render() {
    console.log("cartItem", this.props);
    return (
      <WrapperItemCart>
        <AtributeBloc>
          <Title>{this.props.product.name}</Title>
          <p>{this.props.product.brand}</p>

          <TextStrong>Price:</TextStrong>
          <Price>{this.props.product.prices[0].amount}</Price>

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
            <ButtonAdd>+</ButtonAdd>
            <QuantityProduct> {this.props.quantityProduct} </QuantityProduct>
            <ButtonMinus>-</ButtonMinus>
          </ItemActions>

          <Images>
            <img
              src={this.props.product.gallery[0]}
              width="200"
              height="288"
              alt="image"
            />
          </Images>
        </ImageBloc>
      </WrapperItemCart>
    );
  }
}

const mapStateToProps = (state: Data) => ({});

let WithProductDescriptionHoc = withHocDescription(CartItem);

export default connect(mapStateToProps, null)(WithProductDescriptionHoc);

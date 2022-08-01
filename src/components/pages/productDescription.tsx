import React from "react";
import {
  Action,
  Button,
  ButtonSize,
  Color,
  ColorSquare,
  Description,
  Images,
  Img,
  MainImage,
  PriceWrap,
  Size,
  TextStrong,
  Title,
  Wrapper,
} from "../../styles/productDescription.styles";
import { connect } from "react-redux";
import { Attribute, Data, Price } from "../../storeg/interfaces";
import { withHocDescription } from "../hocs/productDescriptionHoc";
import parse from "html-react-parser";
import { getProductThunk } from "../../storeg/thunks";
import {
  setCartItems,
  setSelectedColor,
  setSelectedSize,
  setSelectedCopacity,
} from "../../storeg/dataSlice";
import { PropsDescription, StateDescription } from "./interfaces";

class ProductDescription extends React.Component<
  PropsDescription,
  StateDescription
> {
  constructor(props: PropsDescription) {
    super(props);
    this.state = {
      image: this.props.gallery[0],
    };
  }
  componentDidMount() {
    this.props.getProductThunk(this.props.params.productId);
  }
  componentDidUpdate(prevState: PropsDescription) {
    if (prevState.id !== this.props.id) {
      this.setState({ image: this.props.gallery[0] });
    }
  }

  parse = require("html-react-parser");

  render() {
    console.log("props", this.props);
    return (
      <Wrapper>
        <Images>
          {this.props.gallery.map((el: string) => (
            <Img
              key={el}
              theme={{ gallery: el }}
              onClick={() => this.setState({ image: el })}
            ></Img>
          ))}
        </Images>
        <MainImage theme={{ gallery: this.state.image }}></MainImage>

        <Action>
          <Title>{this.props.name}</Title>
          <p>{this.props.brand}</p>

          {this.props.size && (
            <>
              <TextStrong>{this.props.sizeName}</TextStrong>
              <Size>
                {this.props.size.map((size: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.selectedSize === size.id
                        ? { background: "#1D1F22", color: "#FFFFFF" }
                        : null
                    }
                    key={size.id}
                    onClick={() => this.props.setSelectedSize(size.id)}
                  >
                    {size.value}
                  </ButtonSize>
                ))}
              </Size>
            </>
          )}
          {this.props.capacity && (
            <>
              <TextStrong>{this.props.capacityName}</TextStrong>
              <Size>
                {this.props.capacity.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.selectedCopacity === elem.id
                        ? { background: "#1D1F22", color: "#FFFFFF" }
                        : null
                    }
                    key={elem.id}
                    onClick={() => this.props.setSelectedCopacity(elem.id)}
                  >
                    {elem.displayValue}
                  </ButtonSize>
                ))}
              </Size>
            </>
          )}

          {this.props.color && (
            <>
              <TextStrong>{this.props.colorName}</TextStrong>
              <Color>
                {this.props.color.map((elem: Attribute) => (
                  <ColorSquare
                    key={elem.id}
                    theme={
                      this.props.selectedColor === elem.id
                        ? { main: elem.value, border: "3px solid #5ECE7B" }
                        : { main: elem.value }
                    }
                    onClick={() => this.props.setSelectedColor(elem.id)}
                  />
                ))}
              </Color>
            </>
          )}

          <TextStrong>Price:</TextStrong>
          {this.props.prices.map((el: Price) =>
            el.currency.label === this.props.currency ? (
              <PriceWrap key={el.currency.label}>
                {el.currency.symbol} {el.amount}
              </PriceWrap>
            ) : null
          )}
          <Button
            onClick={() =>
              this.props.setCartItems({
                product: this.props.product,
                quantityProduct: 1,
              })
            }
          >
            Add to Cart
          </Button>
          <Description>{parse(this.props.description)}</Description>
        </Action>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  id: state.product.id,
  name: state.product.name,
  inStock: state.product.inStock,
  gallery: state.product.gallery,
  description: state.product.description,
  category: state.product.category,
  attributes: state.product.attributes,
  prices: state.product.prices,
  brand: state.product.brand,
  cart: state.cart,
  product: state.product,
  currency: state.currentCurrency.label,
  selectedCopacity: state.product.selectedCopacity,
  selectedColor: state.product.selectedColor,
  selectedSize: state.product.selectedSize,
});

let WithUrlDataComponent = withHocDescription(ProductDescription);

export default connect(mapStateToProps, {
  getProductThunk,
  setCartItems,
  setSelectedColor,
  setSelectedCopacity,
  setSelectedSize,
})(WithUrlDataComponent);

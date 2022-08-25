import React from "react";
import {
  Action,
  AttributeSizeWrap,
  BrandName,
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
  ProductName,
  Wrapper,
  AttributeCopacityWrap,
  AttributeColorWrap,
  buttonSize,
  colorSquare,
} from "../../styles/productDescription.styles";
import { connect } from "react-redux";
import { Attribute, Data, Price } from "../../storeg/interfaces";
import { withHocDescription } from "../hocs/productDescriptionHoc";
import parse from "html-react-parser";
import { getProductThunk } from "../../storeg/thunks";
import { setCartItems, setSelectedAttribute } from "../../storeg/dataSlice";
import { PropsDescription, StateDescription } from "./interfaces";
import { FromAttribute } from "../enums";

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
          <BrandName>{this.props.brand}</BrandName>
          <ProductName>{this.props.name}</ProductName>

          {this.props.size[0] && (
            <AttributeSizeWrap>
              <TextStrong>{this.props.sizeName + ":"}</TextStrong>
              <Size>
                {this.props.size.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.selectedSize === elem.id
                        ? {
                            background: buttonSize.background,
                            color: buttonSize.color,
                          }
                        : null
                    }
                    key={elem.id}
                    onClick={() =>
                      this.props.setSelectedAttribute({
                        attributId: elem.id,
                        name: FromAttribute.size,
                      })
                    }
                  >
                    {elem.value}
                  </ButtonSize>
                ))}
              </Size>
            </AttributeSizeWrap>
          )}
          {this.props.capacity[0] && (
            <AttributeCopacityWrap>
              <TextStrong>{this.props.capacityName + ":"}</TextStrong>
              <Size>
                {this.props.capacity.map((elem: Attribute) => (
                  <ButtonSize
                    theme={
                      this.props.selectedCopacity === elem.id
                        ? {
                            background: buttonSize.background,
                            color: buttonSize.color,
                          }
                        : null
                    }
                    key={elem.id}
                    onClick={() =>
                      this.props.setSelectedAttribute({
                        attributId: elem.id,
                        name: FromAttribute.capacity,
                      })
                    }
                  >
                    {elem.displayValue}
                  </ButtonSize>
                ))}
              </Size>
            </AttributeCopacityWrap>
          )}

          {this.props.color[0] && (
            <AttributeColorWrap>
              <TextStrong>{this.props.colorName + ":"}</TextStrong>
              <Color>
                {this.props.color.map((elem: Attribute) => (
                  <ColorSquare
                    key={elem.id}
                    theme={
                      this.props.selectedColor === elem.value
                        ? { main: elem.value, border: colorSquare.border }
                        : { main: elem.value }
                    }
                    onClick={() =>
                      this.props.setSelectedAttribute({
                        attributId: elem.value,
                        name: FromAttribute.color,
                      })
                    }
                  />
                ))}
              </Color>
            </AttributeColorWrap>
          )}

          <TextStrong>Price:</TextStrong>
          {this.props.prices.map((el: Price) =>
            el.currency.label === this.props.currency ? (
              <PriceWrap key={el.currency.label}>
                {el.currency.symbol}
                {el.amount}
              </PriceWrap>
            ) : null
          )}
          <Button
            disabled={this.props.inStock ? true : false}
            onClick={() =>
              this.props.setCartItems({
                product: this.props.product,
                quantityProduct: 1,
              })
            }
          >
            {this.props.inStock ? "Out of stock" : "Add to Cart"}
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
  setSelectedAttribute,
})(WithUrlDataComponent);

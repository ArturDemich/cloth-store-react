import React, { Component } from "react";
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
  Price,
  Size,
  TextStrong,
  Title,
  Wrapper,
} from "../../styles/productDescription.styles";
import Image from "../../styles/icon/Image.png";
import { connect } from "react-redux";
import { Data } from "../../storeg/interfaces";
import { useLocation } from "react-router-dom";
import { withHocDescription } from "../hocs/productDescriptionHoc";

class ProductDescription extends React.Component<any, any> {
  render() {
    console.log("props", this.props);
    return (
      <Wrapper>
        <Images>
          {this.props.lacation.gallery.map((el: string) => (
            <Img>
              <img src={el} width="80" height="80" alt="image" />
            </Img>
          ))}
        </Images>
        <MainImage>
          <img
            src={this.props.lacation.gallery[0]}
            width="610"
            height="510"
            alt="MainImage"
          />
        </MainImage>

        <Action>
          <Title>{this.props.lacation.name}</Title>
          <p>{this.props.lacation.brand}</p>
          <TextStrong>Size:</TextStrong>
          <Size>
            <ButtonSize>S</ButtonSize>
            <ButtonSize>M</ButtonSize>
            <ButtonSize>L</ButtonSize>
            <ButtonSize>xl</ButtonSize>
          </Size>
          <TextStrong>Color:</TextStrong>
          <Color>
            <ColorSquare />
            <ColorSquare />
            <ColorSquare />
          </Color>
          <TextStrong>Price:</TextStrong>
          <Price>{this.props.lacation.prices[0].amount}</Price>
          <Button>Add to Cart</Button>
          <Description>{this.props.lacation.description}</Description>
        </Action>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  /* categoryName: state.category.name,
  products: state.category.products,
  inputName: state.categoruInputName,
  name: "tech", */
});

let WithUrlDataComponent = withHocDescription(ProductDescription);

export default connect(mapStateToProps, { useLocation })(WithUrlDataComponent);

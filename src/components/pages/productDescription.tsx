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

class ProductDescription extends Component {
  render() {
    return (
      <Wrapper>
        <Images>
          <Img>
            <img src={Image} width="80" height="80" alt="image" />
          </Img>
          <Img>
            <img src={Image} width="80" height="80" alt="image" />
          </Img>
          <Img>
            <img src={Image} width="80" height="80" alt="image" />
          </Img>
        </Images>
        <MainImage>
          <img src={Image} width="610" height="510" alt="image" />
        </MainImage>

        <Action>
          <Title>Apolo</Title>
          <p>Running Short</p>
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
          <Price>123.00</Price>
          <Button>Add to Cart</Button>
          <Description>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </Description>
        </Action>
      </Wrapper>
    );
  }
}

export default ProductDescription;

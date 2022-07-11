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
  Price,
  Size,
  TextStrong,
  Title,
  Wrapper,
} from "../../styles/productDescription.styles";
import { connect } from "react-redux";
import { Data } from "../../storeg/interfaces";
import { withHocDescription } from "../hocs/productDescriptionHoc";
import parse from "html-react-parser";
import { getProductThunk } from "../../storeg/thunks";

class ProductDescription extends React.Component<any, any> {
  componentDidMount() {
    this.props.getProductThunk(this.props.params.productId);
  }

  parse = require("html-react-parser");
  render() {
    console.log("props", this.props);
    return (
      <Wrapper>
        <Images>
          {this.props.gallery.map((el: string) => (
            <Img key={el}>
              <img src={el} width="80" height="80" alt="image" />
            </Img>
          ))}
        </Images>
        <MainImage>
          <img
            src={this.props.gallery[0]}
            width="610"
            height="510"
            alt="MainImage"
          />
        </MainImage>

        <Action>
          <Title>{this.props.name}</Title>
          <p>{this.props.brand}</p>
          {this.props.attributtesName && (
            <TextStrong>{this.props.attributtesName}</TextStrong>
          )}
          <Size>
            {this.props.size &&
              this.props.size.map((size: any) => (
                <ButtonSize key={size.id}>{size.displayValue}</ButtonSize>
              ))}
          </Size>
          <TextStrong>Color:</TextStrong>
          <Color>
            <ColorSquare theme={{ main: "royalblue" }} />
            <ColorSquare />
            <ColorSquare />
          </Color>
          <TextStrong>Price:</TextStrong>
          <Price>{this.props.lacation.prices[0].amount}</Price>
          <Button>Add to Cart</Button>
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
});

let WithUrlDataComponent = withHocDescription(ProductDescription);

export default connect(mapStateToProps, { getProductThunk })(
  WithUrlDataComponent
);

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
import { setCartItems } from "../../storeg/dataSlice";

class ProductDescription extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      image: this.props.gallery[0],
    };
  }
  componentDidMount() {
    this.props.getProductThunk(this.props.params.productId);
  }
  componentDidUpdate(prevState: any) {
    if (prevState !== this.props) {
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
            <Img key={el}>
              <img
                src={el}
                width="80"
                height="80"
                alt="image"
                onClick={(el) =>
                  this.setState({ image: el.currentTarget.currentSrc })
                }
              />
            </Img>
          ))}
        </Images>
        <MainImage>
          <img
            src={this.state.image}
            width="610"
            height="510"
            alt="MainImage"
          />
        </MainImage>

        <Action>
          <Title>{this.props.name}</Title>
          <p>{this.props.brand}</p>

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
                  <ButtonSize
                    key={elem.id}
                    onClick={() => console.log(this.props.cart)}
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
                {this.props.color.map((elem: any) => (
                  <ColorSquare key={elem.id} theme={{ main: elem.value }} />
                ))}
              </Color>
            </>
          )}

          <TextStrong>Price:</TextStrong>
          <Price>{this.props.location.prices[0].amount}</Price>
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
});

let WithUrlDataComponent = withHocDescription(ProductDescription);

export default connect(mapStateToProps, { getProductThunk, setCartItems })(
  WithUrlDataComponent
);

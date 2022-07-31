import React from "react";
import {
  CategoryName,
  GridContainer,
  Wrapper,
} from "../../styles/productList.styles";
import ProductCard from "../productCard";
import { connect } from "react-redux";
import { getCategoryThunk } from "../../storeg/thunks";
import { Data, Product, ProductInCart } from "../../storeg/interfaces";
import { Link } from "react-router-dom";
import { withHocList } from "../hocs/productListHoc";
import { link } from "../../styles/link.styles";
import { PropsProductList } from "./interfaces";

class ProductList extends React.Component<PropsProductList> {
  componentDidMount() {
    this.props.getCategoryThunk(this.props.params.categoryName);
  }
  componentDidUpdate(prevState: PropsProductList) {
    if (prevState.params.categoryName !== this.props.params.categoryName) {
      this.props.getCategoryThunk(this.props.params.categoryName);
    }
  }

  checkCart(props: string) {
    const existingProductIndex: number = this.props.productInCart.findIndex(
      (value: ProductInCart) => {
        return value.product.id === props;
      }
    );
    if (existingProductIndex === -1) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    //console.log("productList", this.props);
    return (
      <Wrapper>
        <CategoryName>{this.props.categoryName}</CategoryName>
        <GridContainer>
          {this.props.products.map((elem: Product) => (
            <Link
              style={link}
              key={elem.id.toString()}
              to={`/product-description/${elem.id}`}
              state={elem}
            >
              <ProductCard
                {...elem}
                inCart={this.checkCart(elem.id)}
                currency={this.props.currentCurrency}
              />
            </Link>
          ))}
        </GridContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: Data) => ({
  categoryName: state.category.name,
  products: state.category.products,
  inputName: state.categoryInputName,
  productInCart: state.cart.products,
  currentCurrency: state.currentCurrency,
  name: "tech",
});

let WithUrlProductList = withHocList(ProductList);

export default connect(mapStateToProps, { getCategoryThunk })(
  WithUrlProductList
);

import React from "react";
import {
  CategoryName,
  GridContainer,
  Wrapper,
} from "../../styles/productList.styles";
import ProductCard from "../productCard";
import { connect } from "react-redux";
import { getCategoryThunk } from "../../storeg/thunks";
import { Data, Product } from "../../storeg/interfaces";
import { NavLink } from "react-router-dom";
import { withHocList } from "../hocs/productListHoc";

class ProductList extends React.Component<any, any> {
  componentDidMount() {
    this.props.getCategoryThunk(this.props.params.categoryName);
  }
  componentDidUpdate(prevState: any) {
    if (prevState.params.categoryName !== this.props.params.categoryName) {
      this.props.getCategoryThunk(this.props.params.categoryName);
    }
  }
  render() {
    console.log("productList", this.props.params);
    return (
      <Wrapper>
        <CategoryName>{this.props.categoryName}</CategoryName>
        <GridContainer>
          {this.props.products.map((elem: Product) => (
            <NavLink
              key={elem.id.toString()}
              to={`/product-description/${elem.id}`}
              state={elem}
            >
              <ProductCard {...elem} />
            </NavLink>
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
  name: "tech",
});

let WithUrlProductList = withHocList(ProductList);

export default connect(mapStateToProps, { getCategoryThunk })(
  WithUrlProductList
);

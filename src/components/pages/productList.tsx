import React from "react";
import { GridContainer, Wrapper } from "../../styles/productList.styles";
import ProductCard from "../productCard";
import { Data } from "../../storeg/dataSlice";
import { connect } from "react-redux";
import { getCategoryThunk } from "../../storeg/thunks";
import { Product } from "../../storeg/types";

class ProductList extends React.Component<any, any> {
  componentWillUnmount() {}
  componentDidMount() {
    this.props.getCategoryThunk();
  }
  render() {
    return (
      <Wrapper>
        <h1> {this.props.categoryName} </h1>
        <GridContainer>
          {this.props.products.map((elem: Product) => (
            <ProductCard {...elem} key={elem.id.toString()} />
          ))}
        </GridContainer>
      </Wrapper>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  categoryName: state.category.name,
  products: state.category.products,
});

export default connect(mapStateToProps, { getCategoryThunk })(ProductList);

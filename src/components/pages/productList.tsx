import React from "react";
import { GridContainer, Wrapper } from "../../styles/productList.styles";
import ProductCard from "../productCard";
import { connect } from "react-redux";
import { getCategoryThunk } from "../../storeg/thunks";
import { Data, Product } from "../../storeg/interfaces";
import { GET_CATEGORY } from "../../services/queries";

class ProductList extends React.Component<any, any> {
  componentDidUpdate(prevState: any) {
    if (prevState.inputName !== this.props.inputName) {
      this.props.getCategoryThunk(this.props.inputName);
    }
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
  inputName: state.categoruInputName,
  name: "tech",
});

export default connect(mapStateToProps, { getCategoryThunk })(ProductList);

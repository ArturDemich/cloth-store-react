import { ApolloProvider } from "@apollo/client";
import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router";
import NavBar from "./components/navBar";
import CartPage from "./components/pages/cartPage";
import ProductDescription from "./components/pages/productDescription";
import ProductList from "./components/pages/productList";
import { apolloClient } from "./graphql";
import { Wrapper } from "./styles/app.stales";
import { getCategoryThunk } from "./storeg/thunks";
import { Data } from "./storeg/interfaces";

class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.getCategoryThunk(this.props.name);
  }
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Wrapper>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route
              path="/product-description"
              element={<ProductDescription />}
            />
            <Route path="/product-cart" element={<CartPage />} />
          </Routes>
        </Wrapper>
      </ApolloProvider>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  categoriesName: state.categories,
  name: "all",
});

export default connect(mapStateToProps, { getCategoryThunk })(App);

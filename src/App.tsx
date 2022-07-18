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
import { getCategoryThunk, getCategoriesNameThunk } from "./storeg/thunks";
import { Data } from "./storeg/interfaces";

class App extends React.Component<any, any> {
  render() {
    // console.log("App", this.props.categoriesName);
    return (
      <ApolloProvider client={apolloClient}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/:categoryName" element={<ProductList />} />
              <Route
                path="/product-description/:productId"
                element={<ProductDescription />}
              />
              <Route path="/product-cart" element={<CartPage />} />
            </Route>
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

export default connect(mapStateToProps, {
  getCategoryThunk,
  getCategoriesNameThunk,
})(App);

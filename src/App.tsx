import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/navBar";
import CartPage from "./components/pages/cartPage";
import ProductDescription from "./components/pages/productDescription";
import ProductList from "./components/pages/productList";
import { apolloClient } from "./graphql";
import { Wrapper } from "./styles/app.stales";

class App extends React.Component {
  render() {
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

export default App;

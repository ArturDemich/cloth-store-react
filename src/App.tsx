import React from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/navBar";
import CartPage from "./components/pages/cartPage";
import ProductDescription from "./components/pages/productDescription";
import ProductList from "./components/pages/productList";
import { Wrapper } from "./styles/app.stales";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-description" element={<ProductDescription />} />
          <Route path="/product-cart" element={<CartPage />} />
        </Routes>
      </Wrapper>
    );
  }
}

export default App;

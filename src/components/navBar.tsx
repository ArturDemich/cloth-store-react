import React from "react";
import {
  Actions,
  Button,
  NavigationBar,
  Header,
} from "../styles/navBar.styles";
import brandIcon from "../styles/icon/brandIcon.svg";
import $$ from "../styles/icon/$$.svg";
import emptyCart from "../styles/icon/emptyCart.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoriesNameThunk } from "../storeg/thunks";
import { Data } from "../storeg/interfaces";
import { withHocNavBar } from "./hocs/navBarHoc";
import MiniCart from "./miniCart";
import { Modal } from "react-overlays";
import { Backdrop, ModalMiniCart } from "../styles/miniCart.styles";

class NavBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMiniCart: false,
    };
  }
  componentDidMount() {
    this.props.getCategoriesNameThunk();
  }
  renderBackdrop = (props: any) => <Backdrop {...props} />;

  render() {
    // console.log("NavBar", this.props.categoriesName);

    return (
      <>
        <Header>
          <NavigationBar>
            {this.props.categoriesName.map((elem: any) => (
              <NavLink key={elem.name} to={`/${elem.name}`}>
                <Button>{elem.name}</Button>
              </NavLink>
            ))}
          </NavigationBar>

          <img src={brandIcon} alt="brandIcon" width="41" height="41" />
          <Actions>
            <img src={$$} alt="$$img" />
            {/* <Link to="/product-cart">
              <img src={emptyCart} alt="emptyCart" />
            </Link> */}
            <img
              src={emptyCart}
              alt="emptyCart"
              onClick={() => this.setState({ showMiniCart: true })}
            />
            <ModalMiniCart
              show={this.state.showMiniCart}
              renderBackdrop={this.renderBackdrop}
              onHide={() => this.setState({ showMiniCart: false })}
            >
              <MiniCart />
            </ModalMiniCart>
          </Actions>
        </Header>

        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  categoriesName: state.categories,
  categoruInputName: state.categoryInputName,
});

let withHoc = withHocNavBar(NavBar);

export default connect(mapStateToProps, {
  getCategoriesNameThunk,
})(withHoc);

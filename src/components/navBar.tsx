import React from "react";
import {
  Actions,
  Button,
  NavigationBar,
  Header,
  ImageCart,
  BadgeCart,
} from "../styles/navBar.styles";
import { link } from "../styles/link.styles";
import brandIcon from "../styles/icon/brandIcon.svg";
import emptyCart from "../styles/icon/emptyCart.svg";
import { NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoriesNameThunk } from "../storeg/thunks";
import { Data } from "../storeg/interfaces";
import { withHocNavBar } from "./hocs/navBarHoc";
import MiniCart from "./miniCart";
import { Backdrop, ModalMiniCart } from "../styles/miniCart.styles";
import DropdownMenu from "./dropdownMenu";

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
              <NavLink style={link} key={elem.name} to={`/${elem.name}`}>
                <Button>{elem.name}</Button>
              </NavLink>
            ))}
          </NavigationBar>

          <img src={brandIcon} alt="brandIcon" width="41" height="41" />
          <Actions>
            <DropdownMenu />

            <ImageCart
              theme={{ gallery: emptyCart }}
              onClick={() => this.setState({ showMiniCart: true })}
            >
              {this.props.quantityInCart !== 0 && (
                <BadgeCart>{this.props.quantityInCart}</BadgeCart>
              )}
            </ImageCart>

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
  quantityInCart: state.cart.quantity,
});

let withHoc = withHocNavBar(NavBar);

export default connect(mapStateToProps, {
  getCategoriesNameThunk,
})(withHoc);

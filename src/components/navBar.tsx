import React from "react";
import {
  Actions,
  Button,
  NavigationBar,
  Header,
  ImageCart,
  BadgeCart,
} from "../styles/navBar.styles";
import { link } from "../styles/navBar.styles";
import brandIcon from "../styles/icon/brandIcon.svg";
import emptyCart from "../styles/icon/emptyCart.svg";
import { NavLink, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoriesNameThunk } from "../storeg/thunks";
import { setTottalCart } from "../storeg/dataSlice";
import { Categories, Data } from "../storeg/interfaces";
import { withHocNavBar } from "./hocs/navBarHoc";
import MiniCart from "./miniCart";
import { Backdrop, ModalMiniCart } from "../styles/miniCart.styles";
import DropdownMenu from "./dropdownMenu";
import { PropsNavBar, StateNavBar } from "./interfaces";

class NavBar extends React.Component<PropsNavBar, StateNavBar> {
  constructor(props: PropsNavBar) {
    super(props);
    this.state = {
      showMiniCart: false,
    };
  }
  componentDidMount() {
    this.props.getCategoriesNameThunk();
  }

  componentDidUpdate(prevState: PropsNavBar) {
    if (
      prevState.quantityInCart !== this.props.quantityInCart ||
      prevState.currentCurrency !== this.props.currentCurrency
    ) {
      this.props.setTottalCart(this.props.currentCurrency);
    }
  }

  renderBackdrop = (props: any) => <Backdrop {...props} />;
  hideModal = () => this.setState({ showMiniCart: false });

  render() {
    console.log("NavBar", this.props);

    return (
      <>
        <Header>
          <NavigationBar>
            {this.props.categoriesName.map((elem: Categories) => (
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
              onHide={this.hideModal}
            >
              <MiniCart hideModal={this.hideModal} />
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
  currentCurrency: state.currentCurrency.label,
});

//let withHoc = withHocNavBar(NavBar);

export default connect(mapStateToProps, {
  getCategoriesNameThunk,
  setTottalCart,
})(NavBar);

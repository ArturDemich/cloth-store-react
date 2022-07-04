import React from "react";
import { Actions, Button, Navigation, Wrapper } from "../styles/navBar.stales";
import brandIcon from "../styles/icon/brandIcon.svg";
import $$ from "../styles/icon/$$.svg";
import emptyCart from "../styles/icon/emptyCart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCategoriesNameThunk } from "../storeg/thunks";
import { Data } from "../storeg/interfaces";
import { setCategoryName } from "../storeg/dataSlice";

class NavBar extends React.Component<any, any> {
  componentDidMount() {
    this.props.getCategoriesNameThunk();
  }

  setInputCategoryName = (event: any) => {
    this.props.setCategoryName(event.target.value);
  };

  render() {
    return (
      <Wrapper>
        <Navigation>
          {this.props.categoriesName.map((elem: any) => (
            <Button
              key={elem.name}
              value={elem.name}
              onClick={this.setInputCategoryName}
            >
              {elem.name}
            </Button>
          ))}
        </Navigation>

        <img src={brandIcon} alt="brandIcon" width="41" height="41" />
        <Actions>
          <img src={$$} alt="$$" />
          <Link to="/product-cart">
            <img src={emptyCart} alt="emptyCart" />
          </Link>
        </Actions>
      </Wrapper>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  categoriesName: state.categories,
});

export default connect(mapStateToProps, {
  getCategoriesNameThunk,
  setCategoryName,
})(NavBar);

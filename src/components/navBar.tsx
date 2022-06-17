import React from "react";
import { Actions, Button, Navigation, Wrapper } from "../styles/navBar.stales";
import brandIcon from "../styles/icon/brandIcon.svg";
import $$ from "../styles/icon/$$.svg";
import emptyCart from "../styles/icon/emptyCart.svg";

class NavBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navigation>
          <Button as="button"> WOMEN </Button>
          <Button>MEN</Button>
          <Button>KIDS</Button>
        </Navigation>

        <img src={brandIcon} alt="brandIcon" width="41" height="41" />
        <Actions>
          <img src={$$} alt="$$" />
          <img src={emptyCart} alt="emptyCart" />
        </Actions>
      </Wrapper>
    );
  }
}

export default NavBar;

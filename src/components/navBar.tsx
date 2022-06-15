import React from "react";
import { Button, Navigation, Wrapper } from "../styles/navBar.stales";
import brandIcon from "../styles/icon/brandIcon.svg";

class NavBar extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navigation>
          <Button> WOMEN </Button>
          <Button>MEN</Button>
          <Button>KIDS</Button>
        </Navigation>

        <img src={brandIcon} alt="brandIcon" />
        <span>$</span>
      </Wrapper>
    );
  }
}

export default NavBar;

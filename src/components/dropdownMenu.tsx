import React from "react";
import UpArrow from "../styles/icon/UpArrow.svg";
import DownArrow from "../styles/icon/DownArrow.svg";
import $ from "../styles/icon/$.svg";
import {
  Arrow,
  Dropdown,
  DropdownButton,
  DropdownContetn,
  DropdownItem,
  LabelCurrencies,
} from "../styles/dropdownMenu.styles";
import { connect } from "react-redux";
import { Data } from "../storeg/interfaces";

class DropdownMenu extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  render() {
    return (
      <Dropdown>
        <DropdownButton
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          <LabelCurrencies theme={{ label: $ }} />
          <Arrow theme={{ arrow: this.state.isActive ? DownArrow : UpArrow }} />
        </DropdownButton>
        {this.state.isActive && (
          <DropdownContetn>
            {this.props.currencies.map((elem: any) => (
              <DropdownItem key={elem.currency.label}>
                {elem.currency.symbol} {elem.currency.label}
              </DropdownItem>
            ))}
          </DropdownContetn>
        )}
      </Dropdown>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  currencies: state.product.prices,
});

export default connect(mapStateToProps, null)(DropdownMenu);

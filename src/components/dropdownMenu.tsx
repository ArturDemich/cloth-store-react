import React from "react";
import { getCurrencyThunk } from "../storeg/thunks";
import { setCurrentCurrency } from "../storeg/dataSlice";
import UpArrow from "../styles/icon/UpArrow.svg";
import DownArrow from "../styles/icon/DownArrow.svg";
import {
  Arrow,
  Dropdown,
  DropdownButton,
  DropdownContetn,
  DropdownItem,
  LabelCurrencies,
} from "../styles/dropdownMenu.styles";
import { connect } from "react-redux";
import { Currency, Data } from "../storeg/interfaces";
import { PropsDropdownMenu, StateDropdownMenu } from "./interfaces";

class DropdownMenu extends React.Component<
  PropsDropdownMenu,
  StateDropdownMenu
> {
  constructor(props: PropsDropdownMenu) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  componentDidMount() {
    this.props.getCurrencyThunk();
  }

  render() {
    return (
      <Dropdown>
        <DropdownButton onClick={this.props.openCurrency}>
          <LabelCurrencies>{this.props.currentCurrency.symbol}</LabelCurrencies>
          <Arrow
            theme={{ arrow: this.props.showCurrency ? UpArrow : DownArrow }}
          />
        </DropdownButton>
        {this.props.showCurrency && (
          <DropdownContetn>
            {this.props.currencies.map((elem: Currency) => (
              <DropdownItem
                key={elem.label}
                onClick={() =>
                  this.props.setCurrentCurrency(elem) &&
                  this.props.openCurrency()
                }
              >
                {elem.symbol} {elem.label}
              </DropdownItem>
            ))}
          </DropdownContetn>
        )}
      </Dropdown>
    );
  }
}

let mapStateToProps = (state: Data) => ({
  currencies: state.currencies,
  currentCurrency: state.currentCurrency,
});

export default connect(mapStateToProps, {
  getCurrencyThunk,
  setCurrentCurrency,
})(DropdownMenu);

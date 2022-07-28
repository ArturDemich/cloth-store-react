import React from "react";
import { getCurrencyThunk } from "../storeg/thunks";
import { setCurrentCurrency } from "../storeg/dataSlice";
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

  componentDidMount() {
    this.props.getCurrencyThunk();
  }

  render() {
    return (
      <Dropdown>
        <DropdownButton
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          <LabelCurrencies>{this.props.currentCurrency.symbol}</LabelCurrencies>
          <Arrow theme={{ arrow: this.state.isActive ? DownArrow : UpArrow }} />
        </DropdownButton>
        {this.state.isActive && (
          <DropdownContetn>
            {this.props.currencies.map((elem: any) => (
              <DropdownItem
                key={elem.label}
                onClick={() =>
                  this.props.setCurrentCurrency(elem) &&
                  this.setState({ isActive: !this.state.isActive })
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

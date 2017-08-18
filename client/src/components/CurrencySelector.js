import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CurrencySelector extends Component {
  handleChange = (event) => null;
  render() {
    const { currencies, currency } = this.props;
    const { handleChange } = this;
    return (<select value={currency} onChange={handleChange} >
      {currencies.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    )
  }
}

CurrencySelector.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  currency: PropTypes.string,
}
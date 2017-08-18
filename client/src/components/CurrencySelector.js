import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputGetData } from '../actions'
import PropTypes from 'prop-types'

class CurrencySelector extends Component {
  handleChange = (event) => {
    const { update } = this.props;
    update({ currency: event.target.value})
  }
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

const mapStateToProps = state =>
  ({
    currency: state.inputs.currency,
    currencies: state.currencies,
  });

const mapDispatchToProps = dispatch =>
  ({
    update: (currency) => dispatch(updateInputGetData(currency)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
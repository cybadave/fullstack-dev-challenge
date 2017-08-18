import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PeriodSelector extends Component {
  handleChange = (event) => null;
  render() {
    const options = ['Monthly','Quarterly','Annually'];
    const values = [12,4,1];
    const { interval } = this.props;
    const { handleChange } = this;
    return (<select value={interval} onChange={handleChange} >
        {options.map((c,i) => <option key={c} value={values[i]}>{c}</option>)}
      </select>
    )
  }
}

PeriodSelector.propTypes = {
  interval: PropTypes.number,
}
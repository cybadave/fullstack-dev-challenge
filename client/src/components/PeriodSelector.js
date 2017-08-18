import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputGetData } from '../actions'
import PropTypes from 'prop-types'

class PeriodSelector extends Component {
  handleChange = (event) => {
    const { update } = this.props;
    update({ compoundingPeriodsPerYear: event.target.value})
  }
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

const mapStateToProps = state =>
  ({
    interval: state.inputs.compoundingPeriodsPerYear,
  });

const mapDispatchToProps = dispatch =>
  ({
    update: (periods) => dispatch(updateInputGetData(periods)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(PeriodSelector);
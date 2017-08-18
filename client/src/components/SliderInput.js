import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputGetData } from '../actions'
import PropTypes from 'prop-types'
import './SliderInput.css'

class SliderInput extends Component {

	handleChange(e) {
		const value = e.target.value;
    this.props.update({ interestRate: (e.target.value / 100) });
	}

	render() {
		const { value } = this.props;

		return (
			<div className="fmz-slider">
				<p>{value}%</p>
				<input type="range"
					value={value}
					min={0}
					max={10}
					step={0.25}
					onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}

SliderInput.propTypes = {
	value: PropTypes.number
}

const mapStateToProps = state =>
  ({
    value: (state.inputs.interestRate * 100),
  });

const mapDispatchToProps = dispatch =>
  ({
    update: (rate) => dispatch(updateInputGetData(rate)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SliderInput);

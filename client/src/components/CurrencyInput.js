import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateInputGetData } from '../actions'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

class CurrencyInput extends Component {
	constructor(props) {
		super(props);
	}
	handleChange(e) {
    const { datakey } = this.props;
		this.props.update({ [datakey]:e.target.value });
	}
	render() {
		const { value } = this.props
		return (
			<div className="currency-input" >
				<span>£</span>
				<input type="text"
					value={value}
					onChange={this.handleChange.bind(this)}
					/>
			</div>
		)
	}
}

CurrencyInput.propTypes = {
	value: PropTypes.number,
	key: PropTypes.string,
}

const mapStateToProps = (state, ownProps) =>
  ({
    value: Number(state.inputs[ownProps.datakey]),
  });

const mapDispatchToProps = dispatch =>
  ({
    update: (value) => dispatch(updateInputGetData(value)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInput);

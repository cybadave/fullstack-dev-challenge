import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import CurrencyInput from './components/CurrencyInput'
import SliderInput from './components/SliderInput'
import DisplayGraph from './components/DisplayGraph'
import PeriodSelector from './components/PeriodSelector'
import CurrencySelector from './components/CurrencySelector'
import './App.css';

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div className="App">
					<div className="header-banner">
						<h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
					</div>
					<div className="financial-inputs">
						<p className="input-label">How much have you saved?</p>
						<CurrencyInput datakey="principal" />

						<p className="input-label">How much will you save each month?</p>
						<CurrencyInput datakey="periodicDeposit" />

						<p className="input-label">How many times per year is interest compounded?</p>
						<PeriodSelector />

						<p className="input-label">What currency would you like your results in?</p>
						<CurrencySelector />

						<p className="input-label">How much interest will you earn per year?</p>
						<SliderInput />



					</div>
					<div className="financial-display">
						{/*We have included some sample data here, you will need to replace this
						with your own. Feel free to change the data structure if you wish.*/}
						<DisplayGraph data={[
							{
								month: 1,
								amount:500
							},
							{
								month: 2,
								amount:700
							},
							{
								month: 3,
								amount:1000
							},
							{
								month: 4,
								amount:1500
							}
						]}/>
					</div>
				</div>
			</Provider>
    );
  }
}

export default App;

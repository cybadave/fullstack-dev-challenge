import { combineReducers } from 'redux';
import currencies from './currencies';
import data from './data';
import inputs from './inputs';

const calcApp = combineReducers({
  currencies,
  data,
  inputs
});

export default calcApp

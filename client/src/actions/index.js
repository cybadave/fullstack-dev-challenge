import { memoize } from 'redux-memoize';
import CalcAPI from '../utils/CalcAPI';
const calcAPI = new CalcAPI();

export const updateInput = inputs =>
  ({
    type: 'UPDATE_INPUT',
    inputs
  });

export const addData = data =>
  ({
    type: 'ADD_DATA',
    data
  });

export const addCurrencies = currencies =>
  ({
    type: 'ADD_CURRENCIES',
    currencies
  });

export const loadData = (principal, periodicDeposit, compoundingPeriodsPerYear, interestRate, currency) =>
  (dispatch) =>
    calcAPI.perform(principal, periodicDeposit, compoundingPeriodsPerYear, interestRate, currency)
      .then((response) => response.json())
      .then((results) => {
        dispatch(addData(results.data));
        //dispatch(addCurrencies(results.currencies));
      })
      .catch((error) => console.log(error));

export const memoizeloadData = memoize({ ttl: 1000 }, loadData);

export const updateInputGetData = (inputs) => {
  return (dispatch, getState) => {
    dispatch(updateInput(inputs));
    const state = getState().inputs;
    dispatch(memoizeloadData(state.principal, state.periodicDeposit, state.compoundingPeriodsPerYear, state.interestRate, state.currency));
  };
};

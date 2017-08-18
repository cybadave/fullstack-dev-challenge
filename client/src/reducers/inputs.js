const data = (state = { principal = 0, periodicDeposit = 0, compoundingPeriodsPerYear = 12, interestRate = 0.04, currency = 'GBP' }, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, action };
    default:
      return state;
  }
};

export default data

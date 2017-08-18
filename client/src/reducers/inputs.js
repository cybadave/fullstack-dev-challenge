const data = (state = { principal: 0, periodicDeposit: 0, compoundingPeriodsPerYear: 12, interestRate: 0.04, currency: 'GBP' }, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      console.log({ ...state, [Object.keys(action.inputs)[0]]: action.inputs[Object.keys(action.inputs)[0]] });
      return { ...state, [Object.keys(action.inputs)[0]]: action.inputs[Object.keys(action.inputs)[0]] };
    default:
      return state;
  }
};

export default data

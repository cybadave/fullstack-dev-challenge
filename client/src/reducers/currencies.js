const currencies = (state = ['GBP','AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','HKD','HRK','HUF','IDR','ILS','INR','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR','EUR'], action) => {
  switch (action.type) {
    case 'ADD_CURRENCIES':
      return action.currencies;
    default:
      return state;
  }
};

export default data

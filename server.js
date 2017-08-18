const express = require('express');
const fetch = require('node-fetch');
const iCalc = require('./interestCalculator');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', function(req, res) {
  const principal = req.query.principal;
  const periodicDeposit = req.query.periodicDeposit;
  const compoundingPeriodsPerYear = req.query.compoundingPeriodsPerYear;
  const interestRate = req.query.interestRate;
  const currency = req.query.currency;
  fetch('http://api.fixer.io/latest?base=GBP', { method: 'get' }).then((response) => response.json())
    .then((results) => {
      const data = iCalc.montlyRollup(principal, periodicDeposit, compoundingPeriodsPerYear, interestRate);
      const multiplier = (currency === 'GBP') ? 1 : results.rates[currency];
      const transformedData = data.map((dat, i) => ({ month: i+1, amount: dat * multiplier }));
      res.send({
        currency: currency,
        currencies: Object.keys(results.rates).unshift(currency),
        data: transformedData,
      });
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

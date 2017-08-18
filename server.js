const express = require('express');
const iCalc = require('./interestCalculator');

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/', function(req, res) {
  const principal = req.query.principal;
  const compoundingPeriodsPerYear = req.query.compoundingPeriodsPerYear;
  const interestRate = req.query.interestRate;
  res.send(iCalc.montlyRollup(principal, compoundingPeriodsPerYear, interestRate));
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

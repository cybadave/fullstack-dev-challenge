const assert = require('assert');
const iCalc = require('./interestCalculator');

describe('The compound interest with recurring deposit function', () => {
  it('calculates interest for a principal ammount which matches the recurring deposit', () => {
    assert.equal(780.3503722802869, iCalc.compoundInterestWithRecurringDeposit(1,12,0.01, 50));
  });
});

describe('The rollup function', () => {
  it('returns an aray of interest calculations over 50 years', () => {
    assert.equal(600, iCalc.montlyRollup(1,12,0.01, 50).length);
  });
});
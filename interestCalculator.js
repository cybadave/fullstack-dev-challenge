const compoundInterestWithRecurringDeposit =
  (principal, compoundingPeriodsPerYear, interestRate, years) => {
    const periodicInterestRate = interestRate / compoundingPeriodsPerYear;
    const compoundingPeriods = years * compoundingPeriodsPerYear;
    const periodicDeposit = principal;
    const reUse = Math.pow((periodicInterestRate + 1),compoundingPeriods);
    return principal * reUse + periodicDeposit * ((reUse -1 )/ periodicInterestRate) * (1 + periodicInterestRate);
  };

exports.compoundInterestWithRecurringDeposit = compoundInterestWithRecurringDeposit;

exports.montlyRollup =
  (principal, compoundingPeriodsPerYear, interestRate) => {
    let results = [];
    for (let i = 50; i > 0; i -= 1/12) {
      results.unshift(compoundInterestWithRecurringDeposit(principal, compoundingPeriodsPerYear, interestRate, i));
    }
    return results;
  };
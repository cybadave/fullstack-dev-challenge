export default class CalcAPI {
  constructor(){
    this.apiUrl = 'http://localhost:3001/';
  }
  perform = (principal, compoundingPeriodsPerYear, interestRate, currency = 'GBP') =>
    fetch(`${this.apiUrl}?principal=${principal}&compoundingPeriodsPerYear=${compoundingPeriodsPerYear}&interestRate=${interestRate}&currency=${currency}`, { method: 'get' });
}

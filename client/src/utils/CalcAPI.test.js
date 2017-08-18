import CalcAPI from './CalcAPI';

describe('The CaclAPI', () => {
  const calcAPI = new CalcAPI();
  it('calls the server for a calculation', () => {
    expect(calcAPI.perform(1,1,12,0.01).url.trim()).toEqual('http://localhost:3001/?principal=1&periodicDeposit=1&compoundingPeriodsPerYear=12&interestRate=0.01&currency=GBP');
  });
});

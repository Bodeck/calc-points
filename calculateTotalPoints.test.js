const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints',() => {
  describe('Basic test', () => {
    it('Should return number', () => {
      const actual = calculateTotalPoints(134, 'large', 120, [19.0,20.0,19.5,19.0,18.5],0.50,8);

      const expected = 137.3

      assert.equal(typeof(actual), typeof(expected));
    })
  })
  describe('Different hills', () => {
    it('Should work for "normal" hill', () => {
      const actual = calculateTotalPoints(106.5,'normal',98,[18.5,18.5,18.5,19.0,19.0],-13.5,6.4);
      
      const expected = 125.9;

      assert.equal(actual, expected);
    })

    it('Should work for "large" hill', () => {
      const actual = calculateTotalPoints(122.0, 'large', 120, [17.0,17.0,17.5,17.5,17.5],-4.9,0);

      const expected = 110.7;

      assert.equal(actual, expected);
    })

    it('Should work for "mamut" hill', () => {
      const actual = calculateTotalPoints(201.0, 'mamut', 200, [17.0,17.0,17.0,17.0,17.0],-0.9,0);
      const expected = 171.3;

      assert.equal(actual, expected);
    })
  })
})
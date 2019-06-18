const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  it('Should return some value when all args provided', () => {
    const actual = calculateDistancePoints(227.5, 'mamut', 200);
    const expected = 153.0;

    assert.equal(actual, expected);
  })
  describe('Different hills', () => {
    it('Should work for "normal" hill', () => {
      const actual = calculateDistancePoints(111.0,'normal',98);
      
      const expected = 86.0;

      assert.equal(actual, expected);
    })

    it('Should work for "large" hill', () => {
      const actual = calculateDistancePoints(134.0, 'large', 120);

      const expected = 85.2;

      assert.equal(actual, expected);
    })

    it('Should work for "mamut" hill', () => {
      const actual = calculateDistancePoints(227.5, 'mamut', 200);
      const expected = 153.0;

      assert.equal(actual, expected);
    })
  })
  describe('K-Point',() => {
    it('Should work distance below K-Point',() => {
      const actual = calculateDistancePoints(118, 'large', 120);

      const expected = 56.4

      assert.equal(actual, expected);
    })
    it('Should work distance above K-Point',() => {
      const actual = calculateDistancePoints(125,'large', 120);

      const expected = 69

      assert.equal(actual, expected);
    })
  })

})
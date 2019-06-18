const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe.skip('calculateStylePoints',()=>{
  it('Shold ignore higher and lower notes',()=>{
    const actual = calculateStylePoints([18.0,18.5,17.5,18.5,18.5]);
    
    const expected = 55;
    
    assert.equal(actual, expected);
  })
  it('Should ignore only one of max note if repetitive', ()=>{
    const actual = calculateStylePoints([18.0,18.5,17.5,18.5,18.5]);

    const expected = 55

    assert.equal(actual, expected);
  })
});
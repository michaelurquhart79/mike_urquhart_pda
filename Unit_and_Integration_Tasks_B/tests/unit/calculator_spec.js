var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add two numbers together', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 5)
  })

  it('should be able to subtract one number from another', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

  it('should be able to muiltiply two numbers together', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 15)
  })

  it('should be able to divide one number by another number', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 3)
  })

  it('should be able to concatenate multiple number clicks', function(){
    calculator.numberClick(7)
    calculator.numberClick(3)
    calculator.numberClick(0)
    calculator.numberClick(5)
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 7305)
  })

  it('should be able to chain multiple operations together', function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(8)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.numberClick(0)
    calculator.operatorClick('-')
    calculator.numberClick(9)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, -5)
  })

  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(9)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.numberClick(0)
    calculator.clearClick()
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.strictEqual(actual, 8)
  })

});

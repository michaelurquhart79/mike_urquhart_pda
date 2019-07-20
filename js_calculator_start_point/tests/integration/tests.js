var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the running total display when the number buttons are pushed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('425')
  })

  it('should update the display when adding 2 numbers', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('54')
  })

  it('should update the display when subtracting a number from another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('36')
  })

  it('should update the display when muitlipying two numbers together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number2')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('240')
  })

  it('should update the display when dividing one number by another', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

});

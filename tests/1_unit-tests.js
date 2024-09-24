const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
 // #1
 test('should correctly read a whole number input', function(){
  assert.isOk(convertHandler.getNum('5L'))
 })
// #2
 test('should correctly read a decimal number input', function(){
    assert.isOk(convertHandler.getNum('5.5L'))
   })
// #3
 test('should correctly read a fractional input', function(){
  assert.isOk(convertHandler.getNum('1/3L'))
 })
// #4
 test('should correctly default to a numerical input of 1 when no numerical input is provided', function(){
    assert.isOk(convertHandler.getNum('1/3.5L'))
   })
// #5
 test('should correctly return an error on a double-fraction', function(){
  assert.isNotOk(convertHandler.getNum('3/2/3L'))
 })
// #6
 test('should correctly default to a numerical input of 1 when no numerical input is provided', function(){
  assert.equal(convertHandler.getNum('L'),1)
 })
// #7
 test('should correctly read each valid input unit', function(){
    assert.isOk(convertHandler.getUnit('5L'))
   })
// #8
 test('should correctly return an error for an invalid input unit', function(){
  assert.isNotOk(convertHandler.getUnit('5LL'))
 })
// #9
 test('should return the correct return unit for each valid input unit', function(){
    assert.equal(convertHandler.getReturnUnit(convertHandler.getUnit('5L')),'gal')
   })
// #10
 test('should correctly return the spelled-out string unit for each valid input unit', function(){
  assert.equal(convertHandler.spellOutUnit('L'),'liters')
 })
// #11
 test('should correctly convert gal to L', function(){
    assert.equal(convertHandler.getReturnUnit('gal'),'L')
 })
// #12
 test('should correctly convert L to gal', function(){
    assert.equal(convertHandler.getReturnUnit('L'),'gal')
   })
// #13
 test('should correctly convert mi to km', function(){
    assert.equal(convertHandler.getReturnUnit('mi'),'km')
 })
// #14
 test('should correctly convert km to mi', function(){
    assert.equal(convertHandler.getReturnUnit('km'),'mi')
   })
// #15
 test('should correctly convert lbs to kg', function(){
    assert.equal(convertHandler.getReturnUnit('lbs'),'kg')
 })
 // #16
 test('should correctly convert kg to lbs', function(){
    assert.equal(convertHandler.getReturnUnit('kg'),'lbs')
 })
});
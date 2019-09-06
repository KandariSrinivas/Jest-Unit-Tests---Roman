const {convertToRoman, evaluateRoman, convertToInt} = require('./index.js');

describe('Test Case: Roman', function() {
  describe('Test Step: Test convertToRoman method', function() {
    var inputs = [3, 7, 11, 49, 83, 99, 101, 499, 504, 999, 4995];
    var Expected = ['III', 'VII', 'XI', 'XLIX', 'LXXXIII', 'XCIX', 'CI', 'CDXCIX', 'DIV', 'CMXCIX', 'MMMMCMXCV'];
    inputs.forEach((input,i) => {

      it(`Should verify for input ${input}`, function() {
        expect(convertToRoman(input)).toEqual(Expected[i]);
      });
    });

  });

  describe('Test Step: Test convertToInt method', function() {
    var Expected = [3, 7, 11, 49, 83, 99, 101, 499, 504, 999, 4995];
    var inputs = ['III', 'VII', 'XI', 'XLIX', 'LXXXIII', 'XCIX', 'CI', 'CDXCIX', 'DIV', 'CMXCIX', 'MMMMCMXCV'];
    inputs.forEach((input,i) => {

      it(`Should verify for input ${input}`, function() {
        expect(convertToInt(input)).toEqual(Expected[i]);
      });
    });

  });

  describe('Test Step: Test evaluateRoman method', function() {

    it("Should verify for input 'LXXXIII', 'XCIX', '+' ", function() {
      expect(evaluateRoman('LXXXIII', 'XCIX', '+')).toEqual('CLXXXII');
    });

    it("Should verify for invalid input 'LXXXIII', '+' ", function() {
      expect(evaluateRoman('LXXXIII', '+')).toEqual(undefined);
    });

    it("Should verify for invalid input 'LXXXIII', 'XCIX', '.' ", function() {
      expect(evaluateRoman('LXXXIII', '+')).toEqual(undefined);
    });

    it("Should verify for invalid input 'eef3', 'XCIX', '+' ", function() {
      expect(evaluateRoman('eef3', 'XCIX', '+')).toEqual(undefined);
    });
  });

});

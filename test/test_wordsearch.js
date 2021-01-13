const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch-2.js');

describe("#wordSearch()", function () {
  it("should return false if the word is not present | Not Present", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present | Horizontal", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present | Vertical Reverse", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['P', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['E', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['H', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'HELP');

    assert.isTrue(result);
  });
  it("should return true if the word is present | Diagonal", function () {
    const result = wordSearch([
      ['H', 'W', 'C', 'F', 'P', 'L', 'E', 'H'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'HELP');

    assert.isTrue(result);
  });

  it("should return true if the word is present | Horizontal Reverse", function () {
    const result = wordSearch([
      ['H', 'W', 'C', 'F', 'P', 'L', 'E', 'H'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'O', 'L', 'L', 'E', 'H'],
    ], 'HELLO');

    assert.isTrue(result);
  });

  it("should return true if the word is present | Vertical", function () {
    const result = wordSearch([
      ['N', 'W', 'C', 'F', 'P', 'L', 'E', 'H'],
      ['I', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['C', 'F', 'L', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'O', 'L', 'L', 'E', 'H'],
    ], 'NICE');

    assert.isTrue(result);
  });
});
const wordSearch = (letters, word) => {
  let reversedWord = word
    .split('')
    .reverse()
    .join('');

  // console.log(reversedWord);
  const horizontalJoin = letters.map(ls => ls.join(''));


  for (let i = 0; i < letters.length - 1; i++) {
    let subStr = '';
    for (let j = 0; j < letters[0].length + 1; j++) {
      subStr += letters[j][i];
    }
    if (subStr.includes(word) || subStr.includes(reversedWord)) {
      return true;
    }
  }

  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i].includes(word) || horizontalJoin[i].includes(reversedWord)) {
      return true;
    }
  }

  //DIAGONAL
  for (let array = 0; array < letters.length; array++) {
    for (let letter = 0; letter < letters[array].length; letter++) {
      if (letters[array][letter] === word[0] &&
        letter <= letters[array].length - word.length &&
        array <= letters[array].length - word.length) {
        let wordCheck = word[0];
        for (let i = 1; i < word.length; i++) {
          if (letters[array + i][letter + i] === word[i])
            wordCheck += letters[array + i][letter + i];
        }
        if (wordCheck === word) return true;
      }
    }
  }

  return false;
};

// console.log(wordSearch([
//   ['H', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['E', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['L', 'F', 'L', 'F', 'Q', 'U', 'A', 'L'],
//   ['P', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['P', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['J', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['H', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'HELP'));

module.exports = wordSearch;
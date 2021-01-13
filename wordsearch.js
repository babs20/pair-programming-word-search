const wordSearch = (letters, word) => {
    // const originalLetters = letters;
    const horizontalJoin = letters.map(ls => ls.join(''));
    // const horizontalJoinReverse = letters.map(ls => ls.reverse());

    for (let i = 0; i < letters.length - 1; i++) {
        let subStr = '';
        for (let j = 0; j < letters[0].length + 1; j++) {
            subStr += letters[j][i];
        }
        let subStrReverse = subStr.split('').reverse().join('');
        if (subStr.includes(word) || subStrReverse.includes(word)) {
            return true;
        }
    }

    for (let array = 0; array < letters.length; array++) {
        for (let letter = 0; letter < letters[array].length; letter++) {
            if (letters[array][letter] === word[0] && letter <= letters[array].length - word.length) {
                let wordCheck = word[0];
                for (let i = 1; i < word.length; i++) {
                    if (letters[array + i][letter + i] === word[i])
                        wordCheck += letters[array + i][letter + i];
                }
                if (wordCheck === word) return true;
            }
        }
    }

    for (let i = 0; i < horizontalJoin.length; i++) {
        if (horizontalJoin[i].includes(word) || horizontalJoinReverse[i].includes(word)) {
            return true;
        }
    }
    return false;
};

// console.log(wordSearch([
//   ['H', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'L', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'P', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['P', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['L', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['E', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['H', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'HELP'));

module.exports = wordSearch;
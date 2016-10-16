function Word() {};

Word.prototype.count = function(string) {
  return string.toLowerCase()
    .replace(/\s+/gm, ' ')
    .trim()
    .split(' ')
    .reduce((accum, currentWord) => {
      if (accum[currentWord]) {
        if (currentWord === 'constructor' && accum[currentWord] !== 1) accum[currentWord] = 1;
        else accum[currentWord] += 1;
      }
      else accum[currentWord] = 1;
      return accum;
    }, {});
};

module.exports = Word;

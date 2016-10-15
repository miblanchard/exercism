//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (!input.trim()) return 'Fine. Be that way!';
  if (yelling(input)) return 'Whoa, chill out!';
  if (input[input.length - 1] === '?') return 'Sure.';
  return 'Whatever.';
};
// return boolean if counts as yelling
function yelling(string) {
  const letters = /([^A-Za-z\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df])/g;
  const lettersOnly = string.replace(letters, '');
  if (!lettersOnly) return false;
  const capLetters = /([^A-Z\u00C4\u00D6\u00DC\u00df])/g;
  const capLettersOnly = lettersOnly.replace(capLetters, '');
  return lettersOnly.length === capLettersOnly.length;
}

module.exports = Bob;

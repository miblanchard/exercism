// Year constructor will return a new object with the isLeap method

var Year = function(year) {
  return Object.assign(this, { year });
};

Year.prototype.isLeap = function() {
  // return boolean if year is leap year
  // true if multiple of 4, false if multple of 100, true if multple of 400, false all others
  if (this.year % 400 === 0) return true;
  if (this.year % 100 === 0) return false;
  if (this.year % 4 === 0) return true;
  return false;
};

module.exports = Year;

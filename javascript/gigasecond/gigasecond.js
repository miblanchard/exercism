function Gigasecond(originalDate) {
  // Object.assign(this, { originalDate });
  this.originalDate = originalDate;
};

Gigasecond.prototype.date = function() {
  return new Date(Date.parse(this.originalDate) + 1000000000000);
}

module.exports = Gigasecond;

function Hamming(){};

Hamming.prototype.compute = function(strand1, strand2) {
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  return strand1.split('').reduce((accum, currentBase, index) => {
    return (strand2[index] !== currentBase) ? accum += 1 : accum;
  }, 0);
}

module.exports = Hamming;

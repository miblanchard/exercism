// given a DNA strand return it's matching RNA strand
function DnaTranscriber(){};

DnaTranscriber.prototype.toRna = function (DNA) {
  return DNA.split('').map((base, index, array) => {
    if ( base === 'G' ) return 'C';
    if ( base === 'C' ) return 'G';
    if ( base === 'T' ) return 'A';
    if ( base === 'A' ) return 'U';
  }).join('');
}

module.exports = DnaTranscriber;

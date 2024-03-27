const palindromes = function (str) {
  const pattern = /[a-z0-9]/g
  str = str.toLowerCase().match(pattern).join('')
  return str === str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;

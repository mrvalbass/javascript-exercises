const sumAll = function(...range) {
  // Defining the range bounds order
  let start = range.sort()[0]
  let end = range.sort()[1]

  // Error throwing
  if (range.length != 2) return 'ERROR'
  if (start < 0 || end < 0) return 'ERROR'
  if (Math.floor(start) !== start || Math.floor(end) !== end) return 'ERROR'
  if (range.filter(element => typeof(element) !== 'number').length !== 0) return 'ERROR'

  // Loop
  let sum = 0
  for (let i = start; i <= end; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((acc, val) => acc + val, 0)
};

const multiply = function(array) {
	return array.reduce((acc, val) => acc * val)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  if (n===0) return 1
  const array = [...Array(n+1).keys()].slice(1)
  return multiply(array)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

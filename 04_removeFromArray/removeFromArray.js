const removeFromArray = function(array, ...elementsToRemove) {
  for (element of elementsToRemove) {
    while (array.includes(element)) {
      array.splice(array.indexOf(element),1)
    } 
  }
  return array                 
};

// Do not edit below this line
module.exports = removeFromArray;

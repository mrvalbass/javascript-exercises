const findTheOldest = function(people) {
  const ageArray = people.map(person => {
    if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth
    return new Date().getFullYear() - person.yearOfBirth
  })
  return people[ageArray.findIndex(age => age === Math.max(...ageArray))]
};

// Do not edit below this line
module.exports = findTheOldest;

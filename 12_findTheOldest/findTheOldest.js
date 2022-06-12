const findTheOldest = function(people) {
    return people.reduce(function(previousPerson, currentPerson) {
        let yearOfDeath = (currentPerson.hasOwnProperty("yearOfDeath")) ? currentPerson.yearOfDeath : (new Date()).getFullYear();
        console.log(yearOfDeath)
        let ageCalculated = yearOfDeath - currentPerson.yearOfBirth;
        if (ageCalculated > previousPerson.age) {
            return {name: currentPerson.name, age: ageCalculated};
        } else {
            return previousPerson;
        }
    }, {age: 0})
}

// Do not edit below this line
module.exports = findTheOldest;

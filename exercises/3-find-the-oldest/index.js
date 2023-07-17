/**
 * Finds the oldest person in an array of people.
 *
 * @param {Array<Object>} people - An array of person objects.
 * @returns {Object} The object representing the oldest person.
 */
const findTheOldest = (people) => {
  const currentYear = new Date().getFullYear();
  let oldestPerson = null;

  for (let i = 0; i < people.length; i++) {
      const person = people[i];
      const age = person.yearOfDeath
          ? person.yearOfDeath - person.yearOfBirth
          : currentYear - person.yearOfBirth;

      if (!oldestPerson || age > oldestPerson.age) {
          oldestPerson = { ...person, age };
      }
  }

  return oldestPerson;
};

module.exports = findTheOldest;

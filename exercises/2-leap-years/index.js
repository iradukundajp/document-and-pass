/**
 * Checks if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} - `true` if the year is a leap year, `false` otherwise.
 */
const leapYears = function (year) {
      
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  
  module.exports = leapYears;
  

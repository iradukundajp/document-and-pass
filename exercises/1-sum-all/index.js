/**
 * Sums all numbers within a range.
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number} - The sum of all numbers within the range (inclusive).
 */
const sumAll = (start, end) => {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
      return 'ERROR';
    }
  
    let sum = 0;
    const min = Math.min(start, end);
    const max = Math.max(start, end);
  
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  module.exports = sumAll;
  
  
  

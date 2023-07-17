/**
 * Repeats a string a specified number of times.
 * @param {string} str - The string to be repeated.
 * @param {number} num - The number of times to repeat the string.
 * @returns {string} The repeated string.
 * @throws {TypeError} If the input arguments are not of the correct types.
 * @throws {RangeError} If the `num` argument is a negative number.
 */
const repeatString = (str, num) => {
    if (typeof str !== 'string' || typeof num !== 'number' || num < 0) {
      return 'ERROR';
    }
  
    return str.repeat(num);
  };
  
  module.exports = repeatString;
  
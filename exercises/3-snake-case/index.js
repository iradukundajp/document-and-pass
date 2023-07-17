/**
 * Converts a given string to snake case.
 * @param {string} str - The string to convert to snake case.
 * @returns {string} - The snake case representation of the string.
 */

const snakeCase = function (str) {
    const cleanedStr = str.replace(/[^\w\s.-]/g, ''); // Remove punctuation except periods and hyphens
    const words = cleanedStr.split(/[\s.-]+/); // Split by whitespace, periods, or hyphens
    const snakeCaseWords = words.map((word) => word.toLowerCase());
    const result = snakeCaseWords.join('_');
    return result.endsWith('_') ? result.slice(0, -1) : result; // Remove trailing underscore if present
  };
  
  module.exports = snakeCase;
  
  
  
  
  
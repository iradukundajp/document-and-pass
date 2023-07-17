/**
 * Extracts the titles from an array of book objects.
 * @param {Object[]} books - An array of book objects.
 * @returns {string[]} - An array containing the titles of the books.
 */
const getTheTitles = (books) => {
    return books.map((book) => book.title);
  };
  
  module.exports = getTheTitles;
  
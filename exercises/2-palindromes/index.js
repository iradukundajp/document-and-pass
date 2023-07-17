/**
 * Checks if a given string is a palindrome.
 * @param {string} string - The string to check.
 * @returns {boolean} - `true` if the string is a palindrome, `false` otherwise.
 */
const palindromes = (string) => {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedString = processedString.split('').reverse().join('');
    return processedString === reversedString;

};

module.exports = palindromes;


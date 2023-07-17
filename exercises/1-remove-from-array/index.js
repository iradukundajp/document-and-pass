/**
 * Removes specified values from an array.
 * @param {Array} array - The original array.
 * @param {...*} values - The values to remove from the array.
 * @returns {Array} - The modified array without the removed values.
 */
const removeFromArray = (arr, ...values) => {
return arr.filter((element) => !values.includes(element));
};

module.exports = removeFromArray

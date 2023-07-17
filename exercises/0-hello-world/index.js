/**
 * A very simple function, it greets whatever you tell it to
 *
 * @param {string} thing - the thing to greet
 * @returns {string} a friendly greeting
 *
 * @example
 *
 * const greeting = hello('World');
 * console.log(greeting); // 'Hello, World!'
 *
 */
const hello = (thing) => {
  return `Hello, ${thing}!`;
};

module.exports = hello;

/**
 * The curry function is a higher-order function that takes two parameters (look it up - also look up closure functions):
 * 1. `number`: This acts as a placeholder for a memoized value.
 * 2. `callback`: This is a callback function.
 *
 * When the curry function is called for the first time, it should return another function.
 * This returned function, when called, should execute the original `callback` function.
 * 
 * Usage:
 * const curried = curry(5, (num) => console.log(num));
 * curried(); // This will log '5' to the console.
 *
 * @param {number} number - The memoized value.
 * @param {Function} callback - The callback function to be executed on the second call.
 * @returns {Function} - Returns a function that when called, will execute the `callback` with the `number` argument.
 */
function curry(number, callback) {
// Return a function that executes the callback with the number as a parameter
}

export default curry;

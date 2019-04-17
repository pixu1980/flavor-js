import { isNumber } from '../../Helpers/index';

/**
 * @namespace number
 * @description extensions for the JS primitive Number
 */
export default {
  /**
   * checked if something is a function
   * @example <caption>eg. usage</caption>
   * var f = function(){};
   *
   * console.log(Number.isNumber(f)); // false
   *
   * console.log(Number.isNumber(2)); // true
   *
   * console.log(Number.isNumber(function(){})); // false
   *
   * console.log(Number.isNumber(null)); // false
   * @memberOf number
   * @method isNumber
   * @instance
   * @param {number} n - the number to be checked
   * @return {boolean}
   */
  isNumber: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(n) {
      return isNumber(n);
    },
  },
};

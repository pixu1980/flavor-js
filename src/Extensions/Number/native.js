import { isNumber } from '../../Helpers/index';

/**
 * @namespace number
 * @description extensions for the JS primitive Number
 */
export default {
  /**
   * checked if something is a number
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
  /**
   * checks if a number is between a range
   * @example <caption>eg. usage</caption>
   * console.log((5).between(1, 10)); // true
   *
   * console.log((5).between(1, 4)); // false
   * @memberOf number
   * @method between
   * @instance
   * @param {number} n - the number
   * @param {number} [from=Number.MIN_VALUE] - the from number
   * @param {number} [to=Number.MAX_VALUE] - the to number
   * @return {*|boolean}
   */
  isBetween: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(n, from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
      return Number.prototype.isBetween.call(n, from, to);
    },
  },
  /**
   * parse a number value, returns null if parsing failes
   * @example <caption>eg. usage</caption>
   * console.log(Number.parse("1")); // 1
   *
   * console.log(Number.parse("1,25")); // 1.25
   *
   * console.log(Number.parse({})); // null
   * @memberOf number
   * @method parse
   * @instance
   * @param {*} n - the value to be parsed
   * @param {number} radix [10] - the radix to use for the parsing
   * @return {number|null}
   */
  parse: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(n, radix = 10) {
      return parseInt(n, radix) || null;
    },
  },
  /**
   * randomizes a number
   * @example <caption>eg. usage</caption>
   * console.log(Number.random(1, 5)); // a number between 1 and 5
   *
   * console.log(Number.random(1, 5, true)); // a number between 1.0 and 5.0
   *
   * console.log(Number.random()); // a number between Number.MIN_VALUE and Number.MAX_VALUE
   * @memberOf number
   * @method random
   * @instance
   * @param {number} [lower=Number.MIN_VALUE] - the lower number
   * @param {number} [upper=Number.MAX_VALUE] - the upper number
   * @param {boolean} [floating=false] - ask to return a floating number value
   * @return {number}
   */
  random: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(from = Number.MIN_VALUE, to = Number.MAX_VALUE, floating = false) {
      if (!!to && from > to) {
        [to, from] = [from, to];
      }

      if (!!floating) {
        return Math.floor(Math.random() * (to - from + 1)) + from;
      }

      return Math.random() * (to - from) + from;
    },
  },
};

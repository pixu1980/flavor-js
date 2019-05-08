import { isString } from '../../Helpers/index';

/**
 * @namespace string
 * @description extensions for the JS primitive String
 */
export default {
  /**
   * checks if something is a string
   * @example <caption>eg. usage</caption>
   * var s = 'foo';
   *
   * console.log(String.isString(s)); // true
   *
   * console.log(String.isString(2)); // false
   *
   * console.log(String.isString('')); // true
   *
   * console.log(String.isString(null)); // false
   * @memberOf string
   * @method isString
   * @instance
   * @param {string} str - the string to be checked
   * @return {boolean}
   */
  isString: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(str) {
      return isString(str);
    },
  },
  /**
   * checks if a string is a percentage number between 0 and 100 (inclusive of course ;-) with up to 4 decimal places and comma or dot separated
   * @example <caption>eg. usage</caption>
   * console.log(String.isPercentage('50,25%')); // true
   *
   * console.log(String.isPercentage('50.25%')); // true
   *
   * console.log(String.isPercentage('50.25')); // false
   *
   * console.log(String.isPercentage('50.2565%')); // true
   *
   * console.log(String.isPercentage('50,2546776545%')); // false
   *
   * console.log(String.isPercentage('100%')); // true
   *
   * console.log(String.isPercentage('101%')); // false
   *
   * console.log(String.isPercentage('0%')); // true
   *
   * console.log(String.isPercentage('5')); // false
   * @memberOf string
   * @method parsePercentage
   * @instance
   * @param {string} str - the string to be checked
   * @return {boolean}
   */
  isPercentage: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(str) {
      return String.prototype.isPercentage.call(str);
    },
  },
  /**
   * random GUID generator
   * @example <caption>eg. usage</caption>
   * console.log(String.GUID()); // e405cd23-2640-4e31-8b6e-fecc268ca9c7
   * @memberOf string
   * @method GUID
   * @return {string}
   */
  GUID: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      // Random GUID generator based on .toString(16);
      return `${Math.random().toString(16).slice(2, 10)}-${Math.random().toString(16).slice(2, 6)}-4${Math.random().toString(16).slice(2, 5)}-${Math.random().toString(16).slice(2, 6)}-${Math.random().toString(16).slice(2, 14)}`;
    },
  },
  /**
   * converts a string to an integer number
   * @example <caption>eg. usage</caption>
   * console.log(String.toInt('550')); // 550
   *
   * console.log('550'.toInt()); // 550
   *
   * console.log(String.toInt('550', 6)); // 210
   *
   * console.log('550'.toInt(6)); // 210
   * @memberOf string
   * @method toInt
   * @instance
   * @param {string} str - the string
   * @param {number} radix [10] - the radix to use for the conversion
   * @return {number}
   */
  toInt: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(str, radix = 10) {
      if (String.isString(str)) {
        return String.prototype.toInt.call(str, radix);
      }

      return str;
    },
  },
  /**
   * converts a string to an floating number
   * @example <caption>eg. usage</caption>
   * console.log(String.toFloat('55.05')); // 55.05
   *
   * console.log('55.05'.toFloat()); // 55.05
   * @memberOf string
   * @method toFloat
   * @instance
   * @param {string} str - the string
   * @return {number}
   */
  toFloat: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(str) {
      if (String.isString(str)) {
        return String.prototype.toFloat.call(str);
      }

      return str;
    },
  },
  /**
   * pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
   * @example <caption>eg. usage</caption>
   * console.log(String.pad('5', 5)); // '  5  '
   *
   * console.log(String.pad('5', 5, '0')); // '00500'
   *
   * console.log(String.pad(4, 5, '01')); // '01401'
   *
   * console.log(String.pad(true, 5, '01')); // '1true'
   *
   * console.log(String.pad(4, 5, '01')); // '01401'
   *
   * console.log(String.pad(new Date(), 50, '--') // '-----Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)-----'
   * @memberOf string
   * @method pad
   * @instance
   * @param {string} str - the string to be padded
   * @param {number} length [0] - the string length you need
   * @param {string} chars [' '] - the char/chars to be used to pad the string
   * @return {string}
   */
  pad: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(str, length = 0, chars = ' ') {
      if (String.isString(str)) {
        return String.prototype.pad.call(str, length, chars);
      }

      return str;
    },
  },
};

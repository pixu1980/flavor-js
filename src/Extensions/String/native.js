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
   * @param {string} s - the string to be checked
   * @return {boolean}
   */
  isString(s) {
    return isString(s);
  },
};

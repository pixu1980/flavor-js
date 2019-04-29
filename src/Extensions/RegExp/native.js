import { isRegExp } from '../../Helpers/index';

/**
 * @namespace regexp
 * @description extensions for the JS primitive RegExp
 */
export default {
  /**
   * checks if something is a RegExp
   * @example <caption>eg. usage</caption>
   * var re = /lookforthis/;
   *
   * console.log(RegExp.isRegExp(re)); // true
   *
   * console.log(RegExp.isRegExp(2)); // false
   *
   * console.log(RegExp.isRegExp('')); // true
   *
   * console.log(RegExp.isRegExp(null)); // false
   * @memberOf regexp
   * @method isRegExp
   * @instance
   * @param {regexp} re - the regexp to be checked
   * @return {boolean}
   */
  isRegExp: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(re) {
      return isRegExp(re);
    },
  },
};

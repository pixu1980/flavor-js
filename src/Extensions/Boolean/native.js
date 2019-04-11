import { trueTypeOf } from '../../Helpers/index';
/**
 * @namespace boolean
 * @description extensions for the JS primitive Boolean
 */
export default {
  /**
   * isBoolean
   * @example <caption>eg. usage</caption>
   * var b = true;
   *
   * console.log(Boolean.isBoolean(b)); // true
   *
   * console.log(Boolean.isBoolean(2)); // false
   *
   * console.log(Boolean.isBoolean(false)); // true
   *
   * console.log(Boolean.isBoolean(null)); // false
   * @memberOf boolean
   * @method isBoolean
   * @instance
   * @return {boolean}
   */
  isBoolean: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(b) {
      return trueTypeOf(b) === 'boolean';
    },
  },
  /**
   * randomizes a boolean value
   * @example <caption>eg. usage</caption>
   * console.log(Boolean.random()); // it logs true or false
   * @memberOf boolean
   * @method random
   * @instance
   * @return {boolean}
   */
  random: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      return Math.random() >= 0.5;
    },
  },
};

import { isRequired, isFunction, functionErrorHandler } from '../../Helpers/index';

/**
 * @namespace function
 * @description extensions for the JS primitive Function
 */
export default {
  /**
   * checked if something is a function
   * @example <caption>eg. usage</caption>
   * var f = function(){};
   *
   * console.log(Function.isFunction(f)); // true
   *
   * console.log(Function.isFunction(2)); // false
   *
   * console.log(Function.isFunction(function(){})); // true
   *
   * console.log(Function.isFunction(null)); // false
   * @memberOf function
   * @method isFunction
   * @instance
   * @param {function} fn - the function to be checked
   * @return {boolean}
   */
  isFunction: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(fn) {
      return isFunction(fn);
    },
  },
  /**
   * proxies a function with scope and optional arguments<br><br>
   * @example <caption>eg. usage</caption>
   * var a = 1;
   * var b = new Date();
   * var c = function() {};
   *
   * var scope = {
     *   prop1: 2.53,
     *   prop2: 'foo';
     * };
   *
   * var fn = function(a, b, c) {
     *   console.log(this.prop1, a, b, c);
     * }
   *
   * fn(a, b, c);
   * // it logs
   * undefined, 1, Date, function()
   *
   * var pfn = fn.proxy(scope);
   * pfn(a, b, c);
   * // it logs
   * 2.53, 1, Date, function()
   *
   * pfn = fn.proxy(scope, 2, null);
   * pfn(a, b, c);
   * // it logs
   * 2.53, 2, null, function()
   * @memberOf function
   * @method proxy
   * @instance
   * @param {function} fn - the function to be proxed
   * @param {object} scope - the scope object (will be `this` inside the function)
   * @param {...any} args - pass one or more arguments to override the original handled arguments
   * @return {function}
   */
  proxy: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(fn, scope, ...args) {
      return Function.prototype.proxy.call(fn, scope, ...args);
    },
  },
  /**
   * repeats a function n times
   * @example <caption>eg. usage</caption>
   * Function.times(5, (i) => {
   *   console.log(i);
   * });
   *
   * // logs 1, 2, 3, 4, 5
   * @example <caption>or</caption>
   * Function.times(function(i) {
   *   console.log(i);
   * }, true);
   *
   * // logs 5, 4, 3, 2, 1
   * @memberOf function
   * @method times
   * @instance
   * @param {function} iteratee - the iteratee function to invoke<br>
   * the iteratee will be invoked passing the index as i<br>
   * so the iteratee has to be something like this<br>
   * <pre>
   * function(i) {}
   * </pre>
   * @param {number} iteratee.i - the index
   * @param {number} [times=0] - the number of times
   * @param {boolean} [reverse=false] - true if you want to do a times reverse cycle
   */
  times: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(iteratee, times = 0, reverse = false) {
      Function.prototype.times.call(iteratee, times, reverse);
    },
  },
};

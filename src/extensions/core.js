import _ from 'lodash';

export default {
  /**
   * delays a function by specified ms
   * @example <caption>eg. usage</caption>
   * ƒ.delay(function() {
       *   console.log('ended')
       * }, 1000);
   *
   * // it logs 'ended' after 1000ms
   * @memberOf FlavorJS
   * @method delay
   * @instance
   * @param {function} fn - function to invoke
   * @param {number} ms - time to wait in milliseconds
   * @return {function}
   */
  delay(fn, ms) {
    return _.delay(fn, ms);
  },
};

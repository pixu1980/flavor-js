import { isDate } from '../../Helpers/index';

/**
 * @namespace date
 * @description extensions for the JS primitive Date
 */
export default {
  /**
   * checks if something is a date
   * @example <caption>eg.usage</caption>
   * console.log(Date.isDate(new Date())); // true
   *
   * console.log(Date.isDate(0)); // false
   * @memberOf date
   * @method isDate
   * @instance
   * @param {*} d - the value to check
   * @return {boolean}
   */
  isDate: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(d) {
      return isDate(d);
    },
  },
  /**
   * returns a random date between specified range (default now <-> now)
   * @example <caption>eg. usage</caption>
   * console.log(Date.random()); // Mon Jan 22 2018 14:07:09 GMT+0100 (CET)
   *
   * console.log(Date.random(new Date(1970, 0, 1), new Date())); // Sun Apr 05 1987 00:00:00 GMT+0200 (CEST)
   * @memberOf date
   * @method random
   * @instance
   * @param {date} startDate [null] - the range start date
   * @param {date} endDate [null] - the range end date
   * @return {date}
   */
  random: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(startDate = null, endDate = null) {
      if(!startDate && !endDate) {
        return new Date(new Date().getTime() * Math.random());
      }

      return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    },
  },
  /**
   * transforms a date in a UTC timestamp integer
   * @example <caption>eg. usage</caption>
   * console.log((new Date()).toTimestamp()); // 1491317811925 @ 2017-04-4-16:57
   * @memberOf date
   * @method toTimestamp
   * @instance
   * @param {date} d - the date to convert
   * @return {timestamp|0}
   */
  toTimestamp: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(d) {
      if (!Date.isDate(d)) {
        return 0;
      }

      return Date.prototype.toTimestamp.call(d);
    },
  },
};

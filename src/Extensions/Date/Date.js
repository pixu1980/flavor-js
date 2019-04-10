/**
 * @namespace date
 * @description the JS native Date class
 */
export default {
  native: {
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
    isDate(d) {
      return Date.prototype.isDate.call(d);
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
     * @param {date} startDate - the range start date
     * @param {date} endDate - the range end date
     * @return {date}
     */
    random(startDate = new Date(), endDate = new Date()) {
      return new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());
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
    toTimestamp(d) {
      if (!Date.isDate(d)) {
        return 0;
      }

      return Date.prototype.toTimestamp.call(d);
    },
  },
  prototype: {
    isDate() {
      return _.isDate(this);
    },

    toTimestamp() {
      return Math.round(this);
    },
  },
};

import _ from 'lodash';

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
    /**
     * @inheritDoc date.isDate
     */
    isDate() {
      return _.isDate(this);
    },

    /**
     * @inheritDoc date.toTimestamp
     */
    toTimestamp() {
      return Math.round(this);
    },
  },
};

import _ from 'lodash';

/**
 * @namespace number
 * @description the JS native Number class
 */
export default {
  native: {
    /**
     * check if something is a number
     * @example <caption>eg. usage</caption>
     * var n = 1;
     *
     * console.log(Number.isNumber(n)); // true
     *
     * console.log(Number.isNumber(2)); // true
     *
     * console.log(Number.isNumber('')); // false
     *
     * console.log(Number.isNumber(null)); // false
     * @memberOf number
     * @method isNumber
     * @instance
     * @return {boolean}
     */
    isNumber(n) {
      return Number.prototype.isNumber.call(n);
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
    isBetween(n, from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
      if (!Number.isNumber(n)) {
        return false;
      }

      return Number.prototype.isBetween.call(n, from, to);
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
     * @return {number|null}
     */
    parse(n) {
      return _.parseInt(n);
    },

    /**
     * repeats a function n times
     * @example <caption>eg. usage</caption>
     * (5).times(function(i) {
     *   console.log(i);
     * });
     *
     * // logs 1, 2, 3, 4, 5
     * @example <caption>or</caption>
     * (5).times(function(i) {
     *   console.log(i);
     * }, true);
     *
     * // logs 5, 4, 3, 2, 1
     * @memberOf number
     * @method times
     * @instance
     * @param {number} n - the number of times
     * @param {function} iteratee - the iteratee function to invoke<br>
     * the iteratee will be invoked passing the index as i<br>
     * so the iteratee has to be something like this<br>
     * <pre>
     * function(i) {}
     * </pre>
     * @param {number} iteratee.i - the index
     * @param {boolean} [reverse=false] - true if you want to do a times reverse cycle
     */
    times(n, iteratee, reverse = false) {
      if (Number.isNumber(n) && Number.isInteger(n)) {
        return Number.prototype.times.call(n, iteratee, reverse);
      }
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
    random(lower = Number.MIN_VALUE, upper = Number.MAX_VALUE, floating = false) {
      return _.random(lower, upper, floating);
    },

    /**
     * converts a Romans Number String in a Decimal Number
     * @example <caption>eg. usage</caption>
     * console.log(Number.fromRoman('MCMLXXX')); // 1980
     * @memberOf number
     * @method fromRoman
     * @instance
     * @param {string} s - the roman number string
     * @return {number}
     */
    fromRoman(s) {
      let str = s;
      let result = null;
      // the result is now a number, not a string
      const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      decimal.length.times((i) => {
        while (str.indexOf(roman[i]) === 0) {
          if (!result) {
            result = 0;
          }

          result += decimal[i];
          str = str.replace(roman[i], '');
        }
      });

      return result;
    },

    /**
     * converts a number in a Roman Number String
     * @example <caption>eg. usage</caption>
     * console.log((1980).toRoman()); // 'MCMLXXX'
     * @memberOf number
     * @method toRoman
     * @instance
     * @param {number} n - the number
     * @return {string}
     */
    toRoman(n) {
      return Number.prototype.toRoman.call(n);
    },

    /**
     * converts a number of bytes in a human readable file size string
     * @example <caption>eg. usage</caption>
     * console.log((1024).toFileSize()); // 1kb
     * @memberOf number
     * @method toFileSize
     * @instance
     * @param {number} n - the number
     * @param {number} precision - the precision number
     * @return {*}
     */
    toFileSize(n, precision = 0) {
      return Number.prototype.toFileSize.call(n, precision);
    },

    /**
     * absolutes a number
     * @example <caption>eg. usage</caption>
     * console.log((1).toAbsolute()); // 1
     *
     * console.log((1.56).toAbsolute()); // 1.56
     *
     * console.log((-1.56).toAbsolute()); // 1.56
     * @memberOf number
     * @method toAbsolute
     * @instance
     * @param {number} n - the number
     * @return {number}
     */
    toAbsolute(n) {
      return Number.prototype.toAbsolute.call(n);
    },

    /**
     * floors a value
     * @example <caption>eg. usage</caption>
     * console.log((5.076).floor()); // 4
     *
     * console.log((5.076).floor(2)); // 5.07
     *
     * console.log((5070).floor(-2)); // 5000
     * @memberOf number
     * @method floor
     * @instance
     * @param {number} n - the number
     * @param {number} [precision=0] - the precision number
     * @return {number}
     */
    floor(n, precision = 0) {
      return Number.prototype.floor.call(n, precision);
    },

    /**
     * rounds a value
     * @example <caption>eg. usage</caption>
     * console.log((5.007).round()); // 5
     *
     * console.log((5.007).round(2)); // 5.01
     *
     * console.log((5070).round(-2)); // 5100
     * @memberOf number
     * @method round
     * @instance
     * @param {number} n - the number
     * @param {number} [precision=0] - the precision number
     * @return {number}
     */
    round(n, precision = 0) {
      if (Number.isNumber(n)) {
        return Number.prototype.round.call(n, precision);
      }
      return n;
    },

    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
     * @example <caption>eg. usage</caption>
     * console.log(Array.range(4));
     * // [0, 1, 2, 3]
     *       
     * console.log(Array.range(-4));
     * // [0, -1, -2, -3]
     *  
     * console.log(Array.range(1, 5));
     * // [1, 2, 3, 4]
     *  
     * console.log(Array.range(0, 20, 5));
     * // [0, 5, 10, 15]
     *  
     * console.log(Array.range(0, -4, -1));
     * // [0, -1, -2, -3]
     *  
     * console.log(Array.range(1, 4, 0));
     * // [1, 1, 1]
     *  
     * console.log(Array.range(0);
     * // []
     * @example <caption>eg. usage (reverse)</caption>
     * console.log(Array.rangeRight(4));
     * // [3, 2, 1, 0]
     *  
     * console.log(Array.rangeRight(-4));
     * // [-3, -2, -1, 0]
     *  
     * console.log(Array.rangeRight(1, 5));
     * // [4, 3, 2, 1]
     *  
     * console.log(Array.rangeRight(0, 20, 5));
     * // [15, 10, 5, 0]
     *  
     * console.log(Array.rangeRight(0, -4, -1));
     * // [-3, -2, -1, 0]
     *  
     * console.log(Array.rangeRight(1, 4, 0));
     * // [1, 1, 1]
     *  
     * console.log(Array.rangeRight(0));
     * // []
     * @memberOf number
     * @method range
     * @instance
     * @param {number} [start=0] - the start of the range
     * @param {number} end - the end of the range
     * @param {boolean} reverse - true, if ou want a reverse range
     * @param {number} [step=1] - the value to increment or decrement by
     * @return {array}
     */
    range(start, end = null, reverse = false, step = 1) {
      if (Number.isNumber(start)) {
        return Number.prototype.range.call(start, end, reverse, step);
      }

      return start;
    },
  },
  prototype: {
    /**
     * @inheritDoc Number.isNumber
     */
    isNumber() {
      return _.isNumber(this);
    },

    /**
     * @inheritDoc Number.isBetween
     */
    isBetween(from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
      return from <= this && this <= to;
    },

    /**
     * @inheritDoc Number.times
     */
    times(iteratee, reverse = false) {
      return (!!reverse) ? _.timesReverse(this, iteratee) : _.times(this, iteratee);
    },

    /**
     * @inheritDoc Number.toRoman
     */
    toRoman() {
      let num = this;
      let result = '';
      const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      _.times(decimal.length, (i) => {
        while (num % decimal[i] < num) {
          result += roman[i];
          num -= decimal[i];
        }
      });

      return result;
    },

    /**
     * @inheritDoc Number.toFileSize
     */
    toFileSize(precision = 0) {
      let fileSizeString = '0 B';

      if (!!this) {
        const sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
        const i = Math.floor(Math.log(this) / Math.log(1024));
        fileSizeString = parseFloat((this / Math.pow(1024, i)).toFixed(precision)) + sizes[i];
      }

      return fileSizeString;
    },

    /**
     * @inheritDoc Number.toAbsolute
     */
    toAbsolute() {
      return Math.abs(this);
    },

    /**
     * @inheritDoc Number.floor
     */
    floor(precision = 0) {
      return _.floor(this, precision);
    },

    /**
     * @inheritDoc Number.round
     */
    round(precision = 0) {
      return _.round(this, precision);
    },

    /**
     * @inheritDoc Number.range
     */
    range(end = null, reverse = false, step = 1) {
      const rangeStart = Number.isNumber(end) ? this : 0;
      const rangeEnd = Number.isNumber(end) ? end : this;
      const method = reverse ? 'rangeRight' : 'range';

      return _[method](rangeStart, rangeEnd, step);
    },
  },
};

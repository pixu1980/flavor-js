import { isRequired, isString, stringErrorHandler } from '../../Helpers/index';

/**
 * @namespace string
 * @description extensions for the JS primitive String
 */
export default {
  isPercentage: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      stringErrorHandler(this);

      return new RegExp(/^((\d{1,2}|100)(?:(\.|,)\d{1,4})?)%$/).test(this);
    },
  },
  toInt: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(radix = 10) {
      stringErrorHandler(this);

      return Number.parseInt(this, radix);
    },
  },
  toFloat: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      stringErrorHandler(this);

      return Number.parseFloat(this);
    },
  },
  pad: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(length = 0, chars = ' ') {
      stringErrorHandler(this);

      return this.padStart((this.length + length) / 2, chars).padEnd(length, chars);
    },
  },
};

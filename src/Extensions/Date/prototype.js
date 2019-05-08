import { isRequired, isDate, dateErrorHandler } from '../../Helpers/index';

/**
 * @namespace date
 * @description extensions for the JS primitive Date
 */
export default {
  toTimestamp: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      dateErrorHandler(this);

      return Math.round(this);
    },
  },
};

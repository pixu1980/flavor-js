import { isRequired, isNumber, numberErrorHandler } from '../../Helpers/index';

/**
 * @namespace number
 * @description extensions for the JS primitive Number
 */
export default {
  isBetween: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
      numberErrorHandler(this);

      if (!!to && from > to) {
        [to, from] = [from, to];
      }

      return to == null ? this >= 0 && this < from : this >= from && this < to;
    },
  },
};

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
      return Math.round(this);
    },
  },
};

/**
 * @namespace string
 * @description extensions for the JS primitive String
 */
export default {
  toInt: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(radix = 10) {
      if(String.isString(this)) {
        return Number.parseInt(this, radix);
      }

      return this;
    },
  },
  toFloat: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      if(String.isString(this)) {
        return Number.parseFloat(this);
      }

      return this;
    },
  },
  pad: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(length = 0, chars = ' ') {
      if(String.isString(this)) {
        return this.padStart((this.length + length) / 2, chars).padEnd(length, chars);
      }

      return this;
    },
  },
};

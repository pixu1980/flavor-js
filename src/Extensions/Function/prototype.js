import { isRequired, isFunction, functionErrorHandler } from '../../Helpers/index';

/**
 * @namespace function
 * @description extensions for the JS primitive Function
 */
export default {
  isAsyncFunction: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      return this.constructor.name === 'AsyncFunction';
    },
  },
  proxy: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(scope, ...proxyArgs) {
      functionErrorHandler(this);

      const func = this;

      return function (...args) {
        return func.apply(scope, (proxyArgs.length > 0 ? proxyArgs : args));
      };
    },
  },
  times: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(times = 0, reverse = false) {
      functionErrorHandler(this);

      let index = !!reverse ? times + 1 : 0;

      while (reverse ? (--index > 0) : (index++ < times)) {
        this(index);
      }
    },
  },
};

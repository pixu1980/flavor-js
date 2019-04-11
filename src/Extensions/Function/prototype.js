/**
 * @namespace function
 * @description extensions for the JS primitive Function
 */
export default {
  proxy: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(scope, ...proxyArgs) {
      const func = this;

      return function (...args) {
        return func.apply(scope, (proxyArgs.length >= 1 ? proxyArgs : args));
      };
    },
  },
};

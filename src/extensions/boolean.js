import _ from 'lodash';

/**
 * @namespace boolean
 * @description the JS native Boolean class
 */
export default {
  native: {
    /**
     * isBoolean
     * @example <caption>eg. usage</caption>
     * var b = true;
     *
     * console.log(Boolean.isBoolean(b)); // true
     *
     * console.log(Boolean.isBoolean(2)); // false
     *
     * console.log(Boolean.isBoolean(false)); // true
     *
     * console.log(Boolean.isBoolean(null)); // false
     * @memberOf boolean
     * @method isBoolean
     * @instance
     * @return {boolean}
     */
    isBoolean(b) {
      return Boolean.prototype.isBoolean.call(b);
    },
    /**
     * randomizes a boolean value
     * @example <caption>eg. usage</caption>
     * console.log(Boolean.random()); // it logs true or false
     * @memberOf boolean
     * @method random
     * @instance
     * @return {boolean}
     */
    random() {
      return Math.random() >= 0.5;
    },
  },
  prototype: {
    /**
     * @inheritDoc boolean.isBoolean
     */
    isBoolean() {
      return _.isBoolean(this);
    },
  },
};

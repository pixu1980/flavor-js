import { trueTypeOf } from '../../Helpers/index';

/**
 * @namespace object
 * @description extensions for the JS primitive Object
 */
export default {
  /**
   * checks if something is an object
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * console.log(Object.isObject(o)); // true
   *
   * console.log(Object.isObject(2)); // false
   *
   * console.log(Object.isObject('2')); // false
   *
   * console.log(Object.isObject(null)); // false
   * @memberOf object
   * @method isObject
   * @instance
   * @param {object} o - the object
   * @return {boolean}
   */
  isObject: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(o) {
      return trueTypeOf(o) === 'object';
    },
  },
  /**
   * deep clones and object
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * var oClone = o.clone();
   *
   * console.log(o === oClone); // false
   * @memberOf object
   * @method clone
   * @instance
   * @return {clone}
   */
  clone: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(o) {
      return Object.prototype.clone.call(o);
    },
  },
  /**
   * deep merges a variable list of objects inside this object instance or a new object (useful to implements defaults/options/settings pattern or set multiple properties at the same time or what you want ;-)<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * o.merge({
   *   prop1: 2,
   *   prop3: new Date(),
   *   prop5: {
   *     prop1: new Date(),
   *   }
   * }, {
   *   prop4: 7.52,
   *   prop5: {
   *     prop2: 'merged',
   *   }
   * });
   *
   * console.log(o); // { prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52, prop5: { prop1: Date, prop2: 'merged' } }
   * @memberOf object
   * @method inherit
   * @instance
   * @param {object} o - the object to extend
   * @param {...object} args - the list of objects to merge
   * @return {object}
   */
  merge: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(obj, ...objs) {
      if (Object.isObject(obj)) {
        return Object.prototype.merge.call(obj, ...objs);
      }

      return obj;
    },
  },
  /**
   * returns a new object that omits the specified properties<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * o.merge({
   *   prop1: 2,
   *   prop3: new Date(),
   *   prop5: {
   *     prop1: new Date(),
   *   }
   * }, {
   *   prop4: 7.52,
   *   prop5: {
   *     prop2: 'merged',
   *   }
   * });
   *
   * console.log(o); // { prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52, prop5: { prop1: Date, prop2: 'merged' } }
   *
   * console.log(o.omit('prop1')); // { prop2: 'a', prop3: Date, prop4: 7.52, prop5: { prop1: Date, prop2: 'merged' } }
   *
   * console.log(o.omit('prop1', 'prop2')); // { prop3: Date, prop4: 7.52, prop5: { prop1: Date, prop2: 'merged' } }
   *
   * console.log(o.omit(['prop1', 'prop2'])); // { prop3: Date, prop4: 7.52, prop5: { prop1: Date, prop2: 'merged' } }
   *
   * console.log(o.omit('prop1', 'prop5.prop1'])); // { prop2: 'a', prop3: Date, prop4: 7.52, prop5: { prop2: 'merged' } }
   * @memberOf object
   * @method omit
   * @instance
   * @param {object} o - the object
   * @param {...object} props - the list of properties to omit
   * @return {object}
   */
  omit: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(obj, ...props) {
      if (Object.isObject(obj)) {
        return Object.prototype.omit.call(obj, ...props);
      }

      return obj;
    },
  },
};

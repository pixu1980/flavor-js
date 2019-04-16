import { isObject } from '../../Helpers/index';

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
   * @param {object} obj - the object
   * @return {boolean}
   */
  isObject: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(obj) {
      return isObject(obj);
    },
  },
  /**
   * executes function for every property in the object<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   *   prop3: 'b',
   *   prop4: new Date(),
   * };
   *
   * o.forEach(function(value, key) {
   *   console.log(key, value);
   * });
   *
   * // it logs
   * 'prop1', 1
   * 'prop2', 'a'
   * 'prop3', 'b'
   * 'prop4', Date
   * @memberOf object
   * @method forEach
   * @instance
   * @param {object} obj - the object
   * @param {function} iteratee - the iteratee callback will be invoked with the following parameters<br>
   * so your callback has to be something like this<br><br>
   * <pre>
   * function iteratee(value, key) {}
   * </pre>
   * @param {any} iteratee.value - the property value of the object
   * @param {string} iteratee.key - the property key of the object
   * @param {object} scope [window] - the scope to use for calling the iteratee, defaulted to window object
   * @return {object} to make chainable the method
   */
  forEach: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(obj, iteratee, scope) {
      if (isObject(obj)) {
        return Object.prototype.forEach.call(obj, iteratee, scope);
      }

      return obj;
    },
  },
  /**
   * deeply clones an object in a new object<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * var p = o.clone();
   *
   * console.log(o == p); // true
   *
   * console.log(o === p); // false
   * @memberOf object
   * @method clone
   * @instance
   * @param {object} obj - the object
   * @return {object}
   */
  clone: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(obj) {
      return Object.prototype.clone.call(obj);
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
   * @param {object} obj - the object to extend
   * @param {...object} objs - the list of objects to merge
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
   * @param {object} obj - the object
   * @param {...string} props - the list of properties to omit
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
  /**
   * returns a new object that picks only the specified properties<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
   *   prop1: 1,
   *   prop2: 'a',
   * };
   *
   * o.inherit({
   *   prop1: 2,
   *   prop3: new Date(),
   * }, {
   *   prop4: 7.52,
   * });
   *
   * console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
   *
   * console.log(o.pick('prop1')); // {prop1: 2}
   *
   * console.log(o.pick('prop1', 'prop2')); // {prop1: 2, prop2: 'a'}
   *
   * console.log(o.pick(['prop1', 'prop2'])); // {prop1: 2, prop2: 'a'}
   *
   * console.log(o.pick(['prop1'], ['prop2'])); // {prop1: 2, prop2: 'a'}
   *
   * console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
   * @memberOf object
   * @method pick
   * @instance
   * @param {object} obj - the object
   * @param {...string} props - the list of properties to omit
   * @return {*}
   */
  pick: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(obj, ...props) {
      if (Object.isObject(obj)) {
        return Object.prototype.pick.call(obj, ...props);
      }

      return obj;
    },
  },
  /**
   * returns the value at the specified path of the object, with a default value<br><br>
   * @example <caption>eg. usage</caption>
   * var o = {
    *   prop1: 1,
    *   prop2: 'a',
    *   prop3: {
    *     prop31: 2.52,
    *     prop32: 'b',
    *   },
    *   prop4: new Date(),
    * };
    *
    * console.log(o.path('prop1')); // 1
    *
    * console.log(o.path('prop3.prop31')); // 2.52
    *
    * console.log(o.path('prop3.prop34')); // null
    *
    * console.log(o.path('prop3.prop34', 'c')); // c
    * @example <caption>you can also use array paths</caption>
    * var o = {
    *   prop1: 1,
    *   prop2: 'a',
    *   prop3: {
    *     prop31: 2.52,
    *     prop32: [{
    *       propO1: 'b',
    *     }, {
    *       propO1: 'c',
    *     }],
    *   },
    *   prop4: new Date(),
    * };
    *
    * console.log(o.path('prop3.prop32[0].propO1')); // 'b'
    *
    * console.log(o.path('prop3.prop32[1]')); // {propO1: 'c'}
    *
    * console.log(o.path('prop3.prop31[2]')); // null
    *
    * console.log(o.path('prop3.prop31[2]', {})); // {}
    * @memberOf object
    * @method path
    * @instance
    * @param {object} obj - the object
    * @param {...string} selectors - the path to search inside the object
    * @param {object} [def=null] - the default value to return if path is not found
    * @return {array|any}
    */
  path: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(obj, ...selectors) {
      return Object.prototype.path.call(obj, ...selectors);
    },
  },
};

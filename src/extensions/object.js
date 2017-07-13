import _ from 'lodash';

/**
 * @namespace object
 * @description the JS native Object class
 */
export default {
  native: {
    /**
     * isObject<br><br>
     * @example <caption>eg. usage</caption>
     * var o = {
     *   prop1: 1,
     *   prop2: 'a',
     * };
     *
     * console.log(Object.isObject(o)); // true
     *
     * console.log(Object.isObject(2)); // true
     *
     * console.log(Object.isObject('2')); // true
     *
     * console.log(Object.isObject(null)); // false
     * @memberOf object
     * @method isObject
     * @instance
     * @param {object} o - the object
     * @return {boolean}
     */
    isObject(o) {
      return Object.prototype.isObject.call(o);
    },

    /**
     * deep merges a variable list of objects inside this object instance or a new object (useful to implements defaults/options/settings pattern or set multiple properties at the same time or what you want)<br><br>
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
     * @example <caption>or</caption>
     * var o = {
     *   prop1: 1,
     *   prop2: 'a',
     * };
     *
     * var p = o.inherit(true, {
     *   prop1: 2,
     *   prop3: new Date(),
     * }, {
     *   prop4: 7.52,
     * });
     *
     * console.log(o); // o = {prop1: 1, prop2: 'a'}
     *
     * console.log(p); // p = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
     * @memberOf object
     * @method inherit
     * @instance
     * @param {object} o - the object to extend
     * @param {boolean} [createNew] - specifies to create a new object to merge
     * @param {...object} args - the list of objects to merge
     * @return {object}
     */
    inherit(o, ...args) {
      return Object.prototype.inherit.call(o, ...args);
    },

    /**
     * returns a new object that omits the specified properties<br><br>
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
     * console.log(o.omit('prop1')); // {prop2: 'a', prop3: Date, prop4: 7.52}
     *
     * console.log(o.omit('prop1', 'prop2')); // {prop3: Date, prop4: 7.52}
     *
     * console.log(o.omit(['prop1', 'prop2'])); // {prop3: Date, prop4: 7.52}
     *
     * console.log(o.omit(['prop1'], ['prop2'])); // {prop3: Date, prop4: 7.52}
     *
     * console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
     * @memberOf object
     * @method omit
     * @instance
     * @param {object} o - the object
     * @param {...object} args - the list of properties to omit
     * @return {object}
     */
    omit(o, ...args) {
      return Object.prototype.omit.call(o, ...args);
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
     * @param {object} o - the object
     * @param {...object} args - the list of properties to omit
     * @return {*}
     */
    pick(o, ...args) {
      return Object.prototype.pick.call(o, ...args);
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
     * @param {object} o - the object
     * @return {object}
     */
    clone(o) {
      return Object.prototype.clone.call(o);
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
     * @param {object} o - the object
     * @param {string} path - the path to search inside the object
     * @param {object} [def=null] - the default value to return if path is not found
     * @return {*}
     */
    path(o, path, def = null) {
      return Object.prototype.path.call(o, path, def);
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
     * o.each(function(value, key) {
     *   console.log(key, value);
     * });
     *
     * // it logs
     * 'prop1', 1
     * 'prop2', 'a'
     * 'prop3', 'b'
     * 'prop4', Date
     * @memberOf object
     * @method each
     * @instance
     * @param {object} o - the object
     * @param {function} iteratee - the iteratee callback will be invoked with the following parameters<br>
     * so your callback has to be something like this<br><br>
     * <pre>
     * function iteratee(value, key) {}
     * </pre>
     * @param {any} iteratee.value - the property value of the object
     * @param {string} iteratee.key - the property key of the object
     * @return {object} to make chainable the method
     */
    each(o, iteratee) {
      return Object.prototype.each.call(o, iteratee);
    },
  },
  prototype: {
    /**
     * @inheritDoc object.isObject
     */
    isObject() {
      return _.isPlainObject(this);
    },

    /**
     * @inheritDoc object.inherit
     */
    inherit(...args) {
      const createNew = _.isBoolean(args[0]) ? args[0] : false;
      let newArgs = args;

      if (!!createNew) {
        newArgs = Array.prototype.slice.call(newArgs, 1);
      }

      function safeInherit(scope) {
        Array.prototype.unshift.call(newArgs, scope);

        if (!!createNew) {
          Array.prototype.unshift.call(newArgs, {});
        }

        return _.merge.apply(scope, newArgs);
      }

      return safeInherit(this);
    },

    /**
     * @inheritDoc object.omit
     */
    omit(...args) {
      return _.omit(this, ...args);
    },

    /**
     * @inheritDoc object.pick
     */
    pick(...args) {
      return _.pick(this, ...args);
    },

    /**
     * @inheritDoc object.clone
     */
    clone() {
      return _.cloneDeep(this);
    },

    /**
     * @inheritDoc object.path
     */
    path(path, def = null) {
      if (typeof this === 'object' && this instanceof Object) {
        return _.get(this, path, def);
      }

      return def;
    },

    /**
     * @inheritDoc object.each
     */
    each(iteratee) {
      return _.each(this, iteratee);
    },
  },
};

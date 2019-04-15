// /* eslint-disable prefer-destructuring */
// /* eslint-disable prefer-rest-params */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-bitwise */
// /**
//  * @namespace object
//  * @description the JS native Object class
//  */
// export default {
//   native: {
//     /**
//      * returns the value at the specified path of the object, with a default value<br><br>
//      * @example <caption>eg. usage</caption>
//      * var o = {
//      *   prop1: 1,
//      *   prop2: 'a',
//      *   prop3: {
//      *     prop31: 2.52,
//      *     prop32: 'b',
//      *   },
//      *   prop4: new Date(),
//      * };
//      *
//      * console.log(o.path('prop1')); // 1
//      *
//      * console.log(o.path('prop3.prop31')); // 2.52
//      *
//      * console.log(o.path('prop3.prop34')); // null
//      *
//      * console.log(o.path('prop3.prop34', 'c')); // c
//      * @example <caption>you can also use array paths</caption>
//      * var o = {
//      *   prop1: 1,
//      *   prop2: 'a',
//      *   prop3: {
//      *     prop31: 2.52,
//      *     prop32: [{
//      *       propO1: 'b',
//      *     }, {
//      *       propO1: 'c',
//      *     }],
//      *   },
//      *   prop4: new Date(),
//      * };
//      *
//      * console.log(o.path('prop3.prop32[0].propO1')); // 'b'
//      *
//      * console.log(o.path('prop3.prop32[1]')); // {propO1: 'c'}
//      *
//      * console.log(o.path('prop3.prop31[2]')); // null
//      *
//      * console.log(o.path('prop3.prop31[2]', {})); // {}
//      * @memberOf object
//      * @method path
//      * @instance
//      * @param {object} o - the object
//      * @param {string} path - the path to search inside the object
//      * @param {object} [def=null] - the default value to return if path is not found
//      * @return {*}
//      */
//     path(o, path, def = null) {
//       return Object.prototype.path.call(o, path, def);
//     },

//     /**
//      * executes function for every property in the object<br><br>
//      * @example <caption>eg. usage</caption>
//      * var o = {
//      *   prop1: 1,
//      *   prop2: 'a',
//      *   prop3: 'b',
//      *   prop4: new Date(),
//      * };
//      *
//      * o.each(function(value, key) {
//      *   console.log(key, value);
//      * });
//      *
//      * // it logs
//      * 'prop1', 1
//      * 'prop2', 'a'
//      * 'prop3', 'b'
//      * 'prop4', Date
//      * @memberOf object
//      * @method each
//      * @instance
//      * @param {object} o - the object
//      * @param {function} iteratee - the iteratee callback will be invoked with the following parameters<br>
//      * so your callback has to be something like this<br><br>
//      * <pre>
//      * function iteratee(value, key) {}
//      * </pre>
//      * @param {any} iteratee.value - the property value of the object
//      * @param {string} iteratee.key - the property key of the object
//      * @return {object} to make chainable the method
//      */
//     each(o, iteratee) {
//       return Object.prototype.each.call(o, iteratee);
//     },
//   },
//   prototype: {


//     pick(...args) {
//       return _.pick(this, ...args);
//     },


//     path(path, def = null) {
//       if (typeof this === 'object' && this instanceof Object) {
//         return _.get(this, path, def);
//       }

//       return def;
//     },

//     each(iteratee) {
//       return _.each(this, iteratee);
//     },
//   },
// };

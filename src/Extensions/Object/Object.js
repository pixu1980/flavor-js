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




//     each(iteratee) {
//       return _.each(this, iteratee);
//     },
//   },
// };

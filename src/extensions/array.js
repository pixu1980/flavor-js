import _ from 'lodash';

/**
 * @namespace array
 * @description the JS native Array class
 */
export default {
  native: {
    /**
     * checks if something is an array
     * @example <caption>eg. usage</caption>
     * var a = new Array();
     *
     * console.log(Array.isArray(a)); // true<br>
     * console.log(Array.isArray(2)); // false<br>
     * console.log(Array.isArray([])); // true<br>
     * console.log(Array.isArray(null)); // false
     * @memberOf array
     * @method isArray
     * @instance
     * @param {array} a - the array to be checked 
     * @return {boolean}
     */
    isArray(a) {
      return Array.prototype.isArray.call(a);
    },

    /**
     * checks if an Array contains something
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.contains(arr, 'b')); // false
     * console.log(Array.contains(arr, 'a')); // true
     * console.log(Array.contains(arr, ['a', 'b', 'e']); // true
     * console.log(Array.contains(arr, ['a', 'b', 'e'], true); // false
     *
     * console.log(arr.contains('b')); // false
     * console.log(arr.contains('a')); // true
     * console.log(arr.contains(['a', 'b', 'e']); // true
     * console.log(arr.contains(['a', 'b', 'e'], true); // false
     * @memberOf array
     * @method contains
     * @instance
     * @param {array} a - the array to be checked
     * @param {array|*} item - can be anything or an array of anything
     * @param {boolean} [all=false] - specify to check if the array must contain all items
     * @return {boolean}
     */
    contains(a, item, all = false) {
      if (Array.isArray(a)) {
        return Array.prototype.contains.call(a, item, all);
      }

      return a;
    },

    /**
     * concatenates two arrays
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.concat(arr, ['b', 'c', 'd']); // ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd']
     * console.log(arr.concat(['b', 'c', 'd']); // ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd']
     * @memberOf array
     * @method concat
     * @instance
     * @param {array|*} a - the array to be concatenated
     * @param {array|*} ac - the array to concatenate or the item to concatenate
     * @return {array}
     */
    concat(a, ac) {
      if (Array.isArray(a)) {
        return Array.prototype.concat.call(a, ac);
      }

      return a;
    },

    /**
     * distincts an array<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.distinct(arr); // ['a', 'e', 'i', 'o', 'u']
     * console.log(arr.distinct(]); // ['a', 'e', 'i', 'o', 'u']
     * @memberOf array
     * @method distinct
     * @instance
     * @param {array} a - the array to be distincted
     * @return {array}
     */
    distinct(a) {
      if (Array.isArray(a)) {
        return Array.prototype.distinct.call(a);
      }

      return a;
    },

    /**
     * creates an array of unique array values not included in the other provided arrays
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     * var arr2 = ['a', 'b', 'c', 'd', 'e'];
     *
     * console.log(Array.diff(arr, arr2)); // ['i', 'o', 'u']
     * console.log(arr.diff(arr2)); // same as above
     *
     * console.log(Array.diff(arr2, arr)); // ['b', 'c', 'd']
     * console.log(arr2.diff(arr)); // same as above
     * 
     * var collection = [{id: 1, type: 'a'}, {id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}];
     * var collection2 = [{id: 1, type: 'a'}, {id: 2, type: 'b'}, {id: 3, type: 'c'}, {id: 4, type: 'd'}, {id: 5, type: 'e'}];
     * 
     * console.log(Array.diff(collection, collection2)); // [{id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
     * console.log(collection.diff(collection2)); // same as above
     * 
     * console.log(Array.diff(collection, collection2, 'type'); // [{id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
     * console.log(collection.diff(collection2, 'type'); // same as above
     * 
     * console.log(Array.diff(collection, collection2, function(aitem, bitem) {
     *   return aitem.type === bitem.type;
     * })); // same as above
     * 
     * console.log(collection.diff(collection2, function(aitem, bitem) {
     *   return aitem.type === bitem.type;
     * })); // same as above
     * @memberOf array
     * @method diff
     * @instance
     * @param {array} a - the first array to use for the diff
     * @param {array} b - the second array to use for the diff
     * @param {function|string} [fn=null] - function to use as comparator for the diff or the propname to check for the equality or nothing for standard equality<br>
     * the function will be invoked with an item from the first array and an item from the second array,<br>
     * so the function has to look like this<br>
     * <pre>
     * function(aitem, bitem) {}
     * </pre>
     * @param {object|any} fn.aitem - the item from the first array
     * @param {object|any} fn.bitem - the item from the second array
     * @return {array} 
     */
    diff(a, b, fn = null) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return Array.prototype.diff.call(a, b, fn);
      }

      return [];
    },

    /**
     * creates an array of unique array values not included in the other provided arrays based on a field equality (aliases Array.diff)
     * @example <caption>eg. usage</caption>
     * @memberOf array
     * @method diffBy
     * @instance
     * @param {array} a - the first array to use for the diff
     * @param {array} b - the second array to use for the diff
     * @param {string} propName - the property name to be used in comparator for the diff
     * @return {array|null} 
     */
    diffBy(a, b, propName) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return Array.diff(a, b, propName);
      }

      return null;
    },

    /**
     * sorts an array
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {id: 1, type: 'a'}, 
     *   {id: 3, type: 'i'}, 
     *   {id: 5, type: 'u'}, 
     *   {id: 4, type: 'o'}, 
     *   {id: 2, type: 'e'}
     * ];
     * 
     * console.log(Array.sortBy(collection, 'type')); // [{id: 1, type: 'a'}, {id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}] 
     * console.log(collection.sortBy('type')); // same as above
     * 
     * console.log(Array.sortBy(collection, 'id', 'desc')); // [{id: 5, type: 'u'}, {id: 4, type: 'o'}, {id: 3, type: 'i'}, {id: 2, type: 'e'}, {id: 1, type: 'a'}] 
     * console.log(collection.softBy('id', 'desc')); // same as above
     * 
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.sortBy(collection, ['type', 'value'])); 
     * // [
     * //   {type: 'a', value: 'a'}, 
     * //   {type: 'a', value: 'a-1-1'}, 
     * //   {type: 'a', value: 'a-1-3'}, 
     * //   {type: 'a', value: 'a-2-1'}, 
     * //   {type: 'b', value: 'b'},
     * //   {type: 'c', value: 'c'}, 
     * // ];
     * 
     * console.log(collection.sortBy(['type', 'value'])); // same as above
     * 
     * console.log(Array.sortBy(collection, ['type', 'value'], ['asc', 'desc'])); 
     * // [
     * //   {type: 'a', value: 'a'}, 
     * //   {type: 'a', value: 'a-2-1'}, 
     * //   {type: 'a', value: 'a-1-3'}, 
     * //   {type: 'a', value: 'a-1-1'}, 
     * //   {type: 'b', value: 'b'},
     * //   {type: 'c', value: 'c'}, 
     * // ];
     * 
     * console.log(collection.sortBy(['type', 'value'], ['asc', 'desc'])); // same as above
     * @memberOf array
     * @method sortBy
     * @instance
     * @param {array} a - the array to be sorted 
     * @param {array|string} propNames - the propName(s) you want to use for sorting
     * @param {array|string|null} [propDirections=null] - the propDirection(s) you want to use for sorting (respect propName(s) order)
     * @return {array}
     */
    sortBy(a, propNames, propDirections = null) {
      if (Array.isArray(a)) {
        return Array.prototype.sortBy.call(a, propNames, propDirections);
      }

      return a;
    },

    /**
     * deeply sorts an array
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'b', value: 'b', items: [
     *     {type: 'b', value: 'b-1'},
     *     {type: 'b', value: 'b-5'},
     *     {type: 'b', value: 'b-2'},
     *     {type: 'b', value: 'b-4'},
     *     {type: 'b', value: 'b-3'},
     *   ]}, 
     *   {type: 'd', value: 'd'}, 
     *   {type: 'a', value: 'a', items: [
     *     {type: 'a', value: 'a-1', items: [
     *       {type: 'a', value: 'a-1-1'},
     *       {type: 'a', value: 'a-1-3'},
     *       {type: 'a', value: 'a-1-2'},
     *     ]}},
     *     {type: 'a', value: 'a-5', items: [
     *       {type: 'a', value: 'a-5-1'},
     *     ]}},
     *     {type: 'a', value: 'a-2', items: [
     *       {type: 'a', value: 'a-2-1'},
     *       {type: 'a', value: 'a-2-3'},
     *       {type: 'a', value: 'a-2-2'},
     *       {type: 'a', value: 'a-2-4'},
     *     ]}},
     *     {type: 'a', value: 'a-4', items: [
     *       {type: 'a', value: 'a-4-1'},
     *     ]}},
     *     {type: 'a', value: 'a-3', items: [
     *       {type: 'a', value: 'a-3-2'},
     *       {type: 'a', value: 'a-3-1'},
     *     ]}},
     *   ]}, 
     *   {type: 'c', value: 'c', items: []}, 
     * ];
     * 
     * console.log(Array.deepSortBy(collection, ['type', 'value'], ['asc', 'desc'], 'items')); 
     * // [
     * //   {type: 'a', value: 'a', items: [
     * //     {type: 'a', value: 'a-5', items: [
     * //       {type: 'a', value: 'a-5-1'},
     * //     ]}},
     * //     {type: 'a', value: 'a-4', items: [
     * //       {type: 'a', value: 'a-4-1'},
     * //     ]}},
     * //     {type: 'a', value: 'a-3', items: [
     * //       {type: 'a', value: 'a-3-2'},
     * //       {type: 'a', value: 'a-3-1'},
     * //     ]}},
     * //     {type: 'a', value: 'a-2', items: [
     * //       {type: 'a', value: 'a-2-4'},
     * //       {type: 'a', value: 'a-2-3'},
     * //       {type: 'a', value: 'a-2-2'},
     * //       {type: 'a', value: 'a-2-1'},
     * //     ]}},
     * //     {type: 'a', value: 'a-1', items: [
     * //       {type: 'a', value: 'a-1-3'},
     * //       {type: 'a', value: 'a-1-2'},
     * //       {type: 'a', value: 'a-1-1'},
     * //     ]}},
     * //   ]}, 
     * //   {type: 'b', value: 'b', items: [
     * //     {type: 'b', value: 'b-5'},
     * //     {type: 'b', value: 'b-4'},
     * //     {type: 'b', value: 'b-3'},
     * //     {type: 'b', value: 'b-2'},
     * //     {type: 'b', value: 'b-1'},
     * //   ]}, 
     * //   {type: 'c', value: 'c', items: []}, 
     * //   {type: 'd', value: 'd'}, 
     * // ]
     * @memberOf array
     * @method deepSortBy
     * @instance
     * @param {array} a - the array to be sorted 
     * @param {array|string} propNames - the propName(s) you want to use for sorting
     * @param {array|string|null} [propDirections=null] - the propDirection(s) you want to use for sorting (respect propName(s) order)
     * @param {string} [childrenPropName='children'] - the childrenPropName to be used for sorting
     * @return {array}
     */
    deepSortBy(a, propNames, propDirections = null, childrenPropName = 'children') {
      if (Array.isArray(a)) {
        return Array.prototype.deepSortBy.call(a, propNames, propDirections, childrenPropName);
      }

      return a;
    },

    /**
     * filters an array by propName or predicate
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.filterBy(collection, type, 'a'));
     * // [
     * //   {type: 'a', value: 'a'}, 
     * //   {type: 'a', value: 'a-2-1'}, 
     * //   {type: 'a', value: 'a-1-3'}, 
     * //   {type: 'a', value: 'a-1-1'}, 
     * // ]
     * 
     * console.log(collection.filterBy('type', 'a')); // same as above
     * 
     * console.log(Array.filterBy(collection, function(item) {
     *   return item.value.contains('1');
     * }));
     * // [
     * //   {type: 'a', value: 'a-2-1'}, 
     * //   {type: 'a', value: 'a-1-3'}, 
     * //   {type: 'a', value: 'a-1-1'}, 
     * // ]
     * 
     * console.log(collection.filterBy(function(item) {
     *   return item.value.contains('1');
     * })); // same as above
     * @memberOf array
     * @method filterBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} propValue 
     * @return {array}
     */
    filterBy(a, propName, propValue) {
      if (Array.isArray(a)) {
        return Array.prototype.filterBy.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * removes an item from an array 
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.pull(collection, {type: 'a', value: 'a'}));
     * // [
     * //   {type: 'a', value: 'a-2-1'}, 
     * //   {type: 'a', value: 'a-1-3'}, 
     * //   {type: 'c', value: 'c'}, 
     * //   {type: 'a', value: 'a-1-1'}, 
     * //   {type: 'b', value: 'b'},
     * // ]
     * 
     * console.log(collection.pull({type: 'a', value: 'a'})); // same as above
     * @memberOf array
     * @method pull
     * @instance
     * @param {array} a 
     * @param {any} any
     * @return {array}
     */
    pull(a, item) {
      if (Array.isArray(a)) {
        return Array.prototype.pull.call(a, item);
      }

      return a;
    },

    /**
     * removes an item from an array by propName/propValue pair or predicate 
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.pullBy(collection, 'type', 'a'));
     * // [
     * //   {type: 'c', value: 'c'}, 
     * //   {type: 'b', value: 'b'},
     * // ]
     * 
     * console.log(collection.pullBy('type', 'a')); // same as above
     * 
     * console.log(Array.pullBy(collection, function(item) {
     *   return item.value.contains('1');
     * }));
     * // [
     * //   {type: 'a', value: 'a'}, 
     * //   {type: 'c', value: 'c'}, 
     * //   {type: 'b', value: 'b'},
     * // ]
     * 
     * console.log(collection.pullBy(function(item) {
     *   return item.value.contains('1');
     * })); // same as above
     * @memberOf array
     * @method pullBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} propValue 
     * @return {array}
     */
    pullBy(a, propName, propValue) {
      if (Array.isArray(a)) {
        return Array.prototype.pullBy.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * finds an item in an array by propName/propValue pair or predicate, 
     * returns the first element found respecting the specified predicate
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.findBy(collection, 'type', 'a')); // {type: 'a', value: 'a'} 
     * console.log(collection.findBy('type', 'a')); // same as above
     * 
     * console.log(Array.findBy(collection, 'type', 'a', true)); // {type: 'a', value: 'a-1-1'} 
     * console.log(collection.findBy('type', 'a', true)); // same as above
     * 
     * console.log(Array.findBy(collection, function(item, index, collection){
     *   return item.value.contains('1');
     * })); // {type: 'a', value: 'a-2-1'} 
     * 
     * console.log(collection.findBy(function(item, index, collection){
     *   return item.value.contains('1');
     * })); // same as above
     * 
     * console.log(Array.findBy(collection, function(item, index, collection){
     *   return item.value.contains('1');
     * }, true)); // {type: 'a', value: 'a-1-1'} 
     * 
     * console.log(collection.findBy(function(item, index, collection){
     *   return item.value.contains('1');
     * }, true)); // same as above
     * 
     * @memberOf array
     * @method findBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} [propValue=null] 
     * @param {boolean} [reverse=false] - is true specified to search from right to left
     * @return {any|null}
     */
    findBy(a, propName, propValue = null, reverse = false) {
      if (Array.isArray(a)) {
        return Array.prototype.findBy.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * deeply sorts an array
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'b', value: 'b', items: [
     *     {type: 'b', value: 'b-1'},
     *     {type: 'b', value: 'b-5'},
     *     {type: 'b', value: 'b-2'},
     *     {type: 'b', value: 'b-4'},
     *     {type: 'b', value: 'b-3'},
     *   ]}, 
     *   {type: 'd', value: 'd'}, 
     *   {type: 'a', value: 'a', items: [
     *     {type: 'a', value: 'a-1', items: [
     *       {type: 'a', value: 'a-1-1'},
     *       {type: 'a', value: 'a-1-3'},
     *       {type: 'a', value: 'a-1-2'},
     *     ]}},
     *     {type: 'a', value: 'a-5', items: [
     *       {type: 'a', value: 'a-5-1'},
     *     ]}},
     *     {type: 'a', value: 'a-2', items: [
     *       {type: 'a', value: 'a-2-1'},
     *       {type: 'a', value: 'a-2-3'},
     *       {type: 'a', value: 'a-2-2'},
     *       {type: 'a', value: 'a-2-4'},
     *     ]}},
     *     {type: 'a', value: 'a-4', items: [
     *       {type: 'a', value: 'a-4-1'},
     *     ]}},
     *     {type: 'a', value: 'a-3', items: [
     *       {type: 'a', value: 'a-3-2'},
     *       {type: 'a', value: 'a-3-1'},
     *     ]}},
     *   ]}, 
     *   {type: 'c', value: 'c', items: []}, 
     * ];
     * 
     * console.log(Array.deepFindBy(collection, 'value', 'a-2-1', 'items')); // {type: 'a', value: 'a-2-1'}
     * console.log(collection.deepFindBy('value', 'a-2-1', 'items')); // same as above
     * 
     * console.log(Array.deepFindBy(collection, function(item) {
     *    return item.value.contains('a-2-1');
     * }, null, 'items')); // {type: 'a', value: 'a-2-1'}
     * 
     * console.log(collection.deepFindBy(function(item) {
     *    return item.value.contains('a-2-1');
     * }, null, 'items')); // same as above
     * 
     * @memberOf array
     * @method deepFindBy
     * @instance
     * @param {array} a - the array 
     * @param {string|function} propName - the propName you want to use for the deep find
     * @param {any} [propValue=null] - the propValue you want to use for the deep find
     * @param {string} [childrenPropName='children'] - the childrenPropName to be used for the deep find recursion
     * @return {array}
     */
    deepFindBy(a, propName, propValue = null, childrenPropName = 'children') {
      if (Array.isArray(a)) {
        return Array.prototype.deepFindBy.call(a, propName, propValue, childrenPropName);
      }

      return a;
    },

    /**
     * finds the index of an item in an array by propName/propValue pair or predicate, 
     * returns the first element found respecting the specified predicate
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     * ];
     * 
     * console.log(Array.indexBy(collection, 'type', 'a')); // 0
     * console.log(collection.indexBy('type', 'a')); // same as above
     * 
     * console.log(Array.indexBy(collection, 'type', 'a', true)); // 4
     * console.log(collection.indexBy('type', 'a', true)); // same as above
     * 
     * console.log(Array.indexBy(collection, function(item, index, collection){
     *   return item.value.contains('1');
     * })); // 1
     * 
     * console.log(collection.indexBy(function(item, index, collection){
     *   return item.value.contains('1');
     * })); // same as above
     * 
     * console.log(Array.indexBy(collection, function(item, index, collection){
     *   return item.value.contains('1');
     * }, true)); // 4
     * 
     * console.log(collection.indexBy(function(item, index, collection){
     *   return item.value.contains('1');
     * }, true)); // same as above
     * 
     * @memberOf array
     * @method indexBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} [propValue=null] 
     * @param {boolean} [reverse=false] - is true specified to search from right to left
     * @return {any|null}
     */
    indexBy(a, propName, propValue, reverse = false) {
      if (Array.isArray(a)) {
        return Array.prototype.indexBy.call(a, propName, propValue, reverse);
      }

      return a;
    },

    /**
     * checks if an array contains an item by propName/propValue pair or predicate, 
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     *   {type: 'b', value: 'b-1-1'},
     * ];
     * 
     * console.log(Array.containsBy(collection, 'value', 'a-2-2')); // false
     * console.log(collection.containsBy('value', 'a-2-2')); // same as above
     * 
     * console.log(Array.containsBy(collection, 'value', 'a-2-1')); // true
     * console.log(collection.containsBy('value', 'a-2-1')); // same as above
     * 
     * console.log(Array.containsBy(collection, function(item) {
     *   return item.type === 'c';
     * })); // true
     * 
     * console.log(collection.containsBy(function(item) {
     *   return item.type === 'c';
     * })); // same as above
     * @memberOf array
     * @method containsBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} [propValue=null] 
     * @return {any|null}
     */
    containsBy(a, propName, propValue = null) {
      if (Array.isArray(a)) {
        return Array.prototype.containsBy.call(a, propName, propValue);
      }

      return false;
    },

    /**
     * counts items in array that respects propName/propValue pair or predicate, 
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 'a'}, 
     *   {type: 'a', value: 'a-2-1'}, 
     *   {type: 'a', value: 'a-1-3'}, 
     *   {type: 'c', value: 'c'}, 
     *   {type: 'a', value: 'a-1-1'}, 
     *   {type: 'b', value: 'b'},
     *   {type: 'b', value: 'b-1-1'},
     * ];
     * 
     * console.log(Array.countBy(collection, 'type', 'a')); // 4
     * console.log(collection.countBy('type', 'a')); // same as above
     * 
     * console.log(Array.countBy(collection, 'type', 'a', true)); // 3, it counts false values
     * console.log(collection.countBy('type', 'a', true)); // same as above
     * 
     * console.log(Array.countBy(collection, function(item) {
     *   return item.type === 'b';
     * })); // 2
     * 
     * console.log(collection.countBy(function(item) {
     *   return item.type === 'b';
     * })); // same as above
     * 
     * console.log(Array.countBy(collection, function(item) {
     *   return item.type === 'b';
     * }, null, true)); // 5, it counts false values
     * 
     * console.log(collection.countBy(function(item) {
     *   return item.type === 'b';
     * }, null, true)); // same as above
     * @memberOf array
     * @method countBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any|null} [propValue=null] 
     * @param {boolean} [falseValues=false]
     * @return {number}
     */
    countBy(a, propName, propValue = null, falseValues = false) {
      if (Array.isArray(a)) {
        return Array.prototype.countBy.call(a, propName, propValue, falseValues);
      }

      return 0;
    },

    /**
     * returns a new array with the intersection of passed arrays 
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     * var b = [1, 4, 5, 7, 8];
     * 
     * console.log(Array.intersection(a, b)); // [1, 4, 5]
     * console.log(a.intersection(b)); // same as above
     * 
     * var a = [
     *   {type: 1, value: 1},
     *   {type: 1, value: 2},
     *   {type: 2, value: 1},
     *   {type: 2, value: 2},
     *   {type: 3, value: 1},
     * ];
     * 
     * var b = [
     *   {type: 1, value: 1},
     *   {type: 2, value: 1},
     *   {type: 2, value: 3},
     *   {type: 3, value: 2},
     *   {type: 4, value: 1},
     *   {type: 5, value: 1},
     * ];
     * 
     * console.log(Array.intersection(a, b));
     * // [
     * //   {type: 1, value: 1},
     * //   {type: 2, value: 1},
     * // ]
     * 
     * console.log(a.intersection(b)); // same as above
     * 
     * var c = [
     *   {type: 1, value: 1},
     *   {type: 1, value: 2},
     *   {type: 2, value: 4},
     * ];
     * 
     * console.log(Array.intersection(a, b, c));
     * // [
     * //   {type: 1, value: 1},
     * // ]
     * 
     * console.log(a.intersection(b, c)); // same as above
     * 
     * @memberOf array
     * @method intersection
     * @instance
     * @param {array} a 
     * @param {...array} arrays 
     * @return {any|null}
     */
    intersection(a, ...arrays) {
      if (Array.isArray(a)) {
        return Array.prototype.intersection.call(a, ...arrays);
      }

      return [];
    },

    /**
     * returns a new array with the union of passed arrays 
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     * var b = [1, 4, 5, 7, 8];
     * 
     * console.log(Array.union(a, b)); // [1, 2, 3, 4, 5, 7, 8]
     * console.log(a.union(b)); // same as above
     * 
     * var a = [
     *   {type: 1, value: 1},
     *   {type: 1, value: 2},
     *   {type: 2, value: 1},
     *   {type: 2, value: 2},
     *   {type: 3, value: 1},
     * ];
     * 
     * var b = [
     *   {type: 1, value: 1},
     *   {type: 2, value: 1},
     *   {type: 2, value: 3},
     *   {type: 3, value: 2},
     *   {type: 4, value: 1},
     *   {type: 5, value: 1},
     * ];
     * 
     * console.log(Array.union(a, b));
     * // [
     * //   {type: 1, value: 1},
     * //   {type: 1, value: 2},
     * //   {type: 2, value: 1},
     * //   {type: 2, value: 2},
     * //   {type: 3, value: 1},
     * //   {type: 2, value: 3},
     * //   {type: 4, value: 1},
     * //   {type: 5, value: 1},
     * // ]
     * 
     * console.log(a.union(b)); // same as above
     * 
     * var c = [
     *   {type: 1, value: 1},
     *   {type: 1, value: 2},
     *   {type: 2, value: 4},
     * ];
     * 
     * console.log(Array.union(a, b, c));
     * // [
     * //   {type: 1, value: 1},
     * //   {type: 1, value: 2},
     * //   {type: 2, value: 1},
     * //   {type: 2, value: 2},
     * //   {type: 3, value: 1},
     * //   {type: 2, value: 3},
     * //   {type: 4, value: 1},
     * //   {type: 5, value: 1},
     * //   {type: 2, value: 4},
     * // ]
     * 
     * console.log(a.union(b, c)); // same as above
     * @memberOf array
     * @method union
     * @instance
     * @param {array} a 
     * @param {...array} arrays 
     * @return {any|null}
     */
    union(a, ...arrays) {
      if (Array.isArray(a)) {
        return Array.prototype.union.call(a, ...arrays);
      }

      return [];
    },

    /**
     * @alias array.pullBy
     * @memberOf array
     * @method removeBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {any} [propValue=null] 
     * @return {array}
     */
    removeBy(a, propName, propValue = null) {
      if (Array.isArray(a)) {
        return Array.prototype.pullBy.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * randomizes an item from an array, with optional weight parameters
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     * 
     * console.log(Array.random(a)); // eg. 3
     * console.log(a.random()); // same as above
     * 
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.random(a)); // eg. {type: 'a', value: 1}
     * console.log(a.random()); // same as above
     * 
     * var a = [
     *   {type: 'a', value: 1, weight: 3},
     *   {type: 'b', value: 2, weight: 5},
     *   {type: 'c', value: 3, weight: 1},
     *   {type: 'd', value: 4, weight: 1},
     * ];
     * 
     * console.log(Array.random(a, 'weight')); // eg. {type: 'b', value: 2}
     * console.log(a.random('weight')); // same as above
     * 
     * console.log(Array.random(a, 'weight', 'value')); // eg. 2
     * console.log(a.random('weight', 'value')); // same as above
     * @memberOf array
     * @method random
     * @instance
     * @param {array} a 
     * @param {string} [weightField=null]
     * @param {string} [valueField=null] 
     * @return {any|null}
     */
    random(a, weightField = null, valueField = null) {
      if (Array.isArray(a)) {
        return Array.prototype.random.call(a, weightField, valueField);
      }

      return null;
    },

    /**
     * executes an iteratee n times as the array length, the iteratee will be invoked with tree arguments item, index, array
     * @example <caption>eg. usage</caption>
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * Array.each(a, function(item, index) {
     *   console.log(item.type);
     * });
     * 
     * // it logs
     * // 'a'
     * // 'b'
     * // 'c'
     * // 'd'
     * 
     * Array.each(a, function(item, index) {
     *   console.log(item.type);
     * }, true);
     * 
     * // it logs
     * // 'd'
     * // 'c'
     * // 'b'
     * // 'a'
     * @memberOf array
     * @method each
     * @instance
     * @param {array} a 
     * @param {function} iteratee
     * @param {boolean} [reverse=false] - true if you want to do a reverse cycle
     * @return {array}
     */
    each(a, iteratee, reverse = false) {
      if (Array.isArray(a)) {
        return Array.prototype.each.call(a, iteratee, reverse);
      }

      return a;
    },

    /**
     * returns the first item in an array, with optional propName/propValue pair or predicate
     * @example <caption>eg. usage</caption>
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.first(a)); // {type: 'a', value: 1}
     * console.log(a.first())); // {type: 'a', value: 1}
     * 
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.first(a, 'type', 'b')); // {type: 'b', value: 1}
     * console.log(a.first('type', 'b'))); // {type: 'b', value: 1}
     * @memberOf array
     * @method first
     * @instance
     * @param {array} a - the array
     * @param {string} [propName=null] - optional, combined with propValue filters the array before extracting the first item<br>
     * or you can specify an optional function as predicate to customize the filter
     * @param {string} [propValue=null] - optional, combined with propName filters the array before extracting the first item
     * @return {any}
     */
    first(a, propName = null, propValue = null) {
      if (Array.isArray(a)) {
        return Array.prototype.first.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * returns the last item in an array, with optional propName/propValue pair or predicate
     * @example <caption>eg. usage</caption>
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.last(a)); // {type: 'd', value: 4}
     * console.log(a.last())); // {type: 'd', value: 4}
     * 
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'a', value: 2},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.last(a, 'type', 'a')); // {type: 'a', value: 2}
     * console.log(a.last('type', 'a'))); // {type: 'a', value: 2}
     * @memberOf array
     * @method last
     * @instance
     * @param {array} a 
     * @param {string|function} [propName=null] - optional, combined with propValue filters the array before extracting the last item<br>
     * or you can specify an optional function as predicate to customize the filter
     * @param {string} [propValue=null] - optional, combined with propName filters the array before extracting the last item
     * @return {any}
     */
    last(a, propName = null, propValue = null) {
      if (Array.isArray(a)) {
        return Array.prototype.last.call(a, propName, propValue);
      }

      return a;
    },

    /**
     * sums a collection by predicate or propName
     * @example <caption>eg. usage</caption>
     * var a = [
     *   {type: 'a', value: 1},
     *   {type: 'b', value: 2},
     *   {type: 'c', value: 3},
     *   {type: 'd', value: 4},
     * ];
     * 
     * console.log(Array.sum(a, 'value', 0)); // 4 + 3 + 2 + 1 = 10
     * console.log(a.sum('value', 0))); // same as above
     * 
     * console.log(Array.sum(a, 'type', '')); // abcd
     * console.log(a.sum('type', ''))); // same as above
     * 
     * console.log(Array.sum(a, function(acc, item) {
     *   return acc + item.value;
     * }, 0)); // 4 + 3 + 2 + 1 = 10
     * 
     * console.log(a.sum(function(acc, item) {
     *   return acc + item.value;
     * }, 0)); // same as above
     * @memberOf array
     * @method sum
     * @instance
     * @param {array} a 
     * @param {function|string} predicate - the predicate should look like this in ES5<br>
     * <pre>
     * function(acc, item) {
     *   return acc + item[propName];
     * }
     * </pre>
     * or in ES6<br>
     * <pre>
     * (acc, item) => {
     *   return acc + item[propName];
     * }
     * </pre><br>
     * this kind of predicate will be implemented automatically if you specify a propName instead the predicate
     * @param {object|any} predicate.acc - the accumulator variable used for the sum
     * @param {object|any} predicate.item - the iterating item
     * @param {any} [startValue=0]
     * @return {any}
     */
    sum(a, propName, startValue = 0) {
      if (Array.isArray(a)) {
        return Array.prototype.sum.call(a, propName, startValue);
      }

      return a;
    },
    /**
     * deeply maps a recursive tree structure with (same structure) childrenPropName or 'children' property<br><br>
     * {@link lodash#deepMap|for examples see lodash.deepMap}
     * @memberOf array
     * @method deepMap
     * @instance
     * @param {array|object} a - the array to use for the deep mapping
     * @param {string} [childrenPropName='children'] - the property name to use for children collection
     * @param {function} iteratee - the item mapping iteratee
     */
    deepMap(a, childrenPropName = 'children', iteratee) {
      if (Array.isArray(a)) {
        return Array.prototype.deepMap.call(a, childrenPropName, iteratee);
      }

      return a;
    },
    /**
     * loremizes an array
     * @example <caption>eg. usage</caption>
     * console.log(Array.lorem(5)); // [1, 2, 3, 4, 5];
     * 
     * console.log(Array.lorem(5, 1)); // [1, 1, 1, 1, 1];
     * 
     * console.log(Array.lorem(5, '1')); // ['1', '1', '1', '1', '1'];
     * 
     * console.log(Array.lorem(5, {type: 'a', value: 1})); 
     * // it logs
     * [
     *   {type: 'a', value: 1}, 
     *   {type: 'a', value: 1}, 
     *   {type: 'a', value: 1}, 
     *   {type: 'a', value: 1}, 
     *   {type: 'a', value: 1} 
     * ];
     * 
     * console.log(Array.lorem(5, function(index) {
     *   return {
     *     type: 'a',
     *     value: index,
     *   };
     * });
     * // it logs
     * [
     *   {type: 'a', value: 1}, 
     *   {type: 'a', value: 2}, 
     *   {type: 'a', value: 3}, 
     *   {type: 'a', value: 4}, 
     *   {type: 'a', value: 5} 
     * ];
     * 
     * @memberOf array
     * @method lorem
     * @instance
     * @param {number} items 
     * @param {function|object} [model=false] 
     * @return {array} 
     */
    lorem(items, model = false) {
      return Array.prototype.lorem.call(items, model);
    },

    /**
     * flattens array a single level deep,<br>
     * or with deep parameter (true boolean) recursively flattens array,<br>
     * or with deep parameter (number) you specify the recursion depth
     * @example <caption>eg. usage</caption>
     * var a = [1, [2, [3, [4]], 5]];
     * 
     * console.log(Array.flatten(a)); // [1, 2, [3, [4]], 5]
     * console.log(Array.flatten(a, 1)); // same as above
     * console.log(a.flatten()); // same as above
     * console.log(a.flatten(1)); // same as above
     * 
     * console.log(Array.flatten(a, true)); // [1, 2, 3, 4, 5]
     * console.log(a.flatten(true)); // same as above
     * 
     * console.log(Array.flatten(a, 2)); // [1, 2, 3, [4], 5]
     * console.log(a.flatten(2)); // same as above
     * 
     * console.log(Array.flatten(a, 3)); // [1, 2, 3, 4, 5]
     * console.log(a.flatten(3)); // same as above
     * @memberOf array
     * @method flatten
     * @instance
     * @param {array} a - the array 
     * @param {boolean|number} [deep=false] - the deep (boolean) or depth (number) parameter specifies to do a full recursion or the recursion depth
     * @return {array} 
     */
    flatten(a, deep = false) {
      if (Array.isArray(a)) {
        return Array.prototype.flatten.call(a, deep);
      }

      return a;
    },
    /**
     * creates an array of shuffled values, using a version of the Fisher-Yates shuffle. (from lodash documentation)
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     * 
     * console.log(Array.shuffle(a)); // [4, 3, 5, 1, 2]
     * console.log(a.shuffle()); // same as above (or another randomization ;-) 
     * @memberOf array
     * @method shuffle
     * @instance
     * @param {array} a - the array 
     * @return {array} 
     */
    shuffle(a) {
      if (Array.isArray(a)) {
        return Array.prototype.shuffle.call(a);
      }

      return a;
    },

    /**
     * splits an array in n-pieces chunks
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     *
     * console.log(Array.split(a)); // []
     * console.log(a.split()); // same as above
     * 
     * console.log(Array.split(a, 1)); // [[1], [2], [3], [4], [5]]
     * console.log(a.split(1)); // same as above
     * 
     * console.log(Array.split(a, 2)); // [[1, 2], [3, 4], [5]]
     * console.log(a.split(2)); // same as above
     * 
     * console.log(Array.split(a, 3)); // [[1, 2, 3], [4, 5]]
     * console.log(a.split(3)); // same as above
     * @memberOf array
     * @method split
     * @instance
     * @param {array} a - the array 
     * @param {number} [n=0] - the n pieces of chunks you want
     * @return {array} 
     */
    split(a, n = 0) {
      if (Array.isArray(a)) {
        return Array.prototype.split.call(a, n);
      }

      return a;
    },

    /**
     * reverses an array, with optional clone parameter to avoid original array mutation
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     *
     * console.log(Array.reverse(a)); // [5, 4, 3, 2, 1]
     * console.log(a.reverse()); // same as above
     * 
     * console.log(a === [5, 4, 3, 2, 1]); // true
     * 
     * var b = Array.reverse(a, true); // or var b = a.reverse(true);
     * 
     * console.log(a); // [1, 2, 3, 4, 5]
     * console.log(b); // [5, 4, 3, 2, 1]
     * @memberOf array
     * @method tail
     * @instance
     * @param {array} a - the array 
     * @param {boolean} [clone=false] 
     * @return {array} 
     */
    reverse(a, clone = false) {
      if (Array.isArray(a)) {
        return Array.prototype.reverse.call(a, clone);
      }

      return a;
    },

    /**
     * returns a sliced array with all elements but the first item
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     *
     * console.log(Array.tail(a)); // [2, 3, 4, 5]
     * console.log(a.tail()); // same as above
     * @memberOf array
     * @method tail
     * @instance
     * @param {array} a - the array 
     * @return {array} 
     */
    tail(a) {
      if (Array.isArray(a)) {
        return Array.prototype.tail.call(a);
      }

      return a;
    },

    /**
     * returns a sliced array with all elements but the last item
     * @example <caption>eg. usage</caption>
     * var a = [1, 2, 3, 4, 5];
     *
     * console.log(Array.cut(a)); // [1, 2, 3, 4]
     * console.log(a.cut()); // same as above
     * @memberOf array
     * @method cut
     * @instance
     * @param {array} a - the array 
     * @return {array} 
     */
    cut(a) {
      if (Array.isArray(a)) {
        return Array.prototype.cut.call(a);
      }

      return a;
    },

    /**
     * clones an array
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 1}, 
     *   {type: 'b', value: 8}, 
     *   {type: 'c', value: 5}, 
     *   {type: 'd', value: 7}, 
     *   {type: 'e', value: 9}, 
     *   {type: 'f', value: 3},
     * ];
     *
     * var clone = Array.clone(collection); // or var clone = collection.clone();
     * 
     * console.log(collection === clone); // false;
     * @memberOf array
     * @method clone
     * @instance
     * @param {array} a - the array 
     * @return {array} 
     */
    clone(a) {
      if (Array.isArray(a)) {
        return Array.prototype.clone.call(a);
      }

      return a;
    },

    /**
     * finds max value by propName in a collection array
     * @example <caption>eg. usage</caption>
     * var collection = [
     *   {type: 'a', value: 1}, 
     *   {type: 'b', value: 8}, 
     *   {type: 'c', value: 5}, 
     *   {type: 'd', value: 7}, 
     *   {type: 'e', value: 9}, 
     *   {type: 'f', value: 3},
     * ];
     *
     * console.log(Array.maxBy(a, 'value')); // {type:'e', value: 9}
     * console.log(Array.maxBy(a, 'type')); // {type:'f', value: 3}
     * 
     * console.log(a.maxBy('value')); // {type:'e', value: 9}
     * console.log(a.maxBy('type')); // {type:'f', value: 3}
     * @memberOf array
     * @method maxBy
     * @instance
     * @param {array} a - the array to check for max value 
     * @param {string} [propName=null] - the property name to use for comparation
     * @return {object}
     */
    maxBy(a, propName) {
      if (Array.isArray(a)) {
        return Array.prototype.maxBy.call(a, propName);
      }

      return a;
    },
  },
  prototype: {
    /**
     * @inheritDoc array.isArray
     */
    isArray() {
      return _.isArray(this);
    },

    /**
     * @inheritDoc array.contains
     */
    contains(item, all = false) {
      if (_.isArray(item)) {
        if (!!all) {
          return _.difference(item, this).length === 0;
        }

        return _.intersection(this, item).length > 0;
      }

      return _.includes(this, item);
    },

    /**
     * @inheritDoc array.concat
     */
    concat(arr) {
      if (!!arr) {
        return _.concat(this, arr);
      }

      return this;
    },

    /**
     * @inheritDoc array.distinct
     */
    distinct() {
      return _.uniqWith(this, _.isEqual);
    },

    /**
     * @inheritDoc array.diff
     */
    diff(arr, fn = null) {
      if (Array.isArray(arr)) {
        let predicate = _.isEqual;

        if (String.isString(fn)) {
          const propName = fn;
          predicate = (aitem, bitem) => {
            return aitem[propName] === bitem[propName];
          };
        }

        if (Function.isFunction(fn)) {
          predicate = fn;
        }

        return _.differenceWith(this, arr, predicate);
      }

      return [];
    },

    /**
     * @inheritDoc array.diffBy
     */
    diffBy(arr, propName) {
      return this.diff(arr, propName);
    },

    /**
     * @inheritDoc array.sortBy
     */
    sortBy(propNames, propDirections) {
      if (String.isString(propNames)) {
        propNames = [propNames];
      }

      if (!!propDirections) {
        if (String.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(() => {
          return 'asc';
        });
      }

      return _.orderBy(this, propNames, propDirections);
    },

    /**
     * @inheritDoc array.deepSortBy
     */
    deepSortBy(propNames, propDirections = null, childrenPropName = 'children') {
      if (String.isString(propNames)) {
        propNames = [propNames];
      }

      if (!!propDirections) {
        if (String.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(() => {
          return 'asc';
        });
      }

      return _.deepOrderBy(this, propNames, propDirections, childrenPropName);
    },

    /**
     * @inheritDoc array.filterBy
     */
    filterBy(propNames, propValues) {
      let predicate = null;

      if (Function.isFunction(propNames)) {
        predicate = propNames;
        return _.filter(this, predicate);
      } else if (Array.isArray(propValues)) {
        return _.filterByValues(this, propNames, propValues);
      }

      predicate = {};
      predicate[propNames] = propValues;
      return _.filter(this, predicate) || [];
    },

    /**
     * @inheritDoc array.pull
     */
    pull(item) {
      return _.pull(this, item);
    },

    /**
     * @inheritDoc array.pullBy
     */
    pullBy(propName, propValue) {
      if (_.isArray(propName) && _.isFunction(propValue)) {
        const values = propName;
        const comparator = propValue;
        return _.pullAllByComparator(this, values, comparator);
      }

      const predicate = {};
      predicate[propName] = propValue;
      return _.pullAllBy(this, [predicate]);
    },

    /**
     * @inheritDoc array.findBy
     */
    findBy(propName, propValue = null, reverse = false) {
      let predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (predicate) {
        if (reverse) {
          return _.findLast(this, predicate);
        }

        return _.find(this, predicate);
      }

      return null;
    },

    /**
     * @inheritDoc array.deepFindBy
     */
    deepFindBy(propName, propValue = null, childrenPropName = 'children') {
      return _.deepFindBy(this, propName, propValue, childrenPropName);
    },

    /**
     * @inheritDoc array.indexBy
     */
    indexBy(propName, propValue, reverse = false) {
      let predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (predicate) {
        if (reverse) {
          return _.findLastIndex(this, predicate);
        }

        return _.findIndex(this, predicate);
      }

      return null;
    },

    /**
     * @inheritDoc array.containsBy
     */
    containsBy(propName, propValue) {
      return this.findBy(propName, propValue) !== undefined;
    },

    /**
     * @inheritDoc array.countBy
     */
    countBy(propName, propValue, falseValues) {
      let predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (!!predicate) {
        return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
      }

      return 0;
    },

    /**
     * @inheritDoc array.intersection
     */
    intersection(...arrays) {
      return _.intersection(this, ...arrays);
    },

    /**
     * @inheritDoc array.union
     */
    union(...arrays) {
      return _.unionWith(this, ...arrays, _.isEqual);
    },

    /**
     * @inheritDoc array.random
     */
    random(weightField = null, valueField = null) {
      if (!!weightField) {
        return this.map((item) => {
          return _.times(item[weightField || 'weight'], () => {
            if (!!valueField) {
              return item[valueField || 'value'];
            }

            return _.omit(item, weightField);
          });
        }).flatten().shuffle().first();
      }

      return _.sample(this);
    },

    /**
     * @inheritDoc array.each
     */
    each(iteratee, reverse = false) {
      if (!!reverse) {
        return _.eachRight(this, iteratee);
      }

      return _.each(this, iteratee);
    },

    /**
     * @inheritDoc array.first
     */
    first(propName, propValue) {
      let a = this;

      if (!!propName) {
        a = this.filterBy(propName, propValue);
      }

      return _.first(a);
    },

    /**
     * @inheritDoc array.last
     */
    last(propName, propValue) {
      let a = this;

      if (!!propName) {
        a = this.filterBy(propName, propValue);
      }

      return _.last(a);
    },

    /**
     * @inheritDoc array.sum
     */
    sum(propName, startValue = 0) {
      let predicate = null;

      if (Function.isFunction(propName)) {
        predicate = propName;
      } else {
        predicate = (acc, item) => {
          return acc + item[propName];
        };
      }

      return _.reduce(this, predicate, startValue);
    },

    /**
     * @inheritDoc array.deepMap
     */
    deepMap(childrenPropName = 'children', iteratee) {
      return _.deepMap(this, childrenPropName, iteratee);
    },

    /**
     * @inheritDoc array.lorem
     */
    lorem(items, model = false) {
      return Number.times(items, (i) => {
        if (!!model) {
          return Function.isFunction(model) ? model(i) : model;
        }

        return i;
      });
    },

    /**
     * @inheritDoc array.flatten
     */
    flatten(deep) {
      if (!!deep) {
        if (Number.isNumber(deep)) {
          return _.flattenDepth(this, deep);
        } else if (Boolean.isBoolean(deep)) {
          return _.flattenDeep(this);
        }
      }

      return _.flatten(this);
    },

    /**
     * @inheritDoc array.shuffle
     */
    shuffle() {
      return _.shuffle(this);
    },

    /**
     * @inheritDoc array.split
     */
    split(n = 0) {
      return _.chunk(this, n);
    },

    /**
     * @inheritDoc array.reverse
     */
    reverse(clone = false) {
      if (!!clone) {
        return _.reverse(_.clone(this));
      }

      return _.reverse(this);
    },

    /**
     * @inheritDoc array.tail
     */
    tail() {
      return _.tail(this);
    },

    /**
     * @inheritDoc array.cut
     */
    cut() {
      return _.initial(this);
    },

    /**
     * @inheritDoc array.clone
     */
    clone() {
      return [...this];
    },

    /**
     * @inheritDoc array.maxBy
     */
    maxBy(propName = null) {
      if (propName) {
        return _.maxBy(this, propName);
      }

      return null;
    },
  },
};

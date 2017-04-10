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
      if (Array.isArray(a)) {
        return Array.prototype.isArray.call(a);
      }

      return false;
    },

    /**
     * checks if an Array contains something
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.contains(arr, 'b')); // false
     *
     * console.log(Array.contains(arr, 'a')); // true
     *
     * console.log(Array.contains(arr, ['a', 'b', 'e']); // true
     *
     * console.log(Array.contains(arr, ['a', 'b', 'e'], true); // false
     *
     * console.log(arr.contains('b')); // false
     *
     * console.log(arr.contains('a')); // true
     *
     * console.log(arr.contains(['a', 'b', 'e']); // true
     *
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
     *
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
        return Array.prototype.concat.call(a, item, all);
      }

      return a;
    },

    /**
     * distincts an array<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.distinct(arr); // ['a', 'e', 'i', 'o', 'u']
     *
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
     * Creates an array of unique array values not included in the other provided arrays
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     * var arr2 = ['a', 'b', 'c', 'd', 'e'];
     *
     * console.log(Array.diff(arr, arr2)); // ['i', 'o', 'u']
     *
     * console.log(arr.diff(arr2)); // ['i', 'o', 'u']
     *
     * console.log(Array.diff(arr2, arr)); // ['b', 'c', 'd']
     *
     * console.log(arr2.diff(arr)); // ['b', 'c', 'd']
     * 
     * var collection = [{id: 1, type: 'a'}, {id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}];
     * var collection2 = [{id: 1, type: 'a'}, {id: 2, type: 'b'}, {id: 3, type: 'c'}, {id: 4, type: 'd'}, {id: 5, type: 'e'}];
     * 
     * console.log(Array.diff(collection, collection2)); // [{id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
     * 
     * console.log(collection.diff(collection2)); // same as above
     * 
     * console.log(Array.diff(collection, collection2, 'type'); // [{id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
     * 
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
     * so the funciton has to look like this<br>
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
     * Creates an array of unique array values not included in the other provided arrays based on a field equality (aliases Array.diff)
     * @example <caption>eg. usage</caption>
     * @memberOf array
     * @method diffBy
     * @instance
     * @param {array} a - the first array to use for the diff
     * @param {array} b - the second array to use for the diff
     * @param {string} propName - the property name to be used in comparator for the diff
     * @return {array} 
     */
    diffBy(a, b, propName) {
      return Array.diff(a, b, propName);
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
     * 
     * console.log(collection.sortBy('type')); // same as above
     * 
     * console.log(Array.sortBy(collection, 'id', 'desc')); // [{id: 5, type: 'u'}, {id: 4, type: 'o'}, {id: 3, type: 'i'}, {id: 2, type: 'e'}, {id: 1, type: 'a'}] 
     * 
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
     * 
     * @memberOf array
     * @method filterBy
     * @instance
     * @param {array} a 
     * @param {string|function} propName 
     * @param {array|any} propValue 
     * @return {array}
     */
    filterBy(a, propName, propValue) {
      if(Array.isArray(a)) {
        return Array.prototype.filterBy.call(a, propName, propValue);
      }

      return a;
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} item 
     */
    pull(a, item) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    pullBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    findBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     * @param {any} childrenPropName 
     */
    deepFindBy(a, propName, propValue, childrenPropName) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    indexBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    containsBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     * @param {any} falseValues 
     */
    countBy(a, propName, propValue, falseValues) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} value 
     */
    intersection(a, value) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} value 
     */
    union(a, value) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} callback 
     */
    removeBy(a, callback) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    random(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} valueField 
     * @param {any} weightField 
     */
    randomWeighted(a, valueField, weightField) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} fn 
     */
    each(a, fn) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    first(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    firstBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    last(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} propValue 
     */
    lastBy(a, propName, propValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} propName 
     * @param {any} startValue 
     */
    sum(a, propName, startValue) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} childrenPropName 
     * @param {any} mapCallback 
     */
    deepMap(a, childrenPropName, mapCallback) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} items 
     * @param {any} itemModel 
     */
    lorem(a, items, itemModel) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} deep 
     */
    flatten(a, deep) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    shuffle(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} n 
     */
    split(a, n) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {boolean} [clone=false] 
     */
    reverse(a, clone = false) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    tail(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    cut(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} fn 
     * @param {any} reverse 
     */
    times(a, fn, reverse) {
    },
    /**
     * 
     * 
     * @param {any} a 
     */
    clone(a, ) {
    },
    /**
     * 
     * 
     * @param {any} a 
     * @param {any} prop 
     */
    maxBy(a, prop) {
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
          predicate = (aitem, bitem) => {
            return item[propName] === bitem[propName];
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
    
    filterBy(propNames, propValues) {
      let predicate = null;

      if (Function.isFunction(propName)) {
        predicate = propName;
        return _.filter(this, predicate);
      } else if (Array.isArray(propValue)) {
        return _.filterByValues(this, propName, propValue);
      }

      predicate = {};
      predicate[propName] = propValue;
      return _.filter(this, predicate) || [];
    },

    pull(item) {
      return _.pull(this, item);
    },
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
    findBy(propName, propValue) {
      let predicate = null;

      if (_.isFunction(propName)) {
        predicate = propName;
        return _.find(this, predicate);
      }

      predicate = {};
      predicate[propName] = propValue;
      return _.find(this, predicate);
    },
    deepFindBy(propName, propValue, childrenPropName) {
      return _.deepFindBy(this, propName, propValue, childrenPropName || 'children');
    },
    indexBy(propName, propValue) {
      const predicate = {};
      predicate[propName] = propValue;
      return _.findIndex(this, predicate);
    },
    containsBy(propName, propValue) {
      return this.findBy(propName, propValue) !== undefined;
    },
    countBy(propName, propValue, falseValues) {
      let predicate = null;

      if (_.isFunction(propName)) {
        predicate = propName;
        return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
      }

      predicate = {};
      predicate[propName] = propValue;
      return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
    },
    intersection(value) {
      return _.intersection(this, value);
    },
    union(value) {
      return _.unionWith(this, _.isArray(value) ? value : [value], _.isEqual);
    },
    removeBy(callback) {
      return _.remove(this, callback);
    },
    random() {
      return _.sample(this);
    },
    randomWeighted(valueField, weightField) {
      return this.map((item) => {
        return _.times(item[weightField || 'weight'], () => {
          return item[valueField || 'value'];
        });
      }).flatten().shuffle().first();
    },
    each(fn) {
      return _.each(this, fn);
    },
    first() {
      return _.first(this);
    },
    firstBy(propName, propValue) {
      return _.first(this.filterBy(propName, propValue));
    },
    last() {
      return _.last(this);
    },
    lastBy(propName, propValue) {
      return _.last(this.filterBy(propName, propValue));
    },
    sum(propName, startValue) {
      return _.reduce(this, (acc, item) => {
        return acc + item[propName];
      }, startValue || 0);
    },
    deepMap(childrenPropName, mapCallback) {
      return _.deepMap(this, childrenPropName, mapCallback);
    },
    lorem(items, itemModel) {
      return _.times(items, () => {
        return _.isFunction(itemModel) ? itemModel() : itemModel;
      });
    },
    flatten(deep) {
      if (!!deep) {
        return _.flattenDeep(this);
      }

      return _.flatten(this);
    },
    shuffle() {
      return _.shuffle(this);
    },
    split(n) {
      return _.chunk(this, n);
    },
    reverse(clone = false) {
      if (!!clone) {
        return _.reverse(_.clone(this));
      }

      return _.reverse(this);
    },
    tail() {
      return _.tail(this);
    },
    cut() {
      return _.initial(this);
    },
    times(fn, reverse) {
      return _.timesRange(this.first(), this.last(), fn, reverse);
    },
    clone() {
      return [...this];
    },
    maxBy(prop) {
      return _.maxBy(this, prop);
    },
  },
};

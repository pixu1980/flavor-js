import _ from 'lodash';

/**
 * @namespace array
 * @description the JS native Array class
 */
export default {
  native: {
  },
  prototype: {
    /**
     * checks if something is an array
     * @example <caption>eg. usage</caption>
     * var a = new Array();
     *
     * console.log(Array.isArray(a)); // true<br>
     * console.log(Array.isArray(2)); // false<br>
     * console.log(Array.isArray([])); // true<br>
     * console.log(Array.isArray(null)); // false
     * @memberOf Array
     * @method isArray
     * @instance
     * @return {boolean}
     */
    isArray() {
      return _.isArray(this);
    },

    /**
     * checks if an Array contains an item<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(arr.contains('b')); // false
     *
     * console.log(arr.contains('a')); // true
     *
     * console.log(arr.contains(['a', 'b', 'e']); // true
     *
     * console.log(arr.contains(['a', 'b', 'e'], true); // false
     * @memberOf Array
     * @method contains
     * @instance
     * @param {Array|*} item - can be anything or an array of anything
     * @param {boolean} [all=false] - specify to check if the array must contain all items
     * @return {boolean}
     */
    contains(item, all = false) {
      if(_.isArray(item)) {
        if(!!all) {
          return _.difference(item, this).length === 0;
        }

        return _.intersection(this, item).length > 0;
      }

      return _.includes(this, item);
    },

    /**
     * concatenates two arrays<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'e', 'i', 'o', 'u'];
     *
     * console.log(arr.concat(['b', 'c', 'd']); // ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd']
     * @memberOf Array
     * @method concat
     * @instance
     * @param {Array} arr - the array to concatenate
     * @return {Array}
     */
    concat(arr) {
      if(!!arr) {
        return _.concat(this, arr);
      }

      return this;
    },
    distinct() {
      return _.uniqWith(this, _.isEqual);
    },
    diff(arr) {
      return _.differenceWith(this, arr, _.isEqual);
    },
    diffBy(arr, propName) {
      return _.differenceWith(this, arr, (item, arrItem) => {
        return item[propName] === arrItem[propName];
      });
    },
    sortBy(propNames, propDirections) {
      if(_.isString(propNames)) {
        propNames = [propNames];
      }

      if(!!propDirections) {
        if(_.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(() => {
          return 'asc';
        });
      }

      return _.orderBy(this, propNames, propDirections);
    },
    deepSortBy(propNames, propDirections, childrenPropName) {
      if(_.isString(propNames)) {
        propNames = [propNames];
      }

      if(!!propDirections) {
        if(_.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(() => {
          return 'asc';
        });
      }

      return _.deepOrderBy(this, propNames, propDirections, childrenPropName || 'children');
    },
    filterBy(propName, propValue) {
      let predicate = null;

      if(_.isFunction(propName)) {
        predicate = propName;
        return _.filter(this, predicate);
      } else if(_.isArray(propValue)) {
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
      if(_.isArray(propName) && _.isFunction(propValue)) {
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

      if(_.isFunction(propName)) {
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

      if(_.isFunction(propName)) {
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
      if(!!deep) {
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
      if(!!clone) {
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


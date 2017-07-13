import _ from 'lodash';
import _baseIteratee from 'lodash/_baseIteratee';
import _basePullAll from 'lodash/_basePullAll';
import _toFinite from 'lodash/toFinite';

/**
 * @namespace lodash
 * @description all the mixins added to _
 */
export default {
  /**
   * checks if a string is a percentage value<br><br>
   * @example <caption>eg. usage</caption>
   * var s = '23.97%';
   *
   * console.log(_.isPercentage(s)); // true
   *
   * console.log(_.isPercentage('50%')); // true
   *
   * console.log(_.isPercentage(10)); // false
   * @memberOf lodash
   * @method isPercentage
   * @instance
   * @param {string} s - the string
   * @return {boolean}
   */
  isPercentage(s) {
    return String.isString(s) && String.isPercentage(s);
  },

  /**
   * parses float value in a percentage string<br><br>
   * @example <caption>eg. usage</caption>
   * var p = '50.5%';
   *
   * console.log(_.parsePercentage(p)); // 50.5
   *
   * console.log(_.parsePercentage('100%')); // 100
   *
   * console.log(_.parsePercentage(25.3)); // null
   * @memberOf lodash
   * @method parsePercentage
   * @instance
   * @param {string} s - the percentage string
   * @return {null|number}
   */
  parsePercentage(s) {
    if (String.isString(s) && String.isPercentage(s)) {
      return String.parsePercentage(s);
    }

    return null;
  },

  /**
   * filters a collection with a list of values specified for one property<br><br>
   * @example <caption>eg. usage</caption>
   * var collection = [{
   *   id: 1, status: 'active'
   * }, {
   *   id: 2, status: 'disabled'
   * }, {
   *   id: 3, status: 'unactive'
   * }];
   *
   * var allowedValues = ['active', 'unactive'];
   *
   * console.log(_.filterByValues(collection, 'status', allowedValues);
   * // logs [{id: 1, status: 'active'}, {id: 3, status: 'unactive'}]
   * @memberOf lodash
   * @method filterByValues
   * @instance
   * @param {Array|object} collection - the collection to filter
   * @param {string} key - the key to be used as property name
   * @param {Array} values - the list of values to check
   * @return {Array}
   */
  filterByValues(collection, key, values) {
    return _.filter(collection, (o) => {
      return values.contains(o.path(key));
    });
  },

  /**
   * deeply maps a recursive tree structure with (same structure) childrenPropName or 'children' property<br><br>
   * @example <caption>eg. usage</caption>
   * var tree = [{
   *   id: '1', status: 'enabled', items: [{
   *     id: '1.1', status: 'enabled', items: [{
   *       id: '1.1.1', status: 'enabled'
   *     }, {
   *       id: '1.1.2', status: 'disabled'
   *     }]
   *   }, {
   *     id: '1.2', status: 'disabled'
   *   }]
   * }];
   *
   * console.log(_.deepMap(tree, 'items', function(treeItem) {
   *   return {
   *     id: treeItem.id,
   *     status: treeItem.status,
   *     combo: treeItem.id + '-' + treeItem.status
   *   };
   * });
   *
   * // logs [{
   *  id: '1', status: 'enabled', combo: '1-enabled' items: [{
   *    id: '1.1', status: 'enabled', combo: '1.1-enabled', items: [{
   *      id: '1.1.1', status: 'enabled', combo: '1.1.1-enabled'
   *    }, {
   *      id: '1.1.2', status: 'disabled', combo: '1.1.2-disabled'
   *    }]
   *  }, {
   *    id: '1.2', status: 'disabled', combo: '1.2-disabled'
   *  }]
   * }]
   * @memberOf lodash
   * @method deepMap
   * @instance
   * @param {Array|object} collection - the collection to use for the deep mapping
   * @param {string} [childrenPropName='children'] - the property name to use for children collection
   * @param {function} mapCallback - the item mapping callback
   */
  deepMap(collection, childrenPropName = 'children', mapCallback) {
    return _.map(collection, (item) => {
      if (!!item[childrenPropName]) {
        if (_.isArray(item[childrenPropName])) {
          item[childrenPropName] = _.deepMap(item[childrenPropName], childrenPropName, mapCallback);
        }
      }

      return mapCallback(item);
    });
  },

  /**
   * deeply searches in a recursive tree structure with (same structure) childrenPropName or 'children' property<br>
   * looking for an item with the propName === propValue<br><br>
   * @example <caption>eg. usage</caption>
   * var tree = [{
   *   id: '1', status: 'enabled', items: [{
   *     id: '1.1', status: 'enabled', items: [{
   *       id: '1.1.1', status: 'enabled'
   *     }, {
   *       id: '1.1.2', status: 'disabled'
   *     }]
   *   }, {
   *     id: '1.2', status: 'disabled'
   *   }]
   *  }, {
   *   id: '2', status: 'disabled', items: [{
   *     id: '2.1', status: 'enabled'
   *   }, {
   *     id: '2.2', status: 'enabled'
   *   }]
   *  }, {
   *   id: '3', status: 'enabled', items: [{
   *     id: '3.1', status: 'disabled'
   *   }, {
   *     id: '3.2', status: 'enabled'
   *   }, {
   *     id: '3.3', status: 'enabled'
   *   }]
   * }];
   *
   * console.log(_.deepFindBy(tree, 'id', '1.1.1', 'items');
   * // logs {
   *   id: '1.1.1', status: 'enabled'
   * }
   *
   * console.log(_.deepFindBy(tree, function(item) {
   *   return item.id === '3.2'
   * }, null, 'items');
   * // logs {
   *   id: '3.2', status: 'enabled'
   * }
   * @memberOf lodash
   * @method deepFindBy
   * @instance
   * @param {Array|object} collection - the collection
   * @param {string|function} propName - the property name or the predicate function to invoke (item will be passed as parameter to the predicate)
   * @param {*} propValue - the property value
   * @param {string} [childrenPropName='children'] - the children prop name
   * @return {*}
   */
  deepFindBy(collection, propName, propValue, childrenPropName = 'children') {
    let found = null;

    collection.each((item) => {
      if (!found) {
        if (_.isFunction(propName)) {
          /**
           * use propName as predicate
           */
          found = propName(item);
        } else if (item[propName] === propValue) {
          found = item;
        } else if (!!item[childrenPropName]) {
          if (_.isArray(item[childrenPropName])) {
            found = _.deepFindBy(item[childrenPropName], propName, propValue, childrenPropName);
          }
        }
      }
    });

    return found;
  },

  /**
   * deeply sorts a recursive tree structure with (same structure) childrenPropName or 'children' property<br><br>
   * @example <caption>eg. usage</caption>
   * var tree = [{
   *   id: '1', status: 'enabled', items: [{
   *     id: '1.1', status: 'enabled', items: [{
   *       id: '1.1.1', status: 'enabled'
   *     }, {
   *       id: '1.1.2', status: 'disabled'
   *     }]
   *   }, {
   *     id: '1.2', status: 'disabled'
   *   }]
   *  }, {
   *   id: '2', status: 'disabled', items: [{
   *     id: '2.1', status: 'enabled'
   *   }, {
   *     id: '2.2', status: 'enabled'
   *   }]
   *  }, {
   *   id: '3', status: 'enabled', items: [{
   *     id: '3.1', status: 'disabled'
   *   }, {
   *     id: '3.2', status: 'enabled'
   *   }, {
   *     id: '3.3', status: 'enabled'
   *   }]
   * }];
   *
   * console.log(_.deepOrderBy(tree, ['id'], ['desc'], 'items');
   * // logs [{
   *   id: '3', status: 'enabled', items: [{
   *     id: '3.3', status: 'enabled'
   *   }, {
   *     id: '3.2', status: 'disabled'
   *   }, {
   *     id: '3.1', status: 'enabled'
   *   }]
   *  }, {
   *   id: '2', status: 'disabled', items: [{
   *     id: '2.2', status: 'enabled'
   *   }, {
   *     id: '2.1', status: 'enabled'
   *   }]
   *  }, {
   *   id: '1', status: 'enabled', items: [{
   *     id: '1.2', status: 'disabled'
   *   }, {
   *     id: '1.1', status: 'enabled', items: [{
   *       id: '1.1.2', status: 'enabled'
   *     }, {
   *       id: '1.1.1', status: 'disabled'
   *     }]
   *   }]
   * }]
   * @memberOf lodash
   * @method deepOrderBy
   * @instance
   * @param {Array|object} collection - the collection
   * @param {Array|string} propNames - the list of property names to sort
   * @param {Array|string} propDirections - the list of order by direction to use with propNames
   * @param {string} [childrenPropName='children'] - the children prop name
   * @return {Array|object}
   */
  deepOrderBy(collection, propNames, propDirections, childrenPropName = 'children') {
    if (_.isString(propNames)) {
      propNames = [propNames];
    }

    if (!!propDirections) {
      if (_.isString(propDirections)) {
        propDirections = [propDirections];
      }
    } else {
      propDirections = propNames.map(() => {
        return 'asc';
      });
    }

    collection = _.orderBy(collection, propNames, propDirections);

    collection.each((item) => {
      if (!!item[childrenPropName]) {
        if (_.isArray(item[childrenPropName])) {
          item[childrenPropName] = _.deepOrderBy(item[childrenPropName], propNames, propDirections, childrenPropName);
        }
      }
    });

    return collection;
  },

  /**
   * @todo document method
   * @memberOf lodash
   * @method pullAllByComparator
   * @instance
   * @param {collection} collection
   * @param {array} values
   * @param {function} comparator
   * @param {function} iteratee
   * @return {array}
   */
  pullAllByComparator(collection, values, comparator, iteratee) {
    return (collection && collection.length && values && values.length)
      ? _basePullAll(collection, values, _baseIteratee(iteratee, 2), comparator)
      : collection;
  },

  /**
   * a reverse implementation of _.times by lodash<br><br>
   * @example <caption>eg. usage</caption>
   * _.timesReverse(5, function(i) {
   *   console.log(i);
   * });
   *
   * // logs
   * 5
   * 4
   * 3
   * 2
   * 1
   * @memberOf lodash
   * @method timesReverse
   * @instance
   * @param {number} times - num of times to invoke iteratee
   * @param {function} iteratee - the iteratee function to invoke<br>
   * the iteratee will be invoked passing che cycle indicator as i<br>
   * so the iteratee has to be something like this<br>
   * <pre>
   * function(i) {}
   * </pre>
   */
  timesReverse(times, iteratee) {
    let index = times;

    while (--index >= 0) {
      _.isFunction(iteratee) && iteratee(index);
    }
  },

  /**
   * an implementation of _.times by lodash, where you can specify start & end numbers<br><br>
   * @example <caption>eg. usage</caption>
   * _.timesRange(5, 10, function(i) {
   *   console.log(i);
   * });
   *
   * // logs
   * 5
   * 6
   * 7
   * 8
   * 9
   * 10
   * @example <caption>or</caption>
   * _.timesRange(5, 10, function(i) {
   *   console.log(i);
   * }, true);
   *
   * // logs
   * 10
   * 9
   * 8
   * 7
   * 6
   * 5
   * @memberOf lodash
   * @method timesRange
   * @instance
   * @param {number} start - start num of times to invoke iteratee
   * @param {number} end - end num of times to invoke iteratee
   * @param {function} iteratee - the iteratee function to invoke<br>
   * the iteratee will be invoked passing che cycle indicator as i<br>
   * so the iteratee has to be something like this<br>
   * <pre>
   * function(i) {}
   * </pre>
   * @param {boolean} reverse - specify if you want reverse cycle
   */
  timesRange(start, end, iteratee = null, reverse = false) {
    if (_.isFunction(iteratee)) {
      // Ensure the sign of `-0` is preserved.
      start = _toFinite(start);

      if (!end) {
        end = start;
        start = 0;
      } else {
        end = _toFinite(end);
      }

      let index = (reverse ? end : start);

      while ((reverse ? index-- >= start : index++ <= end)) {
        iteratee(index + (reverse ? 1 : -1));
      }
    }
  },
};

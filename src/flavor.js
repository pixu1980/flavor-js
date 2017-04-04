import _ from 'lodash';
import _baseIteratee from 'lodash/_baseIteratee';
import _basePullAll from 'lodash/_basePullAll';
import _toFinite from 'lodash/toFinite';

/**
 * constructs FlavorJS class & extends the js natives
 * @class FlavorJS
 * @classdesc FlavorJS the definitive JS natives chainable extensions methods
 * @public
 */
export default class FlavorJS {
  constructor() {
    this.init();
  }

  /**
   * safe js native prototype extension using Object.defineProperty
   * @memberOf FlavorJS
   * @method extendPrototypeProperty
   * @instance
   * @param {prototype|object} proto - the prototype/object to extend
   * @param {string} prop - the name of the property to be defined or modified
   * @param {*} val - val to be used as value in the descriptor for the property, can be any kind of native (number, function, etc...) or what you want
   * @param {object} [options={}] - options to be used as parameters in the descriptor for the property<br>
   * possible options are (source documentation from <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/object/defineProperty" target="_blank">Javascript|MDN docs</a>)<br>
   * @param {boolean} [options.configurable=true] configurable - true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding Object.
   * @param {boolean} [options.enumerable=false] enumerable - true if and only if this property shows up during enumeration of the properties on the corresponding Object.
   * @param {boolean} [options.writable=true] writable - true if and only if the value associated with the property may be changed with an assignment operator.
   * @param {function} [options.get=undefined] get - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.<br>
   * for example...<br>
   * <pre>
   * function ClassName() {
   *   var privateProp = null;
   *
   *   Object.defineProperty(this, 'publicProp', {
   *     get: function() {
   *       return privateProp;
   *     }
   *   });
   * }
   * </pre>
   * @param {function} [options.set=undefined] set - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>
   * for example...<br>
   * <pre>
   * function ClassName() {
   *   var privateProp = null;
   *
   *   Object.defineProperty(this, 'publicProp', {
   *     set: function(value) {
   *       privateProp = value;
   *     }
   *   });
   * }
   * </pre>
   */
  extendPrototypeProperty(proto, prop, val, options = {}) {
    Object.defineProperty(proto, prop, {
      value: val,
      writable: true,
      configurable: true,
      enumerable: false,
    });
  }

  /**
   * merges all keys in extend plain object to the prototype (
   * @memberOf FlavorJS
   * @method extendPrototype
   * @instance
   * @param {prototype|object} proto - the prototype/object to extend
   * @param {object} extend - the extend object to be merged in prototype
   */
  extendPrototype(proto, extend) {
    _.forOwn(extend, (value, key) => {
      this.extendPrototypeProperty(proto, key, value);
    });
  }

  /**
   * initLodashMixins
   * @memberOf FlavorJS
   * @method initLodashMixins
   * @instance
   */
  initLodashMixins() {
    _.mixin({
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
        if(String.isString(s) && String.isPercentage(s)) {
          return String.parsePercentage(s);
        }

        return null;
      },

      /**
       * filters a collection with a list of values specified for one property<br><br>
       * @example <caption>eg. usage</caption>
       * var collection = [{
       *  id: 1, status: 'active'
       * }, {
       *  id: 2, status: 'disabled'
       * }, {
       *  id: 3, status: 'unactive'
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
       *  id: '1', status: 'enabled', items: [{
       *    id: '1.1', status: 'enabled', items: [{
       *      id: '1.1.1', status: 'enabled'
       *    }, {
       *      id: '1.1.2', status: 'disabled'
       *    }]
       *  }, {
       *    id: '1.2', status: 'disabled'
       *  }]
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
          if(!!item[childrenPropName]) {
            if(_.isArray(item[childrenPropName])) {
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
       *  id: '1', status: 'enabled', items: [{
       *    id: '1.1', status: 'enabled', items: [{
       *      id: '1.1.1', status: 'enabled'
       *    }, {
       *      id: '1.1.2', status: 'disabled'
       *    }]
       *  }, {
       *    id: '1.2', status: 'disabled'
       *  }]
       * }, {
       *  id: '2', status: 'disabled', items: [{
       *    id: '2.1', status: 'enabled'
       *  }, {
       *    id: '2.2', status: 'enabled'
       *  }]
       * }, {
       *  id: '3', status: 'enabled', items: [{
       *    id: '3.1', status: 'disabled'
       *  }, {
       *    id: '3.2', status: 'enabled'
       *  }, {
       *    id: '3.3', status: 'enabled'
       *  }]
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
          if(!found) {
            if(_.isFunction(propName)) {
              /**
               * use propName ad predicate
               */
              found = propName(item);
            } else if(item[propName] === propValue) {
              found = item;
            } else if(!!item[childrenPropName]) {
              if(_.isArray(item[childrenPropName])) {
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
       *  id: '1', status: 'enabled', items: [{
       *    id: '1.1', status: 'enabled', items: [{
       *      id: '1.1.1', status: 'enabled'
       *    }, {
       *      id: '1.1.2', status: 'disabled'
       *    }]
       *  }, {
       *    id: '1.2', status: 'disabled'
       *  }]
       * }, {
       *  id: '2', status: 'disabled', items: [{
       *    id: '2.1', status: 'enabled'
       *  }, {
       *    id: '2.2', status: 'enabled'
       *  }]
       * }, {
       *  id: '3', status: 'enabled', items: [{
       *    id: '3.1', status: 'disabled'
       *  }, {
       *    id: '3.2', status: 'enabled'
       *  }, {
       *    id: '3.3', status: 'enabled'
       *  }]
       * }];
       *
       * console.log(_.deepOrderBy(tree, ['id'], ['desc'], 'items');
       * // logs [{
       *  id: '3', status: 'enabled', items: [{
       *    id: '3.3', status: 'enabled'
       *  }, {
       *    id: '3.2', status: 'disabled'
       *  }, {
       *    id: '3.1', status: 'enabled'
       *  }]
       * }, {
       *  id: '2', status: 'disabled', items: [{
       *    id: '2.2', status: 'enabled'
       *  }, {
       *    id: '2.1', status: 'enabled'
       *  }]
       * }, {
       *  id: '1', status: 'enabled', items: [{
       *    id: '1.2', status: 'disabled'
       *  }, {
       *    id: '1.1', status: 'enabled', items: [{
       *      id: '1.1.2', status: 'enabled'
       *    }, {
       *      id: '1.1.1', status: 'disabled'
       *    }]
       *  }]
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

        collection = _.orderBy(collection, propNames, propDirections);

        collection.each((item) => {
          if(!!item[childrenPropName]) {
            if(_.isArray(item[childrenPropName])) {
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

        while(--index >= 0) {
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
        if(_.isFunction(iteratee)) {
          // Ensure the sign of `-0` is preserved.
          start = _toFinite(start);

          if(!end) {
            end = start;
            start = 0;
          } else {
            end = _toFinite(end);
          }

          let index = (reverse ? end : start);

          while((reverse ? index-- >= start : index++ <= end)) {
            iteratee(index + (reverse ? 1 : -1));
          }
        }
      },
    });
  }

  /**
   * initObjectPrototype
   * @memberOf FlavorJS
   * @method initObjectPrototype
   * @instance
   */
  initObjectPrototype() {
    this.extendPrototype(Object.prototype, {
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
       * @return {boolean}
       */
      isObject() {
        return _.isPlainObject(this);
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
       * @param {boolean} [createNew] - specifies to create a new object to merge
       * @param {...object} args - the list of objects to merge
       * @return {object}
       */
      inherit(...args) {
        const createNew = _.isBoolean(args[0]) ? args[0] : false;
        let newArgs = args;

        if(!!createNew) {
          newArgs = Array.prototype.slice.call(newArgs, 1);
        }

        function safeInherit(scope) {
          Array.prototype.unshift.call(newArgs, scope);

          if(!!createNew) {
            Array.prototype.unshift.call(newArgs, {});
          }

          return _.merge.apply(scope, newArgs);
        }

        return safeInherit(this);
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
       * @param {...object} args - the list of properties to omit
       * @return {object}
       */
      omit(...args) {
        return _.omit(this, ...args);
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
       * @param {...object} args - the list of properties to omit
       * @return {object}
       */
      pick(...args) {
        return _.pick(this, ...args);
      },

      /**
       * clones an object<br><br>
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
       * @return {object}
       */
      clone() {
        return _.cloneDeep(this);
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
       * @param {string} path - the path to search inside the object
       * @param {object} [defVal=null] - the default value to return if path is not found
       * @return {*|null}
       */
      path(path, defVal = null) {
        if(typeof this === 'object' && this instanceof object) {
          return _.get(this, path, defVal);
        }

        return defVal;
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
       * @param {function} iteratee - the iteratee callback will be invoked with the following parameters<br>
       * so your callback has to be something like this<br><br>
       * @example
       * function iteratee(value, key) {}
       * @param {*} iteratee.value - the property value of the object
       * @param {string} iteratee.key - the property key of the object
       * @return {object} to make chainable the method
       */
      each(iteratee) {
        return _.each(this, iteratee);
      },
    });

    this.extendPrototypeProperty(object, 'isObject', (o) => {
      return Object.prototype.isObject.call(o);
    });
  }

  /**
   * initFunctionPrototype
   * @memberOf FlavorJS
   * @method initFunctionPrototype
   * @instance
   */
  initFunctionPrototype() {
    this.extendPrototype(Function.prototype, {
      /**
       * isFunction<br><br>
       * @example <caption>eg. usage</caption>
       * var f = function(){};
       *
       * console.log(Function.isFunction(f)); // true
       *
       * console.log(Function.isFunction(2)); // false
       *
       * console.log(Function.isFunction(function(){})); // true
       *
       * console.log(Function.isFunction(null)); // false
       * @memberOf function
       * @method isFunction
       * @instance
       * @return {boolean}
       */
      isFunction() {
        return _.isFunction(this);
      },
      /**
       * proxies a function width scope and optional arguments<br><br>
       * @example <caption>eg. usage</caption>
       * var a = 1;
       * var b = new Date();
       * var c = function() {};
       *
       * var scope = {
       *   prop1: 2.53,
       *   prop2: 'foo';
       * };
       *
       * var f = function(a, b, c) {
       *   console.log(this.prop1, a, b, c);
       * }
       *
       * f(a, b, c);
       * // it logs
       * undefined, 1, Date, function()
       *
       * var pf = f.proxy(scope);
       * pf(a, b, c);
       * // it logs
       * 2.53, 1, Date, function()
       *
       * pf = f.proxy(scope, 2, null);
       * pf(a, b, c);
       * // it logs
       * 2.53, 2, null, function()
       * @memberOf function
       * @method proxy
       * @instance
       * @param {object} scope - the scope object (will be `this` inside the function)
       * @param {...object} proxyArgs - pass one or more arguments to override the original handled arguments
       * @return {function}
       */
      proxy(scope, ...proxyArgs) {
        const func = this;

        return function(...args) {
          return func.apply(scope, (proxyArgs.length >= 1 ? proxyArgs : args));
        };
      },
    });
    this.extendPrototypeProperty(Function, 'isFunction', (f) => {
      return Function.prototype.isFunction.call(f);
    });
  }

  /**
   * initArrayPrototype
   * @memberOf FlavorJS
   * @method initArrayPrototype
   * @instance
   */
  initArrayPrototype() {
    this.extendPrototype(Array.prototype, {
      /**
       * isArray<br><br>
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
        return _.concat(this, arr);
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
    });
  }

  /**
   * initStringPrototype
   * @memberOf FlavorJS
   * @method initStringPrototype
   * @instance
   */
  initStringPrototype() {
    this.extendPrototype(String.prototype, {
      toArray(separator) {
        return _.split(this, separator);
      },
      contains(value) {
        return (this.indexOf(value) !== -1);
      },
      startsWith(value) {
        return new RegExp('^' + value).test(this);
      },
      endsWith(value) {
        return new RegExp(value + '$').test(this);
      },
      replaceAll(find, replace) {
        return this.replace(new RegExp(find, 'g'), replace || '');
      },
      guid() {
        // Random GUID generator based on .toString(16);
        return Math.random().toString(16).slice(2, 10) + '-' + Math.random().toString(16).slice(2, 6) + '-4' + Math.random().toString(16).slice(2, 5) + '-' + Math.random().toString(16).slice(2, 6) + '-' + Math.random().toString(16).slice(2, 14);

        // Random GUID generator based on regex
        // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        //   var r: Math.random()*16|0, v: c == 'x' ? r : (r&0x3|0x8);
        //   return v.toString(16);
        // });
      },
      randomPhoneNum() {
        return Math.floor(100000000 + (Math.random() * 900000000));
      },
      encodeURI() {
        return encodeURIComponent(this);
      },
      decodeURI() {
        return decodeURIComponent(this);
      },
      encodeHTML() {
        return _.escape(this);
      },
      decodeHTML() {
        return _.unescape(this);
      },
      unescape() {
        return this.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
          const num = parseInt(numStr, 10); // read num as normal number
          return String.fromCharCode(num);
        });
      },
      extractDomain(level) {
        let domain;

        // find & remove protocol (http, ftp, etc.) and get domain
        domain = this.split('/')[(this.indexOf('://') > -1 ? 2 : 0)];

        // find & remove port number
        domain = domain.split(':')[0];
        domain = domain.replaceAll('www.', '');

        const domainArr = domain.split('.');
        return domainArr.slice(domainArr.length - level).join('.');
      },
      extractQueryString() {
        const queryStringObject = {};

        if(this.contains('?')) {
          const queryString = this.split('?')[1];
          const queryStringParams = queryString.split('&');
          queryStringParams.each((param) => {
            param = param.split('=');
            queryStringObject[param[0]] = param[1];
          });
        }

        return queryStringObject;
      },
      slugify(dashed) {
        dashed = !!dashed;
        const returnString = this.toString().toLowerCase()
                                 .replace(/\s+/g, dashed ? '-' : '') // Replace spaces with -
                                 .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                                 .replace(/\-\-+/g, dashed ? '-' : '') // Replace multiple - with single -
                                 .replace(/^-+/, '') // Trim - from start of text
                                 .replace(/-+$/, ''); // Trim - from end of text

        return dashed ? returnString : returnString.replaceAll('-', '');
      },

      /**
       * camel cases a string
       * @example <caption>eg. usage</caption>
       * console.log(String.camelCase('Foo Bar')); // 'fooBar'
       *
       * console.log(String.camelCase('--foo-bar--')); // 'fooBar'
       *
       * console.log(String.camelCase('__FOO_BAR__')); // 'fooBar'
       * @memberOf string
       * @method camelCase
       * @instance
       */
      camelCase() {
        return _.camelCase(this);
      },

      /**
       * @inheritDoc String.capitalize
       */
      capitalize() {
        return _.capitalize(this);
      },

      /**
       * @inheritDoc String.getFileExtension
       */
      getFileExtension() {
        return this.substring(this.lastIndexOf('.') + 1).toLowerCase();
      },

      /**
       * @inheritDoc String.stripTags
       */
      stripTags() {
        const div = document.createElement('div');
        div.innerHTML = this;
        return div.textContent;
      },
      // lorem(count, units) {
      //   return holderIpsum[units](count);
      // },
      /**
       * @inheritDoc String.pad
       */
      pad(length, chars) {
        return _.pad(this, length, chars);
      },

      /**
       * @inheritDoc String.padLeft
       */
      padLeft(length, chars) {
        return _.padStart(this, length, chars);
      },

      /**
       * @inheritDoc String.padRight
       */
      padRight(length, chars) {
        return _.padEnd(this, length, chars);
      },

      /**
       * @inheritDoc String.toInt
       */
      toInt() {
        return Number.parse(this);
      },

      /**
       * @inheritDoc String.isUrl
       */
      isUrl() {
        return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(this);
      },

      /**
       * @inheritDoc String.isRoman
       */
      isRoman() {
        return !!Number.fromRoman(this);
      },


      /**
       * @inheritDoc String.isPercentage
       */
      isPercentage() {
        return /^\d+(\.\d+)?%$/.test(this);
      },

      /**
       * @inheritDoc String.parsePercentage
       */
      parsePercentage() {
        if(this.isPercentage()) {
          return parseFloat(this) / 100.00;
        }

        return this;
      },
    });

    this.extendPrototype(String, {
      /**
       * isString<br><br>
       * @example <caption>eg. usage</caption>
       * var s = new string('foo');
       *
       * console.log(String.isString(s)); // true
       *
       * console.log(String.isString(2)); // false
       *
       * console.log(String.isString('')); // true
       *
       * console.log(String.isString(null)); // false
       * @memberOf string
       * @method isString
       * @instance
       * @param {string} s - the string to be checked
       * @return {boolean}
       */
      isString(s) {
        return _.isString(s);
      },

      /**
       * checks if a string is a roman number string
       * @example <caption>eg. usage</caption>
       * console.log(String.isRoman('MCMLXXX')); // true
       *
       * console.log(String.isRoman('50,25')); // false
       *
       * console.log(String.isRoman(5)); // false
       * @memberOf string
       * @method isRoman
       * @instance
       * @param {string} s - the string to be checked
       * @return {boolean}
       */
      isRoman(s) {
        return String.prototype.isRoman.call(s);
      },

      /**
       * checks if a string is an url string (URI)
       * @example <caption>eg. usage</caption>
       * console.log(String.isUrl('http://www.google.it')); // true
       *
       * console.log(String.isUrl('50,25')); // false
       *
       * console.log(String.isUrl(5)); // false
       * @memberOf string
       * @method isUrl
       * @instance
       * @param {string} s - the string to check
       * @return {*|boolean}
       */
      isUrl(s) {
        return String.prototype.isUrl.call(s);
      },

      /**
       * checks if a string is a percentage string
       * @example <caption>eg. usage</caption>
       * console.log(String.isPercentage('50,25%')); // true
       *
       * console.log(String.isPercentage('50,25')); // false
       *
       * console.log(String.isPercentage(5)); // false
       * @memberOf string
       * @method parsePercentage
       * @instance
       * @param {string} s - the string to be checked
       * @return {boolean}
       */
      isPercentage(s) {
        return String.prototype.isPercentage.call(s);
      },

      /**
       * capitalizes a string
       * @example <caption>eg. usage</caption>
       * console.log(String.capitalize('we\'re happy to use flavorJS')); // We're Happy To Use Flavorjs
       *
       * console.log(String.capitalize('we\'re happy to use flavorJS', false)); // We're happy to use flavorjs
       *
       * console.log(String.capitalize('flavorJS')); // Flavorjs
       * @memberOf string
       * @method capitalize
       * @instance
       * @param {string} s
       * @param {boolean} [all=true]
       * @return {string}
       */
      capitalize(s, all = true) {
        return String.prototype.capitalize.call(s, all);
      },

      /**
       * extracts the file extension from a filename/path string
       * @example <caption>eg. usage</caption>
       * console.log(String.getFileExtension('file.jpg')); // 'jpg'
       *
       * console.log(String.getFileExtension('file')); // ''
       *
       * console.log(String.getFileExtension(1)); // 1
       * @memberOf string
       * @method getFileExtension
       * @instance
       * @param s
       * @return {*}
       */
      getFileExtension(s) {
        return String.prototype.getFileExtension.call(s);
      },
      /**
       * pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
       * @example <caption>eg. usage</caption>
       * console.log(String.pad('5', 5)); // '  5  '
       *
       * console.log(String.pad('5', 5, '0')); // '00500'
       *
       * console.log(String.pad(4, 5, '01')); // '01401'
       *
       * console.log(String.pad(true, 5, '01')); // '1true'
       *
       * console.log(String.pad(4, 5, '01')); // '01401'
       *
       * console.log(String.pad(new Date(), 50, '--') // '-----Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)-----'
       * @memberOf string
       * @method pad
       * @instance
       * @param length
       * @param chars
       * @return {string}
       */
      pad(length, chars) {
        return _.pad(this, length, chars);
      },

      /**
       * pads left a string
       * @example <caption>eg. usage</caption>
       * console.log(String.padLeft('5', 4)); // '   5'
       *
       * console.log(String.padLeft('5', 4, '0')); // '0005'
       *
       * console.log(String.padLeft('5', 5, '01')); // '01015'
       *
       * console.log(String.padLeft(5, 4, '0')); // '0005'
       *
       * console.log(String.padLeft(true, 5, '0')); // '0true'
       *
       * console.log(String.padLeft(new Date(), 50, '--') // '----------Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)'
       * @memberOf string
       * @method padLeft
       * @instance
       * @param length
       * @param chars
       * @return {string}
       */
      padLeft(length, chars) {
        return _.padStart(this, length, chars);
      },

      /**
       * pads right a string
       * @example <caption>eg. usage</caption>
       * console.log(String.padRight('5', 4)); // '5   '
       *
       * console.log(String.padRight('5', 4, '0')); // '5000'
       *
       * console.log(String.padRight('5', 5, '01')); // '50101'
       *
       * console.log(String.padRight(5, 4, '0')); // '5000'
       *
       * console.log(String.padRight(true, 5, '0')); // 'true0'
       *
       * console.log(String.padRight(new Date(), 50, '--') // 'Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)----------'
       * @memberOf string
       * @method padRight
       * @instance
       * @param length
       * @param chars
       * @return {string}
       */
      padRight(length, chars) {
        return _.padEnd(this, length, chars);
      },

      /**
       * parses a percentage string to a number
       * @example <caption>eg. usage</caption>
       * console.log(String.parsePercentage('50,25%')); // 50.25
       *
       * console.log(String.parsePercentage('50,25')); // '50,25'
       *
       * console.log(String.parsePercentage(5)); // 5
       * @memberOf string
       * @method parsePercentage
       * @instance
       * @param {string} s - the string to be parsed
       * @return {number}
       */
      parsePercentage(s) {
        return String.prototype.parsePercentage.call(s);
      },

      /**
       * strips all html tags from an html code string
       * @example <caption>eg. usage</caption>
       * console.log(String.stripTags('<div>flavorJS</div>')); // 'flavorJS'
       *
       * console.log(String.stripTags('flavorJS')); // 'flavorJS'
       * @memberOf string
       * @method stripTags
       * @instance
       * @return {string}
       */
      stripTags(s) {
        return String.prototype.stripTags.call(s);
      },

      /**
       * converts a string to a number
       * @example <caption>eg. usage</caption>
       * console.log(String.toInt('550')); // 550
       * @memberOf string
       * @method toInt
       * @instance
       * @return {number}
       */
      toInt(s) {
        return String.prototype.toInt.call(s);
      },
    });
  }

  /**
   * initDatePrototype
   * @memberOf FlavorJS
   * @method initDatePrototype
   * @instance
   */
  initDatePrototype() {
    this.extendPrototype(Date.prototype, {
      /**
       * transforms a date in a UTC timestamp integer
       * @example <caption>eg. usage</caption>
       * console.log((new Date()).toUTC()); // 1491317811925 @ 2017-04-4-16:57
       * @memberOf date
       * @method timestamp
       * @instance
       * @return {timestamp}
       */
      timestamp() {
        return Math.round(this);
      },
    });

    this.extendPrototype(Date, {
      /**
       * checks if something is a date
       * @example <caption>eg.usage</caption>
       * console.log(Date.isDate(new Date())); // true
       *
       * console.log(Date.isDate(0)); // false
       * @memberOf date
       * @method isDate
       * @instance
       */
      isDate() {
        return _.isDate(this);
      },
    });
  }

  /**
   * initNumberPrototype
   * @memberOf FlavorJS
   * @method initNumberPrototype
   * @instance
   */
  initNumberPrototype() {
    this.extendPrototype(Number.prototype, {
      /**
       * checks if your number is between a range
       * @example <caption>eg. usage</caption>
       * console.log((5).between(1, 10)); // true
       *
       * console.log((5).between(1, 4)); // false
       * @memberOf number
       * @method between
       * @instance
       * @param {number} [from=Number.MIN_VALUE] - the from number
       * @param {number} [to=Number.MAX_VALUE] - the to number
       * @return {boolean}
       */
      between(from = Number.MIN_VALUE, to = Number.MAX_VALUE) {
        return from <= this && this <= to;
      },

      /**
       * repeats a function n times
       * @example <caption>eg. usage</caption>
       * (5).times(function(i) {
       *   console.log(i);
       * });
       *
       * // logs
       * 1
       * 2
       * 3
       * 4
       * 5
       * @example <caption>or</caption>
       * (5).times(function(i) {
       *   console.log(i);
       * }, true);
       *
       * // logs
       * 5
       * 4
       * 3
       * 2
       * 1
       * @memberOf number
       * @method times
       * @instance
       * @param {function} iteratee - the iteratee function to invoke<br>
       * the iteratee will be invoked passing che cycle indicator as i<br>
       * so the iteratee has to be something like this<br>
       * @example
       * function(i) {}
       * @param {boolean} reverse - true if you want to do a times reverse cycle
       */
      times(iteratee, reverse) {
        (!!reverse) ? _.timesReverse(this, iteratee) : _.times(this, iteratee);
      },

      /**
       * converts a number in a Roman Number String
       * @example <caption>eg. usage</caption>
       * console.log((1980).toRoman()); // 'MCMLXXX'
       * @memberOf number
       * @method toRoman
       * @instance
       * @return {string}
       */
      toRoman() {
        let num = this;
        let result = '';
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        _.times(decimal.length, (i) => {
          while(num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
          }
        });

        return result;
      },

      /**
       * converts a number of bytes in a human readable file size string
       * @example <caption>eg. usage</caption>
       * console.log((1024).toFileSize()); // 1kb
       * @memberOf number
       * @method toFileSize
       * @instance
       * @param {number} precision - the precision number
       * @return {string}
       */
      toFileSize(precision = 0) {
        let fileSizeString = '0 B';

        if(!!this) {
          const sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
          const i = Math.floor(Math.log(this) / Math.log(1024));
          fileSizeString = parseFloat((this / Math.pow(1024, i)).toFixed(precision)) + sizes[i];
        }

        return fileSizeString;
      },

      /**
       * floors a value
       * @example <caption>eg. usage</caption>
       * console.log((5.076).floor()); // 4
       *
       * console.log((5.076).floor(2)); // 5.07
       *
       * console.log((5070).floor(-2)); // 5000
       * @memberOf number
       * @method floor
       * @instance
       * @param {number} [precision=0] - the precision number
       * @return {number}
       */
      floor(precision = 0) {
        return _.floor(this, precision);
      },

      /**
       * absolutes a number
       * @example <caption>eg. usage</caption>
       * console.log((1).toAbsolute()); // 1
       *
       * console.log((1.56).toAbsolute()); // 1.56
       *
       * console.log((-1.56).toAbsolute()); // 1.56
       * @memberOf number
       * @method toAbsolute
       * @instance
       * @return {number}
       */
      toAbsolute() {
        return Math.abs(this);
      },

      /**
       * rounds a value
       * @example <caption>eg. usage</caption>
       * console.log((5.007).round()); // 5
       *
       * console.log((5.007).round(2)); // 5.01
       *
       * console.log((5070).round(-2)); // 5100
       * @memberOf number
       * @method round
       * @instance
       * @param {number} [precision=0] - the precision number
       * @return {number}
       */
      round(precision = 0) {
        return _.round(this, precision);
      },
    });

    this.extendPrototype(Number, {
      /**
       * check if something is a number
       * @example <caption>eg. usage</caption>
       * var n = 1;
       *
       * console.log(Number.isNumber(n)); // true
       *
       * console.log(Number.isNumber(2)); // true
       *
       * console.log(Number.isNumber('')); // false
       *
       * console.log(Number.isNumber(null)); // false
       * @memberOf number
       * @method isNumber
       * @instance
       * @return {boolean}
       */
      isNumber(n) {
        return _.isNumber(n);
      },

      /**
       * parse a number value, returns null if parsing failes
       * @example <caption>eg. usage</caption>
       * console.log(Number.parse("1")); // 1
       *
       * console.log(Number.parse("1,25")); // 1.25
       *
       * console.log(Number.parse({})); // null
       * @memberOf number
       * @method parse
       * @instance
       * @param {*} n - the value to be parsed
       * @return {number|null}
       */
      parse(n) {
        return _.parseInt(n);
      },

      /**
       * randomizes a number
       * @example <caption>eg. usage</caption>
       * console.log(Number.random(1, 5)); // a number between 1 and 5
       *
       * console.log(Number.random(1, 5, true)); // a number between 1.0 and 5.0
       *
       * console.log(Number.random()); // a number between Number.MIN_VALUE and Number.MAX_VALUE
       * @memberOf number
       * @method random
       * @instance
       * @param {number} [lower=Number.MIN_VALUE] - the lower number
       * @param {number} [upper=Number.MAX_VALUE] - the upper number
       * @param {boolean} [floating=false] - ask to return a floating number value
       * @return {number}
       */
      random(lower = Number.MIN_VALUE, upper = Number.MAX_VALUE, floating = false) {
        return _.random(lower, upper, floating);
      },

      /**
       * converts a Romans Number String in a Decimal Number
       * @example <caption>eg. usage</caption>
       * console.log(Number.fromRoman('MCMLXXX')); // 1980
       * @memberOf number
       * @method fromRoman
       * @instance
       * @param {string} s - the roman number string
       * @return {number}
       */
      fromRoman(s) {
        let str = s;
        let result = null;
        // the result is now a number, not a string
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        decimal.length.times((i) => {
          while(str.indexOf(roman[i]) === 0) {
            if(!result) {
              result = 0;
            }

            result += decimal[i];
            str = str.replace(roman[i], '');
          }
        });

        return result;
      },
    });
  }

  /**
   * initBooleanPrototype
   * @memberOf FlavorJS
   * @method initBooleanPrototype
   * @instance
   */
  initBooleanPrototype() {
    this.extendPrototype(Boolean, {
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
      }
    });
  }

  initUtils() {
    this.inherit({
      /**
       * delays a function by specified ms
       * @example <caption>eg. usage</caption>
       * ƒ.delay(function() {
       *   console.log('ended')
       * }, 1000);
       *
       * // it logs 'ended' after 1000ms
       * @memberOf FlavorJS
       * @method delay
       * @instance
       * @param {function} fn - function to invoke
       * @param {number} ms - time to wait in milliseconds
       * @return {function}
       */
      delay(fn, ms) {
        return _.delay(fn, ms);
      },
    });
  }

  /**
   * initialize all
   * @memberOf FlavorJS
   * @method init
   * @instance
   */
  init() {
    this.initLodashMixins();
    this.initObjectPrototype();
    this.initFunctionPrototype();
    this.initArrayPrototype();
    this.initStringPrototype();
    this.initDatePrototype();
    this.initNumberPrototype();
    this.initBooleanPrototype();
    this.initUtils();

    this.initialized = true;
  }
}

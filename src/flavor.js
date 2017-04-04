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
   * @param {Prototype|Object} proto - the prototype/object to extend
   * @param {String} prop - the name of the property to be defined or modified
   * @param {*} val - val to be used as value in the descriptor for the property, can be any kind of native (Number, Function, etc...) or what you want
   * @param {Object} [options={}] - options to be used as parameters in the descriptor for the property<br>
   * possible options are (source documentation from <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank">Javascript|MDN docs</a>)<br>
   * @param {Boolean} [options.configurable=true] configurable - true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
   * @param {Boolean} [options.enumerable=false] enumerable - true if and only if this property shows up during enumeration of the properties on the corresponding object.
   * @param {Boolean} [options.writable=true] writable - true if and only if the value associated with the property may be changed with an assignment operator.
   * @param {Function} [options.get=undefined] get - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.<br>
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
   * @param {Function} [options.set=undefined] set - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>
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
   * @param {Prototype|Object} proto - the prototype/object to extend
   * @param {Object} extend - the extend object to be merged in prototype
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
       * eg. usage<br>
       * <pre>
       * var s = '23.97%';
       *
       * console.log(_.isPercentage(s)); // true
       * 
       * console.log(_.isPercentage('50%')); // true
       * 
       * console.log(_.isPercentage(10)); // false
       * </pre>
       * @memberOf Lodash
       * @method isPercentage
       * @instance
       * @param {String} s - the string
       * @return {Boolean}
       */
      isPercentage(s) {
        return _.isString(s) && s.isPercentage();
      },

      /**
       * parses float value in a percentage string<br><br>
       * eg. usage<br>
       * <pre>
       * var p = '50.5%';
       *
       * console.log(_.parsePercentage(p)); // 50.5
       * 
       * console.log(_.parsePercentage('100%')); // 100
       * 
       * console.log(_.parsePercentage(25.3)); // null
       * </pre>
       * @memberOf Lodash
       * @method parsePercentage
       * @instance
       * @param {String} s - the percentage string
       * @return {null|Number}
       */
      parsePercentage(s) {
        if(_.isPercentage(s)) {
          return parseFloat(s) / 100.00;
        }

        return null;
      },

      /**
       * filters a collection with a list of values specified for one property<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method filterByValues
       * @instance
       * @param {Array|Object} collection - the collection to filter
       * @param {String} key - the key to be used as property name
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
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method deepMap
       * @instance
       * @param {Array|Object} collection - the collection to use for the deep mapping
       * @param {String} [childrenPropName='children'] - the property name to use for children collection
       * @param {Function} mapCallback - the item mapping callback
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
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method deepFindBy
       * @instance
       * @param {Array|Object} collection - the collection
       * @param {String|Function} propName - the property name or the predicate function to invoke (item will be passed as parameter to the predicate)
       * @param {*} propValue - the property value
       * @param {String} [childrenPropName='children'] - the children prop name
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
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method deepOrderBy
       * @instance
       * @param {Array|Object} collection - the collection
       * @param {Array|String} propNames - the list of property names to sort
       * @param {Array|String} propDirections - the list of order by direction to use with propNames
       * @param {String} [childrenPropName='children'] - the children prop name
       * @return {Array|Object}
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
       * @memberOf Lodash
       * @method pullAllByComparator
       * @instance
       * @param {Collection} collection
       * @param {Array} values
       * @param {Function} comparator
       * @param {Function} iteratee
       * @return {Array}
       */
      pullAllByComparator(collection, values, comparator, iteratee) {
        return (collection && collection.length && values && values.length)
          ? _basePullAll(collection, values, _baseIteratee(iteratee, 2), comparator)
          : collection;
      },

      /**
       * a reverse implementation of _.times by Lodash<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method timesReverse
       * @instance
       * @param {Number} times - num of times to invoke iteratee
       * @param {Function} iteratee - the iteratee function to invoke
       */
      timesReverse(times, iteratee) {
        let index = times;

        while(--index >= 0) {
          _.isFunction(iteratee) && iteratee(index);
        }
      },

      /**
       * an implementation of _.times by Lodash, where you can specify start & end numbers<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * or<br>
       * <pre>
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
       * </pre>
       * @memberOf Lodash
       * @method timesRange
       * @instance
       * @param {Number} start - start num of times to invoke iteratee
       * @param {Number} end - end num of times to invoke iteratee
       * @param {Function} iteratee - the iteratee function to invoke
       * @param {Boolean} reverse - specify if you want reverse cycle
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
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method isObject
       * @instance
       * @return {Boolean}
       */
      isObject() {
        return _.isPlainObject(this);
      },

      /**
       * deep merges a variable list of objects inside this object instance or a new object (useful to implements defaults/options/settings pattern or set multiple properties at the same time or what you want)<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre><br>
       * or<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method inherit
       * @instance
       * @param {Boolean} [createNew] - specifies to create a new object to merge
       * @param {...Object} args - the list of objects to merge
       * @return {Object}
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
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method omit
       * @instance
       * @param {...Object} args - the list of properties to omit
       * @return {Object}
       */
      omit(...args) {
        return _.omit(this, ...args);
      },

      /**
       * returns a new object that picks only the specified properties<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method pick
       * @instance
       * @param {...Object} args - the list of properties to omit
       * @return {Object}
       */
      pick(...args) {
        return _.pick(this, ...args);
      },

      /**
       * clones an object<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method clone
       * @instance
       * @return {Object}
       */
      clone() {
        return _.cloneDeep(this);
      },

      /**
       * returns the value at the specified path of the object, with a default value<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre><br>
       * you can also use array paths<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method path
       * @instance
       * @param {String} path - the path to search inside the object
       * @param {Object} [defVal=null] - the default value to return if path is not found
       * @return {*|null}
       */
      path(path, defVal = null) {
        if(typeof this === 'object' && this instanceof Object) {
          return _.get(this, path, defVal);
        }

        return defVal;
      },

      /**
       * executes function for every property in the object<br><br>
       * eg. usage<br>
       * <pre>
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
       * </pre>
       * @memberOf Object
       * @method each
       * @instance
       * @param {Function} iteratee - the iteratee callback will be invoked with the following parameters<br>
       * so your callback has to be something like this<br><br>
       * <pre>
       * function iteratee(value, key) {}
       * </pre>
       * @param {*} iteratee.value - the property value of the object
       * @param {String} iteratee.key - the property key of the object
       * @return {Object} to make chainable the method
       */
      each(iteratee) {
        return _.each(this, iteratee);
      },
    });

    this.extendPrototypeProperty(Object, 'isObject', (o) => {
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
       *   eg. usage<br>
       * <pre>
       *   var f = function(){};
       *
       *   console.log(Function.isFunction(f)); // true<br>
       *   console.log(Function.isFunction(2)); // false<br>
       *   console.log(Function.isFunction(function(){})); // true<br>
       *   console.log(Function.isFunction(null)); // false
       * </pre>
       * @memberOf Function
       * @method isFunction
       * @instance
       * @return {Boolean}
       */
      isFunction() {
        return _.isFunction(this);
      },
      /**
       * proxies a function width scope and optional arguments<br><br>
       *   eg. usage<br>
       * <pre>
       *   var a = 1;
       *   var b = new Date();
       *   var c = function() {};
       *
       *   var scope = {
       *     prop1: 2.53,
       *     prop2: 'foo';
       *   };
       *
       *   var f = function(a, b, c) {
       *     console.log(this.prop1, a, b, c);
       *   }
       *
       *   f(a, b, c);
       *   // it logs
       *   undefined, 1, Date, function()
       *
       *   var pf = f.proxy(scope);
       *   pf(a, b, c);
       *   // it logs
       *   2.53, 1, Date, function()
       *
       *   pf = f.proxy(scope, 2, null);
       *   pf(a, b, c);
       *   // it logs
       *   2.53, 2, null, function()
       * </pre>
       * @memberOf Function
       * @method proxy
       * @instance
       * @param {Object} scope - the scope object (will be `this` inside the function)
       * @param {...Object} proxyArgs - pass one or more arguments to override the original handled arguments
       * @return {Function}
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
       * eg. usage<br>
       * <pre>
       * var a = new Array();
       *
       * console.log(Array.isArray(a)); // true<br>
       * console.log(Array.isArray(2)); // false<br>
       * console.log(Array.isArray([])); // true<br>
       * console.log(Array.isArray(null)); // false
       * </pre>
       * @memberOf Array
       * @method isArray
       * @instance
       * @return {Boolean}
       */
      isArray() {
        return _.isArray(this);
      },

      /**
       * checks if an Array contains an item<br><br>
       * eg. usage<br>
       * <pre>
       * var arr = ['a', 'e', 'i', 'o', 'u'];
       *
       * console.log(arr.contains('b')); // false
       *
       * console.log(arr.contains('a')); // true
       *
       * console.log(arr.contains(['a', 'b', 'e']); // true
       *
       * console.log(arr.contains(['a', 'b', 'e'], true); // false
       * </pre>
       * @memberOf Array
       * @method contains
       * @instance
       * @param {Array|*} item - can be anything or an array of anything
       * @param {Boolean} [all=false] - specify to check if the array must contain all items
       * @return {Boolean}
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
       * eg. usage<br>
       * <pre>
       * var arr = ['a', 'e', 'i', 'o', 'u'];
       *
       * console.log(arr.concat(['b', 'c', 'd']); // ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd']
       * </pre>
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
      /**
       * isString<br><br>
       *   eg. usage<br>
       * <pre>
       *   var s = new String('foo');
       *
       *   console.log(String.isString(s)); // true<br>
       *   console.log(String.isString(2)); // false<br>
       *   console.log(String.isString('')); // true<br>
       *   console.log(String.isString(null)); // false
       * </pre>
       * @memberOf String
       * @method isString
       * @instance
       * @return {Boolean}
       */
      isString() {
        return _.isString(this);
      },
      parsePercentage() {
        return _.parsePercentage(this);
      },
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
      camelCase() {
        return _.camelCase(this);
      },
      capitalize() {
        return _.capitalize(this);
      },
      getFileExtension() {
        return this.substring(this.lastIndexOf('.') + 1).toLowerCase();
      },
      stripTags() {
        const div = document.createElement('div');
        div.innerHTML = this;
        return div.textContent;
      },
      // lorem(count, units) {
      //   return holderIpsum[units](count);
      // },
      pad(length, chars) {
        return _.pad(this, length, chars);
      },
      padLeft(length, chars) {
        return _.padStart(this, length, chars);
      },
      padRight(length, chars) {
        return _.padEnd(this, length, chars);
      },
      toInt() {
        return _.parseInt(this);
      },
      isUrl() {
        return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(this);
      },
      isRoman() {
        return !!this.fromRoman();
      },
      isPercentage() {
        return /^\d+(\.\d+)?%$/.test(this);
      },
      fromRoman() {
        let str = this;
        let result = null;
        // the result is now a number, not a string
        const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        _.times(decimal.length, (i) => {
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

    this.extendPrototypeProperty(String, 'isString', (s) => {
      return String.prototype.isString.call(s);
    });

    this.extendPrototypeProperty(String, 'isPercentage', (s) => {
      return String.prototype.isPercentage.call(s);
    });

    this.extendPrototypeProperty(String, 'parsePercentage', (s) => {
      return String.prototype.parsePercentage.call(s);
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
      isDate() {
        return _.isDate(this);
      },
      toUTC() {
        return Math.round(this);
      },
    });
    this.extendPrototypeProperty(Date, 'isDate', (d) => {
      return Date.prototype.isDate.call(d);
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
       * isNumber<br><br>
       *   eg. usage<br>
       * <pre>
       *   var n = 1;
       *
       *   console.log(Number.isNumber(n)); // true<br>
       *   console.log(Number.isNumber(2)); // true<br>
       *   console.log(Number.isNumber('')); // false<br>
       *   console.log(Number.isNumber(null)); // false
       * </pre>
       * @memberOf Number
       * @method isNumber
       * @instance
       * @return {Boolean}
       */
      isNumber() {
        return _.isNumber(this);
      },
      between(from, to) {
        return from <= this && this <= to;
      },
      random(min, max, float) {
        return _.random(min || Number.MIN_VALUE, max || Number.MAX_VALUE, !!float);
      },

      times(fn, reverse) {
        if(!!reverse) {
          _.timesReverse(this, fn);
        } else {
          _.times(this, fn);
        }
      },
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
      toFileSize(decimals) {
        let fileSizeString = '0 Bytes';

        if(!!this) {
          decimals = decimals || 3;
          const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
          const i = Math.floor(Math.log(this) / Math.log(1024));
          fileSizeString = parseFloat((this / Math.pow(1024, i)).toFixed(decimals)) + ' ' + sizes[i];
        }

        return fileSizeString;
      },
      toFloat(decimals = 0) {
        return _.floor(this, decimals);
      },
      toAbsolute() {
        return Math.abs(this);
      },
      round() {
        return _.round(this);
      },
    });

    this.extendPrototype(Number, {
      isNumber(n) {
        return Number.prototype.isNumber.call(n);
      },
      parse(n) {
        return _.parseInt(n);
      },
      random(lower = 0, upper = 1, floating = false) {
        return _.random(lower, upper, floating);
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
    this.extendPrototype(Boolean.prototype, {
      /**
       * isBoolean<br><br>
       *   eg. usage<br>
       * <pre>
       *   var b = true;
       *
       *   console.log(Boolean.isBoolean(b)); // true<br>
       *   console.log(Boolean.isBoolean(2)); // false<br>
       *   console.log(Boolean.isBoolean(false)); // true<br>
       *   console.log(Boolean.isBoolean(null)); // false
       * </pre>
       * @memberOf Boolean
       * @method isBoolean
       * @instance
       * @return {Boolean}
       */
      isBoolean() {
        return _.isBoolean(this);
      },
      random() {
        return Math.random() >= 0.5;
      },
    });
    this.extendPrototypeProperty(Boolean, 'isBoolean', (b) => {
      return Boolean.prototype.isBoolean.call(b);
    });
  }

  initUtils() {
    this.inherit({
      delay: (fn, ms) => {
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

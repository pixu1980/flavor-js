(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Flavor = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * @typedef {array|object} collection
   * @description an array or an object to be used as collection
   */

  /**
   * @typedef {object} prototype
   * @description the prototype of a class
   */

  /**
   * @typedef {number} timestamp
   * @description the number that identifies a specific time as a timestamp
   */

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */
  if (!Object.entries) {
    Object.defineProperty(Object, 'entries', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        var ownProps = Object.keys(obj);
        var i = ownProps.length;
        var resArray = new Array(i); // preallocate the Array

        while (i--) {
          resArray[i] = [ownProps[i], obj[ownProps[i]]];
        }

        return resArray;
      }
    });
  }

  if (!Object.hasOwnProperty('getOwnPropertyDescriptors')) {
    Object.defineProperty(Object, 'getOwnPropertyDescriptors', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        return Reflect.ownKeys(obj).reduce(function (descriptors, key) {
          return Object.defineProperty(descriptors, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: Object.getOwnPropertyDescriptor(obj, key)
          });
        }, {});
      }
    });
  }

  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(target, firstSource) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);

        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];

          if (nextSource === undefined || nextSource === null) {
            // eslint-disable-next-line no-continue
            continue;
          }

          nextSource = Object(nextSource);
          var keysArray = Object.keys(Object(nextSource));

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }

        return to;
      }
    });
  }

  function convertToDescriptor(descriptor) {
    if (_typeof(descriptor) !== 'object' || descriptor === null) {
      throw new TypeError('desc is not a valid property descriptor');
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'enumerable')) {
      descriptor.enumerable = !!descriptor.enumerable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'configurable')) {
      descriptor.configurable = !!descriptor.configurable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'writable')) {
      descriptor.writable = !!descriptor.writable;
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'get')) {
      var getter = descriptor.get;

      if (typeof getter !== 'function' && typeof getter !== 'undefined') {
        throw new TypeError("".concat(getter, " is not a valid getter"));
      }
    }

    if (Object.prototype.hasOwnProperty.call(descriptor, 'set')) {
      var setter = descriptor.set;

      if (typeof setter !== 'function' && typeof setter !== 'undefined') {
        throw new TypeError("".concat(setter, " is not a valid setter"));
      }
    }

    if (('get' in descriptor || 'set' in descriptor) && ('value' in descriptor || 'writable' in descriptor)) {
      throw new TypeError('descriptor is not valid due to getter/setter presence along value/writable presence');
    }

    return descriptor;
  }

  if (!Object.defineProperties) {
    Object.defineProperty(Object, 'defineProperties', {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(obj, properties) {
        if (_typeof(obj) !== 'object' || obj === null) {
          throw new TypeError('obj is not an object');
        }

        properties = Object(properties);
        Object.entries(properties).forEach(function (property) {
          Object.defineProperty(obj, property[0], convertToDescriptor(property[1]));
        });
        return obj;
      }
    });
  }

  // THANKS TO https://gomakethings.com/true-type-checking-with-vanilla-js/
  function trueTypeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } // Object.prototype.toString.call([]); // [object Array]
  // Object.prototype.toString.call({}); // [object Object]
  // Object.prototype.toString.call(''); // [object String]
  // Object.prototype.toString.call(new Date()); // [object Date]
  // Object.prototype.toString.call(1); // [object Number]
  // Object.prototype.toString.call(function () {}); // [object Function]
  // Object.prototype.toString.call(/test/i); // [object RegExp]
  // Object.prototype.toString.call(true); // [object Boolean]
  // Object.prototype.toString.call(null); // [object Null]
  // Object.prototype.toString.call(); // [object Undefined]

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */

  /**
   * Array.isArray() polyfill
   */
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  if (!Array.isArray) {
    Object.defineProperty(Array, 'isArray', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(arr) {
        return trueTypeOf(arr) === 'array';
      }
    });
  }

  if (!Array.prototype.filter) {
    Object.defineProperty(Array.prototype, 'filter', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(f) {
        if (this === undefined || this === null) {
          throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (typeof fun !== 'function') {
          throw new TypeError();
        }

        var res = [];
        var thisArg = arguments.length >= 2 ? arguments[1] : undefined;
        var val = null;

        for (var i = 0; i < len; i++) {
          if (i in t) {
            val = t[i]; // NOTE: Technically this should Object.defineProperty at
            //       the next index, as push can be affected by
            //       properties on Object.prototype and Array.prototype.
            //       But that method's new, and collisions should be
            //       rare, so use the more-compatible alternative.

            if (f.call(thisArg, val, i, t)) {
              res.push(val);
            }
          }
        }

        return res;
      }
    });
  }

  if (!Array.prototype.map) {
    Object.defineProperty(Array.prototype, 'map', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(arr, iterator) {
        var result = [];

        for (var i = 0; i < arr.length; i += 1) {
          result.push(iterator(arr[i]));
        }

        return result;
      }
    });
  }

  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(valueToFind, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If len is 0, return false.

        if (len === 0) {
          return false;
        } // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)


        var n = fromIndex | 0; // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.

        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        } // 7. Repeat, while k < len


        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          } // c. Increase k by 1.


          k++;
        } // 8. Return false


        return false;
      }
    });
  } // Production steps of ECMA-262, Edition 5, 15.4.4.21
  // Reference: http://es5.github.io/#x15.4.4.21
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce


  if (!Array.prototype.reduce) {
    Object.defineProperty(Array.prototype, 'reduce', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(callback
      /*, initialValue*/
      ) {
        if (this === null) {
          throw new TypeError('Array.prototype.reduce called on null or undefined');
        }

        if (typeof callback !== 'function') {
          throw new TypeError(callback + ' is not a function');
        } // 1. Let O be ? ToObject(this value).


        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // Steps 3, 4, 5, 6, 7

        var k = 0;
        var value;

        if (arguments.length === 2) {
          value = arguments[1];
        } else {
          while (k < len && !(k in o)) {
            k++;
          } // 3. If len is 0 and initialValue is not present, throw a TypeError exception.


          if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
          }

          value = o[k++];
        } // 8. Repeat, while k < len


        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kPresent be ? HasProperty(O, Pk).
          // c. If kPresent is true, then
          //    i. Let kValue be ? Get(O, Pk).
          //    ii. Let accumulator be ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
          if (k in o) {
            value = callback(value, o[k], k, o);
          } // d. Increase k by 1.


          k++;
        } // 9. Return accumulator.


        return value;
      }
    });
  }

  /* eslint-disable prefer-destructuring */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable no-restricted-globals */

  /* eslint-disable no-bitwise */
  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(search, start) {
        start = typeof start !== 'number' ? 0 : start;

        if (start + search.length > this.length) {
          return false;
        }

        return this.indexOf(search, start) !== -1;
      }
    });
  }

  if (!String.prototype.toCamelCase) {
    Object.defineProperty(String.prototype, 'toCamelCase', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value() {
        var s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
          return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
        }).join('');
        return s.slice(0, 1).toLowerCase() + s.slice(1);
      }
    });
  }

  // check if needed https://github.com/airbnb/js-shims

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var prototype = {};

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var _native = {};

  /**
   * @namespace object
   * @description extensions for the JS primitive Object
   */
  var ObjectExt = {
    prototype: prototype,
    "native": _native
  };

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */
  var prototype$1 = {};

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */
  var _native$1 = {};

  /**
   * @namespace function
   * @description extensions for the JS primitive Function
   */
  var FunctionExt = {
    prototype: prototype$1,
    "native": _native$1
  };

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */
  var prototype$2 = {};

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */

  var _native$2 = {
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
    isBoolean: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(b) {
        return trueTypeOf(b) === 'boolean';
      }
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
    random: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        return Math.random() >= 0.5;
      }
    }
  };

  /**
   * @namespace boolean
   * @description extensions for the JS primitive Boolean
   */
  var BooleanExt = {
    prototype: prototype$2,
    "native": _native$2
  };

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var prototype$3 = {};

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var _native$3 = {};

  /**
   * @namespace number
   * @description extensions for the JS primitive Number
   */
  var NumberExt = {
    prototype: prototype$3,
    "native": _native$3
  };

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */
  var prototype$4 = {};

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */
  var _native$4 = {};

  /**
   * @namespace date
   * @description extensions for the JS primitive Date
   */
  var DateExt = {
    prototype: prototype$4,
    "native": _native$4
  };

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */
  var prototype$5 = {};

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */
  var _native$5 = {};

  /**
   * @namespace string
   * @description extensions for the JS primitive String
   */
  var StringExt = {
    prototype: prototype$5,
    "native": _native$5
  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var prototype$6 = {
    //TODO: implement rest arrays difference
    difference: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr) {
        var _this = this;

        var symmetric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (!!symmetric) {
          return Array.prototype.unique.call([].concat(_toConsumableArray(this.filter(function (item) {
            return !arr.includes(item);
          })), _toConsumableArray(arr.filter(function (item) {
            return !_this.includes(item);
          }))));
        }

        return this.filter(function (item) {
          return !arr.includes(item);
        });
      }
    },
    // //TODO: implement rest arrays intersection
    // intersection(arr) {
    //   return this.filter(item => arr.includes(item));
    // },
    // contains(any, all = true) {
    //   if (Array.isArray(any)) {
    //     if (!all) {
    //       return Array.prototype.intersection.call(this, any).length > 0;
    //     }
    //     return Array.prototype.difference.call(this, any).length === 0;
    //   }
    //   return Array.prototype.includes.call(this, any);
    // },
    unique: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        return _toConsumableArray(new Set(this));
      }
    } // sortBy(propNames, propDirections) {
    //   if (String.isString(propNames)) {
    //     propNames = [propNames];
    //   }
    //   if (!!propDirections) {
    //     if (String.isString(propDirections)) {
    //       propDirections = [propDirections];
    //     }
    //   } else {
    //     propDirections = propNames.map(() => {
    //       return 'asc';
    //     });
    //   }
    //   return _.orderBy(this, propNames, propDirections);
    // },
    // deepSortBy(propNames, propDirections = null, childrenPropName = 'children') {
    //   if (String.isString(propNames)) {
    //     propNames = [propNames];
    //   }
    //   if (!!propDirections) {
    //     if (String.isString(propDirections)) {
    //       propDirections = [propDirections];
    //     }
    //   } else {
    //     propDirections = propNames.map(() => {
    //       return 'asc';
    //     });
    //   }
    //   return _.deepOrderBy(this, propNames, propDirections, childrenPropName);
    // },
    // filterBy(propNames, propValues) {
    //   let predicate = null;
    //   if (Function.isFunction(propNames)) {
    //     predicate = propNames;
    //     return _.filter(this, predicate);
    //   } else if (Array.isArray(propValues)) {
    //     return _.filterByValues(this, propNames, propValues);
    //   }
    //   predicate = {};
    //   predicate[propNames] = propValues;
    //   return _.filter(this, predicate) || [];
    // },
    // pull(item) {
    //   return _.pull(this, item);
    // },
    // pullBy(propName, propValue) {
    //   if (Array.isArray(propName) && _.isFunction(propValue)) {
    //     const values = propName;
    //     const comparator = propValue;
    //     return _.pullAllByComparator(this, values, comparator);
    //   }
    //   const predicate = {};
    //   predicate[propName] = propValue;
    //   return _.pullAllBy(this, [predicate]);
    // },
    // findBy(propName, propValue = null, reverse = false) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (predicate) {
    //     if (reverse) {
    //       return _.findLast(this, predicate);
    //     }
    //     return _.find(this, predicate);
    //   }
    //   return null;
    // },
    // deepFindBy(propName, propValue = null, childrenPropName = 'children') {
    //   return _.deepFindBy(this, propName, propValue, childrenPropName);
    // },
    // indexBy(propName, propValue, reverse = false) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (predicate) {
    //     if (reverse) {
    //       return _.findLastIndex(this, predicate);
    //     }
    //     return _.findIndex(this, predicate);
    //   }
    //   return null;
    // },
    // containsBy(propName, propValue) {
    //   return this.findBy(propName, propValue) !== undefined;
    // },
    // countBy(propName, propValue, falseValues) {
    //   let predicate = null;
    //   if (Function.isFunction(propName) || Object.isObject(propName)) {
    //     predicate = propName;
    //   } else if (String.isString(propName)) {
    //     predicate = {};
    //     predicate[propName] = propValue;
    //   }
    //   if (!!predicate) {
    //     return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
    //   }
    //   return 0;
    // },
    // union(...arrays) {
    //   return _.unionWith(this, ...arrays, _.isEqual);
    // },
    // random(weightField = null, valueField = null) {
    //   if (!!weightField) {
    //     return this.map((item) => {
    //       return _.times(item[weightField || 'weight'], () => {
    //         if (!!valueField) {
    //           return item[valueField || 'value'];
    //         }
    //         return _.omit(item, weightField);
    //       });
    //     }).flatten().shuffle().first();
    //   }
    //   return _.sample(this);
    // },
    // each(iteratee, reverse = false) {
    //   if (!!reverse) {
    //     return _.eachRight(this, iteratee);
    //   }
    //   return _.each(this, iteratee);
    // },
    // first(propName, propValue) {
    //   let a = this;
    //   if (!!propName) {
    //     a = this.filterBy(propName, propValue);
    //   }
    //   return _.first(a);
    // },
    // last(propName, propValue) {
    //   let a = this;
    //   if (!!propName) {
    //     a = this.filterBy(propName, propValue);
    //   }
    //   return _.last(a);
    // },
    // sum(propName, startValue = 0) {
    //   let predicate = null;
    //   if (Function.isFunction(propName)) {
    //     predicate = propName;
    //   } else {
    //     predicate = (acc, item) => {
    //       return acc + item[propName];
    //     };
    //   }
    //   return _.reduce(this, predicate, startValue);
    // },
    // deepMap(childrenPropName = 'children', iteratee) {
    //   return _.deepMap(this, childrenPropName, iteratee);
    // },
    // lorem(items, model = false) {
    //   return Number.times(items, (i) => {
    //     if (!!model) {
    //       return Function.isFunction(model) ? model(i) : model;
    //     }
    //     return i;
    //   });
    // },
    // flatten(deep) {
    //   if (!!deep) {
    //     if (Number.isNumber(deep)) {
    //       return _.flattenDepth(this, deep);
    //     } else if (Boolean.isBoolean(deep)) {
    //       return _.flattenDeep(this);
    //     }
    //   }
    //   return _.flatten(this);
    // },
    // shuffle() {
    //   return _.shuffle(this);
    // },
    // split(n = 0) {
    //   return _.chunk(this, n);
    // },
    // reverse(clone = false) {
    //   if (!!clone) {
    //     return _.reverse(_.clone(this));
    //   }
    //   return _.reverse(this);
    // },
    // tail() {
    //   return _.tail(this);
    // },
    // cut() {
    //   return _.initial(this);
    // },
    // clone() {
    //   return [...this];
    // },
    // maxBy(propName = null) {
    //   if (propName) {
    //     return _.maxBy(this, propName);
    //   }
    //   return null;
    // },

  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var _native$6 = {
    /**
     * return a new array containing the difference between two arrays
     * @example <caption>eg. usage</caption>
     * var arr1 = ['a', 'e', 'i', 'o', 'u'];
     * var arr2 = ['a', 'd', 'f', 'o', 'u'];
     *
     * console.log(Array.difference(arr1, arr2)); // ['d', 'e', 'f', 'i']
     * console.log(Array.difference(arr1, arr2, false)); // ['e', 'i']
     *
     * console.log(arr1.difference(arr2)); // ['d', 'e', 'f', 'i']
     * console.log(arr1.difference(arr2, false)); // ['e', 'i']
     * @memberOf array
     * @method difference
     * @instance
     * @param {array} arr1 - the first array
     * @param {array} arr2 - the second array
     * @param {boolean} symmetric - if true does the real difference between both of the two arrays
     * @return {boolean}
     */
    difference: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(arr1, arr2) {
        var symmetric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (Array.isArray(arr1) && Array.isArray(arr2)) {
          return Array.prototype.difference.call(arr1, arr2, symmetric);
        }

        return [];
      }
    },
    // /**
    //  * return a new array containing the intersection between two arrays
    //  * @example <caption>eg. usage</caption>
    //  * var arr1 = ['a', 'e', 'i', 'o', 'u'];
    //  * var arr2 = ['a', 'd', 'f', 'o', 'u'];
    //  *
    //  * console.log(Array.intersection(arr1, arr2)); // ['a', 'o', 'u']
    //  *
    //  * console.log(arr1.intersection(arr2)); // ['a', 'o', 'u']
    //  * @memberOf array
    //  * @method intersection
    //  * @instance
    //  * @param {array} arr1 - the first array
    //  * @param {array} arr2 - the second array
    //  * @return {boolean}
    //  */
    // intersection(arr1, arr2) {
    //   if (Array.isArray(arr1) && Array.isArray(arr2)) {
    //     return Array.prototype.intersection.call(arr1, arr2);
    //   }
    //   return [];
    // },

    /**
     * returns a new unique items array from an array<br><br>
     * @example <caption>eg. usage</caption>
     * var arr = ['a', 'a', 'e', 'i', 'o', 'u'];
     *
     * console.log(Array.unique(arr); // ['a', 'e', 'i', 'o', 'u']
     * console.log(arr.unique(); // ['a', 'e', 'i', 'o', 'u']
     * @memberOf array
     * @method unique
     * @instance
     * @param {array} a - the array to be uniqued
     * @return {array}
     */
    unique: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value(a) {
        if (Array.isArray(a)) {
          return Array.prototype.unique.call(a);
        }

        return a;
      }
    } // /**
    //  * checks if an Array contains something
    //  * @example <caption>eg. usage</caption>
    //  * var arr = ['a', 'e', 'i', 'o', 'u'];
    //  *
    //  * console.log(Array.contains(arr, 'b')); // false
    //  * console.log(Array.contains(arr, 'a')); // true
    //  * console.log(Array.contains(arr, ['a', 'b', 'e']); // true
    //  * console.log(Array.contains(arr, ['a', 'b', 'e'], true); // false
    //  *
    //  * console.log(arr.contains('b')); // false
    //  * console.log(arr.contains('a')); // true
    //  * console.log(arr.contains(['a', 'b', 'e']); // true
    //  * console.log(arr.contains(['a', 'b', 'e'], true); // false
    //  * @memberOf array
    //  * @method contains
    //  * @instance
    //  * @param {array} a - the array to be checked
    //  * @param {array|*} item - can be anything or an array of anything
    //  * @param {boolean} [all=false] - specify to check if the array must contain all items
    //  * @return {boolean}
    //  */
    // contains(a, item, all = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.contains.call(a, item, all);
    //   }
    //   return a;
    // },
    // /**
    //  * creates an array of unique array values not included in the other provided arrays
    //  * @example <caption>eg. usage</caption>
    //  * var arr = ['a', 'e', 'i', 'o', 'u'];
    //  * var arr2 = ['a', 'b', 'c', 'd', 'e'];
    //  *
    //  * console.log(Array.diff(arr, arr2)); // ['i', 'o', 'u']
    //  * console.log(arr.diff(arr2)); // same as above
    //  *
    //  * console.log(Array.diff(arr2, arr)); // ['b', 'c', 'd']
    //  * console.log(arr2.diff(arr)); // same as above
    //  *
    //  * var collection = [{id: 1, type: 'a'}, {id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}];
    //  * var collection2 = [{id: 1, type: 'a'}, {id: 2, type: 'b'}, {id: 3, type: 'c'}, {id: 4, type: 'd'}, {id: 5, type: 'e'}];
    //  *
    //  * console.log(Array.diff(collection, collection2)); // [{id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
    //  * console.log(collection.diff(collection2)); // same as above
    //  *
    //  * console.log(Array.diff(collection, collection2, 'type'); // [{id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
    //  * console.log(collection.diff(collection2, 'type'); // same as above
    //  *
    //  * console.log(Array.diff(collection, collection2, function(aitem, bitem) {
    //  *   return aitem.type === bitem.type;
    //  * })); // same as above
    //  *
    //  * console.log(collection.diff(collection2, function(aitem, bitem) {
    //  *   return aitem.type === bitem.type;
    //  * })); // same as above
    //  * @memberOf array
    //  * @method diff
    //  * @instance
    //  * @param {array} a - the first array to use for the diff
    //  * @param {array} b - the second array to use for the diff
    //  * @param {function|string} [fn=null] - function to use as comparator for the diff or the propname to check for the equality or nothing for standard equality<br>
    //  * the function will be invoked with an item from the first array and an item from the second array,<br>
    //  * so the function has to look like this<br>
    //  * <pre>
    //  * function(aitem, bitem) {}
    //  * </pre>
    //  * @param {object|any} fn.aitem - the item from the first array
    //  * @param {object|any} fn.bitem - the item from the second array
    //  * @return {array}
    //  */
    // diff(a, b, fn = null) {
    //   if (Array.isArray(a) && Array.isArray(b)) {
    //     return Array.prototype.diff.call(a, b, fn);
    //   }
    //   return [];
    // },
    // /**
    //  * creates an array of unique array values not included in the other provided arrays based on a field equality (aliases Array.diff)
    //  * @example <caption>eg. usage</caption>
    //  * @memberOf array
    //  * @method diffBy
    //  * @instance
    //  * @param {array} a - the first array to use for the diff
    //  * @param {array} b - the second array to use for the diff
    //  * @param {string} propName - the property name to be used in comparator for the diff
    //  * @return {array|null}
    //  */
    // diffBy(a, b, propName) {
    //   if (Array.isArray(a) && Array.isArray(b)) {
    //     return Array.diff(a, b, propName);
    //   }
    //   return null;
    // },
    // /**
    //  * sorts an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {id: 1, type: 'a'},
    //  *   {id: 3, type: 'i'},
    //  *   {id: 5, type: 'u'},
    //  *   {id: 4, type: 'o'},
    //  *   {id: 2, type: 'e'}
    //  * ];
    //  *
    //  * console.log(Array.sortBy(collection, 'type')); // [{id: 1, type: 'a'}, {id: 2, type: 'e'}, {id: 3, type: 'i'}, {id: 4, type: 'o'}, {id: 5, type: 'u'}]
    //  * console.log(collection.sortBy('type')); // same as above
    //  *
    //  * console.log(Array.sortBy(collection, 'id', 'desc')); // [{id: 5, type: 'u'}, {id: 4, type: 'o'}, {id: 3, type: 'i'}, {id: 2, type: 'e'}, {id: 1, type: 'a'}]
    //  * console.log(collection.softBy('id', 'desc')); // same as above
    //  *
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.sortBy(collection, ['type', 'value']));
    //  * // [
    //  * //   {type: 'a', value: 'a'},
    //  * //   {type: 'a', value: 'a-1-1'},
    //  * //   {type: 'a', value: 'a-1-3'},
    //  * //   {type: 'a', value: 'a-2-1'},
    //  * //   {type: 'b', value: 'b'},
    //  * //   {type: 'c', value: 'c'},
    //  * // ];
    //  *
    //  * console.log(collection.sortBy(['type', 'value'])); // same as above
    //  *
    //  * console.log(Array.sortBy(collection, ['type', 'value'], ['asc', 'desc']));
    //  * // [
    //  * //   {type: 'a', value: 'a'},
    //  * //   {type: 'a', value: 'a-2-1'},
    //  * //   {type: 'a', value: 'a-1-3'},
    //  * //   {type: 'a', value: 'a-1-1'},
    //  * //   {type: 'b', value: 'b'},
    //  * //   {type: 'c', value: 'c'},
    //  * // ];
    //  *
    //  * console.log(collection.sortBy(['type', 'value'], ['asc', 'desc'])); // same as above
    //  * @memberOf array
    //  * @method sortBy
    //  * @instance
    //  * @param {array} a - the array to be sorted
    //  * @param {array|string} propNames - the propName(s) you want to use for sorting
    //  * @param {array|string|null} [propDirections=null] - the propDirection(s) you want to use for sorting (respect propName(s) order)
    //  * @return {array}
    //  */
    // sortBy(a, propNames, propDirections = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.sortBy.call(a, propNames, propDirections);
    //   }
    //   return a;
    // },
    // /**
    //  * deeply sorts an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'b', value: 'b', items: [
    //  *     {type: 'b', value: 'b-1'},
    //  *     {type: 'b', value: 'b-5'},
    //  *     {type: 'b', value: 'b-2'},
    //  *     {type: 'b', value: 'b-4'},
    //  *     {type: 'b', value: 'b-3'},
    //  *   ]},
    //  *   {type: 'd', value: 'd'},
    //  *   {type: 'a', value: 'a', items: [
    //  *     {type: 'a', value: 'a-1', items: [
    //  *       {type: 'a', value: 'a-1-1'},
    //  *       {type: 'a', value: 'a-1-3'},
    //  *       {type: 'a', value: 'a-1-2'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-5', items: [
    //  *       {type: 'a', value: 'a-5-1'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-2', items: [
    //  *       {type: 'a', value: 'a-2-1'},
    //  *       {type: 'a', value: 'a-2-3'},
    //  *       {type: 'a', value: 'a-2-2'},
    //  *       {type: 'a', value: 'a-2-4'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-4', items: [
    //  *       {type: 'a', value: 'a-4-1'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-3', items: [
    //  *       {type: 'a', value: 'a-3-2'},
    //  *       {type: 'a', value: 'a-3-1'},
    //  *     ]}},
    //  *   ]},
    //  *   {type: 'c', value: 'c', items: []},
    //  * ];
    //  *
    //  * console.log(Array.deepSortBy(collection, ['type', 'value'], ['asc', 'desc'], 'items'));
    //  * // [
    //  * //   {type: 'a', value: 'a', items: [
    //  * //     {type: 'a', value: 'a-5', items: [
    //  * //       {type: 'a', value: 'a-5-1'},
    //  * //     ]}},
    //  * //     {type: 'a', value: 'a-4', items: [
    //  * //       {type: 'a', value: 'a-4-1'},
    //  * //     ]}},
    //  * //     {type: 'a', value: 'a-3', items: [
    //  * //       {type: 'a', value: 'a-3-2'},
    //  * //       {type: 'a', value: 'a-3-1'},
    //  * //     ]}},
    //  * //     {type: 'a', value: 'a-2', items: [
    //  * //       {type: 'a', value: 'a-2-4'},
    //  * //       {type: 'a', value: 'a-2-3'},
    //  * //       {type: 'a', value: 'a-2-2'},
    //  * //       {type: 'a', value: 'a-2-1'},
    //  * //     ]}},
    //  * //     {type: 'a', value: 'a-1', items: [
    //  * //       {type: 'a', value: 'a-1-3'},
    //  * //       {type: 'a', value: 'a-1-2'},
    //  * //       {type: 'a', value: 'a-1-1'},
    //  * //     ]}},
    //  * //   ]},
    //  * //   {type: 'b', value: 'b', items: [
    //  * //     {type: 'b', value: 'b-5'},
    //  * //     {type: 'b', value: 'b-4'},
    //  * //     {type: 'b', value: 'b-3'},
    //  * //     {type: 'b', value: 'b-2'},
    //  * //     {type: 'b', value: 'b-1'},
    //  * //   ]},
    //  * //   {type: 'c', value: 'c', items: []},
    //  * //   {type: 'd', value: 'd'},
    //  * // ]
    //  * @memberOf array
    //  * @method deepSortBy
    //  * @instance
    //  * @param {array} a - the array to be sorted
    //  * @param {array|string} propNames - the propName(s) you want to use for sorting
    //  * @param {array|string|null} [propDirections=null] - the propDirection(s) you want to use for sorting (respect propName(s) order)
    //  * @param {string} [childrenPropName='children'] - the childrenPropName to be used for sorting
    //  * @return {array}
    //  */
    // deepSortBy(a, propNames, propDirections = null, childrenPropName = 'children') {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.deepSortBy.call(a, propNames, propDirections, childrenPropName);
    //   }
    //   return a;
    // },
    // /**
    //  * filters an array by propName or predicate
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.filterBy(collection, type, 'a'));
    //  * // [
    //  * //   {type: 'a', value: 'a'},
    //  * //   {type: 'a', value: 'a-2-1'},
    //  * //   {type: 'a', value: 'a-1-3'},
    //  * //   {type: 'a', value: 'a-1-1'},
    //  * // ]
    //  *
    //  * console.log(collection.filterBy('type', 'a')); // same as above
    //  *
    //  * console.log(Array.filterBy(collection, function(item) {
    //  *   return item.value.contains('1');
    //  * }));
    //  * // [
    //  * //   {type: 'a', value: 'a-2-1'},
    //  * //   {type: 'a', value: 'a-1-3'},
    //  * //   {type: 'a', value: 'a-1-1'},
    //  * // ]
    //  *
    //  * console.log(collection.filterBy(function(item) {
    //  *   return item.value.contains('1');
    //  * })); // same as above
    //  * @memberOf array
    //  * @method filterBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} propValue
    //  * @return {array}
    //  */
    // filterBy(a, propName, propValue) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.filterBy.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * removes an item from an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.pull(collection, {type: 'a', value: 'a'}));
    //  * // [
    //  * //   {type: 'a', value: 'a-2-1'},
    //  * //   {type: 'a', value: 'a-1-3'},
    //  * //   {type: 'c', value: 'c'},
    //  * //   {type: 'a', value: 'a-1-1'},
    //  * //   {type: 'b', value: 'b'},
    //  * // ]
    //  *
    //  * console.log(collection.pull({type: 'a', value: 'a'})); // same as above
    //  * @memberOf array
    //  * @method pull
    //  * @instance
    //  * @param {array} a
    //  * @param {any} any
    //  * @return {array}
    //  */
    // pull(a, item) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.pull.call(a, item);
    //   }
    //   return a;
    // },
    // /**
    //  * removes an item from an array by propName/propValue pair or predicate
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.pullBy(collection, 'type', 'a'));
    //  * // [
    //  * //   {type: 'c', value: 'c'},
    //  * //   {type: 'b', value: 'b'},
    //  * // ]
    //  *
    //  * console.log(collection.pullBy('type', 'a')); // same as above
    //  *
    //  * console.log(Array.pullBy(collection, function(item) {
    //  *   return item.value.contains('1');
    //  * }));
    //  * // [
    //  * //   {type: 'a', value: 'a'},
    //  * //   {type: 'c', value: 'c'},
    //  * //   {type: 'b', value: 'b'},
    //  * // ]
    //  *
    //  * console.log(collection.pullBy(function(item) {
    //  *   return item.value.contains('1');
    //  * })); // same as above
    //  * @memberOf array
    //  * @method pullBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} propValue
    //  * @return {array}
    //  */
    // pullBy(a, propName, propValue) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.pullBy.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * finds an item in an array by propName/propValue pair or predicate,
    //  * returns the first element found respecting the specified predicate
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.findBy(collection, 'type', 'a')); // {type: 'a', value: 'a'}
    //  * console.log(collection.findBy('type', 'a')); // same as above
    //  *
    //  * console.log(Array.findBy(collection, 'type', 'a', true)); // {type: 'a', value: 'a-1-1'}
    //  * console.log(collection.findBy('type', 'a', true)); // same as above
    //  *
    //  * console.log(Array.findBy(collection, function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * })); // {type: 'a', value: 'a-2-1'}
    //  *
    //  * console.log(collection.findBy(function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * })); // same as above
    //  *
    //  * console.log(Array.findBy(collection, function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * }, true)); // {type: 'a', value: 'a-1-1'}
    //  *
    //  * console.log(collection.findBy(function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * }, true)); // same as above
    //  *
    //  * @memberOf array
    //  * @method findBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} [propValue=null]
    //  * @param {boolean} [reverse=false] - is true specified to search from right to left
    //  * @return {any|null}
    //  */
    // findBy(a, propName, propValue = null, reverse = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.findBy.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * deeply sorts an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'b', value: 'b', items: [
    //  *     {type: 'b', value: 'b-1'},
    //  *     {type: 'b', value: 'b-5'},
    //  *     {type: 'b', value: 'b-2'},
    //  *     {type: 'b', value: 'b-4'},
    //  *     {type: 'b', value: 'b-3'},
    //  *   ]},
    //  *   {type: 'd', value: 'd'},
    //  *   {type: 'a', value: 'a', items: [
    //  *     {type: 'a', value: 'a-1', items: [
    //  *       {type: 'a', value: 'a-1-1'},
    //  *       {type: 'a', value: 'a-1-3'},
    //  *       {type: 'a', value: 'a-1-2'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-5', items: [
    //  *       {type: 'a', value: 'a-5-1'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-2', items: [
    //  *       {type: 'a', value: 'a-2-1'},
    //  *       {type: 'a', value: 'a-2-3'},
    //  *       {type: 'a', value: 'a-2-2'},
    //  *       {type: 'a', value: 'a-2-4'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-4', items: [
    //  *       {type: 'a', value: 'a-4-1'},
    //  *     ]}},
    //  *     {type: 'a', value: 'a-3', items: [
    //  *       {type: 'a', value: 'a-3-2'},
    //  *       {type: 'a', value: 'a-3-1'},
    //  *     ]}},
    //  *   ]},
    //  *   {type: 'c', value: 'c', items: []},
    //  * ];
    //  *
    //  * console.log(Array.deepFindBy(collection, 'value', 'a-2-1', 'items')); // {type: 'a', value: 'a-2-1'}
    //  * console.log(collection.deepFindBy('value', 'a-2-1', 'items')); // same as above
    //  *
    //  * console.log(Array.deepFindBy(collection, function(item) {
    //  *    return item.value.contains('a-2-1');
    //  * }, null, 'items')); // {type: 'a', value: 'a-2-1'}
    //  *
    //  * console.log(collection.deepFindBy(function(item) {
    //  *    return item.value.contains('a-2-1');
    //  * }, null, 'items')); // same as above
    //  *
    //  * @memberOf array
    //  * @method deepFindBy
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {string|function} propName - the propName you want to use for the deep find
    //  * @param {any} [propValue=null] - the propValue you want to use for the deep find
    //  * @param {string} [childrenPropName='children'] - the childrenPropName to be used for the deep find recursion
    //  * @return {array}
    //  */
    // deepFindBy(a, propName, propValue = null, childrenPropName = 'children') {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.deepFindBy.call(a, propName, propValue, childrenPropName);
    //   }
    //   return a;
    // },
    // /**
    //  * finds the index of an item in an array by propName/propValue pair or predicate,
    //  * returns the first element found respecting the specified predicate
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  * ];
    //  *
    //  * console.log(Array.indexBy(collection, 'type', 'a')); // 0
    //  * console.log(collection.indexBy('type', 'a')); // same as above
    //  *
    //  * console.log(Array.indexBy(collection, 'type', 'a', true)); // 4
    //  * console.log(collection.indexBy('type', 'a', true)); // same as above
    //  *
    //  * console.log(Array.indexBy(collection, function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * })); // 1
    //  *
    //  * console.log(collection.indexBy(function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * })); // same as above
    //  *
    //  * console.log(Array.indexBy(collection, function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * }, true)); // 4
    //  *
    //  * console.log(collection.indexBy(function(item, index, collection){
    //  *   return item.value.contains('1');
    //  * }, true)); // same as above
    //  *
    //  * @memberOf array
    //  * @method indexBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} [propValue=null]
    //  * @param {boolean} [reverse=false] - is true specified to search from right to left
    //  * @return {any|null}
    //  */
    // indexBy(a, propName, propValue, reverse = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.indexBy.call(a, propName, propValue, reverse);
    //   }
    //   return a;
    // },
    // /**
    //  * checks if an array contains an item by propName/propValue pair or predicate,
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  *   {type: 'b', value: 'b-1-1'},
    //  * ];
    //  *
    //  * console.log(Array.containsBy(collection, 'value', 'a-2-2')); // false
    //  * console.log(collection.containsBy('value', 'a-2-2')); // same as above
    //  *
    //  * console.log(Array.containsBy(collection, 'value', 'a-2-1')); // true
    //  * console.log(collection.containsBy('value', 'a-2-1')); // same as above
    //  *
    //  * console.log(Array.containsBy(collection, function(item) {
    //  *   return item.type === 'c';
    //  * })); // true
    //  *
    //  * console.log(collection.containsBy(function(item) {
    //  *   return item.type === 'c';
    //  * })); // same as above
    //  * @memberOf array
    //  * @method containsBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} [propValue=null]
    //  * @return {any|null}
    //  */
    // containsBy(a, propName, propValue = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.containsBy.call(a, propName, propValue);
    //   }
    //   return false;
    // },
    // /**
    //  * counts items in array that respects propName/propValue pair or predicate,
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 'a'},
    //  *   {type: 'a', value: 'a-2-1'},
    //  *   {type: 'a', value: 'a-1-3'},
    //  *   {type: 'c', value: 'c'},
    //  *   {type: 'a', value: 'a-1-1'},
    //  *   {type: 'b', value: 'b'},
    //  *   {type: 'b', value: 'b-1-1'},
    //  * ];
    //  *
    //  * console.log(Array.countBy(collection, 'type', 'a')); // 4
    //  * console.log(collection.countBy('type', 'a')); // same as above
    //  *
    //  * console.log(Array.countBy(collection, 'type', 'a', true)); // 3, it counts false values
    //  * console.log(collection.countBy('type', 'a', true)); // same as above
    //  *
    //  * console.log(Array.countBy(collection, function(item) {
    //  *   return item.type === 'b';
    //  * })); // 2
    //  *
    //  * console.log(collection.countBy(function(item) {
    //  *   return item.type === 'b';
    //  * })); // same as above
    //  *
    //  * console.log(Array.countBy(collection, function(item) {
    //  *   return item.type === 'b';
    //  * }, null, true)); // 5, it counts false values
    //  *
    //  * console.log(collection.countBy(function(item) {
    //  *   return item.type === 'b';
    //  * }, null, true)); // same as above
    //  * @memberOf array
    //  * @method countBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any|null} [propValue=null]
    //  * @param {boolean} [falseValues=false]
    //  * @return {number}
    //  */
    // countBy(a, propName, propValue = null, falseValues = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.countBy.call(a, propName, propValue, falseValues);
    //   }
    //   return 0;
    // },
    // /**
    //  * returns a new array with the intersection of passed arrays
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  * var b = [1, 4, 5, 7, 8];
    //  *
    //  * console.log(Array.intersection(a, b)); // [1, 4, 5]
    //  * console.log(a.intersection(b)); // same as above
    //  *
    //  * var a = [
    //  *   {type: 1, value: 1},
    //  *   {type: 1, value: 2},
    //  *   {type: 2, value: 1},
    //  *   {type: 2, value: 2},
    //  *   {type: 3, value: 1},
    //  * ];
    //  *
    //  * var b = [
    //  *   {type: 1, value: 1},
    //  *   {type: 2, value: 1},
    //  *   {type: 2, value: 3},
    //  *   {type: 3, value: 2},
    //  *   {type: 4, value: 1},
    //  *   {type: 5, value: 1},
    //  * ];
    //  *
    //  * console.log(Array.intersection(a, b));
    //  * // [
    //  * //   {type: 1, value: 1},
    //  * //   {type: 2, value: 1},
    //  * // ]
    //  *
    //  * console.log(a.intersection(b)); // same as above
    //  *
    //  * var c = [
    //  *   {type: 1, value: 1},
    //  *   {type: 1, value: 2},
    //  *   {type: 2, value: 4},
    //  * ];
    //  *
    //  * console.log(Array.intersection(a, b, c));
    //  * // [
    //  * //   {type: 1, value: 1},
    //  * // ]
    //  *
    //  * console.log(a.intersection(b, c)); // same as above
    //  *
    //  * @memberOf array
    //  * @method intersection
    //  * @instance
    //  * @param {array} a
    //  * @param {...array} arrays
    //  * @return {any|null}
    //  */
    // intersection(a, ...arrays) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.intersection.call(a, ...arrays);
    //   }
    //   return [];
    // },
    // /**
    //  * returns a new array with the union of passed arrays
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  * var b = [1, 4, 5, 7, 8];
    //  *
    //  * console.log(Array.union(a, b)); // [1, 2, 3, 4, 5, 7, 8]
    //  * console.log(a.union(b)); // same as above
    //  *
    //  * var a = [
    //  *   {type: 1, value: 1},
    //  *   {type: 1, value: 2},
    //  *   {type: 2, value: 1},
    //  *   {type: 2, value: 2},
    //  *   {type: 3, value: 1},
    //  * ];
    //  *
    //  * var b = [
    //  *   {type: 1, value: 1},
    //  *   {type: 2, value: 1},
    //  *   {type: 2, value: 3},
    //  *   {type: 3, value: 2},
    //  *   {type: 4, value: 1},
    //  *   {type: 5, value: 1},
    //  * ];
    //  *
    //  * console.log(Array.union(a, b));
    //  * // [
    //  * //   {type: 1, value: 1},
    //  * //   {type: 1, value: 2},
    //  * //   {type: 2, value: 1},
    //  * //   {type: 2, value: 2},
    //  * //   {type: 3, value: 1},
    //  * //   {type: 2, value: 3},
    //  * //   {type: 4, value: 1},
    //  * //   {type: 5, value: 1},
    //  * // ]
    //  *
    //  * console.log(a.union(b)); // same as above
    //  *
    //  * var c = [
    //  *   {type: 1, value: 1},
    //  *   {type: 1, value: 2},
    //  *   {type: 2, value: 4},
    //  * ];
    //  *
    //  * console.log(Array.union(a, b, c));
    //  * // [
    //  * //   {type: 1, value: 1},
    //  * //   {type: 1, value: 2},
    //  * //   {type: 2, value: 1},
    //  * //   {type: 2, value: 2},
    //  * //   {type: 3, value: 1},
    //  * //   {type: 2, value: 3},
    //  * //   {type: 4, value: 1},
    //  * //   {type: 5, value: 1},
    //  * //   {type: 2, value: 4},
    //  * // ]
    //  *
    //  * console.log(a.union(b, c)); // same as above
    //  * @memberOf array
    //  * @method union
    //  * @instance
    //  * @param {array} a
    //  * @param {...array} arrays
    //  * @return {any|null}
    //  */
    // union(a, ...arrays) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.union.call(a, ...arrays);
    //   }
    //   return [];
    // },
    // /**
    //  * @alias array.pullBy
    //  * @memberOf array
    //  * @method removeBy
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} propName
    //  * @param {any} [propValue=null]
    //  * @return {array}
    //  */
    // removeBy(a, propName, propValue = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.pullBy.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * randomizes an item from an array, with optional weight parameters
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.random(a)); // eg. 3
    //  * console.log(a.random()); // same as above
    //  *
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.random(a)); // eg. {type: 'a', value: 1}
    //  * console.log(a.random()); // same as above
    //  *
    //  * var a = [
    //  *   {type: 'a', value: 1, weight: 3},
    //  *   {type: 'b', value: 2, weight: 5},
    //  *   {type: 'c', value: 3, weight: 1},
    //  *   {type: 'd', value: 4, weight: 1},
    //  * ];
    //  *
    //  * console.log(Array.random(a, 'weight')); // eg. {type: 'b', value: 2}
    //  * console.log(a.random('weight')); // same as above
    //  *
    //  * console.log(Array.random(a, 'weight', 'value')); // eg. 2
    //  * console.log(a.random('weight', 'value')); // same as above
    //  * @memberOf array
    //  * @method random
    //  * @instance
    //  * @param {array} a
    //  * @param {string} [weightField=null]
    //  * @param {string} [valueField=null]
    //  * @return {any|null}
    //  */
    // random(a, weightField = null, valueField = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.random.call(a, weightField, valueField);
    //   }
    //   return null;
    // },
    // /**
    //  * executes an iteratee n times as the array length, the iteratee will be invoked with tree arguments item, index, array
    //  * @example <caption>eg. usage</caption>
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * Array.each(a, function(item, index) {
    //  *   console.log(item.type);
    //  * });
    //  *
    //  * // it logs
    //  * // 'a'
    //  * // 'b'
    //  * // 'c'
    //  * // 'd'
    //  *
    //  * Array.each(a, function(item, index) {
    //  *   console.log(item.type);
    //  * }, true);
    //  *
    //  * // it logs
    //  * // 'd'
    //  * // 'c'
    //  * // 'b'
    //  * // 'a'
    //  * @memberOf array
    //  * @method each
    //  * @instance
    //  * @param {array} a
    //  * @param {function} iteratee
    //  * @param {boolean} [reverse=false] - true if you want to do a reverse cycle
    //  * @return {array}
    //  */
    // each(a, iteratee, reverse = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.each.call(a, iteratee, reverse);
    //   }
    //   return a;
    // },
    // /**
    //  * returns the first item in an array, with optional propName/propValue pair or predicate
    //  * @example <caption>eg. usage</caption>
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.first(a)); // {type: 'a', value: 1}
    //  * console.log(a.first())); // {type: 'a', value: 1}
    //  *
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.first(a, 'type', 'b')); // {type: 'b', value: 1}
    //  * console.log(a.first('type', 'b'))); // {type: 'b', value: 1}
    //  * @memberOf array
    //  * @method first
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {string} [propName=null] - optional, combined with propValue filters the array before extracting the first item<br>
    //  * or you can specify an optional function as predicate to customize the filter
    //  * @param {string} [propValue=null] - optional, combined with propName filters the array before extracting the first item
    //  * @return {any}
    //  */
    // first(a, propName = null, propValue = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.first.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * returns the last item in an array, with optional propName/propValue pair or predicate
    //  * @example <caption>eg. usage</caption>
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.last(a)); // {type: 'd', value: 4}
    //  * console.log(a.last())); // {type: 'd', value: 4}
    //  *
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 2},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.last(a, 'type', 'a')); // {type: 'a', value: 2}
    //  * console.log(a.last('type', 'a'))); // {type: 'a', value: 2}
    //  * @memberOf array
    //  * @method last
    //  * @instance
    //  * @param {array} a
    //  * @param {string|function} [propName=null] - optional, combined with propValue filters the array before extracting the last item<br>
    //  * or you can specify an optional function as predicate to customize the filter
    //  * @param {string} [propValue=null] - optional, combined with propName filters the array before extracting the last item
    //  * @return {any}
    //  */
    // last(a, propName = null, propValue = null) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.last.call(a, propName, propValue);
    //   }
    //   return a;
    // },
    // /**
    //  * sums a collection by predicate or propName
    //  * @example <caption>eg. usage</caption>
    //  * var a = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 2},
    //  *   {type: 'c', value: 3},
    //  *   {type: 'd', value: 4},
    //  * ];
    //  *
    //  * console.log(Array.sum(a, 'value', 0)); // 4 + 3 + 2 + 1 = 10
    //  * console.log(a.sum('value', 0))); // same as above
    //  *
    //  * console.log(Array.sum(a, 'type', '')); // abcd
    //  * console.log(a.sum('type', ''))); // same as above
    //  *
    //  * console.log(Array.sum(a, function(acc, item) {
    //  *   return acc + item.value;
    //  * }, 0)); // 4 + 3 + 2 + 1 = 10
    //  *
    //  * console.log(a.sum(function(acc, item) {
    //  *   return acc + item.value;
    //  * }, 0)); // same as above
    //  * @memberOf array
    //  * @method sum
    //  * @instance
    //  * @param {array} a
    //  * @param {function|string} predicate - the predicate should look like this in ES5<br>
    //  * <pre>
    //  * function(acc, item) {
    //  *   return acc + item[propName];
    //  * }
    //  * </pre>
    //  * or in ES6<br>
    //  * <pre>
    //  * (acc, item) => {
    //  *   return acc + item[propName];
    //  * }
    //  * </pre><br>
    //  * this kind of predicate will be implemented automatically if you specify a propName instead the predicate
    //  * @param {object|any} predicate.acc - the accumulator variable used for the sum
    //  * @param {object|any} predicate.item - the iterating item
    //  * @param {any} [startValue=0]
    //  * @return {any}
    //  */
    // sum(a, propName, startValue = 0) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.sum.call(a, propName, startValue);
    //   }
    //   return a;
    // },
    // /**
    //  * deeply maps a recursive tree structure with (same structure) childrenPropName or 'children' property<br><br>
    //  * {@link lodash#deepMap|for examples see lodash.deepMap}
    //  * @memberOf array
    //  * @method deepMap
    //  * @instance
    //  * @param {array|object} a - the array to use for the deep mapping
    //  * @param {string} [childrenPropName='children'] - the property name to use for children collection
    //  * @param {function} iteratee - the item mapping iteratee
    //  */
    // deepMap(a, childrenPropName = 'children', iteratee) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.deepMap.call(a, childrenPropName, iteratee);
    //   }
    //   return a;
    // },
    // /**
    //  * loremizes an array
    //  * @example <caption>eg. usage</caption>
    //  * console.log(Array.lorem(5)); // [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.lorem(5, 1)); // [1, 1, 1, 1, 1];
    //  *
    //  * console.log(Array.lorem(5, '1')); // ['1', '1', '1', '1', '1'];
    //  *
    //  * console.log(Array.lorem(5, {type: 'a', value: 1}));
    //  * // it logs
    //  * [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 1}
    //  * ];
    //  *
    //  * console.log(Array.lorem(5, function(index) {
    //  *   return {
    //  *     type: 'a',
    //  *     value: index,
    //  *   };
    //  * });
    //  * // it logs
    //  * [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'a', value: 2},
    //  *   {type: 'a', value: 3},
    //  *   {type: 'a', value: 4},
    //  *   {type: 'a', value: 5}
    //  * ];
    //  *
    //  * @memberOf array
    //  * @method lorem
    //  * @instance
    //  * @param {number} items
    //  * @param {function|object} [model=false]
    //  * @return {array}
    //  */
    // lorem(items, model = false) {
    //   return Array.prototype.lorem.call(items, model);
    // },
    // /**
    //  * flattens array a single level deep,<br>
    //  * or with deep parameter (true boolean) recursively flattens array,<br>
    //  * or with deep parameter (number) you specify the recursion depth
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, [2, [3, [4]], 5]];
    //  *
    //  * console.log(Array.flatten(a)); // [1, 2, [3, [4]], 5]
    //  * console.log(Array.flatten(a, 1)); // same as above
    //  * console.log(a.flatten()); // same as above
    //  * console.log(a.flatten(1)); // same as above
    //  *
    //  * console.log(Array.flatten(a, true)); // [1, 2, 3, 4, 5]
    //  * console.log(a.flatten(true)); // same as above
    //  *
    //  * console.log(Array.flatten(a, 2)); // [1, 2, 3, [4], 5]
    //  * console.log(a.flatten(2)); // same as above
    //  *
    //  * console.log(Array.flatten(a, 3)); // [1, 2, 3, 4, 5]
    //  * console.log(a.flatten(3)); // same as above
    //  * @memberOf array
    //  * @method flatten
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {boolean|number} [deep=false] - the deep (boolean) or depth (number) parameter specifies to do a full recursion or the recursion depth
    //  * @return {array}
    //  */
    // flatten(a, deep = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.flatten.call(a, deep);
    //   }
    //   return a;
    // },
    // /**
    //  * creates an array of shuffled values, using a version of the Fisher-Yates shuffle. (from lodash documentation)
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.shuffle(a)); // [4, 3, 5, 1, 2]
    //  * console.log(a.shuffle()); // same as above (or another randomization ;-)
    //  * @memberOf array
    //  * @method shuffle
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // shuffle(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.shuffle.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * splits an array in n-pieces chunks
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.split(a)); // []
    //  * console.log(a.split()); // same as above
    //  *
    //  * console.log(Array.split(a, 1)); // [[1], [2], [3], [4], [5]]
    //  * console.log(a.split(1)); // same as above
    //  *
    //  * console.log(Array.split(a, 2)); // [[1, 2], [3, 4], [5]]
    //  * console.log(a.split(2)); // same as above
    //  *
    //  * console.log(Array.split(a, 3)); // [[1, 2, 3], [4, 5]]
    //  * console.log(a.split(3)); // same as above
    //  * @memberOf array
    //  * @method split
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {number} [n=0] - the n pieces of chunks you want
    //  * @return {array}
    //  */
    // split(a, n = 0) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.split.call(a, n);
    //   }
    //   return a;
    // },
    // /**
    //  * reverses an array, with optional clone parameter to avoid original array mutation
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.reverse(a)); // [5, 4, 3, 2, 1]
    //  * console.log(a.reverse()); // same as above
    //  *
    //  * console.log(a === [5, 4, 3, 2, 1]); // true
    //  *
    //  * var b = Array.reverse(a, true); // or var b = a.reverse(true);
    //  *
    //  * console.log(a); // [1, 2, 3, 4, 5]
    //  * console.log(b); // [5, 4, 3, 2, 1]
    //  * @memberOf array
    //  * @method tail
    //  * @instance
    //  * @param {array} a - the array
    //  * @param {boolean} [clone=false]
    //  * @return {array}
    //  */
    // reverse(a, clone = false) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.reverse.call(a, clone);
    //   }
    //   return a;
    // },
    // /**
    //  * returns a sliced array with all elements but the first item
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.tail(a)); // [2, 3, 4, 5]
    //  * console.log(a.tail()); // same as above
    //  * @memberOf array
    //  * @method tail
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // tail(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.tail.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * returns a sliced array with all elements but the last item
    //  * @example <caption>eg. usage</caption>
    //  * var a = [1, 2, 3, 4, 5];
    //  *
    //  * console.log(Array.cut(a)); // [1, 2, 3, 4]
    //  * console.log(a.cut()); // same as above
    //  * @memberOf array
    //  * @method cut
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // cut(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.cut.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * clones an array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 8},
    //  *   {type: 'c', value: 5},
    //  *   {type: 'd', value: 7},
    //  *   {type: 'e', value: 9},
    //  *   {type: 'f', value: 3},
    //  * ];
    //  *
    //  * var clone = Array.clone(collection); // or var clone = collection.clone();
    //  *
    //  * console.log(collection === clone); // false;
    //  * @memberOf array
    //  * @method clone
    //  * @instance
    //  * @param {array} a - the array
    //  * @return {array}
    //  */
    // clone(a) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.clone.call(a);
    //   }
    //   return a;
    // },
    // /**
    //  * finds max value by propName in a collection array
    //  * @example <caption>eg. usage</caption>
    //  * var collection = [
    //  *   {type: 'a', value: 1},
    //  *   {type: 'b', value: 8},
    //  *   {type: 'c', value: 5},
    //  *   {type: 'd', value: 7},
    //  *   {type: 'e', value: 9},
    //  *   {type: 'f', value: 3},
    //  * ];
    //  *
    //  * console.log(Array.maxBy(a, 'value')); // {type:'e', value: 9}
    //  * console.log(Array.maxBy(a, 'type')); // {type:'f', value: 3}
    //  *
    //  * console.log(a.maxBy('value')); // {type:'e', value: 9}
    //  * console.log(a.maxBy('type')); // {type:'f', value: 3}
    //  * @memberOf array
    //  * @method maxBy
    //  * @instance
    //  * @param {array} a - the array to check for max value
    //  * @param {string} [propName=null] - the property name to use for comparation
    //  * @return {object}
    //  */
    // maxBy(a, propName) {
    //   if (Array.isArray(a)) {
    //     return Array.prototype.maxBy.call(a, propName);
    //   }
    //   return a;
    // },

  };

  /**
   * @namespace array
   * @description extensions for the JS primitive Array
   */
  var ArrayExt = {
    prototype: prototype$6,
    "native": _native$6
  };

  var Extensions = {
    Object: ObjectExt,
    Function: FunctionExt,
    Boolean: BooleanExt,
    Number: NumberExt,
    Date: DateExt,
    String: StringExt,
    Array: ArrayExt
  };

  /**
   * constructs Flavor class & extends the js natives
   * @class Flavor
   * @classdesc Flavor the definitive JS natives chainable extensions methods
   * @public
   */

  var Flavor =
  /*#__PURE__*/
  function () {
    function Flavor() {
      _classCallCheck(this, Flavor);

      this.init();
    }
    /**
     * safe js native prototype extension using Object.defineProperty
     * @memberOf Flavor
     * @method extendProp
     * @instance
     * @param {prototype|object} target - the prototype/object to extend
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


    _createClass(Flavor, [{
      key: "extendProp",
      value: function extendProp(target, prop, val) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        Object.defineProperty(target, prop, {
          value: val,
          writable: options.writable || true,
          configurable: options.configurable || true,
          enumerable: options.enumerable || false
        });
      }
      /**
       * merges all keys in extend plain object to the prototype (
       * @memberOf Flavor
       * @method extendProps
       * @instance
       * @param {prototype|object} target - the prototype/object to extend
       * @param {object} extensions - the extend object to be merged in prototype
       */

    }, {
      key: "extendProps",
      value: function extendProps(target, extensions) {
        Object.defineProperties(target, extensions);
      }
      /**
       * extendObject
       * @memberOf Flavor
       * @method extendObject
       * @instance
       */

    }, {
      key: "extendObject",
      value: function extendObject() {
        this.extendProps(Object.prototype, Extensions.Object.prototype);
        this.extendProps(Object, Extensions.Object["native"]);
      }
      /**
       * extendFunction
       * @memberOf Flavor
       * @method extendFunction
       * @instance
       */

    }, {
      key: "extendFunction",
      value: function extendFunction() {
        this.extendProps(Function.prototype, Extensions.Function.prototype);
        this.extendProps(Function, Extensions.Function["native"]);
      }
      /**
       * extendBoolean
       * @memberOf Flavor
       * @method extendBoolean
       * @instance
       */

    }, {
      key: "extendBoolean",
      value: function extendBoolean() {
        this.extendProps(Boolean.prototype, Extensions.Boolean.prototype);
        this.extendProps(Boolean, Extensions.Boolean["native"]);
      }
      /**
       * extendNumber
       * @memberOf Flavor
       * @method extendNumber
       * @instance
       */

    }, {
      key: "extendNumber",
      value: function extendNumber() {
        this.extendProps(Number.prototype, Extensions.Number.prototype);
        this.extendProps(Number, Extensions.Number["native"]);
      }
      /**
       * extendDate
       * @memberOf Flavor
       * @method extendDate
       * @instance
       */

    }, {
      key: "extendDate",
      value: function extendDate() {
        this.extendProps(Date.prototype, Extensions.Date.prototype);
        this.extendProps(Date, Extensions.Date["native"]);
      }
      /**
       * extendString
       * @memberOf Flavor
       * @method extendString
       * @instance
       */

    }, {
      key: "extendString",
      value: function extendString() {
        this.extendProps(String.prototype, Extensions.String.prototype);
        this.extendProps(String, Extensions.String["native"]);
      }
      /**
       * extendArray
       * @memberOf Flavor
       * @method extendArray
       * @instance
       */

    }, {
      key: "extendArray",
      value: function extendArray() {
        this.extendProps(Array.prototype, Extensions.Array.prototype);
        this.extendProps(Array, Extensions.Array["native"]);
      }
      /**
       * initialize all
       * @memberOf Flavor
       * @method init
       * @instance
       */

    }, {
      key: "init",
      value: function init() {
        this.extendObject();
        this.extendFunction();
        this.extendBoolean();
        this.extendNumber();
        this.extendDate();
        this.extendString();
        this.extendArray();
        console.warn('FlavorJS initialized');
      }
    }]);

    return Flavor;
  }();

  /*global Window*/

  return Flavor;

}));

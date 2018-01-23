(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("flavor-js", ["lodash"], factory);
	else if(typeof exports === 'object')
		exports["flavor-js"] = factory(require("lodash"));
	else
		root["flavor-js"] = factory(root["_"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(18);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(16),
    listCacheDelete = __webpack_require__(17),
    listCacheGet = __webpack_require__(19),
    listCacheHas = __webpack_require__(20),
    listCacheSet = __webpack_require__(21);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(22),
    isObjectLike = __webpack_require__(33);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(35);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flavor = __webpack_require__(10);

var _flavor2 = _interopRequireDefault(_flavor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flavorJSInitialized = !!window && window instanceof Window && !!window.FlavorJS && !!window.ƒ; /*global Window*/

var flavorJS = flavorJSInitialized ? window.FlavorJS : new _flavor2.default();

window.FlavorJS = flavorJS;
window.ƒ = flavorJS;

exports.default = flavorJS;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _core = __webpack_require__(11);

var _core2 = _interopRequireDefault(_core);

var _lodash3 = __webpack_require__(12);

var _lodash4 = _interopRequireDefault(_lodash3);

var _object = __webpack_require__(52);

var _object2 = _interopRequireDefault(_object);

var _function = __webpack_require__(53);

var _function2 = _interopRequireDefault(_function);

var _boolean = __webpack_require__(54);

var _boolean2 = _interopRequireDefault(_boolean);

var _number = __webpack_require__(55);

var _number2 = _interopRequireDefault(_number);

var _date = __webpack_require__(56);

var _date2 = _interopRequireDefault(_date);

var _string = __webpack_require__(57);

var _string2 = _interopRequireDefault(_string);

var _array = __webpack_require__(58);

var _array2 = _interopRequireDefault(_array);

var _release = __webpack_require__(59);

var _release2 = _interopRequireDefault(_release);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * constructs FlavorJS class & extends the js natives
 * @class FlavorJS
 * @classdesc FlavorJS the definitive JS natives chainable extensions methods
 * @public
 */
var FlavorJS = function () {
  function FlavorJS() {
    _classCallCheck(this, FlavorJS);

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


  _createClass(FlavorJS, [{
    key: 'extendPrototypeProperty',
    value: function extendPrototypeProperty(proto, prop, val) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      Object.defineProperty(proto, prop, {
        value: val,
        writable: true,
        configurable: true,
        enumerable: false
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

  }, {
    key: 'extendPrototype',
    value: function extendPrototype(proto, extend) {
      var _this = this;

      _lodash2.default.forOwn(extend, function (value, key) {
        _this.extendPrototypeProperty(proto, key, value);
      });
    }

    /**
     * extendLodash
     * @memberOf FlavorJS
     * @method extendLodash
     * @instance
     */

  }, {
    key: 'extendLodash',
    value: function extendLodash() {
      _lodash2.default.mixin(_lodash4.default);
    }

    /**
     * extendObject
     * @memberOf FlavorJS
     * @method extendObject
     * @instance
     */

  }, {
    key: 'extendObject',
    value: function extendObject() {
      this.extendPrototype(Object.prototype, _object2.default.prototype);
      this.extendPrototype(Object, _object2.default.native);
    }

    /**
     * extendFunction
     * @memberOf FlavorJS
     * @method extendFunction
     * @instance
     */

  }, {
    key: 'extendFunction',
    value: function extendFunction() {
      this.extendPrototype(Function.prototype, _function2.default.prototype);
      this.extendPrototype(Function, _function2.default.native);
    }

    /**
     * extendBoolean
     * @memberOf FlavorJS
     * @method extendBoolean
     * @instance
     */

  }, {
    key: 'extendBoolean',
    value: function extendBoolean() {
      this.extendPrototype(Boolean.prototype, _boolean2.default.prototype);
      this.extendPrototype(Boolean, _boolean2.default.native);
    }

    /**
     * extendNumber
     * @memberOf FlavorJS
     * @method extendNumber
     * @instance
     */

  }, {
    key: 'extendNumber',
    value: function extendNumber() {
      this.extendPrototype(Number.prototype, _number2.default.prototype);
      this.extendPrototype(Number, _number2.default.native);
    }
    /**
     * extendDate
     * @memberOf FlavorJS
     * @method extendDate
     * @instance
     */

  }, {
    key: 'extendDate',
    value: function extendDate() {
      this.extendPrototype(Date.prototype, _date2.default.prototype);
      this.extendPrototype(Date, _date2.default.native);
    }

    /**
     * extendString
     * @memberOf FlavorJS
     * @method extendString
     * @instance
     */

  }, {
    key: 'extendString',
    value: function extendString() {
      this.extendPrototype(String.prototype, _string2.default.prototype);
      this.extendPrototype(String, _string2.default.native);
    }

    /**
     * extendArray
     * @memberOf FlavorJS
     * @method extendArray
     * @instance
     */

  }, {
    key: 'extendArray',
    value: function extendArray() {
      this.extendPrototype(Array.prototype, _array2.default.prototype);
      this.extendPrototype(Array, _array2.default.native);
    }

    /**
     * initialize all
     * @memberOf FlavorJS
     * @method init
     * @instance
     */

  }, {
    key: 'init',
    value: function init() {
      this.extendLodash();
      this.extendObject();
      this.extendFunction();
      this.extendBoolean();
      this.extendNumber();
      this.extendDate();
      this.extendString();
      this.extendArray();

      var flavorJSStatus = {
        initialized: true,
        version: _release2.default.version,
        build: _release2.default.buildDate
      };

      Object.inherit(this, _core2.default, flavorJSStatus);

      console.log('FlavorJS initialized', flavorJSStatus);
    }
  }]);

  return FlavorJS;
}();

exports.default = FlavorJS;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
  delay: function delay(fn, ms) {
    return _lodash2.default.delay(fn, ms);
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _baseIteratee2 = __webpack_require__(13);

var _baseIteratee3 = _interopRequireDefault(_baseIteratee2);

var _basePullAll2 = __webpack_require__(45);

var _basePullAll3 = _interopRequireDefault(_basePullAll2);

var _toFinite2 = __webpack_require__(50);

var _toFinite3 = _interopRequireDefault(_toFinite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace lodash
 * @description all the mixins added to _
 */
exports.default = {
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
  isPercentage: function isPercentage(s) {
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
  parsePercentage: function parsePercentage(s) {
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
  filterByValues: function filterByValues(collection, key, values) {
    return _lodash2.default.filter(collection, function (o) {
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
  deepMap: function deepMap(collection) {
    var childrenPropName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
    var mapCallback = arguments[2];

    return _lodash2.default.map(collection, function (item) {
      if (!!item[childrenPropName]) {
        if (_lodash2.default.isArray(item[childrenPropName])) {
          item[childrenPropName] = _lodash2.default.deepMap(item[childrenPropName], childrenPropName, mapCallback);
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
  deepFindBy: function deepFindBy(collection, propName, propValue) {
    var childrenPropName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

    var found = null;

    collection.each(function (item) {
      if (!found) {
        if (_lodash2.default.isFunction(propName)) {
          /**
           * use propName as predicate
           */
          found = propName(item);
        } else if (item[propName] === propValue) {
          found = item;
        } else if (!!item[childrenPropName]) {
          if (_lodash2.default.isArray(item[childrenPropName])) {
            found = _lodash2.default.deepFindBy(item[childrenPropName], propName, propValue, childrenPropName);
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
  deepOrderBy: function deepOrderBy(collection, propNames, propDirections) {
    var childrenPropName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

    if (_lodash2.default.isString(propNames)) {
      propNames = [propNames];
    }

    if (!!propDirections) {
      if (_lodash2.default.isString(propDirections)) {
        propDirections = [propDirections];
      }
    } else {
      propDirections = propNames.map(function () {
        return 'asc';
      });
    }

    collection = _lodash2.default.orderBy(collection, propNames, propDirections);

    collection.each(function (item) {
      if (!!item[childrenPropName]) {
        if (_lodash2.default.isArray(item[childrenPropName])) {
          item[childrenPropName] = _lodash2.default.deepOrderBy(item[childrenPropName], propNames, propDirections, childrenPropName);
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
  pullAllByComparator: function pullAllByComparator(collection, values, comparator, iteratee) {
    return collection && collection.length && values && values.length ? (0, _basePullAll3.default)(collection, values, (0, _baseIteratee3.default)(iteratee, 2), comparator) : collection;
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
  timesReverse: function timesReverse(times, iteratee) {
    var index = times;

    while (--index >= 0) {
      _lodash2.default.isFunction(iteratee) && iteratee(index);
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
  timesRange: function timesRange(start, end) {
    var iteratee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (_lodash2.default.isFunction(iteratee)) {
      // Ensure the sign of `-0` is preserved.
      start = (0, _toFinite3.default)(start);

      if (!end) {
        end = start;
        start = 0;
      } else {
        end = (0, _toFinite3.default)(end);
      }

      var index = reverse ? end : start;

      while (reverse ? index-- >= start : index++ <= end) {
        iteratee(index + (reverse ? 1 : -1));
      }
    }
  },
  objectToPaths: function objectToPaths(obj) {
    var leavesOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var parentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var result = void 0;

    if (_lodash2.default.isArray(obj)) {
      var idx = 0;
      result = _lodash2.default.flatMap(obj, function (item) {
        return _lodash2.default.objectToPaths(item, leavesOnly, (parentKey || '') + '[' + idx++ + ']');
      });
    } else if (_lodash2.default.isPlainObject(obj)) {
      result = _lodash2.default.flatMap(_lodash2.default.keys(obj), function (key) {
        return _lodash2.default.map(_lodash2.default.objectToPaths(obj[key], leavesOnly, key), function (subkey) {
          return (parentKey ? parentKey + '.' : '') + subkey;
        });
      });
    } else {
      result = [];
    }

    return _lodash2.default.filter(_lodash2.default.sortBy(_lodash2.default.concat(result, parentKey || [])), function (path) {
      var value = _lodash2.default.get(obj, path);
      return !!leavesOnly ? !_lodash2.default.isArray(value) && !_lodash2.default.isPlainObject(value) && !_lodash2.default.isFunction(value) : true;
    });
  },
  keyValueToHash: function keyValueToHash(keyValueCollection) {
    var keyField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key';
    var valueField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';

    return _lodash2.default.transform(keyValueCollection, function (result, keyValueItem) {
      result[keyValueItem[keyField]] = keyValueItem[valueField];
    }, {});
  },
  objectToHash: function objectToHash(obj) {
    return _lodash2.default.transform(_lodash2.default.objectToPaths(obj, true), function (result, path) {
      result[path] = _lodash2.default.get(obj, path);
    }, {});
  },
  hashToObject: function hashToObject(hash) {
    return _lodash2.default.transform(hash, function (result, value, key) {
      _lodash2.default.set(result, key, value);
    }, {});
  },
  cleanObject: function cleanObject(o) {
    return _lodash2.default.omitBy(o, _lodash2.default.isFunction);
  },
  mergeInc: function mergeInc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _lodash2.default.mergeWith.apply(this, args, function (accValue, newValue) {
      return accValue + newValue;
    });
  },
  sum: function sum(a, sumProp, startValue) {
    return _lodash2.default.reduce(a, function (acc, item) {
      return acc + item[sumProp];
    }, startValue || 0);
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(14),
    baseMatchesProperty = __webpack_require__(37),
    identity = __webpack_require__(43),
    isArray = __webpack_require__(2),
    property = __webpack_require__(44);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(15),
    getMatchData = __webpack_require__(34),
    matchesStrictComparable = __webpack_require__(8);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(3),
    baseIsEqual = __webpack_require__(4);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(3),
    equalArrays = __webpack_require__(23),
    equalByTag = __webpack_require__(27),
    equalObjects = __webpack_require__(28),
    getTag = __webpack_require__(30),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(31),
    isTypedArray = __webpack_require__(32);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(24),
    arraySome = __webpack_require__(25),
    cacheHas = __webpack_require__(26);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(5);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(29);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(6);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(7),
    keys = __webpack_require__(36);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(6);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(4),
    get = __webpack_require__(38),
    hasIn = __webpack_require__(40),
    isKey = __webpack_require__(41),
    isStrictComparable = __webpack_require__(7),
    matchesStrictComparable = __webpack_require__(8),
    toKey = __webpack_require__(42);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(39);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(46),
    baseIndexOf = __webpack_require__(5),
    baseIndexOfWith = __webpack_require__(47),
    baseUnary = __webpack_require__(48),
    copyArray = __webpack_require__(49);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

module.exports = basePullAll;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOfWith;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(51);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @namespace object
 * @description the JS native Object class
 */
exports.default = {
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
    isObject: function isObject(o) {
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
    inherit: function inherit(o) {
      var _Object$prototype$inh;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Object$prototype$inh = Object.prototype.inherit).call.apply(_Object$prototype$inh, [o].concat(_toConsumableArray(args)));
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
    omit: function omit(o) {
      var _Object$prototype$omi;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Object$prototype$omi = Object.prototype.omit).call.apply(_Object$prototype$omi, [o].concat(_toConsumableArray(args)));
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
    pick: function pick(o) {
      var _Object$prototype$pic;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return (_Object$prototype$pic = Object.prototype.pick).call.apply(_Object$prototype$pic, [o].concat(_toConsumableArray(args)));
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
    clone: function clone(o) {
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
    path: function path(o, _path) {
      var def = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return Object.prototype.path.call(o, _path, def);
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
    each: function each(o, iteratee) {
      return Object.prototype.each.call(o, iteratee);
    }
  },
  prototype: {
    isObject: function isObject() {
      return _lodash2.default.isPlainObject(this);
    },
    inherit: function inherit() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var createNew = _lodash2.default.isBoolean(args[0]) ? args[0] : false;
      var newArgs = args;

      if (!!createNew) {
        newArgs = Array.prototype.slice.call(newArgs, 1);
      }

      function safeInherit(scope) {
        Array.prototype.unshift.call(newArgs, scope);

        if (!!createNew) {
          Array.prototype.unshift.call(newArgs, {});
        }

        return _lodash2.default.merge.apply(scope, newArgs);
      }

      return safeInherit(this);
    },
    omit: function omit() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _lodash2.default.omit.apply(_lodash2.default, [this].concat(_toConsumableArray(args)));
    },
    pick: function pick() {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _lodash2.default.pick.apply(_lodash2.default, [this].concat(_toConsumableArray(args)));
    },
    clone: function clone() {
      return _lodash2.default.cloneDeep(this);
    },
    path: function path(_path2) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (_typeof(this) === 'object' && this instanceof Object) {
        return _lodash2.default.get(this, _path2, def);
      }

      return def;
    },
    each: function each(iteratee) {
      return _lodash2.default.each(this, iteratee);
    }
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @namespace function
 * @description the JS native Function class
 */
exports.default = {
  native: {
    /**
     * checked if something is a function
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
     * @param {function} f - the function to be checked
     * @return {boolean}
     */
    isFunction: function isFunction(f) {
      return Function.prototype.isFunction.call(f);
    },


    /**
     * proxies a function with scope and optional arguments<br><br>
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
     * @param {function} f - the function to be proxed
     * @param {object} scope - the scope object (will be `this` inside the function)
     * @param {...object} args - pass one or more arguments to override the original handled arguments
     * @return {function}
     */
    proxy: function proxy(f, scope) {
      var _Function$prototype$p;

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return (_Function$prototype$p = Function.prototype.proxy).call.apply(_Function$prototype$p, [f, scope].concat(_toConsumableArray(args)));
    }
  },
  prototype: {
    isFunction: function isFunction() {
      return _lodash2.default.isFunction(this);
    },
    proxy: function proxy(scope) {
      for (var _len2 = arguments.length, proxyArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        proxyArgs[_key2 - 1] = arguments[_key2];
      }

      var func = this;

      return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return func.apply(scope, proxyArgs.length >= 1 ? proxyArgs : args);
      };
    }
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace boolean
 * @description the JS native Boolean class
 */
exports.default = {
  native: {
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
    isBoolean: function isBoolean(b) {
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
    random: function random() {
      return Math.random() >= 0.5;
    }
  },
  prototype: {
    isBoolean: function isBoolean() {
      return _lodash2.default.isBoolean(this);
    }
  }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace number
 * @description the JS native Number class
 */
exports.default = {
  native: {
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
    isNumber: function isNumber(n) {
      return Number.prototype.isNumber.call(n);
    },


    /**
     * checks if a number is between a range
     * @example <caption>eg. usage</caption>
     * console.log((5).between(1, 10)); // true
     *
     * console.log((5).between(1, 4)); // false
     * @memberOf number
     * @method between
     * @instance
     * @param {number} n - the number
     * @param {number} [from=Number.MIN_VALUE] - the from number
     * @param {number} [to=Number.MAX_VALUE] - the to number
     * @return {*|boolean}
     */
    isBetween: function isBetween(n) {
      var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MIN_VALUE;
      var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE;

      if (!Number.isNumber(n)) {
        return false;
      }

      return Number.prototype.isBetween.call(n, from, to);
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
    parse: function parse(n) {
      return _lodash2.default.parseInt(n);
    },


    /**
     * repeats a function n times
     * @example <caption>eg. usage</caption>
     * (5).times(function(i) {
     *   console.log(i);
     * });
     *
     * // logs 1, 2, 3, 4, 5
     * @example <caption>or</caption>
     * (5).times(function(i) {
     *   console.log(i);
     * }, true);
     *
     * // logs 5, 4, 3, 2, 1
     * @memberOf number
     * @method times
     * @instance
     * @param {number} n - the number of times
     * @param {function} iteratee - the iteratee function to invoke<br>
     * the iteratee will be invoked passing the index as i<br>
     * so the iteratee has to be something like this<br>
     * <pre>
     * function(i) {}
     * </pre>
     * @param {number} iteratee.i - the index
     * @param {boolean} [reverse=false] - true if you want to do a times reverse cycle
     */
    times: function times(n, iteratee) {
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Number.isNumber(n) && Number.isInteger(n)) {
        return Number.prototype.times.call(n, iteratee, reverse);
      }

      return n;
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
    random: function random() {
      var lower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MIN_VALUE;
      var upper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;
      var floating = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return _lodash2.default.random(lower, upper, floating);
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
    fromRoman: function fromRoman(s) {
      var str = s;
      var result = null;
      // the result is now a number, not a string
      var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      decimal.length.times(function (i) {
        while (str.indexOf(roman[i]) === 0) {
          if (!result) {
            result = 0;
          }

          result += decimal[i];
          str = str.replace(roman[i], '');
        }
      });

      return result;
    },


    /**
     * converts a number in a Roman Number String
     * @example <caption>eg. usage</caption>
     * console.log((1980).toRoman()); // 'MCMLXXX'
     * @memberOf number
     * @method toRoman
     * @instance
     * @param {number} n - the number
     * @return {string}
     */
    toRoman: function toRoman(n) {
      return Number.prototype.toRoman.call(n);
    },


    /**
     * converts a number of bytes in a human readable file size string
     * @example <caption>eg. usage</caption>
     * console.log((1024).toFileSize()); // 1kb
     * @memberOf number
     * @method toFileSize
     * @instance
     * @param {number} n - the number
     * @param {number} precision - the precision number
     * @return {*}
     */
    toFileSize: function toFileSize(n) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return Number.prototype.toFileSize.call(n, precision);
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
     * @param {number} n - the number
     * @return {number}
     */
    toAbsolute: function toAbsolute(n) {
      return Number.prototype.toAbsolute.call(n);
    },


    /**
     * formats a number to a currency string
     * @example <caption>eg. usage</caption>
     * console.log((1).toCurrency()); // 1,00
     *
     * console.log((1).toCurrency(3); // 1,000
     *
     * console.log((123456,789).toCurrency(2); // 123.456,79
     *
     * console.log((123456,789).toCurrency(3, 4); // 12.3456,789
     *
     * console.log((123456,789).toCurrency(3, 4, ',', '.'); // 12,3456.789
     * @memberOf number
     * @method toCurrency
     * @instance
     * @param {number} n - the number
     * @param {number} [dec=2] - desired decimals
     * @param {number} [sec=3] - desired number sections
     * @param {string} [decSymbol=','] - decimals separator char
     * @param {string} [secSymbol='.'] - sections separator char
     * @return {string}
     */
    toCurrency: function toCurrency(n) {
      var dec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
      var decSymbol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
      var secSymbol = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.';

      if (Number.isNumber(n)) {
        return Number.prototype.toCurrency.call(n, dec, sec, decSymbol, secSymbol);
      }

      return n;
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
     * @param {number} n - the number
     * @param {number} [precision=0] - the precision number
     * @return {number}
     */
    floor: function floor(n) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return Number.prototype.floor.call(n, precision);
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
     * @param {number} n - the number
     * @param {number} [precision=0] - the precision number
     * @return {number}
     */
    round: function round(n) {
      var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (Number.isNumber(n)) {
        return Number.prototype.round.call(n, precision);
      }
      return n;
    },


    /**
     * Keeps a value `v` between `min` and `max`.
     * 
     * @class clip
     * @constructor
     * @param {Number}  v The value to be bounded.
     * @param {Number}  min The minimum bound for the value.
     * @param {Number}  max The maximum bound for value.
     * @returns {Number} The bounded value.
     */
    /**
     * crops a value between specified bounds
     * @example <caption>eg. usage</caption>
     * console.log(Number.crop(5, 1, 10)); // 5
     * 
     * console.log(Number.crop(5, 2, 4)); // 4
     *
     * console.log(Number.crop(5, 2)); // 5
     *
     * console.log(Number.crop(5, 6)); // 6
     *
     * console.log(Number.crop('5')); // '5'
     *
     * console.log((5).crop(1, 10)); // 5
     * 
     * console.log((5).crop(2, 4)); // 4
     *
     * console.log((5).crop(2)); // 5
     *
     * console.log((5).crop(6)); // 6
     * @memberOf number
     * @method round
     * @instance
     * @param {number} n - the number
     * @param {number} [precision=0] - the precision number
     * @return {number}
     */
    crop: function crop(n, min, max) {
      if (Number.isNumber(n)) {
        return Number.prototype.crop.call(n, min, max);
      }

      return n;
    },


    /**
     * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. A step of -1 is used if a negative start is specified without an end or step. If end is not specified, it's set to start with start then set to 0.
     * @example <caption>eg. usage</caption>
     * console.log(Array.range(4));
     * // [0, 1, 2, 3]
     *       
     * console.log(Array.range(-4));
     * // [0, -1, -2, -3]
     *  
     * console.log(Array.range(1, 5));
     * // [1, 2, 3, 4]
     *  
     * console.log(Array.range(0, 20, 5));
     * // [0, 5, 10, 15]
     *  
     * console.log(Array.range(0, -4, -1));
     * // [0, -1, -2, -3]
     *  
     * console.log(Array.range(1, 4, 0));
     * // [1, 1, 1]
     *  
     * console.log(Array.range(0);
     * // []
     * @example <caption>eg. usage (reverse)</caption>
     * console.log(Array.rangeRight(4));
     * // [3, 2, 1, 0]
     *  
     * console.log(Array.rangeRight(-4));
     * // [-3, -2, -1, 0]
     *  
     * console.log(Array.rangeRight(1, 5));
     * // [4, 3, 2, 1]
     *  
     * console.log(Array.rangeRight(0, 20, 5));
     * // [15, 10, 5, 0]
     *  
     * console.log(Array.rangeRight(0, -4, -1));
     * // [-3, -2, -1, 0]
     *  
     * console.log(Array.rangeRight(1, 4, 0));
     * // [1, 1, 1]
     *  
     * console.log(Array.rangeRight(0));
     * // []
     * @memberOf number
     * @method range
     * @instance
     * @param {number} [start=0] - the start of the range
     * @param {number} end - the end of the range
     * @param {boolean} reverse - true, if ou want a reverse range
     * @param {number} [step=1] - the value to increment or decrement by
     * @return {array}
     */
    range: function range(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      if (Number.isNumber(start)) {
        return Number.prototype.range.call(start, end, reverse, step);
      }

      return start;
    },


    /**
     * wraps an angle value (in degrees) between 0 and 359.
     * 
     * @memberOf number
     * @method degreeWrap
     * @instance
     * @param {Number}  angle The angle in degrees.
     * @returns {Number} The wrapped value.
     */
    degreeWrap: function degreeWrap(a) {
      if (Number.isNumber(a)) {
        return Number.prototype.degreeWrap.call(a);
      }

      return a;
    },


    /**
     * Returns the minimum distance from angle `a1` to `a2` (both in degrees). The
     * result is kept between 0 and 359.
     * 
     * @memberOf number
     * @method degreeDiff
     * @instance
     * @param {Number}  a1 The initial angle in degrees.
     * @param {Number}  a2 The final angle in degrees.
     * @returns {Number} The angle distance value.
     */
    degreeDiff: function degreeDiff(a1, a2) {
      if (Number.isNumber(a1) && Number.isNumber(a2)) {
        return Number.prototype.degreeDiff.call(a1, a2);
      }

      return 0;
    },


    /**
     * Returns the direction that represents the minimum distance from angle `a1` 
     * to `a2` (in degrees). The result is `-1`, `1`, or `0` if equal.
     * 
     * @memberOf number
     * @method degreeDir
     * @instance
     * @param {Number}   a1 The initial angle in degrees.
     * @param {Number}   a2 The final angle in degrees.
     * @returns {Integer} A direction -1, 1 or 0.
     */
    degreeDir: function degreeDir(a1, a2) {
      if (Number.isNumber(a1) && Number.isNumber(a2)) {
        return Number.prototype.degreeDir.call(a1, a2);
      }

      return 0;
    }
  },
  prototype: {
    isNumber: function isNumber() {
      return _lodash2.default.isNumber(this);
    },
    isBetween: function isBetween() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MIN_VALUE;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      return from <= this && this <= to;
    },
    times: function times(iteratee) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return !!reverse ? _lodash2.default.timesReverse(this, iteratee) : _lodash2.default.times(this, iteratee);
    },
    toFloatSymbol: function toFloatSymbol(options) {
      var defaults = {
        decimals: 2,
        decimalDelimiter: ',',
        sections: 3,
        sectionsDelimiter: '.',
        symbol: '&euro;',
        symbolAppend: false
      };

      var settings = _lodash2.default.merge({}, defaults, options);
      var symbolPrepend = !settings.symbolAppend && !!settings.symbol ? settings.symbol + ' ' : '';
      var symbolAppend = !!settings.symbolAppend && !!settings.symbol ? ' ' + settings.symbol : '';

      var re = '\\d(?=(\\d{' + (settings.sections || 3) + '})+' + (settings.decimals > 0 ? '\\D' : '$') + ')';
      var num = this.toFixed(settings.decimals);
      num = num.replace('.', settings.decimalDelimiter);
      num = num.replace(new RegExp(re, 'g'), '$&' + settings.sectionsDelimiter);

      return symbolPrepend + num + symbolAppend;
    },
    toRoman: function toRoman() {
      var num = this;
      var result = '';
      var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      _lodash2.default.times(decimal.length, function (i) {
        while (num % decimal[i] < num) {
          result += roman[i];
          num -= decimal[i];
        }
      });

      return result;
    },
    toFileSize: function toFileSize() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var fileSizeString = '0 B';

      if (!!this) {
        var sizes = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
        var i = Math.floor(Math.log(this) / Math.log(1024));
        fileSizeString = parseFloat((this / Math.pow(1024, i)).toFixed(precision)) + sizes[i];
      }

      return fileSizeString;
    },
    toAbsolute: function toAbsolute() {
      return Math.abs(this);
    },
    toCurrency: function toCurrency() {
      var dec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var sec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var decSymbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
      var secSymbol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

      var regEx = '\\d(?=(\\d{' + sec + '})+' + (dec > 0 ? '\\D' : '$') + ')';
      var val = this.toFixed(dec);

      return (decSymbol ? val.replace('.', decSymbol) : val).replace(new RegExp(regEx, 'g'), '$&' + secSymbol);
    },
    floor: function floor() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return _lodash2.default.floor(this, precision);
    },
    round: function round() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return _lodash2.default.round(this, precision);
    },
    crop: function crop() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.MIN_VALUE;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      return Math.max(Math.min(this, max), min);
    },
    range: function range() {
      var end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var rangeStart = Number.isNumber(end) ? this : 0;
      var rangeEnd = Number.isNumber(end) ? end : this;
      var method = reverse ? 'rangeRight' : 'range';

      return _lodash2.default[method](rangeStart, rangeEnd, step);
    },
    degreeWrap: function degreeWrap() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 360;

      return (this < min ? max : 0) + this % max;
    },
    degreeDiff: function degreeDiff(a) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 360;

      var ang1 = Number.degreeWrap(this, min, max);
      var ang2 = Number.degreeWrap(a, min, max);

      var diff = ang2 - ang1;

      if (diff < min) {
        diff += max;
      }

      if (diff > max / 2) {
        diff = max - diff;
      }

      return diff;
    },
    degreeDir: function degreeDir(a) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 360;

      var ang1 = Number.degreeWrap(this, min, max);
      var ang2 = Number.degreeWrap(a, min, max);

      if (ang1 === ang2) {
        return 0;
      }

      var diff = Number.degreeDiff(ang1, ang2, min, max);

      if (diff > max / 2) {
        return -1;
      }

      return 1;
    }
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace date
 * @description the JS native Date class
 */
exports.default = {
  native: {
    /**
     * checks if something is a date
     * @example <caption>eg.usage</caption>
     * console.log(Date.isDate(new Date())); // true
     *
     * console.log(Date.isDate(0)); // false
     * @memberOf date
     * @method isDate
     * @instance
     * @param {*} d - the value to check
     * @return {boolean}
     */
    isDate: function isDate(d) {
      return Date.prototype.isDate.call(d);
    },


    /**
     * returns a random date between specified range (default now <-> now)
     * @example <caption>eg. usage</caption>
     * console.log(Date.random()); // Mon Jan 22 2018 14:07:09 GMT+0100 (CET)
     * 
     * console.log(Date.random(new Date(1970, 0, 1), new Date())); // Sun Apr 05 1987 00:00:00 GMT+0200 (CEST)
     * @memberOf date
     * @method random
     * @instance
     * @param {date} startDate - the range start date
     * @param {date} endDate - the range end date
     * @return {date}
     */
    random: function random() {
      var startDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
      var endDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

      return new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());
    },


    /**
     * transforms a date in a UTC timestamp integer
     * @example <caption>eg. usage</caption>
     * console.log((new Date()).toTimestamp()); // 1491317811925 @ 2017-04-4-16:57
     * @memberOf date
     * @method toTimestamp
     * @instance
     * @param {date} d - the date to convert
     * @return {timestamp|0}
     */
    toTimestamp: function toTimestamp(d) {
      if (!Date.isDate(d)) {
        return 0;
      }

      return Date.prototype.toTimestamp.call(d);
    }
  },
  prototype: {
    isDate: function isDate() {
      return _lodash2.default.isDate(this);
    },
    toTimestamp: function toTimestamp() {
      return Math.round(this);
    }
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace string
 * @description the JS native String class
 */
exports.default = {
  native: {
    /**
     * checks if something is a string
     * @example <caption>eg. usage</caption>
     * var s = 'foo';
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
    isString: function isString(s) {
      return String.prototype.isString.call(s);
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
    isPercentage: function isPercentage(s) {
      return String.prototype.isPercentage.call(s);
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
    isRoman: function isRoman(s) {
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
    isUrl: function isUrl(s) {
      return String.prototype.isUrl.call(s);
    },


    /**
     * checks if a string contains another string
     * @example <caption>eg. usage</caption>
     * console.log(String.contains('FlavorJS is tasty', 'JS is')); // true
     *
     * console.log(String.contains('FlavorJS is tasty', 'js is')); // false
     *
     * console.log(String.contains('FlavorJS is tasty', 'js is', true)); // true
     *
     * console.log(String.contains('flavorJS Is tasty', 'JS is', true)); // true
     *
     * console.log('FlavorJS is tasty'.contains('JS is')); // true
     *
     * console.log('FlavorJS is tasty'.contains('js is')); // false
     *
     * console.log('FlavorJS is tasty'.contains('js is', true)); // true
     *
     * console.log('flavorJS is tasty'.contains('JS is', true)); // true
     * @memberOf string
     * @method contains
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the string value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    contains: function contains(s, value) {
      var insensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return String.prototype.contains.call(s, value, insensitive);
    },


    /**
     * checks if a string starts with another string
     * @example <caption>eg. usage</caption>
     * console.log(String.startsWith('FlavorJS is tasty', 'Flavor')); // true
     *
     * console.log(String.startsWith('FlavorJS is tasty', 'flavor')); // false
     *
     * console.log(String.startsWith('FlavorJS is tasty', 'flavor', true)); // true
     *
     * console.log(String.startsWith('flavorJS is tasty', 'Flavor', true)); // true
     *
     * console.log('FlavorJS is tasty'.startsWith('Flavor')); // true
     *
     * console.log('FlavorJS is tasty'.startsWith('flavor')); // false
     *
     * console.log('FlavorJS is tasty'.startsWith('flavor', true)); // true
     *
     * console.log('flavorJS is tasty'.startsWith('Flavor', true)); // true
     * @memberOf string
     * @method startsWith
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    startsWith: function startsWith(s, value) {
      var insensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return String.prototype.contains.call(s, value, insensitive);
    },


    /**
     * checks if a string ends with another string
     * @example <caption>eg. usage</caption>
     * console.log(String.endsWith('FlavorJS is tasty', 'Tasty')); // false
     *
     * console.log(String.endsWith('FlavorJS is tasty', 'tasty')); // true
     *
     * console.log(String.endsWith('FlavorJS is tasty', 'Tasty', true)); // true
     *
     * console.log(String.endsWith('FlavorJS is Tasty', 'tasty', true)); // true
     *
     * console.log(('FlavorJS is tasty').endsWith('Tasty')); // false
     *
     * console.log(('FlavorJS is tasty').endsWith('tasty')); // true
     *
     * console.log(('FlavorJS is tasty').endsWith('Tasty', true)); // true
     *
     * console.log(('flavorJS is Tasty').endsWith('tasty', true)); // true
     * @memberOf string
     * @method endsWith
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    endsWith: function endsWith(s, value) {
      var insensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return String.prototype.contains.call(s, value, insensitive);
    },


    /**
     * stubs a GUID
     * @example <caption>eg. usage</caption>
     * console.log(String.guid()); // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
     * @memberOf string
     * @method guid
     * @instance
     */
    guid: function guid() {
      // Random GUID generator based on .toString(16);
      return Math.random().toString(16).slice(2, 10) + '-' + Math.random().toString(16).slice(2, 6) + '-4' + Math.random().toString(16).slice(2, 5) + '-' + Math.random().toString(16).slice(2, 6) + '-' + Math.random().toString(16).slice(2, 14);

      // Random GUID generator based on regex
      // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      //   var r: Math.random()*16|0, v: c == 'x' ? r : (r&0x3|0x8);
      //   return v.toString(16);
      // });
    },


    /**
     * camel cases a string
     * @example <caption>eg. usage</caption>
     * console.log(String.camelCase('Foo Bar')); // 'fooBar'
     *
     * console.log(String.camelCase('--foo-bar--')); // 'fooBar'
     *
     * console.log(String.camelCase('__FOO_BAR__')); // 'fooBar'
     *
     * console.log('Foo Bar'.camelCase()); // 'fooBar'
     *
     * console.log('--foo-bar--'.camelCase()); // 'fooBar'
     *
     * console.log('__FOO_BAR__'.camelCase()); // 'fooBar'
     * @memberOf string
     * @method camelCase
     * @instance
     * @param {string} s - the string
     * @return {string}
     */
    camelCase: function camelCase(s) {
      return String.prototype.camelCase.call(s);
    },


    /**
     * capitalizes a string
     * @example <caption>eg. usage</caption>
     * console.log(String.capitalize('we\'re happy to use flavorJS')); // Were Happy To Use Flavor JS
     *
     * console.log(String.capitalize('we\'re happy to use flavorJS')); // We're happy to use flavorjs
     *
     * console.log(String.capitalize('flavorJS')); // Flavorjs
     * @memberOf string
     * @method capitalize
     * @instance
     * @param {string} s
     * @return {string}
     */
    capitalize: function capitalize(s) {
      return String.prototype.capitalize.call(s);
    },


    /**
     * decodes an URI string
     * @example <caption>eg. usage</caption>
     * console.log(String.decodeURI('https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com')); // 'https://flavorjs.io/page.html?name=black mirror&email=username@example.com'
     *
     * console.log(('https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com').decodeURI()); // 'https://flavorjs.io/page.html?name=black mirror&email=username@example.com'
     * @memberOf string
     * @method decodeURI
     * @instance
     * @param {string} s - the URI string
     * @return {string}
     */
    decodeURI: function decodeURI(s) {
      return String.prototype.decodeURI.call(s);
    },


    /**
     * encodes an URI string
     * @example <caption>eg. usage</caption>
     * console.log(String.encodeURI('https://flavorjs.io/page.html?name=black mirror&email=username@example.com')); // 'https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com'
     *
     * console.log(('https://flavorjs.io/page.html?name=black mirror&email=username@example.com').encodeURI()); // 'https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com'
     * @memberOf string
     * @method encodeURI
     * @instance
     * @param {string} s - the URI string
     * @return {string}
     */
    encodeURI: function encodeURI(s) {
      return String.prototype.encodeURI.call(s);
    },


    /**
     * escapes an HTML code string
     * @example <caption>eg. usage</caption>
     * console.log(String.escapeHTML('<div>flavor & js = tasty</div>')); // '&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;'
     *
     * console.log(('<div>flavor & js = tasty</div>').escapeHTML()); // '&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;'
     * @memberOf string
     * @method escapeHTML
     * @instance
     * @param {string} s - the HTML code string
     * @return {string}
     */
    escapeHTML: function escapeHTML(s) {
      return String.prototype.escapeHTML.call(s);
    },


    /**
     * extracts a domain from an URI string with level parameter
     * @example <caption>eg. usage</caption>
     * console.log(String.extractDomain('http://www.google.com')); // google.com
     *
     * console.log(String.extractDomain('http://www.google.com', )); // google.com
     * @memberOf string
     * @method extractDomain
     * @instance
     * @param {string} s - the URI string
     * @param {number} level - the domain level to extract, starting from right obviously
     * @param {boolean} excludeWww - true if you want to exclude the www. from che extraction
     * @return {*}
     */
    extractDomain: function extractDomain(s) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var excludeWww = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return String.prototype.extractDomain.call(s, level, excludeWww);
    },


    /**
     * extracts the file extension from a filename/path string
     * @example <caption>eg. usage</caption>
     * console.log(String.extractFileExtension('file.jpg')); // 'jpg'
     *
     * console.log(String.extractFileExtension('file')); // ''
     *
     * console.log(String.extractFileExtension(1)); // 1
     *
     * console.log(('file.jpg').extractFileExtension()); // 'jpg'
     *
     * console.log(('file').extractFileExtension()); // ''
     *
     * console.log((1).extractFileExtension()); // throws error
     * @memberOf string
     * @method extractFileExtension
     * @instance
     * @param s
     * @return {*}
     */
    extractFileExtension: function extractFileExtension(s) {
      if (String.isString(s)) {
        return String.prototype.extractFileExtension.call(s);
      }

      return s;
    },


    /**
     * extracts the query string object from an URI string
     * @example <caption>eg. usage</caption>
     * @example <caption>eg. usage</caption>
     * console.log(String.extractQueryString('https://flavorjs.io/page.html?name=black mirror&email=username@example.com')); // {name: 'black mirror', email: 'username@example.com'}
     *
     * console.log(('https://flavorjs.io/page.html?name=black mirror&email=username@example.com').extractQueryString()); // {name: 'black mirror', email: 'username@example.com'}
     * @memberOf string
     * @method extractQueryString
     * @instance
     * @param {string} s - the URI string
     * @return {object}
     */
    extractQueryString: function extractQueryString(s) {
      return String.prototype.extractQueryString.call(s);
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
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    pad: function pad(s, length, chars) {
      return String.prototype.pad(s, length, chars);
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
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    padLeft: function padLeft(s, length, chars) {
      return String.prototype.padLeft.call(s, length, chars);
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
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    padRight: function padRight(s, length, chars) {
      return String.prototype.padRight.call(s, length, chars);
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
    parsePercentage: function parsePercentage(s) {
      return String.prototype.parsePercentage.call(s);
    },


    /**
     * replaces all occurrences of the needle inside the haystack with replacement
     * @example <caption>eg. usage</caption>
     * console.log(String.replaceAll('FlavorJS is really really tasty', 'really', '')); // 'FlavorJS is   tasty'
     * @memberOf string
     * @method replaceAll
     * @instance
     * @param {string} haystack - the haystack string
     * @param {string} needle - the needle string
     * @param {string} [replacement=''] - the replacement string
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {string}
     */
    replaceAll: function replaceAll(haystack, needle) {
      var replacement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var insensitive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return String.prototype.replaceAll.call(haystack, needle, replacement, insensitive);
    },


    /**
     * slugifies any string
     * @example <caption>eg. usage</caption>
     * console.log(String.slugify('it\'s so good to be FlavorJS')); // 'its-so-good-to-be-flavor-js'
     *
     * console.log(String.slugify('it\'s so gòòd - to_be | FlavorJS')); // 'its-so-good-to-be-flavor-js'
     *
     * console.log(String.slugify('it\'s so gòòd - to_be | FlavorJS', false)); // 'itssogoodtobeflavorjs'
     *
     * console.log('it\'s so good to be FlavorJS'.slugify()); // 'its-so-good-to-be-flavor-js'
     *
     * console.log('it\'s so gòòd - to_be | FlavorJS'.slugify()); // 'its-so-good-to-be-flavor-js'
     *
     * console.log('it\'s so gòòd - to_be | FlavorJS'.slugify(false)); // 'itssogoodtobeflavorjs'
     * @memberOf string
     * @method slugify
     * @instance
     * @param {string} s - the string
     * @param {boolean} [dashed=true] - false if you don't want dashed in the resulting string
     * @return {string}
     */
    slugify: function slugify(s) {
      var dashed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return String.prototype.slugify.call(s, dashed);
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
     * @param {string} s - the string
     * @return {string}
     */
    stripTags: function stripTags(s) {
      return String.prototype.stripTags.call(s);
    },


    /**
     * unescapes an HTML code string
     * @example <caption>eg. usage</caption>
     * console.log(String.unescapeHTML('&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;')); // '<div>flavor & js = tasty</div>'
     *
     * console.log(('&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;').unescapeHTML()); // '<div>flavor & js = tasty</div>'
     * @memberOf string
     * @method escapeHTML
     * @instance
     * @param {string} s - the HTML code string
     * @return {string}
     */
    unescapeHTML: function unescapeHTML(s) {
      return String.prototype.unescapeHTML.call(s);
    },


    /**
     * converts a string to a number
     * @example <caption>eg. usage</caption>
     * console.log(String.toInt('550')); // 550
     * @memberOf string
     * @method toInt
     * @instance
     * @param {string} s - the string
     * @return {number}
     */
    toInt: function toInt(s) {
      return String.prototype.toInt.call(s);
    },


    /**
     * transforms a string in an array of chars/words
     * @example <caption>eg. usage</caption>
     * console.log(String.toArray('FlavorJS')); // ['F','l','a','v','o','r','J','S']
     *
     * console.log(String.toArray('FlavorJS, is really, really tasty', ',')); // ['FlavorJS',' is really',' really tasty']
     *
     * console.log(String.toArray('FlavorJS, is really, really tasty', ',', 2)); // ['FlavorJS',' is really']
     *
     * console.log('FlavorJS'.toArray()); // ['F','l','a','v','o','r','J','S']
     *
     * console.log('FlavorJS, is really, really tasty'.toArray(',')); // ['FlavorJS',' is really',' really tasty']
     *
     * console.log('FlavorJS, is really, really tasty'.toArray(',', 2)); // ['FlavorJS',' is really']
     * @memberOf string
     * @method toArray
     * @instance
     * @param {string} s - the string
     * @param {string} [separator=''] - the separator to use for the splitting
     * @param {number} [limit=null] - the limit of items to extract starting from left
     * @return {array}
     */
    toArray: function toArray(s) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return String.prototype.toArray.call(s, separator, limit || undefined);
    }
  },
  prototype: {
    isString: function isString() {
      return _lodash2.default.isString(this);
    },
    isPercentage: function isPercentage() {
      return (/^\d+(\.\d+)?%$/.test(this)
      );
    },
    isRoman: function isRoman() {
      return !!Number.fromRoman(this);
    },
    isUrl: function isUrl() {
      return (/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(this)
      );
    },
    contains: function contains(value) {
      var insensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new RegExp(_lodash2.default.escapeRegExp(value), 'm' + (!!insensitive ? 'i' : '')).test(this);
    },
    startsWith: function startsWith(value) {
      var insensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new RegExp('^' + _lodash2.default.escapeRegExp(value), 'm' + (!!insensitive ? 'i' : '')).test(this);
    },
    endsWith: function endsWith(value) {
      var insensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return new RegExp(_lodash2.default.escapeRegExp(value) + '$', 'm' + (!!insensitive ? 'i' : '')).test(this);
    },
    camelCase: function camelCase() {
      return _lodash2.default.camelCase(this);
    },
    capitalize: function capitalize() {
      return _lodash2.default.capitalize(this);
    },
    replaceAll: function replaceAll(needle) {
      var replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var insensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return this.replace(new RegExp(_lodash2.default.escapeRegExp(needle), 'mg' + (!!insensitive ? 'i' : '')), replacement);
    },
    encodeURI: function encodeURI() {
      return encodeURIComponent(this);
    },
    decodeURI: function decodeURI() {
      return decodeURIComponent(this);
    },
    escapeHTML: function escapeHTML() {
      return _lodash2.default.escape(this);
    },


    /** TODO: integrate also this escapeASCII to html ascii number codes (eg. ' => &#39;)
    //escapeASCII() {
    //  return this.replace(/([!"#$%&'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~])/gi, (match, numStr) => {
    //    return '&#' + String.prototype.charCodeAt.call(numStr, 0) + ';';
    //  });
    //},
     */

    unescapeHTML: function unescapeHTML() {
      return _lodash2.default.unescape(this);
    },


    /** TODO: integrate also this unescapeASCII from html ascii number codes (eg. &#39; => ')
    //unescapeASCII() {
    //  return this.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
    //    const num = parseInt(numStr, 10); // read num as normal number
    //    return String.fromCharCode(num);
    //  });
    //},
    */

    extractDomain: function extractDomain() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      var excludeWww = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var domain = this;

      // find & remove protocol (http, ftp, etc.) and get domain
      domain = domain.split('/')[domain.indexOf('://') > -1 ? 2 : 0];

      // find & remove port number

      var _domain$split = domain.split(':');

      var _domain$split2 = _slicedToArray(_domain$split, 1);

      domain = _domain$split2[0];


      if (!!excludeWww) {
        domain = domain.replaceAll('www.', '');
      }

      var domainArr = domain.split('.');
      return domainArr.slice(domainArr.length - level).join('.');
    },
    extractQueryString: function extractQueryString() {
      var queryStringObject = {};

      if (this.contains('?')) {
        var queryString = this.split('?').pop();
        var queryStringParams = queryString.split('&');
        queryStringParams.each(function (param) {
          var _param$split = param.split('='),
              _param$split2 = _slicedToArray(_param$split, 2),
              key = _param$split2[0],
              value = _param$split2[1];

          queryStringObject[key] = value;
        });
      }

      return queryStringObject;
    },
    slugify: function slugify() {
      var dashed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // TODO: non lodash dependent code
      //const slug = this.toString().toLowerCase()
      //                         .replace(/\s+/g, dashed ? '-' : '') // Replace spaces with -
      //                         .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      //                         .replace(/\-\-+/g, dashed ? '-' : '') // Replace multiple - with single -
      //                         .replace(/^-+/, '') // Trim - from start of text
      //                         .replace(/-+$/, ''); // Trim - from end of text
      //
      //return dashed ? slug : slug.replaceAll('-', '');

      var slug = _lodash2.default.kebabCase(this);
      return !!dashed ? slug : slug.replaceAll('-', '');
    },
    extractFileExtension: function extractFileExtension() {
      return this.substring(this.lastIndexOf('.') + 1).toLowerCase();
    },
    stripTags: function stripTags() {
      var div = document.createElement('div');
      div.innerHTML = this;
      return div.textContent;
    },


    /** TODO: integrate faker.js library to lorem strings
    // lorem(count, units) {
    //   return holderIpsum[units](count);
    // },
    */

    pad: function pad(length, chars) {
      return _lodash2.default.pad(this, length, chars);
    },
    padLeft: function padLeft(length, chars) {
      return _lodash2.default.padStart(this, length, chars);
    },
    padRight: function padRight(length, chars) {
      return _lodash2.default.padEnd(this, length, chars);
    },
    parsePercentage: function parsePercentage() {
      if (this.isPercentage()) {
        return parseFloat(this) / 100.00;
      }

      return this;
    },
    toInt: function toInt() {
      return Number.parse(this);
    },
    toArray: function toArray() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return _lodash2.default.split(this, separator, limit || undefined);
    }
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @namespace array
 * @description the JS native Array class
 */
exports.default = {
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
    isArray: function isArray(a) {
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
    contains: function contains(a, item) {
      var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
    concat: function concat(a, ac) {
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
    distinct: function distinct(a) {
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
    diff: function diff(a, b) {
      var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    diffBy: function diffBy(a, b, propName) {
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
    sortBy: function sortBy(a, propNames) {
      var propDirections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    deepSortBy: function deepSortBy(a, propNames) {
      var propDirections = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var childrenPropName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

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
    filterBy: function filterBy(a, propName, propValue) {
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
    pull: function pull(a, item) {
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
    pullBy: function pullBy(a, propName, propValue) {
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
    findBy: function findBy(a, propName) {
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

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
    deepFindBy: function deepFindBy(a, propName) {
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var childrenPropName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';

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
    indexBy: function indexBy(a, propName, propValue) {
      var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

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
    containsBy: function containsBy(a, propName) {
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    countBy: function countBy(a, propName) {
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var falseValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

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
    intersection: function intersection(a) {
      if (Array.isArray(a)) {
        var _Array$prototype$inte;

        for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          arrays[_key - 1] = arguments[_key];
        }

        return (_Array$prototype$inte = Array.prototype.intersection).call.apply(_Array$prototype$inte, [a].concat(_toConsumableArray(arrays)));
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
    union: function union(a) {
      if (Array.isArray(a)) {
        var _Array$prototype$unio;

        for (var _len2 = arguments.length, arrays = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          arrays[_key2 - 1] = arguments[_key2];
        }

        return (_Array$prototype$unio = Array.prototype.union).call.apply(_Array$prototype$unio, [a].concat(_toConsumableArray(arrays)));
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
    removeBy: function removeBy(a, propName) {
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    random: function random(a) {
      var weightField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var valueField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    each: function each(a, iteratee) {
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
    first: function first(a) {
      var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    last: function last(a) {
      var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var propValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

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
    sum: function sum(a, propName) {
      var startValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

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
    deepMap: function deepMap(a) {
      var childrenPropName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
      var iteratee = arguments[2];

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
    lorem: function lorem(items) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
    flatten: function flatten(a) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
    shuffle: function shuffle(a) {
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
    split: function split(a) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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
    reverse: function reverse(a) {
      var clone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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
    tail: function tail(a) {
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
    cut: function cut(a) {
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
    clone: function clone(a) {
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
    maxBy: function maxBy(a, propName) {
      if (Array.isArray(a)) {
        return Array.prototype.maxBy.call(a, propName);
      }

      return a;
    }
  },
  prototype: {
    isArray: function isArray() {
      return _lodash2.default.isArray(this);
    },
    contains: function contains(item) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_lodash2.default.isArray(item)) {
        if (!!all) {
          return _lodash2.default.difference(item, this).length === 0;
        }

        return _lodash2.default.intersection(this, item).length > 0;
      }

      return _lodash2.default.includes(this, item);
    },
    concat: function concat(arr) {
      if (!!arr) {
        return _lodash2.default.concat(this, arr);
      }

      return this;
    },
    distinct: function distinct() {
      return _lodash2.default.uniqWith(this, _lodash2.default.isEqual);
    },
    diff: function diff(arr) {
      var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (Array.isArray(arr)) {
        var predicate = _lodash2.default.isEqual;

        if (String.isString(fn)) {
          var propName = fn;
          predicate = function predicate(aitem, bitem) {
            return aitem[propName] === bitem[propName];
          };
        }

        if (Function.isFunction(fn)) {
          predicate = fn;
        }

        return _lodash2.default.differenceWith(this, arr, predicate);
      }

      return [];
    },
    diffBy: function diffBy(arr, propName) {
      return this.diff(arr, propName);
    },
    sortBy: function sortBy(propNames, propDirections) {
      if (String.isString(propNames)) {
        propNames = [propNames];
      }

      if (!!propDirections) {
        if (String.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(function () {
          return 'asc';
        });
      }

      return _lodash2.default.orderBy(this, propNames, propDirections);
    },
    deepSortBy: function deepSortBy(propNames) {
      var propDirections = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var childrenPropName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

      if (String.isString(propNames)) {
        propNames = [propNames];
      }

      if (!!propDirections) {
        if (String.isString(propDirections)) {
          propDirections = [propDirections];
        }
      } else {
        propDirections = propNames.map(function () {
          return 'asc';
        });
      }

      return _lodash2.default.deepOrderBy(this, propNames, propDirections, childrenPropName);
    },
    filterBy: function filterBy(propNames, propValues) {
      var predicate = null;

      if (Function.isFunction(propNames)) {
        predicate = propNames;
        return _lodash2.default.filter(this, predicate);
      } else if (Array.isArray(propValues)) {
        return _lodash2.default.filterByValues(this, propNames, propValues);
      }

      predicate = {};
      predicate[propNames] = propValues;
      return _lodash2.default.filter(this, predicate) || [];
    },
    pull: function pull(item) {
      return _lodash2.default.pull(this, item);
    },
    pullBy: function pullBy(propName, propValue) {
      if (_lodash2.default.isArray(propName) && _lodash2.default.isFunction(propValue)) {
        var values = propName;
        var comparator = propValue;
        return _lodash2.default.pullAllByComparator(this, values, comparator);
      }

      var predicate = {};
      predicate[propName] = propValue;
      return _lodash2.default.pullAllBy(this, [predicate]);
    },
    findBy: function findBy(propName) {
      var propValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (predicate) {
        if (reverse) {
          return _lodash2.default.findLast(this, predicate);
        }

        return _lodash2.default.find(this, predicate);
      }

      return null;
    },
    deepFindBy: function deepFindBy(propName) {
      var propValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var childrenPropName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

      return _lodash2.default.deepFindBy(this, propName, propValue, childrenPropName);
    },
    indexBy: function indexBy(propName, propValue) {
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (predicate) {
        if (reverse) {
          return _lodash2.default.findLastIndex(this, predicate);
        }

        return _lodash2.default.findIndex(this, predicate);
      }

      return null;
    },
    containsBy: function containsBy(propName, propValue) {
      return this.findBy(propName, propValue) !== undefined;
    },
    countBy: function countBy(propName, propValue, falseValues) {
      var predicate = null;

      if (Function.isFunction(propName) || Object.isObject(propName)) {
        predicate = propName;
      } else if (String.isString(propName)) {
        predicate = {};
        predicate[propName] = propValue;
      }

      if (!!predicate) {
        return _lodash2.default.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
      }

      return 0;
    },
    intersection: function intersection() {
      for (var _len3 = arguments.length, arrays = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        arrays[_key3] = arguments[_key3];
      }

      return _lodash2.default.intersection.apply(_lodash2.default, [this].concat(_toConsumableArray(arrays)));
    },
    union: function union() {
      for (var _len4 = arguments.length, arrays = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        arrays[_key4] = arguments[_key4];
      }

      return _lodash2.default.unionWith.apply(_lodash2.default, [this].concat(_toConsumableArray(arrays), [_lodash2.default.isEqual]));
    },
    random: function random() {
      var weightField = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var valueField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!!weightField) {
        return this.map(function (item) {
          return _lodash2.default.times(item[weightField || 'weight'], function () {
            if (!!valueField) {
              return item[valueField || 'value'];
            }

            return _lodash2.default.omit(item, weightField);
          });
        }).flatten().shuffle().first();
      }

      return _lodash2.default.sample(this);
    },
    each: function each(iteratee) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!!reverse) {
        return _lodash2.default.eachRight(this, iteratee);
      }

      return _lodash2.default.each(this, iteratee);
    },
    first: function first(propName, propValue) {
      var a = this;

      if (!!propName) {
        a = this.filterBy(propName, propValue);
      }

      return _lodash2.default.first(a);
    },
    last: function last(propName, propValue) {
      var a = this;

      if (!!propName) {
        a = this.filterBy(propName, propValue);
      }

      return _lodash2.default.last(a);
    },
    sum: function sum(propName) {
      var startValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var predicate = null;

      if (Function.isFunction(propName)) {
        predicate = propName;
      } else {
        predicate = function predicate(acc, item) {
          return acc + item[propName];
        };
      }

      return _lodash2.default.reduce(this, predicate, startValue);
    },
    deepMap: function deepMap() {
      var childrenPropName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'children';
      var iteratee = arguments[1];

      return _lodash2.default.deepMap(this, childrenPropName, iteratee);
    },
    lorem: function lorem(items) {
      var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return Number.times(items, function (i) {
        if (!!model) {
          return Function.isFunction(model) ? model(i) : model;
        }

        return i;
      });
    },
    flatten: function flatten(deep) {
      if (!!deep) {
        if (Number.isNumber(deep)) {
          return _lodash2.default.flattenDepth(this, deep);
        } else if (Boolean.isBoolean(deep)) {
          return _lodash2.default.flattenDeep(this);
        }
      }

      return _lodash2.default.flatten(this);
    },
    shuffle: function shuffle() {
      return _lodash2.default.shuffle(this);
    },
    split: function split() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return _lodash2.default.chunk(this, n);
    },
    reverse: function reverse() {
      var clone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!!clone) {
        return _lodash2.default.reverse(_lodash2.default.clone(this));
      }

      return _lodash2.default.reverse(this);
    },
    tail: function tail() {
      return _lodash2.default.tail(this);
    },
    cut: function cut() {
      return _lodash2.default.initial(this);
    },
    clone: function clone() {
      return [].concat(_toConsumableArray(this));
    },
    maxBy: function maxBy() {
      var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (propName) {
        return _lodash2.default.maxBy(this, propName);
      }

      return null;
    }
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {"version":{"name":"flavor-js","buildDate":"Tue Jan 23 2018 14:37:39 GMT+0100 (CET)","version":"0.4.0"}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=flavor.js.map
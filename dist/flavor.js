/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _flavor = __webpack_require__(37);

	var _flavor2 = _interopRequireDefault(_flavor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (!window.ƒ) {
	  window.ƒ = window.FlavorJS = new _flavor2.default();
	}

	module.exports = {
	  ƒ: window.ƒ,
	  FlavorJS: window.FlavorJS
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(25);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(58),
	    getValue = __webpack_require__(79);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    getRawTag = __webpack_require__(76),
	    objectToString = __webpack_require__(103);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(89),
	    listCacheDelete = __webpack_require__(90),
	    listCacheGet = __webpack_require__(91),
	    listCacheHas = __webpack_require__(92),
	    listCacheSet = __webpack_require__(93);

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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(30);

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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(86);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(13);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 12 */
/***/ function(module, exports) {

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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isObjectLike = __webpack_require__(5);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(1);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(94),
	    mapCacheDelete = __webpack_require__(95),
	    mapCacheGet = __webpack_require__(96),
	    mapCacheHas = __webpack_require__(97),
	    mapCacheSet = __webpack_require__(98);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(13);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6),
	    stackClear = __webpack_require__(108),
	    stackDelete = __webpack_require__(109),
	    stackGet = __webpack_require__(110),
	    stackHas = __webpack_require__(111),
	    stackSet = __webpack_require__(112);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 19 */
/***/ function(module, exports) {

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


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(23),
	    toKey = __webpack_require__(11);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(55),
	    isObjectLike = __webpack_require__(5);

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


/***/ },
/* 22 */
/***/ function(module, exports) {

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


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isKey = __webpack_require__(16),
	    stringToPath = __webpack_require__(114),
	    toString = __webpack_require__(125);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(42),
	    arraySome = __webpack_require__(48),
	    cacheHas = __webpack_require__(69);

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


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);

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


/***/ },
/* 28 */
/***/ function(module, exports) {

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


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 30 */
/***/ function(module, exports) {

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


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(54),
	    isObjectLike = __webpack_require__(5);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
	    stubFalse = __webpack_require__(122);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isObject = __webpack_require__(12);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(59),
	    baseUnary = __webpack_require__(22),
	    nodeUtil = __webpack_require__(102);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(46),
	    baseKeys = __webpack_require__(61),
	    isArrayLike = __webpack_require__(118);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FlavorJS = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(126);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _baseIteratee2 = __webpack_require__(60);

	var _baseIteratee3 = _interopRequireDefault(_baseIteratee2);

	var _basePullAll2 = __webpack_require__(66);

	var _basePullAll3 = _interopRequireDefault(_basePullAll2);

	var _toFinite2 = __webpack_require__(123);

	var _toFinite3 = _interopRequireDefault(_toFinite2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * constructs FlavorJS class & extends the js natives
	 * @class FlavorJS
	 * @classdesc FlavorJS the definitive JS natives chainable extensions methods
	 * @public
	 */
	var FlavorJS = exports.FlavorJS = function () {
	  function FlavorJS() {
	    _classCallCheck(this, FlavorJS);

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
	   *   possible options are (source documentation from <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Javascript|MDN docs</a><br>
	   * @param {Boolean} [options.configurable=true] configurable - true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
	   * @param {Boolean} [options.enumerable=false] enumerable - true if and only if this property shows up during enumeration of the properties on the corresponding object.
	   * @param {Boolean} [options.writable=true] writable - true if and only if the value associated with the property may be changed with an assignment operator.
	   * @param {Function} [options.get=undefined] get - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.<br>
	   *   for example...<br>
	   *   <pre>
	   *     function ClassName() {
	   *       var privateProp = null;
	   *
	   *       Object.defineProperty(this, 'publicProp', {
	   *         get: function() {
	   *           return privateProp;
	   *         }
	   *       });
	   *     }
	   *   </pre>
	   * @param {Function} [options.set=undefined] set - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>
	   *   for example...<br>
	   *   <pre>
	   *     function ClassName() {
	   *       var privateProp = null;
	   *
	   *       Object.defineProperty(this, 'publicProp', {
	   *         set: function(value) {
	   *           privateProp = value;
	   *         }
	   *       });
	   *     }
	   *   </pre>
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
	     * @param {Prototype|Object} proto - the prototype/object to extend
	     * @param {Object} extend - the extend object to be merged in prototype
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
	     * initLodashMixins
	     * @memberOf FlavorJS
	     * @method initLodashMixins
	     * @instance
	     */

	  }, {
	    key: 'initLodashMixins',
	    value: function initLodashMixins() {
	      /**
	       * @namespace Lodash
	       * @description all the mixins added to _
	       */
	      _lodash2.default.mixin({
	        /**
	         * checks if a string is a percentage value<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var s = '23.97%';
	         *
	         *   console.log(_.isPercentage(s)); // true<br>
	         *   console.log(_.isPercentage('50%')); // true<br>
	         *   console.log(_.isPercentage(10)); // false
	         * </pre>
	         * @memberOf Lodash
	         * @method isPercentage
	         * @instance
	         * @param {String} s - the string
	         * @return {Boolean}
	         */
	        isPercentage: function isPercentage(s) {
	          return _lodash2.default.isString(s) && s.isPercentage();
	        },


	        /**
	         * parses float value in a percentage string<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var p = '50.5%';
	         *
	         *   console.log(_.parsePercentage(p)); // 50.5<br>
	         *   console.log(_.parsePercentage('100%')); // 100<br>
	         *   console.log(_.parsePercentage(25.3)); // null<br>
	         * </pre>
	         * @memberOf Lodash
	         * @method parsePercentage
	         * @instance
	         * @param {String} s - the percentage string
	         * @return {null|Number}
	         */
	        parsePercentage: function parsePercentage(s) {
	          if (_lodash2.default.isPercentage(s)) {
	            return parseFloat(s) / 100.00;
	          }

	          return null;
	        },
	        filterByValues: function filterByValues(collection, key, values) {
	          return _lodash2.default.filter(collection, function (o) {
	            return values.contains(o.path(key));
	          });
	        },
	        deepMap: function deepMap(collection, childrenPropName, mapCallback) {
	          childrenPropName = childrenPropName || 'children';

	          return _lodash2.default.map(collection, function (item) {
	            if (!!item[childrenPropName]) {
	              if (_lodash2.default.isArray(item[childrenPropName])) {
	                item[childrenPropName] = _lodash2.default.deepMap(item[childrenPropName], childrenPropName, mapCallback);
	              }
	            }

	            return mapCallback(item);
	          });
	        },
	        deepFindBy: function deepFindBy(collection, propName, propValue, childrenPropName) {
	          var found = null;
	          childrenPropName = childrenPropName || 'children';

	          collection.each(function (item) {
	            if (!found) {
	              if (item[propName] === propValue) {
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
	        deepOrderBy: function deepOrderBy(collection, propNames, propDirections, childrenPropName) {
	          childrenPropName = childrenPropName || 'children';

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
	        pullAllByComparator: function pullAllByComparator(array, values, comparator, iteratee) {
	          return array && array.length && values && values.length ? (0, _basePullAll3.default)(array, values, (0, _baseIteratee3.default)(iteratee, 2), comparator) : array;
	        },
	        timesReverse: function timesReverse(n, fn) {
	          var index = n;

	          while (--index >= 0) {
	            _lodash2.default.isFunction(fn) && fn(index);
	          }
	        },
	        timesRange: function timesRange(start, end) {
	          var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	          var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	          if (_lodash2.default.isFunction(fn)) {
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
	              fn(index + (reverse ? 1 : -1));
	            }
	          }
	        }
	      });
	    }

	    /**
	     * initObjectPrototype
	     * @memberOf FlavorJS
	     * @method initObjectPrototype
	     * @instance
	     */

	  }, {
	    key: 'initObjectPrototype',
	    value: function initObjectPrototype() {
	      /**
	       * @namespace Object
	       * @description the JS native Object class
	       */
	      this.extendPrototype(Object.prototype, {
	        /**
	         * isObject<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   console.log(Object.isObject(o)); // true<br>
	         *   console.log(Object.isObject(2)); // true<br>
	         *   console.log(Object.isObject('2')); // true<br>
	         *   console.log(Object.isObject(null)); // false
	         * </pre>
	         * @memberOf Object
	         * @method isObject
	         * @instance
	         * @return {Boolean}
	         */
	        isObject: function isObject() {
	          return _lodash2.default.isPlainObject(this);
	        },


	        /**
	         * deep merges a variable list of objects inside this object instance or a new object (useful to implements defaults/options/settings pattern or set multiple properties at the same time or what you want)<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   o.inherit({
	         *     prop1: 2,
	         *     prop3: new Date(),
	         *   }, {
	         *     prop4: 7.52,
	         *   });
	         *
	         *   console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
	         * </pre><br>
	         *   or<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   var p = o.inherit(true, {
	         *     prop1: 2,
	         *     prop3: new Date(),
	         *   }, {
	         *     prop4: 7.52,
	         *   });
	         *
	         *   console.log(o); // o = {prop1: 1, prop2: 'a'}<br>
	         *   console.log(p); // p = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
	         * </pre>
	         * @memberOf Object
	         * @method inherit
	         * @instance
	         * @param {Boolean} [createNew] - specifies to create a new object to merge
	         * @param {...Object} args - the list of objects to merge
	         * @return {Object}
	         */
	        inherit: function inherit() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
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


	        /**
	         * returns a new object that omits the specified properties<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   o.inherit({
	         *     prop1: 2,
	         *     prop3: new Date(),
	         *   }, {
	         *     prop4: 7.52,
	         *   });
	         *
	         *   console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}<br>
	         *   console.log(o.omit('prop1')); // {prop2: 'a', prop3: Date, prop4: 7.52}<br>
	         *   console.log(o.omit('prop1', 'prop2')); // {prop3: Date, prop4: 7.52}<br>
	         *   console.log(o.omit(['prop1', 'prop2'])); // {prop3: Date, prop4: 7.52}<br>
	         *   console.log(o.omit(['prop1'], ['prop2'])); // {prop3: Date, prop4: 7.52}<br>
	         *   console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
	         * </pre>
	         * @memberOf Object
	         * @method omit
	         * @instance
	         * @param {...Object} args - the list of properties to omit
	         * @return {Object}
	         */
	        omit: function omit() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          return _lodash2.default.omit.apply(_lodash2.default, [this].concat(_toConsumableArray(args)));
	        },

	        /**
	         * returns a new object that picks only the specified properties<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   o.inherit({
	         *     prop1: 2,
	         *     prop3: new Date(),
	         *   }, {
	         *     prop4: 7.52,
	         *   });
	         *
	         *   console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}<br>
	         *   console.log(o.pick('prop1')); // {prop1: 2}<br>
	         *   console.log(o.pick('prop1', 'prop2')); // {prop1: 2, prop2: 'a'}<br>
	         *   console.log(o.pick(['prop1', 'prop2'])); // {prop1: 2, prop2: 'a'}<br>
	         *   console.log(o.pick(['prop1'], ['prop2'])); // {prop1: 2, prop2: 'a'}<br>
	         *   console.log(o); // o = {prop1: 2, prop2: 'a', prop3: Date, prop4: 7.52}
	         * </pre>
	         * @memberOf Object
	         * @method pick
	         * @instance
	         * @param {...Object} args - the list of properties to omit
	         * @return {Object}
	         */
	        pick: function pick() {
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }

	          return _lodash2.default.pick.apply(_lodash2.default, [this].concat(_toConsumableArray(args)));
	        },


	        /**
	         * clones an object<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *   };
	         *
	         *   var p = o.clone();
	         *
	         *   console.log(o == p); // true<br>
	         *   console.log(o === p); // false
	         * </pre>
	         * @memberOf Object
	         * @method clone
	         * @instance
	         * @return {Object}
	         */
	        clone: function clone() {
	          return _lodash2.default.cloneDeep(this);
	        },


	        /**
	         * returns the value at the specified path of the object, with a default value<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *     prop3: {
	         *       prop31: 2.52,
	         *       prop32: 'b',
	         *     },
	         *     prop4: new Date(),
	         *   };
	         *
	         *   console.log(o.path('prop1')); // 1<br>
	         *   console.log(o.path('prop3.prop31')); // 2.52<br>
	         *   console.log(o.path('prop3.prop34')); // null<br>
	         *   console.log(o.path('prop3.prop34', 'c')); // c
	         * </pre><br>
	         *   you can also use array paths<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *     prop3: {
	         *       prop31: 2.52,
	         *       prop32: [{
	         *        propO1: 'b',
	         *       }, {
	         *        propO1: 'c',
	         *       }],
	         *     },
	         *     prop4: new Date(),
	         *   };
	         *
	         *   console.log(o.path('prop3.prop32[0].propO1')); // 'b'<br>
	         *   console.log(o.path('prop3.prop32[1]')); // {propO1: 'c'}<br>
	         *   console.log(o.path('prop3.prop31[2]')); // null<br>
	         *   console.log(o.path('prop3.prop31[2]', {})); // {}
	         * </pre>
	         * @memberOf Object
	         * @method path
	         * @instance
	         * @param {String} path - the path to search inside the object
	         * @param {Object} [defVal=null] - the default value to return if path is not found
	         * @return {*|null}
	         */
	        path: function path(_path) {
	          var defVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	          if (_typeof(this) === 'object' && this instanceof Object) {
	            return _lodash2.default.get(this, _path, defVal);
	          }

	          return defVal;
	        },


	        /**
	         * executes function for every property in the object<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var o = {
	         *     prop1: 1,
	         *     prop2: 'a',
	         *     prop3: 'b',
	         *     prop4: new Date(),
	         *   };
	         *
	         *   o.each(function(value, key) {
	         *     console.log(key, value);
	         *   });
	         *
	         *   // it logs
	         *
	         *   'prop1', 1
	         *   'prop2', 'a'
	         *   'prop3', 'b'
	         *   'prop4', Date
	         * </pre>
	         * @memberOf Object
	         * @method each
	         * @instance
	         * @param {Function} iteratee - the iteratee callback will be invoked with the following parameters<br>
	         *   so your callback has to be something like this<br><br>
	         * <pre>
	         *   function iteratee(value, key) {}
	         * </pre>
	         * @param {*} iteratee.value - the property value of the object
	         * @param {String} iteratee.key - the property key of the object
	         * @return {Object} to make chainable the method
	         */
	        each: function each(iteratee) {
	          return _lodash2.default.each(this, iteratee);
	        }
	      });

	      this.extendPrototypeProperty(Object, 'isObject', function (o) {
	        return Object.prototype.isObject.call(o);
	      });
	    }

	    /**
	     * initFunctionPrototype
	     * @memberOf FlavorJS
	     * @method initFunctionPrototype
	     * @instance
	     */

	  }, {
	    key: 'initFunctionPrototype',
	    value: function initFunctionPrototype() {
	      /**
	       * @namespace Function
	       * @description the JS native Function class
	       */
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
	        isFunction: function isFunction() {
	          return _lodash2.default.isFunction(this);
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
	        proxy: function proxy(scope) {
	          for (var _len4 = arguments.length, proxyArgs = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	            proxyArgs[_key4 - 1] = arguments[_key4];
	          }

	          var func = this;

	          return function () {
	            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	              args[_key5] = arguments[_key5];
	            }

	            return func.apply(scope, proxyArgs.length >= 1 ? proxyArgs : args);
	          };
	        }
	      });
	      this.extendPrototypeProperty(Function, 'isFunction', function (f) {
	        return Function.prototype.isFunction.call(f);
	      });
	    }

	    /**
	     * initArrayPrototype
	     * @memberOf FlavorJS
	     * @method initArrayPrototype
	     * @instance
	     */

	  }, {
	    key: 'initArrayPrototype',
	    value: function initArrayPrototype() {
	      /**
	       * @namespace Array
	       * @description the JS native Array class
	       */
	      this.extendPrototype(Array.prototype, {
	        /**
	         * isArray<br><br>
	         *   eg. usage<br>
	         * <pre>
	         *   var a = new Array();
	         *
	         *   console.log(Array.isArray(a)); // true<br>
	         *   console.log(Array.isArray(2)); // false<br>
	         *   console.log(Array.isArray([])); // true<br>
	         *   console.log(Array.isArray(null)); // false
	         * </pre>
	         * @memberOf Array
	         * @method isArray
	         * @instance
	         * @return {Boolean}
	         */
	        isArray: function isArray() {
	          return _lodash2.default.isArray(this);
	        },
	        contains: function contains(item, all) {
	          if (_lodash2.default.isArray(item)) {
	            if (!!all) {
	              return _lodash2.default.difference(item, this).length === 0;
	            }

	            return _lodash2.default.intersection(this, item).length > 0;
	          }

	          return _lodash2.default.includes(this, item);
	        },
	        concat: function concat(arr) {
	          return _lodash2.default.concat(this, arr);
	        },
	        distinct: function distinct() {
	          return _lodash2.default.uniqWith(this, _lodash2.default.isEqual);
	        },
	        diff: function diff(arr) {
	          return _lodash2.default.differenceWith(this, arr, _lodash2.default.isEqual);
	        },
	        diffBy: function diffBy(arr, propName) {
	          return _lodash2.default.differenceWith(this, arr, function (item, arrItem) {
	            return item[propName] === arrItem[propName];
	          });
	        },
	        sortBy: function sortBy(propNames, propDirections) {
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

	          return _lodash2.default.orderBy(this, propNames, propDirections);
	        },
	        deepSortBy: function deepSortBy(propNames, propDirections, childrenPropName) {
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

	          return _lodash2.default.deepOrderBy(this, propNames, propDirections, childrenPropName || 'children');
	        },
	        filterBy: function filterBy(propName, propValue) {
	          var predicate = null;

	          if (_lodash2.default.isFunction(propName)) {
	            predicate = propName;
	            return _lodash2.default.filter(this, predicate);
	          } else if (_lodash2.default.isArray(propValue)) {
	            return _lodash2.default.filterByValues(this, propName, propValue);
	          }

	          predicate = {};
	          predicate[propName] = propValue;
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
	        findBy: function findBy(propName, propValue) {
	          var predicate = null;

	          if (_lodash2.default.isFunction(propName)) {
	            predicate = propName;
	            return _lodash2.default.find(this, predicate);
	          }

	          predicate = {};
	          predicate[propName] = propValue;
	          return _lodash2.default.find(this, predicate);
	        },
	        deepFindBy: function deepFindBy(propName, propValue, childrenPropName) {
	          return _lodash2.default.deepFindBy(this, propName, propValue, childrenPropName || 'children');
	        },
	        indexBy: function indexBy(propName, propValue) {
	          var predicate = {};
	          predicate[propName] = propValue;
	          return _lodash2.default.findIndex(this, predicate);
	        },
	        containsBy: function containsBy(propName, propValue) {
	          return this.findBy(propName, propValue) !== undefined;
	        },
	        countBy: function countBy(propName, propValue, falseValues) {
	          var predicate = null;

	          if (_lodash2.default.isFunction(propName)) {
	            predicate = propName;
	            return _lodash2.default.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
	          }

	          predicate = {};
	          predicate[propName] = propValue;
	          return _lodash2.default.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
	        },
	        intersection: function intersection(value) {
	          return _lodash2.default.intersection(this, value);
	        },
	        union: function union(value) {
	          return _lodash2.default.unionWith(this, _lodash2.default.isArray(value) ? value : [value], _lodash2.default.isEqual);
	        },
	        removeBy: function removeBy(callback) {
	          return _lodash2.default.remove(this, callback);
	        },
	        random: function random() {
	          return _lodash2.default.sample(this);
	        },
	        randomWeighted: function randomWeighted(valueField, weightField) {
	          return this.map(function (item) {
	            return _lodash2.default.times(item[weightField || 'weight'], function () {
	              return item[valueField || 'value'];
	            });
	          }).flatten().shuffle().first();
	        },
	        each: function each(fn) {
	          return _lodash2.default.each(this, fn);
	        },
	        first: function first() {
	          return _lodash2.default.first(this);
	        },
	        firstBy: function firstBy(propName, propValue) {
	          return _lodash2.default.first(this.filterBy(propName, propValue));
	        },
	        last: function last() {
	          return _lodash2.default.last(this);
	        },
	        lastBy: function lastBy(propName, propValue) {
	          return _lodash2.default.last(this.filterBy(propName, propValue));
	        },
	        sum: function sum(propName, startValue) {
	          return _lodash2.default.reduce(this, function (acc, item) {
	            return acc + item[propName];
	          }, startValue || 0);
	        },
	        deepMap: function deepMap(childrenPropName, mapCallback) {
	          return _lodash2.default.deepMap(this, childrenPropName, mapCallback);
	        },
	        lorem: function lorem(items, itemModel) {
	          return _lodash2.default.times(items, function () {
	            return _lodash2.default.isFunction(itemModel) ? itemModel() : itemModel;
	          });
	        },
	        flatten: function flatten(deep) {
	          if (!!deep) {
	            return _lodash2.default.flattenDeep(this);
	          }

	          return _lodash2.default.flatten(this);
	        },
	        shuffle: function shuffle() {
	          return _lodash2.default.shuffle(this);
	        },
	        split: function split(n) {
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
	        times: function times(fn, reverse) {
	          return _lodash2.default.timesRange(this.first(), this.last(), fn, reverse);
	        },
	        clone: function clone() {
	          return [].concat(_toConsumableArray(this));
	        }
	      });
	    }

	    /**
	     * initStringPrototype
	     * @memberOf FlavorJS
	     * @method initStringPrototype
	     * @instance
	     */

	  }, {
	    key: 'initStringPrototype',
	    value: function initStringPrototype() {
	      /**
	       * @namespace String
	       * @description the JS native String class
	       */
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
	        isString: function isString() {
	          return _lodash2.default.isString(this);
	        },
	        parsePercentage: function parsePercentage() {
	          return _lodash2.default.parsePercentage(this);
	        },
	        toArray: function toArray(separator) {
	          return _lodash2.default.split(this, separator);
	        },
	        contains: function contains(value) {
	          return this.indexOf(value) !== -1;
	        },
	        startsWith: function startsWith(value) {
	          return new RegExp('^' + value).test(this);
	        },
	        endsWith: function endsWith(value) {
	          return new RegExp(value + '$').test(this);
	        },
	        replaceAll: function replaceAll(find, replace) {
	          return this.replace(new RegExp(find, 'g'), replace || '');
	        },
	        guid: function guid() {
	          // Random GUID generator based on .toString(16);
	          return Math.random().toString(16).slice(2, 10) + '-' + Math.random().toString(16).slice(2, 6) + '-4' + Math.random().toString(16).slice(2, 5) + '-' + Math.random().toString(16).slice(2, 6) + '-' + Math.random().toString(16).slice(2, 14);

	          // Random GUID generator based on regex
	          // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	          //   var r: Math.random()*16|0, v: c == 'x' ? r : (r&0x3|0x8);
	          //   return v.toString(16);
	          // });
	        },
	        randomPhoneNum: function randomPhoneNum() {
	          return Math.floor(100000000 + Math.random() * 900000000);
	        },
	        encodeURI: function encodeURI() {
	          return encodeURIComponent(this);
	        },
	        decodeURI: function decodeURI() {
	          return decodeURIComponent(this);
	        },
	        encodeHTML: function encodeHTML() {
	          return _lodash2.default.escape(this);
	        },
	        decodeHTML: function decodeHTML() {
	          return _lodash2.default.unescape(this);
	        },
	        unescape: function unescape() {
	          return this.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
	            var num = parseInt(numStr, 10); // read num as normal number
	            return String.fromCharCode(num);
	          });
	        },
	        extractDomain: function extractDomain(level) {
	          var domain = void 0;

	          // find & remove protocol (http, ftp, etc.) and get domain
	          domain = this.split('/')[this.indexOf('://') > -1 ? 2 : 0];

	          // find & remove port number
	          domain = domain.split(':')[0];
	          domain = domain.replaceAll('www.', '');

	          var domainArr = domain.split('.');
	          return domainArr.slice(domainArr.length - level).join('.');
	        },
	        extractQueryString: function extractQueryString() {
	          var queryStringObject = {};

	          if (this.contains('?')) {
	            var queryString = this.split('?')[1];
	            var queryStringParams = queryString.split('&');
	            queryStringParams.each(function (param) {
	              param = param.split('=');
	              queryStringObject[param[0]] = param[1];
	            });
	          }

	          return queryStringObject;
	        },
	        slugify: function slugify(dashed) {
	          dashed = !!dashed;
	          var returnString = this.toString().toLowerCase().replace(/\s+/g, dashed ? '-' : '') // Replace spaces with -
	          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
	          .replace(/\-\-+/g, dashed ? '-' : '') // Replace multiple - with single -
	          .replace(/^-+/, '') // Trim - from start of text
	          .replace(/-+$/, ''); // Trim - from end of text

	          return dashed ? returnString : returnString.replaceAll('-', '');
	        },
	        camelCase: function camelCase() {
	          return _lodash2.default.camelCase(this);
	        },
	        capitalize: function capitalize() {
	          return _lodash2.default.capitalize(this);
	        },
	        getFileExtension: function getFileExtension() {
	          return this.substring(this.lastIndexOf('.') + 1).toLowerCase();
	        },
	        stripTags: function stripTags() {
	          var div = document.createElement('div');
	          div.innerHTML = this;
	          return div.textContent;
	        },

	        // lorem(count, units) {
	        //   return holderIpsum[units](count);
	        // },
	        pad: function pad(length, chars) {
	          return _lodash2.default.pad(this, length, chars);
	        },
	        padLeft: function padLeft(length, chars) {
	          return _lodash2.default.padStart(this, length, chars);
	        },
	        padRight: function padRight(length, chars) {
	          return _lodash2.default.padEnd(this, length, chars);
	        },
	        toInt: function toInt() {
	          return _lodash2.default.parseInt(this);
	        },
	        isUrl: function isUrl() {
	          return (/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(this)
	          );
	        },
	        isRoman: function isRoman() {
	          return !!this.fromRoman();
	        },
	        isPercentage: function isPercentage() {
	          return (/^\d+(\.\d+)?%$/.test(this)
	          );
	        },
	        fromRoman: function fromRoman() {
	          var str = this;
	          var result = null;
	          // the result is now a number, not a string
	          var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	          var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

	          _lodash2.default.times(decimal.length, function (i) {
	            while (str.indexOf(roman[i]) === 0) {
	              if (!result) {
	                result = 0;
	              }
	              result += decimal[i];
	              str = str.replace(roman[i], '');
	            }
	          });

	          return result;
	        }
	      });

	      this.extendPrototypeProperty(String, 'isString', function (s) {
	        return String.prototype.isString.call(s);
	      });

	      this.extendPrototypeProperty(String, 'isPercentage', function (s) {
	        return String.prototype.isPercentage.call(s);
	      });

	      this.extendPrototypeProperty(String, 'parsePercentage', function (s) {
	        return String.prototype.parsePercentage.call(s);
	      });
	    }

	    /**
	     * initDatePrototype
	     * @memberOf FlavorJS
	     * @method initDatePrototype
	     * @instance
	     */

	  }, {
	    key: 'initDatePrototype',
	    value: function initDatePrototype() {
	      this.extendPrototype(Date.prototype, {
	        isDate: function isDate() {
	          return _lodash2.default.isDate(this);
	        },
	        toUTC: function toUTC() {
	          return Math.round(this);
	        }
	      });
	      this.extendPrototypeProperty(Date, 'isDate', function (d) {
	        return Date.prototype.isDate.call(d);
	      });
	    }

	    /**
	     * initNumberPrototype
	     * @memberOf FlavorJS
	     * @method initNumberPrototype
	     * @instance
	     */

	  }, {
	    key: 'initNumberPrototype',
	    value: function initNumberPrototype() {
	      /**
	       * @namespace Number
	       * @description the JS native Number class
	       */
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
	        isNumber: function isNumber() {
	          return _lodash2.default.isNumber(this);
	        },
	        between: function between(from, to) {
	          return from <= this && this <= to;
	        },
	        random: function random(min, max, float) {
	          return _lodash2.default.random(min || Number.MIN_VALUE, max || Number.MAX_VALUE, !!float);
	        },
	        times: function times(fn, reverse) {
	          if (!!reverse) {
	            _lodash2.default.timesReverse(this, fn);
	          } else {
	            _lodash2.default.times(this, fn);
	          }
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
	        toFileSize: function toFileSize(decimals) {
	          var fileSizeString = '0 Bytes';

	          if (!!this) {
	            decimals = decimals || 3;
	            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	            var i = Math.floor(Math.log(this) / Math.log(1024));
	            fileSizeString = parseFloat((this / Math.pow(1024, i)).toFixed(decimals)) + ' ' + sizes[i];
	          }

	          return fileSizeString;
	        },
	        toFloat: function toFloat() {
	          var decimals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	          return _lodash2.default.floor(this, decimals);
	        },
	        toAbsolute: function toAbsolute() {
	          return Math.abs(this);
	        },
	        round: function round() {
	          return _lodash2.default.round(this);
	        }
	      });

	      this.extendPrototype(Number, {
	        isNumber: function isNumber(n) {
	          return Number.prototype.isNumber.call(n);
	        },
	        parse: function parse(n) {
	          return _lodash2.default.parseInt(n);
	        },
	        random: function random() {
	          var lower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	          var upper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	          var floating = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	          return _lodash2.default.random(lower, upper, floating);
	        }
	      });
	    }

	    /**
	     * initBooleanPrototype
	     * @memberOf FlavorJS
	     * @method initBooleanPrototype
	     * @instance
	     */

	  }, {
	    key: 'initBooleanPrototype',
	    value: function initBooleanPrototype() {
	      /**
	       * @namespace Boolean
	       * @description the JS native Boolean class
	       */
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
	        isBoolean: function isBoolean() {
	          return _lodash2.default.isBoolean(this);
	        },
	        random: function random() {
	          return Math.random() >= 0.5;
	        }
	      });
	      this.extendPrototypeProperty(Boolean, 'isBoolean', function (b) {
	        return Boolean.prototype.isBoolean.call(b);
	      });
	    }
	  }, {
	    key: 'initUtils',
	    value: function initUtils() {
	      this.inherit({
	        delay: function delay(fn, ms) {
	          return _lodash2.default.delay(fn, ms);
	        }
	      });
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
	  }]);

	  return FlavorJS;
	}();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(1);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(81),
	    hashDelete = __webpack_require__(82),
	    hashGet = __webpack_require__(83),
	    hashHas = __webpack_require__(84),
	    hashSet = __webpack_require__(85);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(1);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(1);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(15),
	    setCacheAdd = __webpack_require__(105),
	    setCacheHas = __webpack_require__(106);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(3),
	    root = __webpack_require__(1);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(67),
	    isArguments = __webpack_require__(31),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(32),
	    isIndex = __webpack_require__(26),
	    isTypedArray = __webpack_require__(34);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 48 */
/***/ function(module, exports) {

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


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(47),
	    isArray = __webpack_require__(2);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 51 */
/***/ function(module, exports) {

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


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(49),
	    baseIsNaN = __webpack_require__(57),
	    strictIndexOf = __webpack_require__(113);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 53 */
/***/ function(module, exports) {

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


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isObjectLike = __webpack_require__(5);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(18),
	    equalArrays = __webpack_require__(24),
	    equalByTag = __webpack_require__(72),
	    equalObjects = __webpack_require__(73),
	    getTag = __webpack_require__(78),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(32),
	    isTypedArray = __webpack_require__(34);

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


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(18),
	    baseIsEqual = __webpack_require__(21);

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


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isMasked = __webpack_require__(87),
	    isObject = __webpack_require__(12),
	    toSource = __webpack_require__(29);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    isLength = __webpack_require__(17),
	    isObjectLike = __webpack_require__(5);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(62),
	    baseMatchesProperty = __webpack_require__(63),
	    identity = __webpack_require__(117),
	    isArray = __webpack_require__(2),
	    property = __webpack_require__(120);

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


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(88),
	    nativeKeys = __webpack_require__(101);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(56),
	    getMatchData = __webpack_require__(75),
	    matchesStrictComparable = __webpack_require__(28);

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


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(21),
	    get = __webpack_require__(115),
	    hasIn = __webpack_require__(116),
	    isKey = __webpack_require__(16),
	    isStrictComparable = __webpack_require__(27),
	    matchesStrictComparable = __webpack_require__(28),
	    toKey = __webpack_require__(11);

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


/***/ },
/* 64 */
/***/ function(module, exports) {

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


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(20);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(19),
	    baseIndexOf = __webpack_require__(52),
	    baseIndexOfWith = __webpack_require__(53),
	    baseUnary = __webpack_require__(22),
	    copyArray = __webpack_require__(70);

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


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    arrayMap = __webpack_require__(19),
	    isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(13);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 70 */
/***/ function(module, exports) {

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


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7),
	    Uint8Array = __webpack_require__(43),
	    eq = __webpack_require__(30),
	    equalArrays = __webpack_require__(24),
	    mapToArray = __webpack_require__(99),
	    setToArray = __webpack_require__(107);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(74);

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


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(50),
	    getSymbols = __webpack_require__(77),
	    keys = __webpack_require__(35);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(27),
	    keys = __webpack_require__(35);

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


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(7);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(45),
	    stubArray = __webpack_require__(121);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(38),
	    Map = __webpack_require__(14),
	    Promise = __webpack_require__(40),
	    Set = __webpack_require__(41),
	    WeakMap = __webpack_require__(44),
	    baseGetTag = __webpack_require__(4),
	    toSource = __webpack_require__(29);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 79 */
/***/ function(module, exports) {

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


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(23),
	    isArguments = __webpack_require__(31),
	    isArray = __webpack_require__(2),
	    isIndex = __webpack_require__(26),
	    isLength = __webpack_require__(17),
	    toKey = __webpack_require__(11);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(10);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(71);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 89 */
/***/ function(module, exports) {

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


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

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


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

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


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

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


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(8);

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


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(39),
	    ListCache = __webpack_require__(6),
	    Map = __webpack_require__(14);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(9);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(119);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(104);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(25);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)(module)))

/***/ },
/* 103 */
/***/ function(module, exports) {

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


/***/ },
/* 104 */
/***/ function(module, exports) {

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


/***/ },
/* 105 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(6),
	    Map = __webpack_require__(14),
	    MapCache = __webpack_require__(15);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 113 */
/***/ function(module, exports) {

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


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(100);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(20);

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


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(51),
	    hasPath = __webpack_require__(80);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 117 */
/***/ function(module, exports) {

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


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isLength = __webpack_require__(17);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(15);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(64),
	    basePropertyDeep = __webpack_require__(65),
	    isKey = __webpack_require__(16),
	    toKey = __webpack_require__(11);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 122 */
/***/ function(module, exports) {

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


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(124);

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


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12),
	    isSymbol = __webpack_require__(13);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(68);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = lodash;

/***/ }
/******/ ]);
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

	var _flavor = __webpack_require__(1);

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _lodash2 = _interopRequireDefault(_lodash);

	var _baseIteratee2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash/_baseIteratee\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _baseIteratee3 = _interopRequireDefault(_baseIteratee2);

	var _basePullAll2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash/_basePullAll\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _basePullAll3 = _interopRequireDefault(_basePullAll2);

	var _toFinite2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"lodash/toFinite\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

	exports.default = FlavorJS;

/***/ }
/******/ ]);
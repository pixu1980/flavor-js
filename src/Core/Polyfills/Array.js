import { trueTypeOf } from '../../Helpers/index';

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
    value(arr) {
      return trueTypeOf(arr) === 'array';
    },
  });
}

if (!Array.prototype.filter) {
  Object.defineProperty(Array.prototype, 'filter', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(f) {
      if (this === undefined || this === null) {
        throw new TypeError();
      }

      const t = Object(this);
      const len = t.length >>> 0;
      if (typeof fun !== 'function') {
        throw new TypeError();
      }

      const res = [];
      const thisArg = arguments.length >= 2 ? arguments[1] : undefined;

      let val = null;

      for (let i = 0; i < len; i++) {
        if (i in t) {
          val = t[i];
          // NOTE: Technically this should Object.defineProperty at
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
    },
  });
}

if (!Array.prototype.map) {
  Object.defineProperty(Array.prototype, 'map', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(arr, iterator) {
      const result = [];

      for (let i = 0; i < arr.length; i += 1) {
        result.push(iterator(arr[i]));
      }

      return result;
    },
  });
}

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(valueToFind, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      const n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(valueToFind, elementK) is true, return true.
        if (sameValueZero(o[k], valueToFind)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    },
  });
}

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      let k = 0;
      let value;

      if (arguments.length === 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present, throw a TypeError exception.
        if (k >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }

        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i. Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(callbackfn, undefined, « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    },
  });
}

if (!Array.prototype.every) {
  Object.defineProperty(Array.prototype, 'every', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(callbackfn, thisArg) {
      let T;
      let k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the this
      //    value as the argument.
      const O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method
      //    of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      const len = O.length >>> 0;

      // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
      if (typeof callbackfn !== 'function') {
        throw new TypeError();
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }

      // 6. Let k be 0.
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {
        let kValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
          // i. Let kValue be the result of calling the Get internal method
          //    of O with argument Pk.
          kValue = O[k];

          // ii. Let testResult be the result of calling the Call internal method
          //     of callbackfn with T as the this value and argument list
          //     containing kValue, k, and O.
          const testResult = callbackfn.call(T, kValue, k, O);

          // iii. If ToBoolean(testResult) is false, return false.
          if (!testResult) {
            return false;
          }
        }

        k++;
      }

      return true;
    },
  });
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Object.defineProperty(Array.prototype, 'forEach', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(callback/*, thisArg*/) {
      let T;
      let k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      // 1. Let O be the result of calling toObject() passing the
      // |this| value as the argument.
      const O = Object(this);

      // 2. Let lenValue be the result of calling the Get() internal
      // method of O with the argument "length".
      // 3. Let len be toUint32(lenValue).
      const len = O.length >>> 0;

      // 4. If isCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let
      // T be undefined.
      if (arguments.length > 1) {
        T = arguments[1];
      }

      // 6. Let k be 0.
      k = 0;

      // 7. Repeat while k < len.
      while (k < len) {
        let kValue;

        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator.
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c.
        // c. If kPresent is true, then
        if (k in O) {
          // i. Let kValue be the result of calling the Get internal
          // method of O with argument Pk.
          kValue = O[k];

          // ii. Call the Call internal method of callback with T as
          // the this value and argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined.
    },
  });
}

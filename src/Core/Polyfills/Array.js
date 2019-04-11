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

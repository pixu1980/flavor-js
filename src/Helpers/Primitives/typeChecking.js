// THANKS TO https://gomakethings.com/true-type-checking-with-vanilla-js/
function trueTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// Object.prototype.toString.call([]); // [object Array]
// Object.prototype.toString.call({}); // [object Object]
// Object.prototype.toString.call(''); // [object String]
// Object.prototype.toString.call(new Date()); // [object Date]
// Object.prototype.toString.call(1); // [object Number]
// Object.prototype.toString.call(function () {}); // [object Function]
// Object.prototype.toString.call(/test/i); // [object RegExp]
// Object.prototype.toString.call(true); // [object Boolean]
// Object.prototype.toString.call(null); // [object Null]
// Object.prototype.toString.call(); // [object Undefined]

function isNull(any) {
  return trueTypeOf(any) === 'null';
}

function isUndefined(any) {
  return trueTypeOf(any) === 'undefined';
}

function isNullOrUndefined(any) {
  return isNull(any) || isUndefined(any);
}

function isObject(any) {
  return trueTypeOf(any) === 'object';
}

function isFunction(any) {
  return trueTypeOf(any) === 'function';
}

function isBoolean(any) {
  return trueTypeOf(any) === 'boolean';
}

function isNumber(any) {
  return trueTypeOf(any) === 'number';
}

function isDate(any) {
  return trueTypeOf(any) === 'date';
}

function isString(any) {
  return trueTypeOf(any) === 'string';
}

function isRegExp(any) {
  return trueTypeOf(any) === 'regexp';
}

function isArray(any) {
  return trueTypeOf(any) === 'array';
}

export {
  trueTypeOf,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isObject,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  isString,
  isRegExp,
  isArray,
};

export default {
  trueTypeOf,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isObject,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  isString,
  isRegExp,
  isArray,
};

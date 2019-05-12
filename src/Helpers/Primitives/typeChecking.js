// THANKS TO https://gomakethings.com/true-type-checking-with-vanilla-js/
function trueTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

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

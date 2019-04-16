import trueTypeOf from './trueTypeOf';

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
  isNull,
  isUndefined,
  isNullOrUndefined,
  isObject,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  isString,
  isArray,
  isRegExp,
};

export default {
  isNull,
  isUndefined,
  isNullOrUndefined,
  isObject,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  isString,
  isArray,
  isRegExp,
};

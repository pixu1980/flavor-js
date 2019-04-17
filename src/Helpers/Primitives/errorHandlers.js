import {
  isObject,
  isFunction,
  isBoolean,
  isNumber,
  isDate,
  isString,
  isRegExp,
  isArray,
} from './typeChecking';

function objectErrorHandler(...objs) {
  [...objs].forEach((obj) => {
    if (!isObject(obj)) {
      throw new Error(`${obj} is not an object`);
    }
  });
}

function functionErrorHandler(...fns) {
  [...fns].forEach((fn) => {
    if (!isFunction(fn)) {
      throw new Error(`${fn} is not a function`);
    }
  });
}

function booleanErrorHandler(...blns) {
  [...blns].forEach((bln) => {
    if (!isBoolean(bln)) {
      throw new Error(`${bln} is not a boolean`);
    }
  });
}

function numberErrorHandler(...nbrs) {
  [...nbrs].forEach((nbr) => {
    if (!isNumber(nbr)) {
      throw new Error(`${nbr} is not a number`);
    }
  });
}

function dateErrorHandler(...dts) {
  [...dts].forEach((dt) => {
    if (!isDate(dt)) {
      throw new Error(`${dt} is not a date`);
    }
  });
}

function stringErrorHandler(...strs) {
  [...strs].forEach((str) => {
    if (!isString(str)) {
      throw new Error(`${str} is not a string`);
    }
  });
}

function regexpErrorHandler(...regExps) {
  [...regExps].forEach((regExp) => {
    if (!isRegExp(regExp)) {
      throw new Error(`${regExp} is not a regExp`);
    }
  });
}

function arrayErrorHandler(...arrs) {
  [...arrs].forEach((arr) => {
    if (!isArray(arr)) {
      throw new Error(`${arr} is not an array`);
    }
  });
}

export {
  objectErrorHandler,
  functionErrorHandler,
  booleanErrorHandler,
  numberErrorHandler,
  dateErrorHandler,
  stringErrorHandler,
  regexpErrorHandler,
  arrayErrorHandler,
};

export default {
  objectErrorHandler,
  functionErrorHandler,
  booleanErrorHandler,
  numberErrorHandler,
  dateErrorHandler,
  stringErrorHandler,
  regexpErrorHandler,
  arrayErrorHandler,
};

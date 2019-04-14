/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */
if (!Object.entries) {
  Object.defineProperty(Object, 'entries', {
    configurable: true,
    enumerable: true,
    writable: true,
    value(obj) {
      const ownProps = Object.keys(obj);
      let i = ownProps.length;
      const resArray = new Array(i); // preallocate the Array

      while (i--) {
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      }

      return resArray;
    },
  });
}

if (!Object.hasOwnProperty('getOwnPropertyDescriptors')) {
  Object.defineProperty(Object, 'getOwnPropertyDescriptors', {
    configurable: true,
    enumerable: true,
    writable: true,
    value(obj) {
      return Reflect.ownKeys(obj).reduce((descriptors, key) => {
        return Object.defineProperty(descriptors, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value: Object.getOwnPropertyDescriptor(obj, key),
        });
      }, {});
    },
  });
}

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(target, firstSource) {
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      const to = Object(target);

      for (let i = 1; i < arguments.length; i++) {
        let nextSource = arguments[i];

        if (nextSource === undefined || nextSource === null) {
          // eslint-disable-next-line no-continue
          continue;
        }
        nextSource = Object(nextSource);

        const keysArray = Object.keys(Object(nextSource));

        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    },
  });
}

function convertToDescriptor(descriptor) {
  if (typeof descriptor !== 'object' || descriptor === null) {
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
    const getter = descriptor.get;

    if (typeof getter !== 'function' && typeof getter !== 'undefined') {
      throw new TypeError(`${getter} is not a valid getter`);
    }
  }

  if (Object.prototype.hasOwnProperty.call(descriptor, 'set')) {
    const setter = descriptor.set;

    if (typeof setter !== 'function' && typeof setter !== 'undefined') {
      throw new TypeError(`${setter} is not a valid setter`);
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
    value(obj, properties) {
      if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('obj is not an object');
      }

      properties = Object(properties);

      Object.entries(properties).forEach((property) => {
        Object.defineProperty(obj, property[0], convertToDescriptor(property[1]));
      });

      return obj;
    },
  });
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
    const dontEnums = [
      'toString',
      'toLocaleString',
      'valueOf',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'constructor',
    ];
    const dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      const result = [];
      let prop;
      let i;

      // eslint-disable-next-line no-restricted-syntax
      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

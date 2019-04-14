import {
  isUndefined,
  isObject,
  isString,
  isArray,
} from '../../Helpers/index';

/**
 * @namespace object
 * @description extensions for the JS primitive Object
 */
export default {
  clone: {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const clone = {};

      Object.keys(this).forEach((key) => {
        if (isObject(this[key])) {
          clone[key] = this[key].clone();
        } else {
          clone[key] = this[key];
        }
      });

      return clone;
    },
  },
  merge: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(...objs) {
      const mergeObj = [this, ...objs].reduce((acc, obj) => Object.keys(obj).reduce((a, k) => {
        if (acc.hasOwnProperty(k)) {
          if (isArray(acc[k])) {
            acc[k] = [].concat(acc[k], obj[k]);
          } else if (isObject(acc[k]) && Object.keys(acc[k]).length > 0 && isObject(obj[k]) && Object.keys(obj[k]).length > 0) {
            acc[k].merge(obj[k]);
          } else {
            acc[k] = obj[k];
          }
        } else {
          acc[k] = obj[k];
        }

        return acc;
      }, {}), {});

      return Object.assign(this, mergeObj);
    },
  },
  hasOwnPropertyDeep: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(path) {
      /**
       * Checks if the element exists in an array
       * @param   {Object}  obj The object to check
       * @param   {String}  prop   The property that should be an array
       * @param   {Number}  index  The array index to check on object.prop
       * @returns {Boolean} Returns true if element in array on object.prop is defined
       */
      function hasArray(obj, prop, index) {
        return obj.hasOwnProperty(prop) && (isArray(obj[prop]) || isObject(obj[prop])) && !isUndefined(obj[prop][index]);
      }

      function hasOwnPropertyRecursiveTest(obj, props) {
        if (props.length === 0) {
          return obj;
        }

        let prop = props.shift();
        let arrIndex = null;
        const propHasArrayIndex = prop.match(/(.+?)\[(\d+?|[\\?'"].+?[\\?'"])\]$/);

        if (propHasArrayIndex !== null) {
          [prop, arrIndex] = propHasArrayIndex;

          arrIndex = arrIndex.replace(/[\\"']/g, '');

          if (hasArray(obj, prop, arrIndex)) {
            return hasOwnPropertyRecursiveTest(obj[prop][arrIndex], props);
          }
        } else if (obj.hasOwnProperty(prop)) {
          return hasOwnPropertyRecursiveTest(obj[prop], props);
        }

        return undefined;
      }

      if (!isObject(this)) {
        throw new Error('Invalid object: ', this);
      }

      if (!isString(path)) {
        throw new Error('Invalid path: ', path);
      }

      const brackets = ('root.' + path).match(/\.[^\.]+?\[(\d+?|[\\?'"].+?[\\?'"])\]/g);

      if (!brackets) {
        return hasOwnPropertyRecursiveTest(this, path.split('.'));
      }

      const sanitized = brackets.map((part) => {
        return part.replace(/^\./, '');
      }).reduce((obj, part) => {
        // no symbols yet
        const key = Math.floor(Math.random() * 1E10);

        obj.parts[key] = part;
        obj.path = obj.path.replace(part, key);

        return obj;
      }, {
        path,
        parts: {},
      });

      const parts = sanitized.path.split('.').map((part) => {
        if (sanitized.parts[part]) { return sanitized.parts[part]; }

        return part;
      });

      return hasOwnPropertyRecursiveTest(this, parts);
    },
  },
  omit: {
    enumerable: false,
    configurable: true,
    writable: true,
    value(...paths) {
      const clone = this.clone();

      function unsetPath(obj, path) {
        if (!isObject(obj)) {
          throw new TypeError('expected an object.');
        }
        if (obj.hasOwnProperty(path)) {
          delete obj[path];
          return true;
        }

        if (obj.hasOwnPropertyDeep(path)) {
          const segs = path.split('.');
          let last = segs.pop();
          while (segs.length && segs[segs.length - 1].slice(-1) === '\\') {
            last = segs.pop().slice(0, -1) + '.' + last;
          }
          while (segs.length) obj = obj[path = segs.shift()];
          return (delete obj[last]);
        }
        return true;
      }

      function omitDeep(obj, q) {
        if (isUndefined(obj)) {
          return {};
        }

        if (isArray(obj)) {
          for (let i = 0; i < obj.length; i++) {
            obj[i] = omitDeep(obj[i], paths);
          }
          return obj;
        }

        if (!isObject(obj)) {
          return obj;
        }

        if (isString(paths)) {
          paths = [paths];
        }

        if (!isArray(paths)) {
          return obj;
        }

        paths.forEach((path) => {
          unsetPath(obj, path);
        });

        Object.keys(obj).forEach((key) => {
          if (obj.hasOwnProperty(key)) {
            obj[key] = omitDeep(obj[key], paths);
          }
        });

        return obj;
      }

      [...paths].forEach(omitDeep);

      return clone;
    },
  },
};

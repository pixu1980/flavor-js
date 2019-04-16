/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-bitwise */
if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(search, start) {
      start = (typeof start !== 'number') ? 0 : start;

      if (start + search.length > this.length) {
        return false;
      }

      return this.indexOf(search, start) !== -1;
    },
  });
}

if (!String.prototype.toCamelCase) {
  Object.defineProperty(String.prototype, 'toCamelCase', {
    enumerable: false,
    configurable: true,
    writable: true,
    value() {
      const s = this && this.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
      return s.slice(0, 1).toLowerCase() + s.slice(1);
    },
  });
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  Object.defineProperty(String.prototype, 'padStart', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(targetLength, padString) {
      targetLength >>= 0; //truncate if number, or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');

      if (this.length >= targetLength) {
        return String(this);
      }

      targetLength -= this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return padString.slice(0, targetLength) + String(this);
    },
  });
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  Object.defineProperty(String.prototype, 'padEnd', {
    enumerable: false,
    configurable: true,
    writable: true,
    value(targetLength, padString) {
      targetLength >>= 0; //floor if number or convert non-number to 0;
      padString = String((typeof padString !== 'undefined' ? padString : ' '));

      if (this.length > targetLength) {
        return String(this);
      }

      targetLength -= this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return String(this) + padString.slice(0, targetLength);
    },
  });
}

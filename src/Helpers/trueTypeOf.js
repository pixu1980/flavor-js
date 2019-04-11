// THANKS TO https://gomakethings.com/true-type-checking-with-vanilla-js/
export default function trueTypeOf(obj) {
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

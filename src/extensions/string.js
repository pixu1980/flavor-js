import _ from 'lodash';

/**
 * @namespace string
 * @description the JS native String class
 */
export default {
  native: {
    /**
     * checks if something is a string
     * @example <caption>eg. usage</caption>
     * var s = 'foo';
     *
     * console.log(String.isString(s)); // true
     *
     * console.log(String.isString(2)); // false
     *
     * console.log(String.isString('')); // true
     *
     * console.log(String.isString(null)); // false
     * @memberOf string
     * @method isString
     * @instance
     * @param {string} s - the string to be checked
     * @return {boolean}
     */
    isString(s) {
      return String.prototype.isString.call(s);
    },

    /**
     * checks if a string is a percentage string
     * @example <caption>eg. usage</caption>
     * console.log(String.isPercentage('50,25%')); // true
     *
     * console.log(String.isPercentage('50,25')); // false
     *
     * console.log(String.isPercentage(5)); // false
     * @memberOf string
     * @method parsePercentage
     * @instance
     * @param {string} s - the string to be checked
     * @return {boolean}
     */
    isPercentage(s) {
      return String.prototype.isPercentage.call(s);
    },

    /**
     * checks if a string is a roman number string
     * @example <caption>eg. usage</caption>
     * console.log(String.isRoman('MCMLXXX')); // true
     *
     * console.log(String.isRoman('50,25')); // false
     *
     * console.log(String.isRoman(5)); // false
     * @memberOf string
     * @method isRoman
     * @instance
     * @param {string} s - the string to be checked
     * @return {boolean}
     */
    isRoman(s) {
      return String.prototype.isRoman.call(s);
    },

    /**
     * checks if a string is an url string (URI)
     * @example <caption>eg. usage</caption>
     * console.log(String.isUrl('http://www.google.it')); // true
     *
     * console.log(String.isUrl('50,25')); // false
     *
     * console.log(String.isUrl(5)); // false
     * @memberOf string
     * @method isUrl
     * @instance
     * @param {string} s - the string to check
     * @return {*|boolean}
     */
    isUrl(s) {
      return String.prototype.isUrl.call(s);
    },

    /**
     * checks if a string contains another string
     * @example <caption>eg. usage</caption>
     * console.log(String.contains('FlavorJS is tasty', 'JS is')); // true
     *
     * console.log(String.contains('FlavorJS is tasty', 'js is')); // false
     *
     * console.log(String.contains('FlavorJS is tasty', 'js is', true)); // true
     *
     * console.log(String.contains('flavorJS Is tasty', 'JS is', true)); // true
     *
     * console.log('FlavorJS is tasty'.contains('JS is')); // true
     *
     * console.log('FlavorJS is tasty'.contains('js is')); // false
     *
     * console.log('FlavorJS is tasty'.contains('js is', true)); // true
     *
     * console.log('flavorJS is tasty'.contains('JS is', true)); // true
     * @memberOf string
     * @method contains
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the string value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    contains(s, value, insensitive = false) {
      return String.prototype.contains.call(s, value, insensitive);
    },

    /**
     * checks if a string starts with another string
     * @example <caption>eg. usage</caption>
     * console.log(String.startsWith('FlavorJS is tasty', 'Flavor')); // true
     *
     * console.log(String.startsWith('FlavorJS is tasty', 'flavor')); // false
     *
     * console.log(String.startsWith('FlavorJS is tasty', 'flavor', true)); // true
     *
     * console.log(String.startsWith('flavorJS is tasty', 'Flavor', true)); // true
     *
     * console.log('FlavorJS is tasty'.startsWith('Flavor')); // true
     *
     * console.log('FlavorJS is tasty'.startsWith('flavor')); // false
     *
     * console.log('FlavorJS is tasty'.startsWith('flavor', true)); // true
     *
     * console.log('flavorJS is tasty'.startsWith('Flavor', true)); // true
     * @memberOf string
     * @method startsWith
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    startsWith(s, value, insensitive = false) {
      return String.prototype.contains.call(s, value, insensitive);
    },

    /**
     * checks if a string ends with another string
     * @example <caption>eg. usage</caption>
     * console.log(String.endsWith('FlavorJS is tasty', 'Tasty')); // false
     *
     * console.log(String.endsWith('FlavorJS is tasty', 'tasty')); // true
     *
     * console.log(String.endsWith('FlavorJS is tasty', 'Tasty', true)); // true
     *
     * console.log(String.endsWith('FlavorJS is Tasty', 'tasty', true)); // true
     *
     * console.log(('FlavorJS is tasty').endsWith('Tasty')); // false
     *
     * console.log(('FlavorJS is tasty').endsWith('tasty')); // true
     *
     * console.log(('FlavorJS is tasty').endsWith('Tasty', true)); // true
     *
     * console.log(('flavorJS is Tasty').endsWith('tasty', true)); // true
     * @memberOf string
     * @method endsWith
     * @instance
     * @param {string} s - the string to be checked
     * @param {string} value - the value to check
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {boolean}
     */
    endsWith(s, value, insensitive = false) {
      return String.prototype.contains.call(s, value, insensitive);
    },

    /**
     * stubs a GUID
     * @example <caption>eg. usage</caption>
     * console.log(String.guid()); // 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
     * @memberOf string
     * @method guid
     * @instance
     */
    guid() {
      // Random GUID generator based on .toString(16);
      return Math.random().toString(16).slice(2, 10) + '-' + Math.random().toString(16).slice(2, 6) + '-4' + Math.random().toString(16).slice(2, 5) + '-' + Math.random().toString(16).slice(2, 6) + '-' + Math.random().toString(16).slice(2, 14);

      // Random GUID generator based on regex
      // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      //   var r: Math.random()*16|0, v: c == 'x' ? r : (r&0x3|0x8);
      //   return v.toString(16);
      // });
    },

    /**
     * camel cases a string
     * @example <caption>eg. usage</caption>
     * console.log(String.camelCase('Foo Bar')); // 'fooBar'
     *
     * console.log(String.camelCase('--foo-bar--')); // 'fooBar'
     *
     * console.log(String.camelCase('__FOO_BAR__')); // 'fooBar'
     *
     * console.log('Foo Bar'.camelCase()); // 'fooBar'
     *
     * console.log('--foo-bar--'.camelCase()); // 'fooBar'
     *
     * console.log('__FOO_BAR__'.camelCase()); // 'fooBar'
     * @memberOf string
     * @method camelCase
     * @instance
     * @param {string} s - the string
     * @return {string}
     */
    camelCase(s) {
      return String.prototype.camelCase.call(s);
    },

    /**
     * capitalizes a string
     * @example <caption>eg. usage</caption>
     * console.log(String.capitalize('we\'re happy to use flavorJS')); // Were Happy To Use Flavor JS
     *
     * console.log(String.capitalize('we\'re happy to use flavorJS')); // We're happy to use flavorjs
     *
     * console.log(String.capitalize('flavorJS')); // Flavorjs
     * @memberOf string
     * @method capitalize
     * @instance
     * @param {string} s
     * @return {string}
     */
    capitalize(s) {
      return String.prototype.capitalize.call(s);
    },

    /**
     * decodes an URI string
     * @example <caption>eg. usage</caption>
     * console.log(String.decodeURI('https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com')); // 'https://flavorjs.io/page.html?name=black mirror&email=username@example.com'
     *
     * console.log(('https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com').decodeURI()); // 'https://flavorjs.io/page.html?name=black mirror&email=username@example.com'
     * @memberOf string
     * @method decodeURI
     * @instance
     * @param {string} s - the URI string
     * @return {string}
     */
    decodeURI(s) {
      return String.prototype.decodeURI.call(s);
    },

    /**
     * encodes an URI string
     * @example <caption>eg. usage</caption>
     * console.log(String.encodeURI('https://flavorjs.io/page.html?name=black mirror&email=username@example.com')); // 'https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com'
     *
     * console.log(('https://flavorjs.io/page.html?name=black mirror&email=username@example.com').encodeURI()); // 'https%3A%2F%2Fflavorjs.io%2Fpage.html%3Fname%3Dblack%20mirror%26email%3Dusername%40example.com'
     * @memberOf string
     * @method encodeURI
     * @instance
     * @param {string} s - the URI string
     * @return {string}
     */
    encodeURI(s) {
      return String.prototype.encodeURI.call(s);
    },

    /**
     * escapes an HTML code string
     * @example <caption>eg. usage</caption>
     * console.log(String.escapeHTML('<div>flavor & js = tasty</div>')); // '&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;'
     *
     * console.log(('<div>flavor & js = tasty</div>').escapeHTML()); // '&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;'
     * @memberOf string
     * @method escapeHTML
     * @instance
     * @param {string} s - the HTML code string
     * @return {string}
     */
    escapeHTML(s) {
      return String.prototype.escapeHTML.call(s);
    },

    /**
     * extracts a domain from an URI string with level parameter
     * @example <caption>eg. usage</caption>
     * console.log(String.extractDomain('http://www.google.com')); // google.com
     *
     * console.log(String.extractDomain('http://www.google.com', )); // google.com
     * @memberOf string
     * @method extractDomain
     * @instance
     * @param {string} s - the URI string
     * @param {number} level - the domain level to extract, starting from right obviously
     * @param {boolean} excludeWww - true if you want to exclude the www. from che extraction
     * @return {*}
     */
    extractDomain(s, level = 3, excludeWww = false) {
      return String.prototype.extractDomain.call(s, level, excludeWww);
    },

    /**
     * extracts the file extension from a filename/path string
     * @example <caption>eg. usage</caption>
     * console.log(String.extractFileExtension('file.jpg')); // 'jpg'
     *
     * console.log(String.extractFileExtension('file')); // ''
     *
     * console.log(String.extractFileExtension(1)); // 1
     *
     * console.log(('file.jpg').extractFileExtension()); // 'jpg'
     *
     * console.log(('file').extractFileExtension()); // ''
     *
     * console.log((1).extractFileExtension()); // throws error
     * @memberOf string
     * @method extractFileExtension
     * @instance
     * @param s
     * @return {*}
     */
    extractFileExtension(s) {
      if (String.isString(s)) {
        return String.prototype.extractFileExtension.call(s);
      }

      return s;
    },

    /**
     * extracts the query string object from an URI string
     * @example <caption>eg. usage</caption>
     * @example <caption>eg. usage</caption>
     * console.log(String.extractQueryString('https://flavorjs.io/page.html?name=black mirror&email=username@example.com')); // {name: 'black mirror', email: 'username@example.com'}
     *
     * console.log(('https://flavorjs.io/page.html?name=black mirror&email=username@example.com').extractQueryString()); // {name: 'black mirror', email: 'username@example.com'}
     * @memberOf string
     * @method extractQueryString
     * @instance
     * @param {string} s - the URI string
     * @return {object}
     */
    extractQueryString(s) {
      return String.prototype.extractQueryString.call(s);
    },

    /**
     * pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
     * @example <caption>eg. usage</caption>
     * console.log(String.pad('5', 5)); // '  5  '
     *
     * console.log(String.pad('5', 5, '0')); // '00500'
     *
     * console.log(String.pad(4, 5, '01')); // '01401'
     *
     * console.log(String.pad(true, 5, '01')); // '1true'
     *
     * console.log(String.pad(4, 5, '01')); // '01401'
     *
     * console.log(String.pad(new Date(), 50, '--') // '-----Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)-----'
     * @memberOf string
     * @method pad
     * @instance
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    pad(s, length, chars) {
      return String.prototype.pad(s, length, chars);
    },

    /**
     * pads left a string
     * @example <caption>eg. usage</caption>
     * console.log(String.padLeft('5', 4)); // '   5'
     *
     * console.log(String.padLeft('5', 4, '0')); // '0005'
     *
     * console.log(String.padLeft('5', 5, '01')); // '01015'
     *
     * console.log(String.padLeft(5, 4, '0')); // '0005'
     *
     * console.log(String.padLeft(true, 5, '0')); // '0true'
     *
     * console.log(String.padLeft(new Date(), 50, '--') // '----------Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)'
     * @memberOf string
     * @method padLeft
     * @instance
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    padLeft(s, length, chars) {
      return String.prototype.padLeft.call(s, length, chars);
    },

    /**
     * pads right a string
     * @example <caption>eg. usage</caption>
     * console.log(String.padRight('5', 4)); // '5   '
     *
     * console.log(String.padRight('5', 4, '0')); // '5000'
     *
     * console.log(String.padRight('5', 5, '01')); // '50101'
     *
     * console.log(String.padRight(5, 4, '0')); // '5000'
     *
     * console.log(String.padRight(true, 5, '0')); // 'true0'
     *
     * console.log(String.padRight(new Date(), 50, '--') // 'Tue Apr 04 2017 17:54:40 GMT+0000 (CEST)----------'
     * @memberOf string
     * @method padRight
     * @instance
     * @param {string} s - the string to be padded
     * @param {number} length - the string length you need
     * @param {string} chars - the char/chars to be used to pad the string
     * @return {string}
     */
    padRight(s, length, chars) {
      return String.prototype.padRight.call(s, length, chars);
    },

    /**
     * parses a percentage string to a number
     * @example <caption>eg. usage</caption>
     * console.log(String.parsePercentage('50,25%')); // 50.25
     *
     * console.log(String.parsePercentage('50,25')); // '50,25'
     *
     * console.log(String.parsePercentage(5)); // 5
     * @memberOf string
     * @method parsePercentage
     * @instance
     * @param {string} s - the string to be parsed
     * @return {number}
     */
    parsePercentage(s) {
      return String.prototype.parsePercentage.call(s);
    },

    /**
     * replaces all occurrences of the needle inside the haystack with replacement
     * @example <caption>eg. usage</caption>
     * console.log(String.replaceAll('FlavorJS is really really tasty', 'really', '')); // 'FlavorJS is   tasty'
     * @memberOf string
     * @method replaceAll
     * @instance
     * @param {string} haystack - the haystack string
     * @param {string} needle - the needle string
     * @param {string} [replacement=''] - the replacement string
     * @param {boolean} [insensitive=false] - true if you want to do an insensitive check
     * @return {string}
     */
    replaceAll(haystack, needle, replacement = '', insensitive = false) {
      return String.prototype.replaceAll.call(haystack, needle, replacement, insensitive);
    },

    /**
     * slugifies any string
     * @example <caption>eg. usage</caption>
     * console.log(String.slugify('it\'s so good to be FlavorJS')); // 'its-so-good-to-be-flavor-js'
     *
     * console.log(String.slugify('it\'s so gòòd - to_be | FlavorJS')); // 'its-so-good-to-be-flavor-js'
     *
     * console.log(String.slugify('it\'s so gòòd - to_be | FlavorJS', false)); // 'itssogoodtobeflavorjs'
     *
     * console.log('it\'s so good to be FlavorJS'.slugify()); // 'its-so-good-to-be-flavor-js'
     *
     * console.log('it\'s so gòòd - to_be | FlavorJS'.slugify()); // 'its-so-good-to-be-flavor-js'
     *
     * console.log('it\'s so gòòd - to_be | FlavorJS'.slugify(false)); // 'itssogoodtobeflavorjs'
     * @memberOf string
     * @method slugify
     * @instance
     * @param {string} s - the string
     * @param {boolean} [dashed=true] - false if you don't want dashed in the resulting string
     * @return {string}
     */
    slugify(s, dashed = true) {
      return String.prototype.slugify.call(s, dashed);
    },

    /**
     * strips all html tags from an html code string
     * @example <caption>eg. usage</caption>
     * console.log(String.stripTags('<div>flavorJS</div>')); // 'flavorJS'
     *
     * console.log(String.stripTags('flavorJS')); // 'flavorJS'
     * @memberOf string
     * @method stripTags
     * @instance
     * @param {string} s - the string
     * @return {string}
     */
    stripTags(s) {
      return String.prototype.stripTags.call(s);
    },

    /**
     * unescapes an HTML code string
     * @example <caption>eg. usage</caption>
     * console.log(String.unescapeHTML('&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;')); // '<div>flavor & js = tasty</div>'
     *
     * console.log(('&lt;div&gt;flavor &amp; js = tasty&lt;/div&gt;').unescapeHTML()); // '<div>flavor & js = tasty</div>'
     * @memberOf string
     * @method escapeHTML
     * @instance
     * @param {string} s - the HTML code string
     * @return {string}
     */
    unescapeHTML(s) {
      return String.prototype.unescapeHTML.call(s);
    },

    /**
     * converts a string to a number
     * @example <caption>eg. usage</caption>
     * console.log(String.toInt('550')); // 550
     * @memberOf string
     * @method toInt
     * @instance
     * @param {string} s - the string
     * @return {number}
     */
    toInt(s) {
      return String.prototype.toInt.call(s);
    },

    /**
     * transforms a string in an array of chars/words
     * @example <caption>eg. usage</caption>
     * console.log(String.toArray('FlavorJS')); // ['F','l','a','v','o','r','J','S']
     *
     * console.log(String.toArray('FlavorJS, is really, really tasty', ',')); // ['FlavorJS',' is really',' really tasty']
     *
     * console.log(String.toArray('FlavorJS, is really, really tasty', ',', 2)); // ['FlavorJS',' is really']
     *
     * console.log('FlavorJS'.toArray()); // ['F','l','a','v','o','r','J','S']
     *
     * console.log('FlavorJS, is really, really tasty'.toArray(',')); // ['FlavorJS',' is really',' really tasty']
     *
     * console.log('FlavorJS, is really, really tasty'.toArray(',', 2)); // ['FlavorJS',' is really']
     * @memberOf string
     * @method toArray
     * @instance
     * @param {string} s - the string
     * @param {string} [separator=''] - the separator to use for the splitting
     * @param {number} [limit=null] - the limit of items to extract starting from left
     * @return {array}
     */
    toArray(s, separator = '', limit = null) {
      return String.prototype.toArray.call(s, separator, limit || undefined);
    },
  },
  prototype: {
    /**
     * @inheritDoc string.isString
     */
    isString() {
      return _.isString(this);
    },

    /**
     * @inheritDoc string.isPercentage
     */
    isPercentage() {
      return /^\d+(\.\d+)?%$/.test(this);
    },

    /**
     * @inheritDoc string.isRoman
     */
    isRoman() {
      return !!Number.fromRoman(this);
    },

    /**
     * @inheritDoc string.isUrl
     */
    isUrl() {
      return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(this);
    },

    /**
     * @inheritDoc string.contains
     */
    contains(value, insensitive = false) {
      return (new RegExp(_.escapeRegExp(value), 'm' + (!!insensitive ? 'i' : ''))).test(this);
    },

    /**
     * @inheritDoc string.startsWith
     */
    startsWith(value, insensitive = false) {
      return new RegExp('^' + _.escapeRegExp(value), 'm' + (!!insensitive ? 'i' : '')).test(this);
    },

    /**
     * @inheritDoc string.endsWith
     */
    endsWith(value, insensitive = false) {
      return new RegExp(_.escapeRegExp(value) + '$', 'm' + (!!insensitive ? 'i' : '')).test(this);
    },

    /**
     * @inheritDoc string.camelCase()
     */
    camelCase() {
      return _.camelCase(this);
    },

    /**
     * @inheritDoc string.capitalize
     */
    capitalize() {
      return _.capitalize(this);
    },

    /**
     * @inheritDoc string.replaceAll
     */
    replaceAll(needle, replacement = '', insensitive = false) {
      return this.replace(new RegExp(_.escapeRegExp(needle), 'mg' + (!!insensitive ? 'i' : '')), replacement);
    },

    /**
     * @inheritDoc string.encodeURI
     */
    encodeURI() {
      return encodeURIComponent(this);
    },

    /**
     * @inheritDoc string.decodeURI
     */
    decodeURI() {
      return decodeURIComponent(this);
    },

    /**
     * @inheritDoc string.escapeHTML
     */
    escapeHTML() {
      return _.escape(this);
    },

    /** TODO: integrate also this escapeASCII to html ascii number codes (eg. ' => &#39;)
    //escapeASCII() {
    //  return this.replace(/([!"#$%&'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~])/gi, (match, numStr) => {
    //    return '&#' + String.prototype.charCodeAt.call(numStr, 0) + ';';
    //  });
    //},
     */

    /**
     * @inheritDoc string.escapeHTML
     */
    unescapeHTML() {
      return _.unescape(this);
    },

    /** TODO: integrate also this unescapeASCII from html ascii number codes (eg. &#39; => ')
    //unescapeASCII() {
    //  return this.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
    //    const num = parseInt(numStr, 10); // read num as normal number
    //    return String.fromCharCode(num);
    //  });
    //},
    */

    /**
     * @inheritDoc string.extractDomain
     */
    extractDomain(level = 3, excludeWww = false) {
      let domain = this;

      // find & remove protocol (http, ftp, etc.) and get domain
      domain = domain.split('/')[(domain.indexOf('://') > -1 ? 2 : 0)];

      // find & remove port number
      domain = domain.split(':')[0];

      if (!!excludeWww) {
        domain = domain.replaceAll('www.', '');
      }

      const domainArr = domain.split('.');
      return domainArr.slice(domainArr.length - level).join('.');
    },

    /**
     * @inheritDoc string.extractQueryString
     */
    extractQueryString() {
      const queryStringObject = {};

      if (this.contains('?')) {
        const queryString = this.split('?')[1];
        const queryStringParams = queryString.split('&');
        queryStringParams.each((param) => {
          param = param.split('=');
          queryStringObject[param[0]] = param[1];
        });
      }

      return queryStringObject;
    },

    /**
     * @inheritDoc string.slugify
     */
    slugify(dashed = true) {
      // TODO: non lodash dependent code
      //const slug = this.toString().toLowerCase()
      //                         .replace(/\s+/g, dashed ? '-' : '') // Replace spaces with -
      //                         .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      //                         .replace(/\-\-+/g, dashed ? '-' : '') // Replace multiple - with single -
      //                         .replace(/^-+/, '') // Trim - from start of text
      //                         .replace(/-+$/, ''); // Trim - from end of text
      //
      //return dashed ? slug : slug.replaceAll('-', '');

      const slug = _.kebabCase(this);
      return !!dashed ? slug : slug.replaceAll('-', '');
    },

    /**
     * @inheritDoc string.extractFileExtension
     */
    extractFileExtension() {
      return this.substring(this.lastIndexOf('.') + 1).toLowerCase();
    },

    /**
     * @inheritDoc string.stripTags
     */
    stripTags() {
      const div = document.createElement('div');
      div.innerHTML = this;
      return div.textContent;
    },

    /** TODO: integrate faker.js library to lorem strings
    // lorem(count, units) {
    //   return holderIpsum[units](count);
    // },
    */

    /**
     * @inheritDoc string.pad
     */
    pad(length, chars) {
      return _.pad(this, length, chars);
    },

    /**
     * @inheritDoc string.padLeft
     */
    padLeft(length, chars) {
      return _.padStart(this, length, chars);
    },

    /**
     * @inheritDoc string.padRight
     */
    padRight(length, chars) {
      return _.padEnd(this, length, chars);
    },

    /**
     * @inheritDoc string.parsePercentage
     */
    parsePercentage() {
      if (this.isPercentage()) {
        return parseFloat(this) / 100.00;
      }

      return this;
    },

    /**
     * @inheritDoc string.toInt
     */
    toInt() {
      return Number.parse(this);
    },

    /**
     * @inheritDoc string.toArray
     */
    toArray(separator = '', limit = null) {
      return _.split(this, separator, limit || undefined);
    },
  },
};

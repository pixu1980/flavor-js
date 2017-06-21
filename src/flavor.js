import _ from 'lodash';

import CoreExt from './extensions/core';
import LodashExt from './extensions/lodash';
import ObjectExt from './extensions/object';
import FunctionExt from './extensions/function';
import BooleanExt from './extensions/boolean';
import NumberExt from './extensions/number';
import DateExt from './extensions/date';
import StringExt from './extensions/string';
import ArrayExt from './extensions/array';

import release from '../release';

/**
 * constructs FlavorJS class & extends the js natives
 * @class FlavorJS
 * @classdesc FlavorJS the definitive JS natives chainable extensions methods
 * @public
 */
export default class FlavorJS {
  constructor() {
    this.init();
  }

  /**
   * safe js native prototype extension using Object.defineProperty
   * @memberOf FlavorJS
   * @method extendPrototypeProperty
   * @instance
   * @param {prototype|object} proto - the prototype/object to extend
   * @param {string} prop - the name of the property to be defined or modified
   * @param {*} val - val to be used as value in the descriptor for the property, can be any kind of native (number, function, etc...) or what you want
   * @param {object} [options={}] - options to be used as parameters in the descriptor for the property<br>
   * possible options are (source documentation from <a href="https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/object/defineProperty" target="_blank">Javascript|MDN docs</a>)<br>
   * @param {boolean} [options.configurable=true] configurable - true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding Object.
   * @param {boolean} [options.enumerable=false] enumerable - true if and only if this property shows up during enumeration of the properties on the corresponding Object.
   * @param {boolean} [options.writable=true] writable - true if and only if the value associated with the property may be changed with an assignment operator.
   * @param {function} [options.get=undefined] get - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.<br>
   * for example...<br>
   * <pre>
   * function ClassName() {
   *   var privateProp = null;
   *
   *   Object.defineProperty(this, 'publicProp', {
   *     get: function() {
   *       return privateProp;
   *     }
   *   });
   * }
   * </pre>
   * @param {function} [options.set=undefined] set - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.<br>
   * for example...<br>
   * <pre>
   * function ClassName() {
   *   var privateProp = null;
   *
   *   Object.defineProperty(this, 'publicProp', {
   *     set: function(value) {
   *       privateProp = value;
   *     }
   *   });
   * }
   * </pre>
   */
  extendPrototypeProperty(proto, prop, val, options = {}) {
    Object.defineProperty(proto, prop, {
      value: val,
      writable: true,
      configurable: true,
      enumerable: false,
    });
  }

  /**
   * merges all keys in extend plain object to the prototype (
   * @memberOf FlavorJS
   * @method extendPrototype
   * @instance
   * @param {prototype|object} proto - the prototype/object to extend
   * @param {object} extend - the extend object to be merged in prototype
   */
  extendPrototype(proto, extend) {
    _.forOwn(extend, (value, key) => {
      this.extendPrototypeProperty(proto, key, value);
    });
  }

  /**
   * extendLodash
   * @memberOf FlavorJS
   * @method extendLodash
   * @instance
   */
  extendLodash() {
    _.mixin(LodashExt);
  }

  /**
   * extendObject
   * @memberOf FlavorJS
   * @method extendObject
   * @instance
   */
  extendObject() {
    this.extendPrototype(Object.prototype, ObjectExt.prototype);
    this.extendPrototype(Object, ObjectExt.native);
  }

  /**
   * extendFunction
   * @memberOf FlavorJS
   * @method extendFunction
   * @instance
   */
  extendFunction() {
    this.extendPrototype(Function.prototype, FunctionExt.prototype);
    this.extendPrototype(Function, FunctionExt.native);
  }

  /**
   * extendBoolean
   * @memberOf FlavorJS
   * @method extendBoolean
   * @instance
   */
  extendBoolean() {
    this.extendPrototype(Boolean.prototype, BooleanExt.prototype);
    this.extendPrototype(Boolean, BooleanExt.native);
  }

  /**
   * extendNumber
   * @memberOf FlavorJS
   * @method extendNumber
   * @instance
   */
  extendNumber() {
    this.extendPrototype(Number.prototype, NumberExt.prototype);
    this.extendPrototype(Number, NumberExt.native);
  }
  /**
   * extendDate
   * @memberOf FlavorJS
   * @method extendDate
   * @instance
   */
  extendDate() {
    this.extendPrototype(Date.prototype, DateExt.prototype);
    this.extendPrototype(Date, DateExt.native);
  }

  /**
   * extendString
   * @memberOf FlavorJS
   * @method extendString
   * @instance
   */
  extendString() {
    this.extendPrototype(String.prototype, StringExt.prototype);
    this.extendPrototype(String, StringExt.native);
  }

  /**
   * extendArray
   * @memberOf FlavorJS
   * @method extendArray
   * @instance
   */
  extendArray() {
    this.extendPrototype(Array.prototype, ArrayExt.prototype);
    this.extendPrototype(Array, ArrayExt.native);
  }

  /**
   * initialize all
   * @memberOf FlavorJS
   * @method init
   * @instance
   */
  init() {
    this.extendLodash();
    this.extendObject();
    this.extendFunction();
    this.extendBoolean();
    this.extendNumber();
    this.extendDate();
    this.extendString();
    this.extendArray();

    const flavorJSStatus = {
      initialized: true,
      version: release.version,
      build: release.build,
    };

    Object.inherit(this, CoreExt, flavorJSStatus);

    console.log('FlavorJS initialized', flavorJSStatus);
  }
}

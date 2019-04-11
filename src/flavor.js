import './Core/index';
import Extensions from './Extensions/index';

/**
 * constructs Flavor class & extends the js natives
 * @class Flavor
 * @classdesc Flavor the definitive JS natives chainable extensions methods
 * @public
 */
export default class Flavor {
  constructor() {
    this.init();
  }

  /**
   * safe js native prototype extension using Object.defineProperty
   * @memberOf Flavor
   * @method extendProp
   * @instance
   * @param {prototype|object} target - the prototype/object to extend
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
  extendProp(target, prop, val, options = {}) {
    Object.defineProperty(target, prop, {
      value: val,
      writable: options.writable || true,
      configurable: options.configurable || true,
      enumerable: options.enumerable || false,
    });
  }

  /**
   * merges all keys in extend plain object to the prototype (
   * @memberOf Flavor
   * @method extendProps
   * @instance
   * @param {prototype|object} target - the prototype/object to extend
   * @param {object} extensions - the extend object to be merged in prototype
   */
  extendProps(target, extensions) {
    Object.defineProperties(target, extensions);
  }

  /**
   * extendObject
   * @memberOf Flavor
   * @method extendObject
   * @instance
   */
  extendObject() {
    this.extendProps(Object.prototype, Extensions.Object.prototype);
    this.extendProps(Object, Extensions.Object.native);
  }

  /**
   * extendFunction
   * @memberOf Flavor
   * @method extendFunction
   * @instance
   */
  extendFunction() {
    this.extendProps(Function.prototype, Extensions.Function.prototype);
    this.extendProps(Function, Extensions.Function.native);
  }

  /**
   * extendBoolean
   * @memberOf Flavor
   * @method extendBoolean
   * @instance
   */
  extendBoolean() {
    this.extendProps(Boolean.prototype, Extensions.Boolean.prototype);
    this.extendProps(Boolean, Extensions.Boolean.native);
  }

  /**
   * extendNumber
   * @memberOf Flavor
   * @method extendNumber
   * @instance
   */
  extendNumber() {
    this.extendProps(Number.prototype, Extensions.Number.prototype);
    this.extendProps(Number, Extensions.Number.native);
  }

  /**
   * extendDate
   * @memberOf Flavor
   * @method extendDate
   * @instance
   */
  extendDate() {
    this.extendProps(Date.prototype, Extensions.Date.prototype);
    this.extendProps(Date, Extensions.Date.native);
  }

  /**
   * extendString
   * @memberOf Flavor
   * @method extendString
   * @instance
   */
  extendString() {
    this.extendProps(String.prototype, Extensions.String.prototype);
    this.extendProps(String, Extensions.String.native);
  }

  /**
   * extendArray
   * @memberOf Flavor
   * @method extendArray
   * @instance
   */
  extendArray() {
    this.extendProps(Array.prototype, Extensions.Array.prototype);
    this.extendProps(Array, Extensions.Array.native);
  }

  /**
   * initialize all
   * @memberOf Flavor
   * @method init
   * @instance
   */
  init() {
    this.extendObject();
    this.extendFunction();
    this.extendBoolean();
    this.extendNumber();
    this.extendDate();
    this.extendString();
    this.extendArray();

    console.warn('FlavorJS initialized');
  }
}

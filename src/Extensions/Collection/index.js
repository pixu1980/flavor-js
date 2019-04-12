/**
 * @namespace array
 * @description extensions for the JS primitive Array
 */
import prototype from './prototype';
import native from './native';

/* eslint-disable no-useless-constructor */
class Collection extends Array {
  constructor(...items) {
    super(...items);
  }
}

if(!!window) {
  window.Collection = Collection;
}

export {
  prototype,
  native,
};

export default {
  prototype,
  native,
};

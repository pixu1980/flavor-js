/**
 * @namespace collection
 * @description extensions for the JS Collection
 */
export default {
  //TODO: implement rest arrays difference
  difference: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr, symmetric = true) {
      if (!!symmetric) {
        return Array.prototype.unique.call([
          ...this.filter(item => !arr.includes(item)),
          ...arr.filter(item => !this.includes(item)),
        ]);
      }

      return this.filter(item => !arr.includes(item));
    },
  },
  // //TODO: implement rest arrays intersection
  intersection: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(arr) {
      return this.filter(item => arr.includes(item));
    },
  },
  contains: {
    configurable: true,
    enumerable: false,
    writable: true,
    value(any, all = false) {
      if (Array.isArray(any)) {
        if (!all) {
          return Array.prototype.intersection.call(this, any).length > 0;
        }

        return Array.prototype.difference.call(this, any).length === 0;
      }

      return Array.prototype.includes.call(this, any);
    },
  },
  unique: {
    configurable: true,
    enumerable: false,
    writable: true,
    value() {
      return [...new Set(this)];
    },
  },
  // sortBy(propNames, propDirections) {
  //   if (String.isString(propNames)) {
  //     propNames = [propNames];
  //   }

  //   if (!!propDirections) {
  //     if (String.isString(propDirections)) {
  //       propDirections = [propDirections];
  //     }
  //   } else {
  //     propDirections = propNames.map(() => {
  //       return 'asc';
  //     });
  //   }

  //   return _.orderBy(this, propNames, propDirections);
  // },

  // deepSortBy(propNames, propDirections = null, childrenPropName = 'children') {
  //   if (String.isString(propNames)) {
  //     propNames = [propNames];
  //   }

  //   if (!!propDirections) {
  //     if (String.isString(propDirections)) {
  //       propDirections = [propDirections];
  //     }
  //   } else {
  //     propDirections = propNames.map(() => {
  //       return 'asc';
  //     });
  //   }

  //   return _.deepOrderBy(this, propNames, propDirections, childrenPropName);
  // },

  // filterBy(propNames, propValues) {
  //   let predicate = null;

  //   if (Function.isFunction(propNames)) {
  //     predicate = propNames;
  //     return _.filter(this, predicate);
  //   } else if (Array.isArray(propValues)) {
  //     return _.filterByValues(this, propNames, propValues);
  //   }

  //   predicate = {};
  //   predicate[propNames] = propValues;
  //   return _.filter(this, predicate) || [];
  // },

  // pull(item) {
  //   return _.pull(this, item);
  // },

  // pullBy(propName, propValue) {
  //   if (Array.isArray(propName) && _.isFunction(propValue)) {
  //     const values = propName;
  //     const comparator = propValue;
  //     return _.pullAllByComparator(this, values, comparator);
  //   }

  //   const predicate = {};
  //   predicate[propName] = propValue;
  //   return _.pullAllBy(this, [predicate]);
  // },

  // findBy(propName, propValue = null, reverse = false) {
  //   let predicate = null;

  //   if (Function.isFunction(propName) || Object.isObject(propName)) {
  //     predicate = propName;
  //   } else if (String.isString(propName)) {
  //     predicate = {};
  //     predicate[propName] = propValue;
  //   }

  //   if (predicate) {
  //     if (reverse) {
  //       return _.findLast(this, predicate);
  //     }

  //     return _.find(this, predicate);
  //   }

  //   return null;
  // },

  // deepFindBy(propName, propValue = null, childrenPropName = 'children') {
  //   return _.deepFindBy(this, propName, propValue, childrenPropName);
  // },

  // indexBy(propName, propValue, reverse = false) {
  //   let predicate = null;

  //   if (Function.isFunction(propName) || Object.isObject(propName)) {
  //     predicate = propName;
  //   } else if (String.isString(propName)) {
  //     predicate = {};
  //     predicate[propName] = propValue;
  //   }

  //   if (predicate) {
  //     if (reverse) {
  //       return _.findLastIndex(this, predicate);
  //     }

  //     return _.findIndex(this, predicate);
  //   }

  //   return null;
  // },

  // containsBy(propName, propValue) {
  //   return this.findBy(propName, propValue) !== undefined;
  // },

  // countBy(propName, propValue, falseValues) {
  //   let predicate = null;

  //   if (Function.isFunction(propName) || Object.isObject(propName)) {
  //     predicate = propName;
  //   } else if (String.isString(propName)) {
  //     predicate = {};
  //     predicate[propName] = propValue;
  //   }

  //   if (!!predicate) {
  //     return _.countBy(this, predicate)[!!falseValues ? 'false' : 'true'];
  //   }

  //   return 0;
  // },

  // union(...arrays) {
  //   return _.unionWith(this, ...arrays, _.isEqual);
  // },

  // random(weightField = null, valueField = null) {
  //   if (!!weightField) {
  //     return this.map((item) => {
  //       return _.times(item[weightField || 'weight'], () => {
  //         if (!!valueField) {
  //           return item[valueField || 'value'];
  //         }

  //         return _.omit(item, weightField);
  //       });
  //     }).flatten().shuffle().first();
  //   }

  //   return _.sample(this);
  // },

  // each(iteratee, reverse = false) {
  //   if (!!reverse) {
  //     return _.eachRight(this, iteratee);
  //   }

  //   return _.each(this, iteratee);
  // },

  // first(propName, propValue) {
  //   let a = this;

  //   if (!!propName) {
  //     a = this.filterBy(propName, propValue);
  //   }

  //   return _.first(a);
  // },

  // last(propName, propValue) {
  //   let a = this;

  //   if (!!propName) {
  //     a = this.filterBy(propName, propValue);
  //   }

  //   return _.last(a);
  // },

  // sum(propName, startValue = 0) {
  //   let predicate = null;

  //   if (Function.isFunction(propName)) {
  //     predicate = propName;
  //   } else {
  //     predicate = (acc, item) => {
  //       return acc + item[propName];
  //     };
  //   }

  //   return _.reduce(this, predicate, startValue);
  // },

  // deepMap(childrenPropName = 'children', iteratee) {
  //   return _.deepMap(this, childrenPropName, iteratee);
  // },

  // lorem(items, model = false) {
  //   return Number.times(items, (i) => {
  //     if (!!model) {
  //       return Function.isFunction(model) ? model(i) : model;
  //     }

  //     return i;
  //   });
  // },

  // flatten(deep) {
  //   if (!!deep) {
  //     if (Number.isNumber(deep)) {
  //       return _.flattenDepth(this, deep);
  //     } else if (Boolean.isBoolean(deep)) {
  //       return _.flattenDeep(this);
  //     }
  //   }

  //   return _.flatten(this);
  // },

  // shuffle() {
  //   return _.shuffle(this);
  // },

  // split(n = 0) {
  //   return _.chunk(this, n);
  // },

  // reverse(clone = false) {
  //   if (!!clone) {
  //     return _.reverse(_.clone(this));
  //   }

  //   return _.reverse(this);
  // },

  // tail() {
  //   return _.tail(this);
  // },

  // cut() {
  //   return _.initial(this);
  // },

  // clone() {
  //   return [...this];
  // },

  // maxBy(propName = null) {
  //   if (propName) {
  //     return _.maxBy(this, propName);
  //   }

  //   return null;
  // },
};

import FlavorJS from './flavor';

class FlavorJSInitializer {
  constructor() {
    let flavorJS = null;

    try {
      if (!!window) {
        if (!window.ƒ) {
          flavorJS = new FlavorJS();
          window.ƒ = window.FlavorJS = flavorJS;
        } else {
          flavorJS = window.ƒ;
        }
      }
    } catch (e) {
      flavorJS = new FlavorJS();
    }

    return flavorJS;
  }
}

export default new FlavorJSInitializer();

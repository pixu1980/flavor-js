import FlavorJS from './flavor';

let flavorJS;

if (!!window) {
  if (!window.ƒ) {
    flavorJS = new FlavorJS();
    window.ƒ = window.FlavorJS = flavorJS;
  } else {
    flavorJS = window.ƒ;
  }
}

const flavorJSinstance = flavorJS;

export default flavorJSinstance;

import FlavorJS from './flavor';

((global, factory) => {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(global);
  }  // Pass this if window is not defined yet
})(typeof window !== 'undefined' ? window : this, (window) => {
  let flavorJS;

  if (!window.ƒ) {
    flavorJS = new FlavorJS();
    window.ƒ = window.FlavorJS = flavorJS;
  } else {
    flavorJS = window.ƒ;
  }

  return flavorJS;
});

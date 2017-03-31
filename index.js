import FlavorJS from './src/Flavor';

if(!window.ƒ) {
  window.ƒ = window.FlavorJS = new FlavorJS();
}

module.exports = {
  ƒ: window.ƒ,
  FlavorJS: window.FlavorJS,
};


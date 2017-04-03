import FlavorJS from './flavor';

if(!window.ƒ) {
  window.ƒ = window.FlavorJS = new FlavorJS();
}

export default {
  ƒ: window.ƒ,
  FlavorJS: window.FlavorJS,
};


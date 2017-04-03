import FlavorJS from './flavor';

const flavorJS = new FlavorJS();

if(!window.ƒ) {
  window.ƒ = window.FlavorJS = flavorJS;
}

export default flavorJS;

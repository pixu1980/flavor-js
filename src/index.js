/*global Window*/

import FlavorJS from './flavor';

const flavorJSInitialized = (!!window && window instanceof Window && !!window.FlavorJS && !!window.ƒ);

const flavorJS = flavorJSInitialized ? window.FlavorJS : new FlavorJS();

window.FlavorJS = flavorJS;
window.ƒ = flavorJS;

export default flavorJS;

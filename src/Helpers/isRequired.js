// THANKS TO https://davidwalsh.name/javascript-tricks
export default function isRequired(paramName = 'param', paramType = 'unknown') {
  throw new Error(`${paramName} type is not ${paramType} and is mandatory`);
}

# {{name}}{{#travis_url}} [![Build Status]({{travis_url}}.png?branch=master)]({{travis_url}}){{/travis_url}}

{{#nodeico_badge}}[![NPM](https://nodei.co/npm/{{name}}.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/{{name}}/){{/nodeico_badge}}

[![Build Status](https://travis-ci.org/blackmirror1980/flavor-js.svg?branch=master)](https://travis-ci.org/blackmirror1980/flavor-js)

[![Coverage Status](https://coveralls.io/repos/github/blackmirror1980/flavor-js/badge.svg?branch=master)](https://coveralls.io/github/blackmirror1980/flavor-js?branch=master)

[![GitHub issues](https://img.shields.io/github/issues/blackmirror1980/flavor-js.svg?style=plastic)](https://github.com/blackmirror1980/flavor-js/issues)

[![GitHub forks](https://img.shields.io/github/forks/blackmirror1980/flavor-js.svg?style=plastic)](https://github.com/blackmirror1980/flavor-js/network)

[![GitHub stars](https://img.shields.io/github/stars/blackmirror1980/flavor-js.svg?style=plastic)](https://github.com/blackmirror1980/flavor-js/stargazers)

[![GitHub license](https://img.shields.io/github/license/blackmirror1980/flavor-js.svg?style=plastic)](https://github.com/blackmirror1980/flavor-js/blob/master/LICENSE)

## Version
v{{version}}

## Documentation
Check out the [Latest Documentation]({{documentation}}) here

## Description
{{description}}

{{^private}}
## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
{{#preferGlobal}}
npm install {{name}} --global
{{/preferGlobal}}
{{^preferGlobal}}
npm install {{name}} --save
{{/preferGlobal}}
```
{{/private}}
{{#usage}}

## Usage

```{{language}}
{{{content}}}
```
{{/usage}}
{{#scripts.test}}

## Tests

```sh
npm install
npm test
```
{{/scripts.test}}
{{#testOutput}}
```
{{{testOutput}}}
```
{{/testOutput}}

## Dependencies

{{#depDetails}}
- [{{name}}]({{repository}}): {{description}}
{{/depDetails}}
{{^depDetails}}
None
{{/depDetails}}

## Dev Dependencies

{{#devDepDetails}}
- [{{name}}]({{repository}}): {{description}}
{{/devDepDetails}}
{{^devDepDetails}}
None
{{/devDepDetails}}

{{#license}}
## License

{{license}}
{{/license}}

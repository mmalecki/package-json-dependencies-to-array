# package-json-dependencies-to-array
Turn `package.json` into an array of dependencies with package, version
requirement and dependency type.

## Installation

```sh
npm install package-json-dependencies-to-array
```

## Usage

```js
var dependenciesToArray = require('package-json-dependencies-to-array');

dependenciesToArray({
  dependencies: {
    foo: '^1.0.0'
  },
  devDependencies: {
    bar: '^2.0.0'
  }
}) /* => [ { package: 'foo', version: '^1.0.0', type: 'dependency' },
           { package: 'bar', version: '^2.0.0', type: 'dev' } ] */
```

Handles the following types of dependencies:

* regular - `type` is `'dependency'`
* development - `type` is `'dev'`
* optional - `type` is `optional`
* bundled - `type` is `bundled`

## Edge cases
Please note that `package-json-dependencies-to-array` doesn't handle edge
cases, like `fpipe` package, which dependencies entry looks like this:

```json
"devDependencies": {
  "should": {
    "version": "1.2.0"
  },
  ...
}
```

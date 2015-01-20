'use strict'

var assert = require('assert')
var dependenciesToArray = require('../')

assert.deepEqual(dependenciesToArray({
  dependencies: {
    foo: '^1.0.0'
  }
}), [
  { package: 'foo', version: '^1.0.0', type: 'dependency' }
])

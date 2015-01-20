'use strict'

module.exports = function(packageJson) {
  var result = []

  function process(obj, type) {
    obj && typeof obj === 'object' && Object.keys(obj).forEach(function(package_) {
      result.push({
        package: package_,
        version: obj[package_],
        type: type
      })
    })
  }

  process(packageJson.dependencies, 'dependency')
  process(packageJson.devDependencies, 'dev')
  process(packageJson.optionalDependencies, 'optional')
  process(packageJson.bundleDependencies || packageJson.bundledDependencies, 'bundled')

  return result
}

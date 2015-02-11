'use strict'

module.exports = function(packageJson) {
  var result = []
  var bundled = packageJson.bundledDependencies || packageJson.bundleDependencies || [];

  function process(obj, type) {
    obj && typeof obj === 'object' && Object.keys(obj).forEach(function(package_) {
      result.push({
        package: package_,
        version: obj[package_],
        type: type,
        bundled: bundled.indexOf(package_) !== -1
      })
    })
  }

  process(packageJson.dependencies, 'dependency')
  process(packageJson.devDependencies, 'dev')
  process(packageJson.optionalDependencies, 'optional')

  // Find all the dependencies that are only bundled, and we don't know their
  // type nor version number (this would only happen in malformed package.json's,
  // but I'm pretty sure it happens).
  bundled.forEach(function(bundle) {
    if (!result.some(function(r) { return r.package === bundle })) {
      result.push({
        package: bundle,
        bundled: true
      })
    }
  })

  return result
}

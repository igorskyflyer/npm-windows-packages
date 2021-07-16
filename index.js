const RegKeys = require('@igor.dvlpr/regkeys')

const packagesKey =
  'HKCR/Local Settings/Software/Microsoft/Windows/CurrentVersion/AppModel/PackageRepository/Packages'
const registry = new RegKeys(packagesKey)

let packagesCount = 0

function get() {
  const packages = registry.get()

  packagesCount = packages.length

  return packages
}

function has(param, caseSensitive = false) {
  return registry.has(param, caseSensitive)
}

function refresh() {
  registry.clear()
  packagesCount = 0
}

function count() {
  return packagesCount
}

module.exports = {
  get,
  has,
  refresh,
  count,
}

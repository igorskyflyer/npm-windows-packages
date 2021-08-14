import { RegKeys } from '@igor.dvlpr/regkeys'
import { strIsIn } from '@igor.dvlpr/str-is-in'

const packagesKey = 'HKCR/Local Settings/Software/Microsoft/Windows/CurrentVersion/AppModel/PackageRepository/Packages'
const registry = new RegKeys(packagesKey)

/**
 * @param {string} entry
 * @param {string} value
 * @returns {boolean}
 */
function comparator(entry, value) {
  return entry.toLowerCase().indexOf(value) > -1
}

/**
 * Synchronously gets Windows Packages.
 * @throws Throws an error if the host machine is not running Windows OS.
 * @returns {string[]}
 */
export function get() {
  return registry.get(true)
}

/**
 * Synchronously checks whether the given keys are present in the WindowsPackages key.
 * @param {string[]} packages
 * @returns {boolean[]}
 */
export function has(packages) {
  if (!packages) {
    return []
  }

  const count = packages.length

  if (count === 0) {
    return []
  }

  const result = []
  const installedPackages = get()

  for (let i = 0; i < count; i++) {
    result.push(strIsIn(packages[i], installedPackages, comparator))
  }

  return result
}

// Author: Igor Dimitrijević (@igorskyflyer)

import { RegKeys } from '@igor.dvlpr/regkeys'
import { strIsIn } from '@igor.dvlpr/str-is-in'

const packagesKey: string =
  'HKCR/Local Settings/Software/Microsoft/Windows/CurrentVersion/AppModel/PackageRepository/Packages'
const registry: RegKeys = new RegKeys(packagesKey)

function comparator(entry: string, value: string) {
  return entry.toLowerCase().indexOf(value) > -1
}

/**
 * Synchronously gets Windows Packages.
 * @throws Throws an error if the host machine is not running Windows OS.
 * @returns A string array containing Windows packages information.
 */
export function get(): string[] {
  return registry.get(true)
}

/**
 * Synchronously checks whether the given keys are present in the WindowsPackages key.
 * @param packages Package(s) name to check.
 * @returns A Boolean array of results, e.g. *[true, true, false, true]*.
 */
export function has(packages: string[]): boolean[] {
  if (!packages) {
    return []
  }

  const count: number = packages.length

  if (count === 0) {
    return []
  }

  const result: boolean[] = []
  const installedPackages: string[] = get()

  for (let i = 0; i < count; i++) {
    result.push(strIsIn(packages[i], installedPackages, comparator))
  }

  return result
}

# Windows Packages

A Node.js module for reading the Packages registry key on Windows 10. Useful for retrieving applications installed from the Microsoft Store.

_Uses the reg.exe, WINDOWS **ONLY!**_

### Like it? Buy me a beer.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/igorskyflyer)
<br><br>

### Install

```
npm install windows-packages --save
```

<br>

### Exports

- **Functions**
  - `get()`,<br>
  - `has()`,<br>
  - `refresh()`,<br>
  - `count()`

 <br>

### Usage

`.get(): string[]`

Returns an array of sub-keys located in the Packages key.

```
const winPkgs = require('windows-packages');
const packages = winPkgs.get();

console.log(packages); // ['Microsoft.MicrosoftEdge_44.18362.267.0...', 'Microsoft.Microsoft3DViewer_7.1908.9012.0...',...]

// names shortened for the sake of brevity
```

<br>

`.has(value: string, caseSensitive: boolean = false): boolean`

Returns a Boolean indicating whether the provided application, (param => `value`) is installed on the system.

```
const winPkgs = require('windows-packages');
const has = winPkgs.has('Edge');

console.log(has); // true
```

<br>

`.has(list: string[], caseSensitive: boolean = false): boolean[]`

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```
const winPkgs = require('windows-packages');
const has = winPkgs.has(['edge', 'foobar', 'mspaint']);

console.log(has); // [true, false, true]
```

<br>

`.refresh(): void`

Force refresh the info from the registry, instead of retrieving the cached data.

```
const winPkgs = require('windows-packages');
let packages = winPkgs.get();

console.log(packages);

// application install method...

winPkgs.refresh();

packages = winPkgs.get();

console.log(packages);
```

<br>

### Changelog

## 1.0

Initial release

<br>

### Development

```
git clone https://github.com/igorskyflyer/npm-windows-packages.git
```

followed by a,

```
npm install
```

### Test

Open the project and execute:

```
npm run test
```

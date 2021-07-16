<div align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/npm-windows-packages/master/assets/windows-packages.png" alt="Windows Packages - NPM Package" width="200" height="200">
<h2>Windows Packages</h2>

<em>A Node.js module for reading the Packages registry key on Windows 10. Useful for retrieving applications installed from the Microsoft Store.</em>

</div>

<p align="center">
Uses reg.exe, <strong>WINDOWS ONLY!</strong>
</p>

<div align="center">
<h4>Like it? Buy me a beer.</h4>
<a href="https://www.paypal.me/igorskyflyer"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="Donate"></a>
</div>

<br>
<br>

### Install

```shell
npm install windows-packages --save
```

<br>

### Exports

- **Functions**
  - `get()`,<br>
  - `has()`.<br>

 <br>

### Usage

```ts
get(): string[]
```

Returns an array of sub-keys located in the WindowsPackages key.

```js
const winPkgs = require('windows-packages')
const packages = winPkgs.get()

console.log(packages) // ['Microsoft.MicrosoftEdge_44.18362.267.0...', 'Microsoft.Microsoft3DViewer_7.1908.9012.0...',...]

// names shortened for the sake of brevity
```

<br>

```ts
has(list: string[]): boolean[]
```

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```js
const winPkgs = require('windows-packages')
const has = winPkgs.has(['edge', 'foobar', 'mspaint'])

console.log(has) // [true, false, true]
```

<br>

### Development

```shell
git clone https://github.com/igorskyflyer/npm-windows-packages.git
```

followed by a,

```shell
npm install
```

### Test

Open the project and execute:

```shell
npm test
```

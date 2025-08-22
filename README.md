<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-windows-packages/main/media/windows-packages.png" alt="Icon of Windows Packages" width="256" height="256">
<h1 align="center">Windows Packages</h1>
</div>

<br>

<div align="center">
  💻 A package for reading the Packages registry key on Windows 10+. Useful for retrieving Windows 10+ installed Store applications. 📦
</div>

<br>
<br>

> [!CAUTION]
> Uses `reg.exe`, **WINDOWS ONLY**!
>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🗝 Reads Windows registry from the Packages key
- 📋 Retrieves a full list of installed Windows packages
- 🔍 Case‑insensitive search within package names
- ✅ Checks presence of one or more package names
- 📊 Returns Boolean results for each queried package
- 🛡 Throws error if not running on the Windows OS
- 🧹 Trims and normalises data for reliable matching

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/windows-packages
```

```bash
yarn add @igorskyflyer/windows-packages
```

```bash
npm i @igorskyflyer/windows-packages
```

<br>
<br>

## 🤹🏼 API


```ts
get(): string[]
```

Returns an array of sub-keys located in the WindowsPackages key.

```ts
import { get } from '@igorskyflyer/windows-packages'

const packages: string[] = get()

console.log(packages) // ['Microsoft.MicrosoftEdge_44.18362.267.0...', 'Microsoft.Microsoft3DViewer_7.1908.9012.0...',...]

// names shortened for the sake of brevity
```

<br>
<br>

```ts
has(list: string[]): boolean[]
```

Returns an array of Booleans indicating whether the entries of the parameter **list** are installed on the system.

```ts
import { has } from '@igorskyflyer/windows-packages'

const hasPackages: boolean[] = has(['edge', 'foobar', 'mspaint'])

console.log(hasPackages) // [true, false, true]
```

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { get } from '@igorskyflyer/windows-packages'

const packages: string[] = get()

console.log(packages) // ['Microsoft.MicrosoftEdge_44.18362.267.0...', 'Microsoft.Microsoft3DViewer_7.1908.9012.0...',...]

// names shortened for the sake of brevity
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-windows-packages/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-windows-packages/blob/main/LICENSE.txt).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/odin](https://www.npmjs.com/package/@igorskyflyer/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

<br>

[@igorskyflyer/str-is-in](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igorskyflyer/strip-html](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

<br>

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

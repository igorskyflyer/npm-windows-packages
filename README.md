<h1 align="center">Windows Packages</h1>

<br>

<p align="center">
	💻 A Node.js module for reading the Packages registry key on Windows 10+.
	Useful for retrieving Windows 10+ installed Store applications. 📦
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage


<br>

> [!WARNING]
> Uses `reg.exe`, **WINDOWS ONLY!**!
>

<br>

Install it by executing:

```shell
npm i "@igor.dvlpr/windows-packages"
```

<br>

## 🤹🏼 API

---


```ts
get(): string[]
```

Returns an array of sub-keys located in the WindowsPackages key.

```ts
import { get } from '@igor.dvlpr/windows-packages'

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
import { has } from '@igor.dvlpr/windows-packages'

const hasPackages: boolean[] = has(['edge', 'foobar', 'mspaint'])

console.log(hasPackages) // [true, false, true]
```

## ✨ Examples

``
```

```

---

## 📝 Changelog

📑 Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-windows-packages/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-windows-packages/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/odin](https://www.npmjs.com/package/@igor.dvlpr/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

<br>

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

<br>

[@igor.dvlpr/jmap](https://www.npmjs.com/package/@igor.dvlpr/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

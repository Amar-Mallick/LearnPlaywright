# JavaScript String Methods Cheatsheet

## Static Methods

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `String.fromCharCode()` | Returns string from Unicode values | `String.fromCharCode(72,69,76)` | `"HEL"` |
| `String.fromCodePoint()` | Returns string from code points (supports astral) | `String.fromCodePoint(128512)` | `"😀"` |
| `String.raw()` | Returns raw template string (backslashes untouched) | `` String.raw`hello\nworld` `` | `"hello\\nworld"` |

## Access

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `charAt()` | Character at given index | `"hello".charAt(1)` | `"e"` |
| `charCodeAt()` | UTF-16 code unit at index | `"hello".charCodeAt(1)` | `101` |
| `codePointAt()` | Code point at index (supports astral) | `"😀".codePointAt(0)` | `128512` |
| `at()` | Character at index (supports negative) | `"hello".at(-1)` | `"o"` |
| `length` | Number of characters (property) | `"hello".length` | `5` |

## Search / Index

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `indexOf()` | First index of substring (or -1) | `"hello".indexOf("l")` | `2` |
| `lastIndexOf()` | Last index of substring (or -1) | `"hello".lastIndexOf("l")` | `3` |
| `includes()` | Checks if substring exists | `"hello".includes("el")` | `true` |
| `startsWith()` | Checks if starts with substring | `"hello".startsWith("he")` | `true` |
| `endsWith()` | Checks if ends with substring | `"hello".endsWith("lo")` | `true` |
| `search()` | Search with regex, returns index | `"hello".search(/l+/)` | `2` |
| `match()` | Matches string against regex | `"hello".match(/l/g)` | `["l","l"]` |
| `matchAll()` | Iterator of all regex matches | `[...\"a1b2\".matchAll(/(\d)/g)]` | `[["1","1"],["2","2"]]` |

## Extract / Slice

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `slice()` | Extracts section (supports negative) | `"hello".slice(1,4)` | `"ell"` |
| `substring()` | Extracts between two indexes | `"hello".substring(1,4)` | `"ell"` |
| `substr()` | **DEPRECATED** — from index for length | `"hello".substr(1,3)` | `"ell"` |
| `split()` | Splits string into array | `"a,b,c".split(",")` | `["a","b","c"]` |

## Transform

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toLocaleUpperCase()` | Locale-aware uppercase | `"istanbul".toLocaleUpperCase("tr")` | `"İSTANBUL"` |
| `toLocaleLowerCase()` | Locale-aware lowercase | `"İSTANBUL".toLocaleLowerCase("tr")` | `"istanbul"` |
| `trim()` | Removes whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | Removes whitespace from start | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` | Removes whitespace from end | `"  hi  ".trimEnd()` | `"  hi"` |
| `repeat()` | Repeats string n times | `"ha".repeat(3)` | `"hahaha"` |
| `padStart()` | Pads string from start to given length | `"5".padStart(3,"0")` | `"005"` |
| `padEnd()` | Pads string from end to given length | `"5".padEnd(3,"0")` | `"500"` |
| `concat()` | Joins two or more strings | `"hello".concat(" ","world")` | `"hello world"` |

## Replace

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `replace()` | Replace first match | `"hello".replace("l","x")` | `"hexlo"` |
| `replaceAll()` | Replace all matches (ES2021) | `"hello".replaceAll("l","x")` | `"hexxo"` |

## Check / Inspect

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `localeCompare()` | Compares strings alphabetically | `"b".localeCompare("a")` | `1` |
| `normalize()` | Returns Unicode normalisation form | `"\u00f1".normalize("NFC")` | `"ñ"` |

## Iteration / Conversion

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `[Symbol.iterator]()` | Returns iterator over characters | `[...\"hi\"]` | `["h","i"]` |
| `valueOf()` | Returns primitive string value | `new String("hi").valueOf()` | `"hi"` |
| `toString()` | Returns string representation | `new String("hi").toString()` | `"hi"` |

## HTML Wrappers (Deprecated)

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `anchor()` | Wraps in `<a name="...">` | `"hi".anchor("top")` | `<a name="top">hi</a>` |
| `big()` | Wraps in `<big>` | `"hi".big()` | `<big>hi</big>` |
| `blink()` | Wraps in `<blink>` | `"hi".blink()` | `<blink>hi</blink>` |
| `bold()` | Wraps in `<b>` | `"hi".bold()` | `<b>hi</b>` |
| `fixed()` | Wraps in `<tt>` | `"hi".fixed()` | `<tt>hi</tt>` |
| `fontcolor()` | Wraps in `<font color="...">` | `"hi".fontcolor("red")` | `<font color="red">hi</font>` |
| `fontsize()` | Wraps in `<font size="...">` | `"hi".fontsize(7)` | `<font size="7">hi</font>` |
| `italics()` | Wraps in `<i>` | `"hi".italics()` | `<i>hi</i>` |
| `link()` | Wraps in `<a href="...">` | `"hi".link("https://x.com")` | `<a href="https://x.com">hi</a>` |
| `small()` | Wraps in `<small>` | `"hi".small()` | `<small>hi</small>` |
| `strike()` | Wraps in `<strike>` | `"hi".strike()` | `<strike>hi</strike>` |
| `sub()` | Wraps in `<sub>` | `"hi".sub()` | `<sub>hi</sub>` |
| `sup()` | Wraps in `<sup>` | `"hi".sup()` | `<sup>hi</sup>` |

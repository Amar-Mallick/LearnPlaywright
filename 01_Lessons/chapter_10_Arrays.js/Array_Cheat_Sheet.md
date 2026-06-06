# JavaScript Array Cheat Sheet

## 1. Creating Arrays

| Method | Syntax | Description | Example |
|--------|--------|-------------|---------|
| Array Literal | `let arr = [...];` | Preferred way | `let items = ['Tea', true, 'Milk', 15];` |
| Array Constructor | `new Array(n)` | Pre-allocate space | `new Array(3)` → `[<3 empty items>]` |
| `Array.of()` | `Array.of(...)` | Creates array from arguments | `Array.of(2)` → `[2]`, `Array.of('Apple','Mango')` → `['Apple','Mango']` |
| `Array.from()` | `Array.from(iterable)` | Creates array from iterable | `Array.from('Hello')` → `['H','e','l','l','o']` |
| Spread Operator | `[...arr, ...items]` | Combine arrays | `[...original, 4, 5, 6]` |

## 2. Accessing Elements

| Method | Syntax | Description | Example |
|--------|--------|-------------|---------|
| Bracket Notation | `arr[index]` | Access by index (0-based) | `arr[0]` → first element, `arr[-1]` → `undefined` |
| `at()` | `arr.at(index)` | Supports negative index | `arr.at(-1)` → last element |

## 3. Adding & Removing Elements

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `push(v1, v2, ...)` | Add to end | New length | `[1,2].push(3)` → `3` |
| `pop()` | Remove from end | Removed element | `[1,2,3].pop()` → `3` |
| `unshift(v1, v2, ...)` | Add to beginning | New length | `[1,2].unshift(0)` → `3` |
| `shift()` | Remove from beginning | Removed element | `[1,2,3].shift()` → `1` |
| `delete arr[i]` | Remove item (leaves empty) | `true` | `delete arr[1]` → `[1, <empty>, 3]` |
| `splice(start, count, ...)` | Add/remove at index | Removed items | `arr.splice(1, 1)` → remove 1 at index 1 |

## 4. Searching

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `indexOf(value)` | First index of value | Index or `-1` | `['a','b','c'].indexOf('b')` → `1` |
| `lastIndexOf(value)` | Last index of value | Index or `-1` | `['a','b','a'].lastIndexOf('a')` → `2` |
| `includes(value)` | Check if value exists | `true` / `false` | `['a','b'].includes('c')` → `false` |
| `find(fn)` | First element matching condition | Element or `undefined` | `[10,20,30].find(x => x > 15)` → `20` |
| `findIndex(fn)` | Index of first match | Index or `-1` | `[10,20,30].findIndex(x => x > 15)` → `1` |
| `filter(fn)` | All matching elements | New array | `[10,15,20].filter(x => x > 12)` → `[15, 20]` |

## 5. Iterating Arrays

| Method | Syntax | Description |
|--------|--------|-------------|
| `for` loop | `for (let i = 0; i < arr.length; i++)` | Full control with index |
| `for...of` | `for (let val of arr)` | Cleanest for values |
| `forEach()` | `arr.forEach((val, idx) => {...})` | Executes callback per element |
| `for...in` | `for (let idx in arr)` | Iterates indices (not recommended for arrays) |

## 6. Transforming Arrays

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `map(fn)` | Transform every element | New array | `[1,2,3].map(x => x * 2)` → `[2,4,6]` |
| `filter(fn)` | Keep elements passing condition | New array | `[1,2,3].filter(x => x > 1)` → `[2,3]` |
| `reduce(fn, init)` | Reduce to single value | Accumulated value | `[1,2,3].reduce((a,b) => a+b, 0)` → `6` |
| `flat(depth)` | Flatten nested arrays | New array | `[[1,2],[3]].flat()` → `[1,2,3]` |

## 7. Sorting

| Method | Description | Example |
|--------|-------------|---------|
| `sort()` | Default: lexicographical | `[1,20,2].sort()` → `[1,2,20]` |
| `sort((a,b) => a - b)` | Ascending numeric | `[1,20,2].sort((a,b) => a-b)` → `[1,2,20]` |
| `sort((a,b) => b - a)` | Descending numeric | `[1,20,2].sort((a,b) => b-a)` → `[20,2,1]` |

## 8. Joining & Combining

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `toString()` | Convert to string (comma-separated) | String | `[1,2,3].toString()` → `"1,2,3"` |
| `join(separator)` | Join with separator | String | `['a','b'].join('*')` → `"a*b"` |
| `concat(arr2)` | Merge arrays | New array | `[1].concat([2])` → `[1,2]` |
| Spread `...` | Spread elements into new array | New array | `[...a, ...b]` |

## 9. Slicing

| Method | Description | Example |
|--------|-------------|---------|
| `slice(start, end)` | Returns section copy (end exclusive) | `['a','b','c'].slice(0,2)` → `['a','b']` |
| `slice(start)` | From start to end | `['a','b','c'].slice(1)` → `['b','c']` |
| `slice(-n)` | Last n elements | `['a','b','c'].slice(-2)` → `['b','c']` |

## 10. Checking Arrays

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `Array.isArray(value)` | Check if value is array | `true` / `false` | `Array.isArray([1,2])` → `true` |
| `some(fn)` | At least one passes condition | `true` / `false` | `[10,20].some(x => x > 15)` → `true` |
| `every(fn)` | All elements pass condition | `true` / `false` | `[10,20].every(x => x > 5)` → `true` |

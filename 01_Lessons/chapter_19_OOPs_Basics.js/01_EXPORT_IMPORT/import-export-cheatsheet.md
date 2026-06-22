# Import/Export Cheatsheet

## Named Exports vs Default Export

| Concept | Named Export | Default Export |
|---|---|---|
| **Export (single)** | `export const foo = ...` | `export default foo` |
| **Export (inline)** | `export function bar() {}` | `export default function() {}` |
| **Export (declared)** | `const foo = ...; export { foo }` | `const foo = ...; export default foo` |
| **Import** | `import { foo } from './mod'` | `import foo from './mod'` |
| **Rename import** | `import { foo as bar } from './mod'` | `import { default as bar } from './mod'` |
| **Re-export** | `export { foo } from './mod'` | `export { default } from './mod'` |

## Mixed in one file

```js
// module.js
export const named = 1;
export default 42;

// app.js
import theDefault, { named } from './module.js';
// theDefault = 42, named = 1
```

## Import all

```js
import * as everything from './module.js';
// everything.named, everything.default
```

## Re-export all

```js
export * from './module.js';         // re-export named (not default)
export { default } from './module.js'; // re-export default explicitly
```

## Key Rules

- **Named**: braces `{}` required on import; one file can have many
- **Default**: no braces; one per file; can be imported with any name
- You can mix both in the same file
- `export default` can be used with anonymous functions/classes

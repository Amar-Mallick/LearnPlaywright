# JavaScript Objects Cheatsheet

## Creating Objects

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| Object literal | Creates object with `{}` | `let o = { id: 1, name: "Amar" }` | `{ id: 1, name: "Amar" }` |
| Empty & assign | Creates empty, then adds properties | `let o = {}; o.name = "Amir"` | `{ name: "Amir" }` |

## Accessing Properties

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| Dot notation | Access by literal key | `obj.name` | `"Amar"` |
| Bracket notation | Access by string key (supports variables) | `obj["name"]` or `obj[variable]` | `"Amar"` |

## Reference Behaviour

| Concept | Description | Example | Note |
|---------|-------------|---------|------|
| Copy by reference | Variables hold a reference, not the object | `let b = a; b.x = 1;` | `a.x` also changes |
| Separate objects | Same content but different memory | `let c = {x:1}; let d = {x:1}` | `c === d` is `false` |
| Primitive vs Reference | Primitives copy by value | `let a=10; let b=a; b=20;` | `a` stays `10` |

## Static Object Methods

| Method | Description | Example | Returns |
|--------|-------------|---------|---------|
| `Object.keys()` | Array of keys | `Object.keys({a:1,b:2})` | `["a", "b"]` |
| `Object.values()` | Array of values | `Object.values({a:1,b:2})` | `[1, 2]` |
| `Object.entries()` | Array of key-value pairs | `Object.entries({a:1})` | `[["a", 1]]` |
| `Object.getOwnPropertyDescriptor()` | Property metadata | `Object.getOwnPropertyDescriptor(obj, "key")` | `{value, writable, enumerable, configurable}` |

## Destructuring

| Feature | Description | Example | Result |
|---------|-------------|---------|--------|
| Basic | Extract properties into variables | `const { name, age } = user` | `name`, `age` |
| Rename | Extract with new variable name | `const { name: userName } = data` | `userName` |
| Default value | Fallback if property missing | `const { state = "kerala" } = student` | `state = "kerala"` (if not present) |
| Nested | Extract from nested objects | `const { user: { address: { city } } } = data` | `city` |

## Functions in Objects

| Feature | Description | Example | Note |
|---------|-------------|---------|------|
| Method shorthand | Function as property | `{ add(n) { this.value += n } }` | `this` refers to the object |
| `this` keyword | Refers to the owning object | `this.value` | Dynamic context |

## Spread Operator

| Feature | Description | Example | Returns |
|---------|-------------|---------|---------|
| Shallow copy | Copies all enumerable properties | `const c = { ...a }` | New object with same keys |

## Getters & Setters

| Feature | Description | Example | Usage |
|---------|-------------|---------|-------|
| `get` | Computed property on access | `get fullname() { return this.fn + this.ln }` | `obj.fullname` |
| `set` | Custom logic on assignment | `set fullname(v) { [this.fn,this.ln] = v.split(" ") }` | `obj.fullname = "A B"` |

## Property Descriptors

| Flag | Description | Default |
|------|-------------|---------|
| `writable` | Can value be changed | `true` |
| `enumerable` | Shows up in loops / `Object.keys()` | `true` |
| `configurable` | Can descriptor be modified / property deleted | `true` |

# Modules

module: a reusable piece of code that intentionally does not impact other code

commonjs modules: agreed upon standards for how code modules should be structured

First-class functions: work with functions like with primitives, pass it as parameter etc.

Function-expression: block of code that results in a value

invoke: call (a function)

object literal: object passed to a function

prototypal inheritance: a chain of inheretance from the hierarchy of parents,

pass by value vs reference:

- objects are passed by reference
- primitives are passed by value

`require` is a function to which we pass `"path"`
`module.exports` is what the require function returns

> code ran inside node is wrapped in a function where in which those things are given as params

There are multiple `module.export` architectural patterns (see `/3_Modules/modulePatterns`):

- replacing empty object
- attatching object property
- function constructor: exporting created object (**cached**)
- function constructor: exporting constructor
- Revealing Module Pattern: simulate private/public access modifiers

Node caches module.exports, i.e. when using the same module 2x (the same `require`) the code is only read once
-> proves to be efficient when using the same object throughout roughout the code

native (core) modules are located in the `lib`
some are global some aren't (e.g. utilities)

for using ES modules (`import` and `export` keywords) one needs to set modules to be exported from as `.mjs` and in create `package.json`

```json
{
  "type": "module"
}
```

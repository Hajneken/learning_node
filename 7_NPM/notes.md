# Node Package Manager 

NPM is a repository of code 

## Versioning Semantics 

`major.minor.patch` e.g. `1.2.7` Version 1 with update number 2 and 7 patches

* major : possibly breaking changes 
* minor : adding features, no breaking changes 
* patch : fixes  

more info about [semantic](!https://semver.org/)

## NPM project

when we want to use module saved in `node_modules` use it without any path descriptors 
e.g.

```js 
const moment = require("moment");
```

1. `npm init` 
2. `npm install <whatever package>`
   1. creates node_modules with all dependency 
   2. creates `package.json` : keeps track of project dependencies and other information

`^` (*carret*) next to version number signalizes that it automatically updates **minor** and **patches**
`~` (*tilde*) next to version number signalizes approval for **patches** only

> If I don't need package to run the app/service it is a **DEV** dependency 

`npm install jasmine-node --save-dev`


# `nodemon`

for hotreloading and more dev friendly env use `nodemon`


[![NoDependencies](https://img.shields.io/badge/dependencies-none-green.svg)](https://github.com/colxi/midi-parser-js)
[![Browser](https://img.shields.io/badge/browser-compatible-blue.svg)](https://github.com/colxi/midi-parser-js)
[![Node](https://img.shields.io/badge/node-compatible-brightgreen.svg)](https://www.npmjs.com/package/midi-parser-js)

# Browser & Node, ES7 sleep()

Pauses the execution (without freezing the Browser/thread) the requested ammount of milliseconds.

The implementaton in based in the native JS `Promises`, and requires the usage of `await`.

    
```javascript
async function main(){
  // some code...
  await sleep(1000);
  // continue execution...
}
```

## Package distribution networks :

In browser enviroment you can include this library using the jsdelivr CDN ...

```html
<script src="https://cdn.rawgit.com/colxi/js-sleep/master/js-sleep.js"></script>
```

If you are in the NodeJs enviroment, can install and import the package via:

```bash
$ npm install js-sleep
```
```javascript
// import
const sleep = require('js-sleep');
```



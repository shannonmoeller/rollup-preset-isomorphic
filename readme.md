# rollup-preset-isomorphic

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Everything you need to rollup isomorphic modules.

## Install

```command
$ npm install --save-dev rollup rollup-preset-isomorphic
```

## Usage

```js
import node from 'rollup-preset-isomorphic';

export default {
    plugins: [
        ...node()
    ]
};
```

```command
$ rollup src/client/index.js -o src/client/bundle.js -mc
```

## API

### `node([options]): Array<object>`

- `options` `{Object}`
  - `commonjs` `{Object}` - Options for [`rollup-plugin-commonjs`](http://npm.im/rollup-plugin-commonjs).
  - `multiEntry` `{Object}` - Options for [`rollup-plugin-multi-entry`](http://npm.im/rollup-plugin-multi-entry).
  - `globals` `{Object}` - Options for [`rollup-plugin-node-globals`](http://npm.im/rollup-plugin-node-globals).
  - `resolve` `{Object}` - Options for [`rollup-plugin-node-resolve`](http://npm.im/rollup-plugin-node-resolve).
  - `builtins` `{Object}` - Options for [`rollup-plugin-node-builtins`](http://npm.im/rollup-plugin-node-builtins)

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/rollup-preset-isomorphic.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/rollup-preset-isomorphic.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/rollup-preset-isomorphic

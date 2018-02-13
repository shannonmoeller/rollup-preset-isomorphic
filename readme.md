# rollup-preset-isomorphic

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Everything you need to rollup isomorphic modules, in the proper order, with sane defaults.

## Install

```command
$ npm install --save-dev rollup rollup-preset-isomorphic
```

## Usage

```js
import isomorphic from 'rollup-preset-isomorphic';

export default {
    plugins: [
        ...isomorphic()
    ]
};
```

```command
$ rollup src/client/index.js -o src/client/bundle.js -mc
```

## API

### `node([options]): Array<object>`

- `options` `{Object}`
  - `commonjs` `{Object|Boolean}` - Options for [`rollup-plugin-commonjs`](http://npm.im/rollup-plugin-commonjs), or `false` to disable.
  - `multiEntry` `{Object|Boolean}` - Options for [`rollup-plugin-multi-entry`](http://npm.im/rollup-plugin-multi-entry), or `false` to disable.
  - `globals` `{Object|Boolean}` - Options for [`rollup-plugin-node-globals`](http://npm.im/rollup-plugin-node-globals), or `false` to disable.
  - `resolve` `{Object|Boolean}` - Options for [`rollup-plugin-node-resolve`](http://npm.im/rollup-plugin-node-resolve), or `false` to disable.
  - `builtins` `{Object|Boolean}` - Options for [`rollup-plugin-node-builtins`](http://npm.im/rollup-plugin-node-builtins), or `false` to disable.

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/rollup-preset-isomorphic.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/rollup-preset-isomorphic.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/rollup-preset-isomorphic

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var commonjs = _interopDefault(require('rollup-plugin-commonjs'));
var multiEntry = _interopDefault(require('rollup-plugin-multi-entry'));
var builtins = _interopDefault(require('rollup-plugin-node-builtins'));
var globals = _interopDefault(require('rollup-plugin-node-globals'));
var resolve = _interopDefault(require('rollup-plugin-node-resolve'));

function node(options = {}) {
	return [
		multiEntry(options.multiEntry),
		commonjs(options.commonjs),
		globals(options.globals),
		builtins(options.builtins),
		resolve(options.resolve),
	];
}

module.exports = node;
//# sourceMappingURL=rollup-preset-node.cjs.js.map

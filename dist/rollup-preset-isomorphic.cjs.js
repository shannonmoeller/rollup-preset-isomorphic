'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var commonjs = _interopDefault(require('rollup-plugin-commonjs'));
var multiEntry = _interopDefault(require('rollup-plugin-multi-entry'));
var resolve = _interopDefault(require('rollup-plugin-node-resolve'));
var builtins = _interopDefault(require('rollup-plugin-node-builtins'));
var globals = _interopDefault(require('rollup-plugin-node-globals'));

function node(options = {}) {
	const plugins = [];

	if (options.multiEntry !== false) {
		plugins.push(multiEntry(options.multiEntry));
	}

	if (options.commonjs !== false) {
		plugins.push(commonjs(options.commonjs));
	}

	if (options.globals !== false) {
		plugins.push(globals(options.globals));
	}

	if (options.resolve !== false) {
		plugins.push(
			resolve(
				Object.assign(
					{},
					{
						// Prefer browser
						browser: true,
						preferBuiltins: false,
					},
					options.resolve
				)
			)
		);
	}

	if (options.builtins !== false) {
		plugins.push(builtins(options.builtins));
	}

	return plugins;
}

module.exports = node;
//# sourceMappingURL=rollup-preset-isomorphic.cjs.js.map

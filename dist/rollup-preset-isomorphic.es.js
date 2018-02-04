import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

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

export default node;
//# sourceMappingURL=rollup-preset-isomorphic.es.js.map

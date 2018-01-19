import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

export default function node(options = {}) {
	return [
		multiEntry(options.multiEntry),
		commonjs(options.commonjs),
		globals(options.globals),
		builtins(options.builtins),
		resolve(options.resolve),
	];
}

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';
import {stripShebang} from 'rollup-plugin-strip-shebang';
import pkg from './package.json' assert { type: 'json' };
const entryPoint = 'wamp.js';

export default [
    {
        input: entryPoint,
		output: [
			{
				name: 'wamp',
				file: pkg.browser,
				format: 'umd'
			},
		],
    plugins: [
        stripShebang(),
        resolve({
        browser: true, // Resolve for browser environment
        preferBuiltins: false, // Prefer browser versions of modules
        }),
        commonjs(), // Convert CommonJS to ES Modules
        nodeBuiltins(), // Polyfill Node.js built-in modules
        nodeGlobals(), // Inject global variables like process, Buffer, etc.
        terser(), // Minify the output
    ],
    },
    {
		input: 'dist/index.umd.js',
		external: ['ms'],
		output: [
			{ file: 'dist/index.cjs.js', format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
	}
]

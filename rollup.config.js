import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
// CSS
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

const postcssConfig = postcss({
  extract: true,
  sourceMap: true,
  plugins: [
    atImport,
    postcssPresetEnv({ features: { 'nesting-rules': true } }),
    process.env.NODE_ENV === 'production' && cssnano({ preset: 'default' }),
  ],
});

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  process.env.NODE_ENV === 'production' && terser(),
  replace({
    ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
];

export default [
  {
    input: 'src/js/app/index.js',
    output: {
      file: 'assets/built/app.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [...plugins, postcssConfig],
  },
  {
    input: 'src/js/post/index.js',
    output: {
      file: 'assets/built/post.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
];

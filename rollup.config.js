import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import url from 'rollup-plugin-url';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

export default {
  input: './src/lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    external(),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer()
  ],
  external: ['styled-components']
};
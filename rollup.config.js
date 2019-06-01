import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import * as path from 'path'

import pkg from './package.json'
import componentList from './list'

const defaultConfig = {
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    external({
      includeDependencies: false
    }),
    postcss({
      modules: false,
      // extract: true,
      plugins: [
        require('postcss-import'),
        require('postcss-url')({
          url: 'rebase',
          assetsPath: path.resolve('dist')
        }),
        require('postcss-preset-env')({
          browsers: '> 0.25%, ie 11, not dead, not op_mini all',
          stage: 0
        })
      ]
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      dedupe: ['react', 'react-dom']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    terser()
  ]
}

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        exports: 'named'
      }
    ],
    ...defaultConfig
  },
  {
    input: [...componentList],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        exports: 'default'
      }
    ],
    ...defaultConfig
  }
]

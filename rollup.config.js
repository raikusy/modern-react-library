import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
// import postcssimport from 'postcss-import'
// import css from 'rollup-plugin-css-only'
// import postcsspresetenv from 'postcss-preset-env'
// import postcssurl from 'postcss-url'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

export default {
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
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    external(),
    postcss({
      modules: false,
      // extract: true,
      plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('postcss-preset-env')({
          browsers: 'last 2 versions',
          stage: 0
        })
      ]
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**'
    }),
    // css({ output: true }),
    resolve(),
    commonjs()
  ]
}

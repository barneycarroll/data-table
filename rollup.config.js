const r_node_resolve  = require('rollup-plugin-node-resolve')
const r_commonjs      = require('rollup-plugin-commonjs')
const r_babel         = require('rollup-plugin-babel')
const r_externals     = require('rollup-plugin-auto-external')

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    r_node_resolve,
    r_commonjs,
    r_babel,
    r_externals,
  ]
}

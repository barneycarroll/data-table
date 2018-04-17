const r_node_resolve  = require('rollup-plugin-node-resolve')
const r_commonjs      = require('rollup-plugin-commonjs')
const r_babel         = require('rollup-plugin-babel')

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
  ]
}

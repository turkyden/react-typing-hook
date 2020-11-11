import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'useTyping',
      sourcemap: true
    }
  ],
  plugins: [
    typescript(), 
    css({ output: 'dist/index.css' })
  ],
  external: [
    ...Object.keys(pkg.peerDependencies)
  ]
}

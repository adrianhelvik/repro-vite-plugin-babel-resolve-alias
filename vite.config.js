import babel from 'vite-plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      Foo: './src/Foo.js',
    },
  },
  plugins: [
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
      },
    }),
  ],
})

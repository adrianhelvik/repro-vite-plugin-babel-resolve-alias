import babel from "vite-plugin-babel";
import { defineConfig } from "vite";

const babelPlugin = babel({
  babelConfig: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
});

const transform = babelPlugin.transform;

babelPlugin.transform = (code, id, options) => {
  // When running `vite`, "./src/Foo.js" is not printed here.
  // It is printed when running `vite build`.
  console.log(id);
  return transform.call(babelPlugin, code, id, options);
};

export default defineConfig({
  resolve: {
    alias: {
      Foo: "./src/Foo.js",
    },
  },
  plugins: [babelPlugin],
});

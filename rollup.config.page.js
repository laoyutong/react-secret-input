import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

const env = process.env.NODE_ENV;

export default {
  input: "./src/demo/index.tsx",
  output: {
    file: "./demo/index.js",
    format: "esm",
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": env,
    }),
    typescript(),
    terser({ module: true }),
  ],
};

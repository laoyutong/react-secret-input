import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./dist/index.esm.js",
      format: "esm",
    },
    {
      file: "./dist/index.js",
      format: "commonjs",
    },
  ],
  plugins: [typescript(), terser({ module: true })],
};

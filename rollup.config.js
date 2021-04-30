import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import tslint from "rollup-plugin-tslint";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/bundle.js",
    target: "cjs",
  },
  plugins: [tslint(), typescript({}), babel()],
};

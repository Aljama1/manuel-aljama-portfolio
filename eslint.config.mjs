// eslint-config-next v16 ships with eslint-plugin-react 7.37.x which uses
// ESLint's deprecated context.getFilename(). To avoid the runtime crash,
// we must supply react.version in settings so eslint-plugin-react skips
// auto-detection entirely.
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptConfig from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "coverage/**",
      "playwright-report/**",
    ],
  },
  ...coreWebVitals,
  ...typescriptConfig,
  {
    settings: {
      // Prevents eslint-plugin-react from calling the deprecated
      // context.getFilename() to auto-detect the React version.
      react: {
        version: "19.3.0",
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
    },
  },
];

export default config;

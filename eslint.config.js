import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: "eslint-plugin-react",
      "@typescript-eslint": "@typescript-eslint/eslint-plugin",
      prettier: "eslint-plugin-prettier",
    },
    rules: {
      // General rules
      "no-console": "warn",
      "indent": ["error", 2],
      "prettier/prettier": "error",

      // React-specific rules
      "react/jsx-uses-react": "off", // React 17+ with new JSX transform
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];


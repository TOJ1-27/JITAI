import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".codex/**"],
  },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        FormData: "readonly",
        fetch: "readonly",
        URLSearchParams: "readonly",
        Error: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["error", { caughtErrors: "none" }],
    },
  },
  {
    files: ["*.config.mjs"],
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
];

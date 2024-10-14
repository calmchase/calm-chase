import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        $$Generic: "readonly",
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: [
      "coverage",
      "**/dist",
      "**/build",
      "**/.husky",
      "**/package",
      "**/dev-dist",
      "**/.svelte-kit",
      "**/docker-data",
      "**/node_modules",
      "src/lib/i18n/*.ts",
      ".env",
      ".env.*",
      "!*.cjs",
      "yarn.lock",
      "*theme*.ts",
      ".DS_Store",
      "!.env.example",
      "pnpm-lock.yaml",
      "package-lock.json",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^\\$\\$(Props|Events|Slots|Generic)$",
        },
      ],
    },
  },
);

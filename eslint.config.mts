import _css from '@eslint/css';
import * as js from '@eslint/js';
import _json from '@eslint/json';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import { configs as unicornConfigs } from 'eslint-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import { node } from 'globals';
import tseslint from 'typescript-eslint';
import type { TSESLint } from '@typescript-eslint/utils';

const json = 'default' in _json ? (_json as unknown as { default: typeof _json }).default : _json;
const css = 'default' in _css ? (_css as unknown as { default: typeof _css }).default : _css;

export default defineConfig([
  globalIgnores(['.pnp.cjs', '/.pnp.loader.mjs', '.yarn/**/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, tseslint: tseslint.plugin },
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      stylistic.configs.customize({ indent: 2, semi: true }),
      unicornConfigs['flat/recommended'],
    ],
    languageOptions: {
      globals: node,
      parserOptions: { projectService: true } as TSESLint.ParserOptions,
    },
    rules: { 'unicorn/expiring-todo-comments': 'off' },
  },
  {
    files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: [json.configs.recommended],
    ignores: ['*tsconfig*.json', '.vscode/*.json'],
  },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc', extends: [json.configs.recommended] },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5', extends: [json.configs.recommended] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: [markdown.configs.recommended] },
  {
    files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: [css.configs.recommended],
    rules: { 'css/no-invalid-properties': 'off' },
  },
]);

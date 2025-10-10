// @ts-check

import css from '@eslint/css';
import eslint from '@eslint/js';
import markdown from '@eslint/markdown';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

/** @typedef {import("@eslint/config-helpers").ConfigWithExtends} ConfigWithExtends */
/** @typedef {import("@typescript-eslint/utils").TSESLint.ParserOptions} ParserOptions */

export default defineConfig([

  {
    extends: [
      stylistic.configs.customize({ indent: 2, semi: true }),
      eslint.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    files: [
      '**/*.cjs',
      '**/*.js',
      '**/*.mjs',
      '**/*.cts',
      '**/*.ts',
    ],
    ignores: ['.yarn/**/*', '.pnp.cjs', '.pnp.loader.mjs'],
    languageOptions: { parserOptions: /** @type {ParserOptions} */({ projectService: true }) },
  },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: [markdown.configs.recommended] },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: [css.configs.recommended], rules: { 'css/no-invalid-properties': 'off' } },
]);

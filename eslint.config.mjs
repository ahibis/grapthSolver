import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['build', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
      'max-lines': ['warn', { max: 300 }],
      'max-params': ['warn', 3],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  }
)

import eslintJs from '@eslint/js'
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
  eslintJs.configs.recommended,
  // tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
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
      'no-duplicate-imports': 'warn',
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'warn',
      'no-unreachable-loop': 'error',
      camelcase: 'warn',
      // complexity: ['warn', { max: 5 }],
      curly: 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'func-name-matching': 'warn',
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  }
)

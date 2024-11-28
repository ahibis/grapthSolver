import eslintJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    ignores: ['build', 'node_modules', 'eslint.config.js', 'src/prevVersion'],
  },
  eslintJs.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
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
      complexity: ['warn', { max: 5 }],
      curly: 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      'func-name-matching': 'warn',
      'max-classes-per-file': ['warn', 1],
      'max-depth': ['warn', 3],
      '@typescript-eslint/prefer-for-of': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      // 'max-lines-per-function': ['warn', { max: 50 }],
      'new-cap': 'error',
      // 'no-magic-numbers': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'warn',
      'no-return-assign': 'error',
      'prettier/prettier': [
        'off',
        {
          endOfLine: 'auto',
        },
      ],
    },
  }
)

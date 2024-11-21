import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // { files: ['**/*.{js,mjs,cjs,ts}'] },
  // { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  // pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-var': 'error',
      'no-unused-vars': 'warn',
    },
  },
  // {
  //   rules: {
  //     'prettier/prettier': [
  //       'warn',
  //       {
  //         endOfLine: 'auto',
  //       },
  //     ],
  //     'no-var': 'error',
  //   },
  // },
]

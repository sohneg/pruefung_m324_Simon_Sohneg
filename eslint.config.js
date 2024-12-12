import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      eqeqeq: 'error',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
  },
];

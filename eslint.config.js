import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended, // Standardempfohlene Regeln
  {
    rules: {
      'no-unused-vars': 'error',   // Fehler bei nicht verwendeten Variablen
      'prefer-const': 'error',     // Fehler, wenn let/var statt const verwendet wird
      'eqeqeq': 'error',           // Fehler bei Verwendung von '==' statt '==='
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
  },
];

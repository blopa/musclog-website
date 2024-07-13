module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:import/recommended',
    'plugin:regexp/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'unused-imports',
    'perfectionist',
    'regexp',
    'react-hooks',
  ],
  rules: {
    'arrow-parens': ['warn', 'always'],
    indent: ['warn', 4, { SwitchCase: 1 }],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    // 'react-hooks/exhaustive-deps': ['warn', { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' }],
  },
  settings: {
    'import/ignore': ['react-navigation'],
    react: {
      version: 'detect'
    }
  }
};

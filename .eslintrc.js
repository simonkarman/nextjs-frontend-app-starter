module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'max-len': ['error', { code: 150, ignoreComments: true, tabWidth: 2 }],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'no-process-env': 'off',
    'no-await-in-loop': 'off',
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-trailing-spaces': 'error',
    semi: ['error', 'always'],
    'no-unreachable': 'error',
    'no-unexpected-multiline': 'error',
    indent: ['error', 2],
    'space-infix-ops': ['error', { int32Hint: false }],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': 'error',
    'space-in-parens': 'error',
    'no-multi-spaces': 'error',
    'comma-spacing': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
        ],
      },
    ],
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-template-curly-in-string': 'off',
    'no-new': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ['.eslintrc.js', 'node_modules', 'build', 'public'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  rules: {
    // eslint rules
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'warn',
    'no-restricted-syntax': 'warn',
    'guard-for-in': 'warn',
    'prefer-const': 'warn',
    'consistent-return': 'warn',
    'no-return-assign': 'warn',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],

    // typescript rules
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/naming-convention': 'warn',

    // react rules
    'react/function-component-definition': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',

    // import rules
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/no-cycle': 'warn',

    // prettier rules
    'prettier/prettier': 'warn',
  },
};

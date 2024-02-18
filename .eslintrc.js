module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'object-curly-newline': ['error', { multiline: true }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/semi': [2, 'never'],
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'max-len': ['error', { code: 200 }],
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/no-danger': 'off',
    'import/order': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-exports': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off'
  }
}

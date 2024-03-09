module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    //* Avoid Bugs
    'no-undef': 'error',
    semi: [1, 'always'],
    'semi-spacing': 'error',
    //* Best Practices
    eqeqeq: 'warn',
    'no-invalid-this': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-constant-condition': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'req|res|next|__' }],
    'no-async-promise-executor': 'off',
    //* Enhance Readability
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-mixed-spaces-and-tabs': 'warn',
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    //
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-lines': ['error', { max: 500 }],
    'keyword-spacing': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-mixed-operators': 'error',
    //
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    complexity: ['error', { max: 7 }],
    'max-params': ['error', 5],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    //* ES6
    'arrow-spacing': 'error',
    'max-lines-per-function': ['error', { max: 50 }],
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'off',
    'prefer-const': 'error',
    'prefer-template': 'warn'
  }
};

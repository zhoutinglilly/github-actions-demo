/** @format */

module.exports = {
    parser: 'babel-eslint',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'react-app',
        'plugin:prettier/recommended',
        'react-app/jest',
    ],
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'off',
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
        }
    ]
}

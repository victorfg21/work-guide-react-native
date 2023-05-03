module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        'project': './tsconfig.json',
    },
    'plugins': [
        'react', 'react-hooks', '@typescript-eslint'
    ],
    'rules': {
        indent: ['error', 2, { SwitchCase: 1 }],
        quotes: ['error', 'single', { avoidEscape: true }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

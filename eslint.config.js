module.exports = {
    root: true,
    
    env: {
        browser: false, // Default to false
        node: true,
        es2021: true
    },
    
    extends: [
        'eslint:recommended',
        'plugin:jsdoc/recommended',
        'prettier' 
    ],
    
    rules: {
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'prefer-const': 'error',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-param-description': 'off',
    },

    overrides: [
        {
            files: ['src/**/*.js', 'src/**/*.mjs'],
            env: {
                browser: true, // It runs in the browser context
                node: false,
                es2021: true
            },
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 2021
            },
            rules: {
                'no-undef': 'error',
                'jsdoc/require-jsdoc': 'off',
            }
        },
        
        {
            files: ['docs/**/*.js'],
            env: {
                browser: true,
                node: false,
                es2021: true
            },
            parserOptions: {
                sourceType: 'script',
                ecmaVersion: 2021
            },
            rules: {
                'no-undef': 'off',
            }
        },

        {
            files: ['*.config.js', 'rollup.config.js'],
            env: {
                browser: false,
                node: true
            },
            parserOptions: {
                sourceType: 'script', // or 'module' if using ESM syntax in configs
                ecmaVersion: 2021
            },
            rules: {
                'no-console': 'off',
                'jsdoc/require-jsdoc': 'off',
            }
        }
    ]
};
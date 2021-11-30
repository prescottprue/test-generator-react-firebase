module.exports = {
  extends: [
    '../.eslintrc.js',
    // TODO: Uncomment when "Cannot read property 'nodejsScope' of undefined" is addressed
    // 'plugin:jsdoc/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['node', 'jsdoc', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', '/']
      }
    }
  },
  rules: {
    'no-console': 0,
    'jsdoc/newline-after-description': 0,
    // NOTE: This is added since eslint-plugin-import does not support exports in package.json
    // which is what firebase-admin v10 uses. See: https://github.com/import-js/eslint-plugin-import/issues/1810
    'import/no-unresolved': [
      2,
      {
        ignore: [
          'firebase-admin/app',
          'firebase-admin/database',
          'firebase-admin/auth',
          'firebase-admin/storage',
          'firebase-admin/firestore',
          'firebase-admin/messaging',
          'firebase-admin/project-management',
          'firebase-admin/remote-config',
          'firebase-admin/instanceId',
          'firebase-admin/machine-learning'
        ]
      }
    ],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    '@typescript-eslint/no-explicit-any': 0
  },
  overrides: [
    {
      files: ['./index.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    },
    {
      files: ['scripts/testSetup.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0
      }
    },
    {
      files: ['src/**/*.spec.ts'],
      env: {
        jest: true
      },
      globals: {
        functionsTest: true,
        projectId: true
      },
      rules: {
        'no-console': 0,
        'no-unused-expressions': 0,
        'import/no-dynamic-require': 0,
        'import/prefer-default-export': 0
      }
    }
  ]
}

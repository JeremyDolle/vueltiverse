module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['vue'],
  rules: {
    'semi': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/multiline-html-element-content-newline': 'error',
  },
};

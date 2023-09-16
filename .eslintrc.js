module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    // "vue/setup-compiler-macros": "true"
  },
  extends: [
    "./.eslintrc-auto-import.json",
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 解决ESlint和Prettier冲突
  ],
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
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/no-unused-vars': 1, // 禁止未使用的变量
    '@typescript-eslint/no-empty-function': 1, // 禁止空函数
    'no-param-reassign': 0, // 允许修改函数参数
    "vue/multi-word-component-names": 0, // 允许多个单词的组件名
  },
}
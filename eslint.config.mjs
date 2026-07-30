import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      'dist/**',
      'node_modules/**'
    ]
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...vue.configs['flat/recommended'],

  prettier,

  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],

    languageOptions: {
      parser: vueParser,

      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      },

      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      'no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off'
    },
  }
]
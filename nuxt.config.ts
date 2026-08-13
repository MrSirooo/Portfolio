// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  typescript: {
    typeCheck: true,
  },

  ssr: false,

  app: {
    baseURL: '/Portfolio/',
    head: {
      htmlAttrs: { lang: 'es' },
    },
  },

  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', file: 'es.json' },
      { code: 'en', language: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
  },
})

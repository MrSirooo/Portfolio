// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  typescript: {
    typeCheck: true,
  },

  ssr: false,

  app: {
    baseURL: '/Portfolio/',
  },
})

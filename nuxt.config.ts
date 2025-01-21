// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/scss/style.scss'],
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
    }
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  nitro: { routeRules: { '/api-campus/**': { proxy: { to: `${import.meta.env.API_BASE_URL as string}/**` } } } },
})
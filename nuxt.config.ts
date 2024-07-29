// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/test-utils/module'
  ],
  compatibilityDate: '2024-07-20',
  typescript: {
    shim: false
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
      config: {
        plugins: [tailwindTypography]
      }
    }
})

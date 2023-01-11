/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { backgroundPosition: '0' },
          '100%': { backgroundPosition: '-1600px' },
        }
      },
      animation: {
        marquee: 'marquee 30s ease-in-out infinite alternate'
      }
    }
  },
  plugins: [
    tailwindTypography,
  ],
}
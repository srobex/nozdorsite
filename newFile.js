export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nozdor',
    htmlAttrs: {
      lang: 'ru', // Установим русский язык
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сайт сервера Nozdor для WoW' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css', // Ваши глобальные стили
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // Для работы с API
  ],

  // Axios module configuration: https://axios.nuxtjs.org/options
  axios: {
    baseURL: '/api', // Используем прокси nginx для работы с бэкендом
  },

  // Server configuration for listening on 0.0.0.0
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000, // Порт для Nuxt.js
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Дополнительная настройка для оптимизации в продакшене
  },

  // Runtime environment variables
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nozdor.com',
  },
};

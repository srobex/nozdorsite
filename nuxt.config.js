// nuxt.config.js
export default {
  head: {
    title: 'Nozdor - Сервер World of Warcraft',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nozdor.com - лучший сервер World of Warcraft с уникальными возможностями и активным сообществом.' },
      { property: 'og:title', content: 'Nozdor - Сервер World of Warcraft' },
      { property: 'og:description', content: 'Nozdor.com - лучший сервер World of Warcraft с уникальными возможностями и активным сообществом.' },
      { property: 'og:image', content: 'https://nozdor.com/images/og-image.jpg' }, // Добавьте ваше изображение
      { property: 'og:url', content: 'https://nozdor.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
    ],
  },
  css: [
    '~/assets/css/main.css',
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: '/api',
  },
  build: { },
  // Server configuration for listening on 0.0.0.0
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 3000, // Порт для Nuxt.js
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nozdor.com',
  },
};

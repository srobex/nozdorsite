// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        dragon: {
          light: '#FFA500', // Оранжевый
          DEFAULT: '#FF4500', // Оранжево-красный
          dark: '#8B0000', // Тёмно-красный
        },
        // Добавьте другие кастомные цвета по необходимости
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-background.jpg')", // Замените на ваш путь к изображению
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
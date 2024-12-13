<template>
  <section class="hero-section relative h-screen flex items-center justify-center text-center overflow-hidden">
    <!-- Темный наложение для улучшения читаемости текста -->
    <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

    <!-- Контент -->
    <div class="relative z-10 px-4">
      <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-4">Добро пожаловать на сервер Nozdor</h1>
      <p class="text-lg md:text-2xl text-gray-300 mb-8">Погрузитесь в эпические приключения с драконами времени!</p>
      <div class="flex space-x-4 justify-center">
        <NuxtLink to="/register" class="bg-dragon hover:bg-dragon-dark text-white font-semibold py-3 px-6 rounded transition transform hover:scale-105">
          Зарегистрироваться
        </NuxtLink>
        <NuxtLink to="/login" class="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded transition transform hover:scale-105">
          Войти
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Дополнительная логика при необходимости
};
</script>

<style scoped>
.hero-section {
  background-image: url('/images/nozdor1.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-position 0.3s ease;
}

.hero-section:hover {
  background-position: center center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -2;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Темный наложение */
  z-index: -1;
}
</style>

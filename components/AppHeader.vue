<template>
  <header class="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <!-- Логотип -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo.png" alt="Nozdor Logo" class="h-8 w-auto mr-2">
      </NuxtLink>
      
      <!-- Навигационное меню для десктопов -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/news" class="text-gray-300 hover:text-white transition">Новости</NuxtLink>
        <NuxtLink to="/login" class="text-gray-300 hover:text-white transition">Войти</NuxtLink>
        <NuxtLink to="/register" class="text-gray-300 hover:text-white transition">Регистрация</NuxtLink>
        <NuxtLink to="/dashboard" class="text-gray-300 hover:text-white transition">Личный Кабинет</NuxtLink>
        <NuxtLink to="/admin" class="text-gray-300 hover:text-white transition">Админка</NuxtLink>
      </nav>
      
      <!-- Меню для мобильных устройств -->
      <div @click="toggleMenu" class="md:hidden text-gray-300 cursor-pointer">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    
    <!-- Мобильное меню -->
    <div v-if="isMenuOpen" class="md:hidden bg-black bg-opacity-80">
      <nav class="flex flex-col space-y-4 p-4">
        <NuxtLink to="/news" class="text-gray-300 hover:text-white transition">Новости</NuxtLink>
        <NuxtLink to="/login" class="text-gray-300 hover:text-white transition">Войти</NuxtLink>
        <NuxtLink to="/register" class="text-gray-300 hover:text-white transition">Регистрация</NuxtLink>
        <NuxtLink to="/dashboard" class="text-gray-300 hover:text-white transition">Личный Кабинет</NuxtLink>
        <NuxtLink to="/admin" class="text-gray-300 hover:text-white transition">Админка</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Дополнительные стили при необходимости */

/* Пример стилизации логотипа и текста */
header img {
  transition: transform 0.3s ease;
}

header img:hover {
  transform: scale(1.1);
}

header a span {
  transition: color 0.3s ease;
}

header a:hover span {
  color: #ffffff;
}
</style>

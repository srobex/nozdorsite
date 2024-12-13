<!-- frontend/components/Navbar.vue -->
<template>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-xl">Nozdor.com</div>
        <div>
          <NuxtLink to="/" class="text-gray-300 hover:text-white mx-2">Главная</NuxtLink>
          <NuxtLink to="/news" class="text-gray-300 hover:text-white mx-2">Новости</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-300 hover:text-white mx-2">Личный кабинет</NuxtLink>
          <NuxtLink to="/admin" class="text-gray-300 hover:text-white mx-2">Админка</NuxtLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Дополнительные стили при необходимости */
  </style>
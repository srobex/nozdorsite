<!-- frontend/pages/dashboard.vue -->
<template>
    <div class="max-w-4xl mx-auto mt-10">
      <h1 class="text-3xl mb-6">Личный кабинет</h1>
      <div v-if="user">
        <p>Добро пожаловать, {{ user.username }}!</p>
        <!-- Отображение информации о персонажах и статистики -->
        <div class="mt-4">
          <h2 class="text-2xl mb-2">Ваши персонажи</h2>
          <ul>
            <li v-for="char in characters" :key="char.guid" class="mb-2">
              {{ char.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
        characters: [],
      };
    },
    async mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }
  
      try {
        // Получение информации о пользователе
        const userResponse = await this.$axios.get('/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.user = userResponse.data;
  
        // Получение персонажей пользователя
        const charsResponse = await this.$axios.get(`/characters/user/${this.user.id}`);
        this.characters = charsResponse.data;
      } catch (error) {
        alert('Ошибка при загрузке данных');
        this.$router.push('/login');
      }
    },
  };
  </script>
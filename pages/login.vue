<!-- frontend/pages/login.vue -->
<template>
    <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl mb-4">Авторизация</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block">Пароль</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-green-500 text-white p-2 rounded">Войти</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.post('/users/login', {
            email: this.email,
            password: this.password,
          });
          // Сохранение токена
          localStorage.setItem('token', response.data.token);
          // Перенаправление на личный кабинет
          this.$router.push('/dashboard');
        } catch (error) {
          alert(error.response.data.message || 'Ошибка авторизации');
        }
      },
    },
  };
  </script>
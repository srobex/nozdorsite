<!-- frontend/pages/register.vue -->
<template>
    <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl mb-4">Регистрация</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block">Имя пользователя</label>
          <input v-model="username" type="text" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block">Пароль</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await this.$axios.post('/users/register', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          alert('Регистрация успешна!');
          this.$router.push('/login');
        } catch (error) {
          alert(error.response.data.message || 'Ошибка регистрации');
        }
      },
    },
  };
  </script>
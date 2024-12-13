<!-- frontend/pages/admin/create-news.vue -->
<template>
    <div class="max-w-md mx-auto mt-10">
      <h1 class="text-2xl mb-4">Создать новость</h1>
      <form @submit.prevent="createNews">
        <div class="mb-4">
          <label class="block">Заголовок</label>
          <input v-model="title" type="text" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block">Содержание</label>
          <textarea v-model="content" class="w-full p-2 border rounded" rows="5" required></textarea>
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Создать</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      async createNews() {
        try {
          const token = localStorage.getItem('token');
          await this.$axios.post('/news', {
            title: this.title,
            content: this.content,
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          alert('Новость создана');
          this.$router.push('/news');
        } catch (error) {
          alert(error.response.data.message || 'Ошибка создания новости');
        }
      },
    },
  };
  </script>
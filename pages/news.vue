<!-- frontend/pages/news.vue -->
<template>
    <div class="max-w-4xl mx-auto mt-10">
      <h1 class="text-3xl mb-6">Новости</h1>
      <div v-for="item in news" :key="item.id" class="mb-4 p-4 border rounded">
        <h2 class="text-2xl">{{ item.title }}</h2>
        <p>{{ item.content }}</p>
        <span class="text-gray-500 text-sm">Опубликовано: {{ new Date(item.createdAt).toLocaleString() }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        news: [],
      };
    },
    async mounted() {
      try {
        const response = await this.$axios.get('/news');
        this.news = response.data;
      } catch (error) {
        alert('Ошибка при загрузке новостей');
      }
    },
  };
  </script>
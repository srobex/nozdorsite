<!-- frontend/pages/admin.vue -->
<template>
    <div class="max-w-6xl mx-auto mt-10">
      <h1 class="text-3xl mb-6">Админка</h1>
      <!-- Таблицы, формы и другие элементы админки -->
      <div>
        <h2 class="text-2xl mb-4">Пользователи</h2>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2">ID</th>
              <th class="py-2">Имя</th>
              <th class="py-2">Email</th>
              <th class="py-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">{{ user.username }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <button @click="deleteUser(user.id)" class="bg-red-500 text-white px-2 py-1 rounded">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
      };
    },
    async mounted() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }
  
      try {
        const response = await this.$axios.get('/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.users = response.data;
      } catch (error) {
        alert('Ошибка при загрузке данных');
        this.$router.push('/login');
      }
    },
    methods: {
      async deleteUser(id) {
        if (!confirm('Вы уверены, что хотите удалить этого пользователя?')) return;
        try {
          await this.$axios.delete(`/admin/users/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          this.users = this.users.filter(user => user.id !== id);
        } catch (error) {
          alert('Ошибка при удалении пользователя');
        }
      },
    },
  };
  </script>
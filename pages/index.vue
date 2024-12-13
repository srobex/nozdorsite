<template>
  <div>
    <Hero />
    <Features />
    <!-- Добавьте дополнительные секции по мере необходимости -->
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import Features from '~/components/Features.vue';

export default {
  components: {
    Hero,
    Features,
  },
};
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>

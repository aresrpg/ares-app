<template lang="pug">
.page
</template>

<script setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { VITE_API_URL } from '../env';

const route = useRoute();

watchEffect(() => {
  const { query: { code } = {} } = route;
  fetch(`${VITE_API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      type: 'microsoft',
      code,
    }),
  });
});
</script>

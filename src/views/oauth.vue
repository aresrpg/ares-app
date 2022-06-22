<template lang="pug">
.page
  img.logo(src="../assets/logo.png")
  img.spinner(src="../assets/loadingcircle.png")
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { VITE_API_URL } from '../env';

const route = useRoute();
const router = useRouter();

onMounted(() => {
  const { query: { code } = {} } = route;
  fetch(`${VITE_API_URL}/oauth`, {
    method: 'POST',
    body: JSON.stringify({
      type: 'microsoft',
      code,
    }),
    credentials: 'include',
  })
    .then(() => {
      router.push('/');
    })
    .catch(error => console.error(error));
});
</script>

<style lang="stylus" scoped>
.page
  width 100vw
  height 100vh

  img
    position absolute
    top 50%
    left @top
    transform translate(-50%, -50%)

    &.logo
      width 80px
      object-fit contain
      left 50.5%
      animation float 3s ease-in-out infinite alternate

    &.spinner
      width 300px
      object-fit contain
      opacity .5
      filter drop-shadow(1px 2px 3px black)
      animation rotate 10s ease-in-out infinite reverse

@keyframes rotate
  from
    transform translate(-50%, -50%) rotate(0turn)
  to
    transform translate(-50%, -50%) rotate(1turn)

@keyframes float
  from
    transform translate(-50%, -50%) translateY(-5px)

  to
    transform translate(-50%, -50%) translateY(5px)
</style>

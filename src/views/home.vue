<template lang="pug">
.root__container
  navbar
  hero_sm(v-if="breakpoints.mobile.matches")
  hero(v-else)
</template>

<script setup>
import useBreakpoints from 'vue-next-breakpoints';
import { provide, ref } from 'vue';

import navbar from '../components/navbar.vue';
import hero from '../components/hero.vue';
import hero_sm from '../components/hero.sm.vue';

const logged = ref(false);
const wallet = ref({});

provide('logged', logged);
provide('wallet', wallet);

const breakpoints = useBreakpoints({
  mobile: 1000,
});
</script>

<style lang="stylus" scoped>
.root__container
  display flex
  flex-flow column nowrap
</style>

<template lang="pug">
.root_sm(v-if="breakpoints.mobile.matches")
  hero_mobile
  page_1_mobile
  page_2_mobile
  page_3_mobile
.root(v-else)
  hero
</template>

<script setup>
import useBreakpoints from 'vue-next-breakpoints';
import { provide, ref } from 'vue';

import hero from '../components/hero.vue';
import hero_mobile from '../components/hero.mobile.vue';
import page_1_mobile from '../components/page_1.mobile.vue';
import page_2_mobile from '../components/page_2.mobile.vue';
import page_3_mobile from '../components/page_3.mobile.vue';

const logged = ref(false);
const wallet = ref({});

const icon_size = '2x';

provide('logged', logged);
provide('wallet', wallet);

const breakpoints = useBreakpoints({
  mobile: 1000,
});
</script>

<style lang="stylus" scoped>
.root_sm
  // min-width 300px
  width 100vw
  overflow hidden
</style>

<template lang="pug">
.root_sm(v-if="breakpoints.mobile.matches")
  lang_selector
  hero_mobile
  page_1_mobile
  page_2_mobile
  page_3_mobile
  page_4_mobile
  page_5_mobile
  page_6_mobile
  page_7_mobile
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
import page_4_mobile from '../components/page_4.mobile.vue';
import page_5_mobile from '../components/page_5.mobile.vue';
import page_6_mobile from '../components/page_6.mobile.vue';
import page_7_mobile from '../components/page_7.mobile.vue';
import lang_selector from '../components/lang_selector.vue';

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

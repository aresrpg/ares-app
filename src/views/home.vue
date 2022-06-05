<template lang="pug">
.root__container
  navbar
  hero_sm(v-if="breakpoints.mobile.matches")
  hero(v-else)
</template>

<script setup>
import useBreakpoints from "vue-next-breakpoints"

import navbar from '../components/nav.vue';
import hero from '../components/hero.vue';
import hero_sm from '../components/hero.sm.vue';

const breakpoints = useBreakpoints({
  mobile: 1000,
});


</script>

<style lang="stylus" scoped>
.root__container
  display flex
  flex-flow column nowrap
</style>

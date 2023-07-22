<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { fade_up } from '../core/anime';

const c1 = ref();
const c2 = ref();
const c3 = ref();
const c4 = ref();

const animations = [
  fade_up(c1, 100),
  fade_up(c2, 100),
  fade_up(c3, 100),
  fade_up(c4, 100),
];

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.frame
  div(ref="c1")
  div(ref="c2")
  div(ref="c3")
  div(ref="c4")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  overflow hidden
  flex-flow column nowrap
  background url('../assets/background_noise.jpeg') center / cover
  div
    width 100%
    min-height 30vh
    box-shadow 1px 2px 3px black
  :nth-child(1)
    background url('../assets/s1.jpeg') center / cover
    z-index 4
  :nth-child(2)
    background url('../assets/s2.jpeg') center / cover
    z-index 3
  :nth-child(3)
    background url('../assets/s3.jpeg') center / cover
    z-index 2
  :nth-child(4)
    background url('../assets/s4.jpeg') center / cover
</style>

<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';

const props = defineProps(['count', 'selected']);
const percent = ref('0px');
const on_scroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = scrollTop / (docHeight - winHeight);
  percent.value = `${Math.round(scrollPercent * 100)}px`;
};

onMounted(() => window.addEventListener('scroll', on_scroll));
onBeforeUnmount(() => window.removeEventListener('scroll', on_scroll));
</script>

<template lang="pug">
.container
  span
</template>

<style lang="stylus" scoped>
.container
  position fixed
  top 50vh
  left .25em
  z-index 10
  transform translateY(-50%)
  display flex
  flex-flow column nowrap
  width 3px
  min-height 100px
  background rgba(#ddd, .5)
  backdrop-filter blur(20px)
  border-radius 10px
  span
    background #1976D2
    width 3px
    position absolute
    top 0
    height v-bind(percent)
    transition top .3s ease-in-out
    border-radius 10px
</style>

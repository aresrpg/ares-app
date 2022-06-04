<template lang="pug">
.root__container
  navbar
  hero
</template>

<script setup>
import navbar from '../components/nav.vue';
import hero from '../components/hero.vue';
</script>

<style lang="stylus" scoped>
.root__container
  display flex
  flex-flow column nowrap
</style>

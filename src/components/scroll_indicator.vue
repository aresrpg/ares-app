<script setup>
const props = defineProps(['count', 'selected']);
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
  height calc(10px * v-bind(props.count))
  background rgba(#ddd, .5)
  backdrop-filter blur(20px)
  border-radius 10px
  span
    background #1976D2
    width 3px
    height 10px
    position absolute
    top calc(10px * v-bind(props.selected))
    transition top .3s ease-in-out
    border-radius 10px
</style>

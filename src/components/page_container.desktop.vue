<script setup>
const props = defineProps(['img'])
</script>

<template lang="pug">
.page__container
  .delimiter(src="../assets/goldline1.png")
  img(:src="props.img")
  slot.page
</template>

<style lang="stylus" scoped>
.page__container
  margin-top 6px
  display flex
  flex-flow column nowrap
  width 100%
  position relative
  font-family 'DM Sans'
  color white
  // overflow hidden
  img
    width 100%
    height 400px
    z-index 5
    border-top-left-radius 30px
    border-top-right-radius 30px
    object-fit cover
  .delimiter
    position absolute
    left 0
    right 0
    top 0
    height 50px
    transform translateY(-55%)
    z-index 6
    background url('../assets/goldline1.png') repeat-x
    mix-blend-mode luminosity

:slotted(.page)
  width 100%
  height 100vh
  background url('../assets/ice_gradient.jpeg') center / cover
  border-bottom-left-radius 30px
  border-bottom-right-radius 30px
</style>

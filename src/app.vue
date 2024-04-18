<template lang="pug">
router-view
</template>

<script setup>
const name = 'app';
</script>

<style lang="stylus">
sc-reset()
    margin 0
    padding 0
    box-sizing border-box

sc-disableScollBar()
    ::-webkit-scrollbar
        display: none;

:root
  font-size 18px
  background #292827

.vue-universal-modal
  z-index 10

*
  sc-reset()
  sc-disableScollBar()
  font-family 'DM Sans'
  // font-family 'Montserrat'
  // font-family 'Roboto Condensed'
  outline none
  scroll-behavior smooth
  &::-webkit-scrollbar-track
    box-shadow inset 0 0 6px rgba(0, 0, 0, .3)
    background-color #555
  &::-webkit-scrollbar
    width 12px
    background-color #F5F5F5
  &::-webkit-scrollbar-thumb
    box-shadow inset 0 0 6px rgba(0, 0, 0, .3)
    background-color #252525
  a
    :active
      color #e1c79b
      fill #e1c79b
</style>

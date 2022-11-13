<script setup>
const props = defineProps(['title', 'desc', 'img'])
</script>

<template lang="pug">
.feature
  img(:src="props.img")
  .title {{ props.title }}
  .desc {{ props.desc }}
</template>

<style lang="stylus" scoped>
.feature
  display grid
  grid 'img title' max-content 'img desc' max-content / 60px 1fr
  backdrop-filter blur(20px)
  font-family 'Roboto Condensed'
  background rgba(black, .4)
  color white
  position relative
  padding .5em
  padding-left 0
  z-index 1
  grid-row-gap .1em
  border-radius 10px
  box-shadow 1px 2px 3px rgba(#212121, .5)
  margin .5em 1em
  img
    object-fit contain
    width 45px
    grid-area img
    place-self center center
  .title
    grid-area title
    font-size 13px
    text-transform uppercase
    place-self end start
    opacity .85
  .desc
    grid-area desc
    font-size 11px
    place-self start start
    opacity .65
</style>

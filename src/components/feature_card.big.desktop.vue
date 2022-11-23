<script setup>
const props = defineProps(['img', 'title', 'desc'])
</script>

<template lang="pug">
.big_card
  img(:src="props.img")
  .title {{ props.title }}
  .desc {{ props.desc }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))

.big_card
  display grid
  grid 'icon' 110px 'title' max-content 'desc' 120px / 350px
  place-items center center
  text-align center
  color white
  filter material-2
  font-family 'Roboto condensed'
  flex 1 1 30%
  transition transform 200ms ease-in-out
  grid-row-gap .5em
  @media screen and (max-width: 1200px)
    transform scale(.8)
  img
    object-fit contain
    width 95px
  .title
    font-size 1.1em
    opacity .8
    padding-top .5em
    text-shadow 1px 2px 3px rgba(black, .3)
  .desc
    font-size .875em
    font-weight 400
    opacity .65
    place-self flex-start
    padding 0 .5em
</style>

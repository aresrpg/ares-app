<script setup>
const props = defineProps(['img', 'title', 'desc']);
</script>

<template lang="pug">
.big_card
  img(:src="props.img")
  .title(v-if="props.title") {{ props.title }}
  img.title(v-else src="../assets/enoki.svg")
  .desc {{ props.desc }}
</template>

<style lang="stylus" scoped>
.big_card
  display flex
  flex-flow column nowrap
  text-align center
  justify-content center
  align-items center
  color white
  img
    object-fit contain
    width 50px
    filter drop-shadow(1px 2px 3px black)
    margin-bottom .5em
  img.title
    width 60px
  .title
    font-size 14px
    font-weight 700
    padding-bottom .5em
    text-shadow 1px 2px 3px rgba(black, .3)
  .desc
    font-size 12px
    font-weight 400
    opacity .7
    text-shadow 1px 2px 3px black
    max-width 250px
    font-family 'Montserrat'
</style>

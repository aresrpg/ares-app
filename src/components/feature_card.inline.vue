<script setup>
const { icon, title, desc } = defineProps(['icon', 'title', 'desc'])
</script>

<template lang="pug">
.inline_feature
  .title {{ title }}
  .desc {{ desc }}
  img(:src="icon")
</template>

<style lang="stylus" scoped>
.inline_feature
  display grid
  grid 'title icon' 40px 'desc icon' 1fr / 1fr 60px
  text-align end
  grid-column-gap 1em
  width max-content
  .title
    text-transform uppercase
    font-size 1.3em
    grid-area title
    place-self end end
  .desc
    font-size .9em
    font-weight 100
    opacity .65
    grid-area desc
    width 270px
    place-self end end
  img
    grid-area icon
    object-fit contain
    width 100%
    place-self center center
</style>

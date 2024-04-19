<script setup>
const { icon, title, desc } = defineProps(['icon', 'title', 'desc']);

const enoki_link = () => {
  window.open('https://enoki.mystenlabs.com/', '_blank');
};
</script>

<template lang="pug">
.inline_feature
  .title(v-if="title") {{ title }}
  img.title(src="../assets/enoki.svg" v-else @click="enoki_link")
  .desc {{ desc }}
  img.icon(:src="icon")
</template>

<style lang="stylus" scoped>
.inline_feature
  display grid
  grid 'title icon' 40px 'desc icon' 1fr / 1fr 60px
  text-align end
  grid-column-gap 1em
  width max-content
  img.title
    cursor pointer
  .title
    text-transform capitalize
    font-size 1.3em
    grid-area title
    place-self end end
  .desc
    font-size .9em
    font-weight 100
    opacity .65
    grid-area desc
    width 270px
    text-align justify
    place-self end end
  img.icon
    grid-area icon
    object-fit contain
    width 100%
    place-self center center
</style>

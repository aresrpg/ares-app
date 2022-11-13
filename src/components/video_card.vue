<script setup>
import { computed, ref } from '@vue/reactivity'
import { onMounted, onUnmounted, watch } from 'vue'

import play from '../assets/play-button.png'
import pause from '../assets/pause.png'

const props = defineProps(['video', 'selected', 'poster', 'title'])
const video = ref(null)
const emits = defineEmits('playing')
const playing = ref(false)
const current_button = computed(() => (playing.value ? pause : play))

const toggle = () => {
  if (video.value?.paused) {
    playing.value = true
    video.value.play()
    emits('playing', {
      video: video.value,
      reset_button: () => (playing.value = false),
    })
  } else {
    playing.value = false
    video.value.pause()
  }
}

watch(video, () => {
  playing.value = false
})
</script>

<template lang="pug">
.card(:class="{selected: props.selected}")
  video(ref="video" :key="props.video" loop :poster="props.poster")
    source(:src="props.video" type="video/mp4")
  img.button(:src="current_button" @click.stop="toggle")
  span.title {{ props.title }}
</template>

<style lang="stylus" scoped>
.card
  display flex
  justify-content center
  align-items center
  color white
  position relative
  font-family 'Roboto Condensed'
  border-radius 30px
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)
  width 70vw
  height 100%
  max-height 50vh
  overflow hidden
  transition max-height .5s ease-in-out
  margin 0 .5em
  &.selected
    max-height 65vh
  video
    width 100%
    height 100%
    object-fit cover
  img
    position absolute
    left 50%
    bottom 3em
    transform translateX(-50%)
    width 60px
    filter drop-shadow(1px 2px 3px black)
  .name
    position absolute
    font-weight 900
    font-size 1.4em
    left 1em
    bottom 1.5em
  .title
    opacity .65
    position absolute
    font-size .8em
    text-shadow 1px 2px 3px black
    left 50%
    transform translateX(-50%)
    top 1em
</style>

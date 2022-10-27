<script setup>
import { computed, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, watch } from 'vue';

import play from '../assets/play-button.png';
import pause from '../assets/pause.png';

const props = defineProps(['video']);
const video = ref(null);
const playing = ref(false);
const current_button = computed(() => (playing.value ? pause : play));

const toggle = () => {
  if (video.value?.paused) {
    playing.value = true;
    video.value.play();
  } else {
    playing.value = false;
    video.value.pause();
  }
};

watch(video, () => {
  playing.value = false;
});
</script>

<template lang="pug">
.card
  video(ref="video" :key="props.video")
    source(:src="props.video" type="video/mp4")
  img.button(:src="current_button" @click="toggle")
  .author AresRPG original soundtrack
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
  width 100%
  height 100%
  overflow hidden
  video
    width 100%
    height 100%
    object-fit cover
  img
    position absolute
    left 50%
    top 50%
    transform translate(-50%)
    width 100px
    filter drop-shadow(1px 2px 3px black)
  .name
    position absolute
    font-weight 900
    font-size 1.4em
    left 1em
    bottom 1.5em
  .author
    opacity .65
    position absolute
    left 1em
    bottom 1em
</style>

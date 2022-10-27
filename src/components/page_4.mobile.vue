<script setup>
import { ref } from 'vue';

import mirin from '../assets/mirin.mp4';
import farlands from '../assets/farlands.mp4';
import manracni from '../assets/manracni.mp4';

import video_card from './video_card.vue';

const videos = ref([manracni, mirin, farlands]);
const switch_left = () => {
  const [a, b, c] = videos.value;
  videos.value = [c, a, b];
};
const switch_right = () => {
  const [a, b, c] = videos.value;
  videos.value = [b, c, a];
};
</script>

<template lang="pug">
.frame
  .title Les musiques
  .desc Une bande originale vous bercera tout au long de votre aventure
  .sounds
    video_card.left(:video="videos[0]" @click.native="switch_left")
    video_card.center(:video="videos[1]")
    video_card.right(:video="videos[2]" @click="switch_right")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  width 100%
  height 100vh
  align-items center
  justify-content center
  color white
  background url('src/assets/background_noise.reverse.jpg') center / cover
  flex-flow column nowrap
  .title
    font-family 'Montserrat'
    font-size 1.3em
    font-weight 900
    text-align center
  .desc
    font-family 'DM Sans'
    font-weight 100
    font-size .875em
    opacity .65
    text-align center
    width 70%
    margin 1em
  .sounds
    width 300%
    display flex
    flex-flow row nowrap
    overflow hidden
    align-items center
    padding 1em
    >div
      height 55vh
      &.center
        flex 1 1 70%
        height 65vh
        width 70vw
        margin 0 1em
</style>

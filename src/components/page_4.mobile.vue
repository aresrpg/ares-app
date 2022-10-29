<i18n>
fr:
  title: Les musiques
  desc: Une bande originale vous bercera tout au long de votre aventure
en:
  title: Musics
  desc: An original soundtrack will bring more emotions to your adventure
</i18n>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import mirin from '../assets/mirin.mp4';
import farlands from '../assets/farlands.mp4';
import manracni from '../assets/manracni.mp4';
import thebes from '../assets/thebes.mp4';
import skylands from '../assets/skylands.mp4';
import drylands from '../assets/drylands.mp4';
import pandala from '../assets/pandala.mp4';

import video_card from './video_card.vue';

const { t } = useI18n();
const videos = ref([
  mirin,
  farlands,
  manracni,
  thebes,
  skylands,
  drylands,
  pandala,
]);
const to_left = ref(true);
const currently_playing = ref(null);

const switch_next = () => {
  to_left.value = true;
  currently_playing.value?.video?.pause();
  currently_playing.value?.reset_button?.();
  videos.value.push(videos.value.shift());
};
const switch_previous = () => {
  to_left.value = false;
  currently_playing.value?.video?.pause();
  currently_playing.value?.reset_button?.();
  videos.value.unshift(videos.value.pop());
};

const style_of = index => ({
  'z-index': to_left.value ? videos.value.length - index : index,
});

const middle_index = computed(() => Math.floor(videos.value.length / 2));
</script>

<template lang="pug">
.frame
  .title {{ t('title') }}
  .desc {{ t('desc') }}
  .sounds
    TransitionGroup(name="list")
      video_card(
        v-for="(video, index) in videos"
        @playing="current => currently_playing = current"
        :key="video"
        :style="style_of(index)"
        :video="video"
        :class="{ selected: index === middle_index }"
        @click="() => index >= middle_index ? switch_next() : switch_previous()"
      )
</template>

<style lang="stylus" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active
  transition all .5s ease-in-out
.list-enter-active
  // z-index -1
  position relative
.frame
  display flex
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
    width max-content
    height 65vh
    display flex
    flex-flow row nowrap
    overflow hidden
    align-items center
    justify-content center
    // padding 1em
</style>

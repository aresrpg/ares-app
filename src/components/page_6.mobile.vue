<i18n>
fr:
  home: Home
  support: Support
  careers: Recrutement
  play: Jouer
en:
  home: Home
  support: Support
  careers: Careers
  play: Play
</i18n>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

import { fade_up } from '../core/anime';

const c1 = ref();
const c2 = ref();
const c3 = ref();

const { t } = useI18n();
const animations = [fade_up(c1, 100), fade_up(c2, 100), fade_up(c3, 100)];
const scroll_top = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.frame
  div(ref="c1")
  div(ref="c2")
  div(ref="c3")
  footer
    .texts(ref="texts")
      .home(@click="scroll_top") {{ t('home') }}
      a.support(href="https://discord.gg/aresrpg" target="_blank") {{ t('support') }}
      a.carrers(href="https://discord.gg/aresrpg" target="_blank") {{ t('careers') }}
      a.play(href="https://play.aresrpg.world" target="_blank") {{ t('play') }}
    .designed(ref="designed") Designed & Integrated by #[a(href="https://sceat.xyz/" target="_blank") Sceat]
</template>

<style lang="stylus" scoped>
.frame
  display flex
  overflow hidden
  flex-flow column nowrap
  background url('../assets/background_noise.jpeg') center / cover
  >div
    width 100%
    min-height 30vh
    box-shadow 1px 2px 3px black
  >:nth-child(1)
    background url('../assets/art/valley-1.jpeg') center / cover
    z-index 4
  >:nth-child(2)
    background url('../assets/art/underwater-1.jpeg') center / cover
    z-index 3
  >:nth-child(3)
    background url('../assets/art/spider-cave.jpeg') center / cover
    z-index 2

footer
  width 100%
  height 100px
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  position relative
  .designed
    position absolute
    right 5px
    color white
    width max-content
    height max-content
    bottom 2px
    font-size .9em
    font-family 'Marck Script', cursive
    text-shadow 1px 2px 3px rgba(black, .5)
    a
      cursor pointer
      color #2ECC71
      text-decoration none
  .texts
    display flex
    flex-flow row nowrap
    text-transform uppercase
    font-size .7em
    font-weight 900
    >div, a
      text-decoration none
      color white
      cursor pointer
      padding 0 2em
      opacity .65
</style>

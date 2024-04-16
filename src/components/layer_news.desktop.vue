<i18n>
fr:
  title: News
  news: ARESRPG EST MAINTENANT SUR SUI, WOW! GRINDE LE LEADERBOARD SUR SUIQUESTS POUR GAGNER PLUS DE RECOMPENSES
  joinus: REJOINT LE DISCORD
en:
  title: News
  news: ARESRPG IS NOW ON SUI, WOW! GRIND THE LEADERBOARD ON SUIQUESTS TO EARN MORE REWARDS
  joinus: JOIN THE DISCORD
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { appear_right, minimal_fade_up } from '../core/anime';

const title = ref();
const { t } = useI18n();
const animations = [appear_right(title, 100)];
onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.container
  .title(ref="title") {{ t('title') }}
  .news {{ t('news') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
text-color = #eee
.container
  width 100%
  position absolute
  z-index 6
  color text-color
  top 100vh
  left 0
  transform translateY(-50%)
  -webkit-backdrop-filter blur(50px)
  backdrop-filter blur(50px)
  border-top 1px solid rgba(#a4b5c1, .7)
  border-bottom @border-top
  font-family 'DM Sans'
  display flex
  flex-flow column nowrap
  padding 1.5em 10%
  .title
    font-weight 900
    position relative
    width max-content
    margin-bottom 1em
    z-index 2
    &::after
      content ''
      position absolute
      height 1px
      width 500px
      top 50%
      right -@width - 10px
      transform translateY(-50%)
      filter material-2
      background text-color
  .news
    justify-self center
    text-align center
    z-index 2
</style>

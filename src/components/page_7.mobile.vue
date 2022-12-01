<i18n>
  fr:
    title: Les Paliers
    desc: Le monde d'AresRPG est constitué de 6 paliers. Un palier est une ile volante représentant un univers miniature et gardé par un des 6 dieux. Pour passer au palier suivant, vous devez trouver et affronter son gardien
  en:
    title: World Layers
    desc: AresRPG's world is made of 6 layers. A layer is kind of a floating island containing it's own universe and kept by a powerful God. To reach new layers you will have to find and vainquish it's keeper
  </i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { fade_up } from '../core/anime'

const { t } = useI18n()
const c1 = ref()
const c2 = ref()
const c3 = ref()

const animations = [fade_up(c1, 100), fade_up(c2, 200), fade_up(c3, 300)]

onMounted(() => animations.forEach(animation => animation.mount()))
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.frame
  .images
    div
    div
    div
    div
  .title {{ t('title') }}
  .desc {{ t('desc') }}
  .keys
    img.sword(ref="c1" src="../assets/fire_sword.png")
    img.gold_key(ref="c2" src="../assets/gold_key.png")
    img.silver_key(ref="c3" src="../assets/silver_key.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  overflow hidden
  color white
  background url('../assets/background_noise.reverse.jpg') center / cover
  align-items center
  text-align center
  padding 1em
  position relative
  .title
    font-family 'Montserrat'
    font-size 28px
    font-weight 900
    padding-top 2em
  .desc
    font-family 'DM Sans'
    font-size 15px
    opacity .65
    padding 1em
  .images
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 1em
    width 100%
    div
      box-shadow 1px 2px 3px black
      width 100%
      height 200px
      border-radius 12px
    :nth-child(1)
      background url('../assets/ss1.jpg') center / cover
      z-index 4
    :nth-child(2)
      background url('../assets/ss2.jpg') center / cover
      z-index 3
    :nth-child(3)
      background url('../assets/ss3.jpg') center / cover
      z-index 2
    :nth-child(4)
      background url('../assets/ss4.jpg') center / cover
  .keys
    height 200px
    img
      position absolute
      bottom 1em
    .sword
      left 1em
    .gold_key
      left 50%
      transform translateX(-30%)
    .silver_key
      right 1em
      bottom 4em
</style>

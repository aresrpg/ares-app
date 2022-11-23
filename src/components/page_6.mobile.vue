<i18n>
fr:
  title: Les Items
  desc: Sans équipement, vous ne tiendrez pas longtemps sur AresRPG. Vous pouvez crafter vos items, les obtenir directement en tuant certains monstres, ou encore les acheter aux autres joueurs
en:
  title: Items
  desc: Without equipments, you are going to die pretty fast on AresRPG. You can craft your items, loot them directly when killing specific monsters, or even use auctions houses to trade them
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { rotate_in } from '../core/anime'

const { t } = useI18n()
const c1 = ref()
const c2 = ref()
const c3 = ref()
const c4 = ref()

const animations = [
  rotate_in(c1, 200),
  rotate_in(c2, 400),
  rotate_in(c3, 600),
  rotate_in(c4, 800),
]

onMounted(() => animations.forEach(animation => animation.mount()))
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.frame
  .title {{ t('title') }}
  .desc {{ t('desc') }}
  .weapons
    img(ref="c1" src="../assets/bow_1.png")
    img(ref="c2" src="../assets/sword_2.png")
    img(ref="c3" src="../assets/staff2.png")
    img(ref="c4" src="../assets/sword_3.png")
  img.gif(src="../assets/axe_2.gif")
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
  padding-bottom 0
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
  .weapons
    display flex
    flex-flow row wrap
    justify-content center
    img
      width 50%
      max-width 300px
      padding .5em
      filter drop-shadow(1px 2px 3px black)
  .gif
    width 150%
    min-height 200px
    max-height 500px
    object-fit cover
</style>

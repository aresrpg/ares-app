<i18n>
fr:
  title: Les Items
  desc: Sans équipement, vous ne tiendrez pas longtemps sur AresRPG. Vous pouvez crafter vos items, les obtenir directement en tuant certains monstres, ou encore les acheter aux autres joueurs
en:
  title: Items
  desc: Without equipments, you are going to die pretty fast on AresRPG. You can craft your items, loot them directly when killing specific monsters, or even use auctions houses to trade them
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template lang="pug">
.frame
  .title {{ t('title') }}
  .desc {{ t('desc') }}
  .weapons
    img(src="../assets/bow_1.png")
    img(src="../assets/sword_2.png")
    img(src="../assets/Staff_2.png")
    img(src="../assets/sword_3.png")
  img.gif(src="../assets/axe_2.gif")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  overflow hidden
  color white
  background url('src/assets/background_noise.reverse.jpg') center / cover
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
  .weapons
    display flex
    flex-flow row wrap
    img
      width 50%
      padding .5em
      filter drop-shadow(1px 2px 3px black)
  .gif
    position absolute
    bottom 0
    left 50%
    transform translateX(-50%)
    width 150%
</style>

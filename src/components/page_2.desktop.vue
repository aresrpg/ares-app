<i18n>
fr:
  title: Un gameplay {exclusive}
  exclusive: exclusif
  desc: Pour débuter votre aventure, vous devrez choisir l'une des 4 classes disponibles.
  barbare: barbare
  barbare_bonus: haches
  barbare_desc: Les barbares sont des brutes qui massacrent leurs ennemis avec leurs muscles impressionnants, avant de rentrer chez eux pour un bon shaker de whey isolate
  paladin: paladin
  paladin_bonus: ÉPÉES
  paladin_desc: Les paladins protègent le royaume des créatures malfaisantes, ils sont respectés pour leur honneur et montre une aisance offensive aussi impressionnante que défensive
  archer: archer
  archer_bonus: Arcs
  archer_desc: Discrets et rapide, dotés d'une vision perçante, les archers sont de puissants alliés capable d'éliminer des cibles distantes
  mage: mage
  mage_bonus: BÂTONS
  mage_desc: Les mages sont d'excellents supports, capable de soigner leurs alliés ou de les protéger ! Attention toutefois aux sorts offensifs qui peuvent causer d'immenses dégâts en zone

en:
  title: An {exclusive} gameplay
  exclusive: exclusive
  desc: To start your adventure, you will have to chose one of the 4 available class
  barbare: Barbarian
  barbare_bonus: Axes
  barbare_desc: Barbarians are brutes who slaughter their enemies with their impressive muscles, before heading back home for a good protein shake
  paladin: Paladin
  paladin_bonus: Swords
  paladin_desc: Paladins protect the kingdom from evil creatures, they are respected for their honor and show as much offensive strength as defensive abilities
  archer: Archers
  archer_bonus: Bows
  archer_desc: Swift like the wind ! Born with a piercing vision, the archers are powerful allies capable of crushing distant targets
  mage: Mages
  mage_bonus: Sticks
  mage_desc: Mages are excellent supports, able to heal their allies and protect them! Beware however of offensive spells that can cause insane area damages.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { fade_left } from '../core/anime'
import snow from '../assets/snow.jpeg'
import barbarian from '../assets/barbarian_light.png'
import paladin from '../assets/paladin.png'
import archer from '../assets/archer.png'
import mage from '../assets/mage.png'

import class_card from './class_card.vue'
import page_container from './page_container.desktop.vue'

const { t } = useI18n()
const title = ref()
const bar = ref()
const desc = ref()

const animations = [
  fade_left(title, 100),
  fade_left(bar, 200),
  fade_left(desc, 300),
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
page_container(:img="snow")
  .page
    .top
      .title(ref="title")
        i18n-t(keypath="title")
          template(#exclusive)
            b {{ t('exclusive') }}
      .bar(ref="bar")
      .desc(ref="desc") {{ t('desc') }}
    .bottom
      class_card.barbare(:icon="barbarian" :title="t('barbare')" :desc="t('barbare_desc')" :weapon="t('barbare_bonus')" color="#A84E44")
      class_card.paladin(:icon="paladin" :title="t('paladin')" :desc="t('paladin_desc')" :weapon="t('paladin_bonus')" color="#7784B2")
      class_card.archer(:icon="archer" :title="t('archer')" :desc="t('archer_desc')" :weapon="t('archer_bonus')" color="#EDB460")
      class_card.mage(:icon="mage" :title="t('mage')" :desc="t('mage_desc')" :weapon="t('mage_bonus')" color="#E15C92")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  .top
    display grid
    grid 'title title .' 1fr '. middle .' 1fr '. desc desc' / 1.5fr 80px 1fr
    padding 3em 100px 1em 200px
    @media screen and (max-width: 1300px)
      grid 'title title title' 1fr '. middle .' 1fr '. desc desc' / 1.5fr 80px 1fr
    .title
      grid-area title
      font-size 3em
      text-transform uppercase
      filter material-2
      place-self center end
      font-weight 100
      b
        display inline
        color #2ECC71
        font-weight 900
    .desc
      font-weight 100
      place-self center start
      font-family 'Montserrat'
      font-size 1.1em
    .bar
      grid-area middle
      place-self center center
      width 1px
      height 50px
      background white
      filter material-2
    .desc
      grid-area desc
  .bottom
    display grid
    grid-template-columns 1fr 1fr
    margin 3em
    grid-column-gap 100px
    place-items center start
    flex 1
    >:nth-child(odd)
      place-self center end
</style>

<i18n>
fr:
  ip: play.aresrpg.world
  desc: AresRPG est un serveur minecraft sans mods dans lequel votre objectif est de réunir les 6 œufs de dragon. Le monde est infesté de créatures que vous devrez réduire en poussière pour améliorer votre équipement et vos compétences
  title: Entrez dans La Legende
  trailer: Trailer
  class: Classes
  game: Jeu
  server: Serveur
  assets: Assets
  layers: Mondes
  copy: adresse copiée
en:
  desc: AresRPG is a no-mods mmorpg minecraft server in which your goal is to find all 6 dragons eggs. The world is infested of creatures that you will need to fight and destroy in order to upgrade your equipment and stats
  title: A Delightful RP Adventure
  trailer: Trailer
  class: Classes
  game: Game
  server: Server
  assets: Assets
  layers: Worlds
  copy: copied to clipboard
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import {
  anime,
  appear_left,
  appear_right,
  minimal_fade_up,
} from '../core/anime'

const toast = useToast()
const { t } = useI18n()
const props = defineProps(['page', 'scroller'])

const on_copy = () => toast.info(t('copy'))

const ip = ref()
const logo = ref()
const nav = ref()
const desc = ref()
const title = ref()
const animations = [
  anime({ translateY: ['-100%', 0], translateX: ['-50%', '-50%'] })(ip, 200),
  appear_left(logo, 100),
  appear_right(nav, 2000),
  minimal_fade_up(desc, 400),
  minimal_fade_up(title, 800),
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.container
  .grain
  .fog
  img.logo(ref="logo" src="../assets/logo.png")
  .ip(
    ref="ip"
    v-clipboard:copy="'play.aresrpg.world'"
    v-clipboard:success="on_copy"
    ) {{ t('ip') }}
  nav(ref="nav")
    .trailer(@click="props.scroller.trailer" :class="{ selected: props.page === 'trailer' }") {{ t('trailer') }}
    .class(@click="props.scroller.classes" :class="{ selected: props.page === 'classes' }") {{ t('class') }}
    .game(@click="props.scroller.gameplay" :class="{ selected: props.page === 'gameplay' }") {{ t('game') }}
    .server(@click="props.scroller.server" :class="{ selected: props.page === 'server' }") {{ t('server') }}
    .assets(@click="props.scroller.assets" :class="{ selected: props.page === 'assets' }") {{ t('assets') }}
    .layers(@click="props.scroller.worlds" :class="{ selected: props.page === 'worlds' }") {{ t('layers') }}
  .left
    .desc(ref="desc") {{ t('desc') }}
    .title(ref="title") {{ t('title') }}
  .right
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
classic = 1px 2px 3px black

.container
  width 100%
  height 100vh
  border-top-left-radius 30px
  border-top-right-radius 30px
  background url('../assets/ice_dragon.jpeg') center / cover
  font-family 'Roboto Condensed'
  display flex
  flex-flow row nowrap
  color white
  align-items center
  position relative
  .left
    position relative
    flex 1 1 50%
    display flex
    flex-flow column nowrap
    margin-left 130px
    z-index 2
    .desc
      max-width 600px
      text-align right
      filter material-2
      position relative
      z-index 2
      &::after
        content ''
        position absolute
        width 1px
        height 150px
        bottom -@height - 10px
        left 60%
        box-shadow classic
        background white
    .title
      padding-top 200px
      max-width 700px
      font-size 7em
      font-weight 900
      filter material-2
      z-index 1
  .grain
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background url('../assets/iron-grid.png') repeat
    opacity .2
    z-index 2
  img
    position absolute
    top 2em
    left 2.5em
    mix-blend-mode luminosity
    width 65px
    z-index 2
    filter drop-shadow(1px 2px 3px black)
    object-fit contain
  nav
    position fixed
    top 5em
    right 1em
    text-transform uppercase
    align-items flex-end
    font-size .7em
    display flex
    flex-flow column nowrap
    z-index 10
    text-shadow 1px 2px 3px black
    >div
      cursor pointer
      opacity .7
    .selected
      position relative
      opacity 1
      &::before
        content ''
        position absolute
        top 50%
        left -50px
        transform translateY(-50%)
        width 40px
        height 1px
        box-shadow 1px 2px 3px black
        background white
  .ip
    position fixed
    top 1em
    font-family 'DM Sans'
    left 50%
    transform translateX(-50%)
    text-shadow classic
    letter-spacing 7px
    font-weight 900
    mix-blend-mode exclusion
    text-transform uppercase
    z-index 50
    cursor pointer
  .fog
    position absolute
    bottom 0
    left 0
    width 100%
    height 100vh
    z-index 3
    display flex
    background url('../assets/fog.png') bottom / cover
</style>

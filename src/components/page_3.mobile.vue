<i18n>
fr:
  title: Rejoins AresRPG sur les réseaux
  forum: Le forum se trouve sur le discord
  hire: Recrute pour DJ champs, lvl 15 mini
  buy: J'achète toutes vos gemmes hades 100po/u, mp moi
en:
  title: Join us on our socials
  forum: Forum is available on the discord
  hire: Recruit for Aragog dungeon, lvl 15 mini
  buy: Buying all your wheat 100gc/u, dm me
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { rotate_in, appear_left, appear_right } from '../core/anime'

const { t } = useI18n()
const a0 = ref()
const a1 = ref()
const a2 = ref()
const a3 = ref()
const a4 = ref()
const a5 = ref()
const a6 = ref()
const a7 = ref()
const a8 = ref()
const a9 = ref()

const m1 = ref()
const m2 = ref()

const animations = [
  rotate_in(a0, 300),
  rotate_in(a1, 400),
  rotate_in(a2, 500),
  rotate_in(a3, 600),
  rotate_in(a4, 700),
  rotate_in(a5, 800),
  rotate_in(a6, 900),
  rotate_in(a7, 1000),
  rotate_in(a8, 1100),
  rotate_in(a9, 1200),
  appear_left(m1, 100),
  appear_right(m2, 100),
]

onMounted(() => animations.forEach(animation => animation.mount()))
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.frame
  .top_img
  .title {{ t('title') }}
  .socials
    a(ref="a0" href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
      img.yt(src="../assets/youtube.png")
    a(ref="a1" href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
      img.tw(src="../assets/twitter.png")
    a(ref="a2" href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="discord")
      img.discord(src="../assets/discord.png")
    a(ref="a3" href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
      img.github(src="../assets/github_square.png")
    a(ref="a4" href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="../assets/telegram.png")
    a(ref="a5" href="https://www.reddit.com/r/aresrpg/" target="_blank" rel="noopener noreferrer" aria-label="reddit")
      img.reddit(src="../assets/reddit.png")
    a(ref="a6" href="https://instagram.com/ares_rpg" target="_blank" rel="noopener noreferrer" aria-label="instagram")
      img.insta(src="../assets/instagram.png")
    a(ref="a7" href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="medium")
      img.medium(src="../assets/medium.png")
    a(ref="a8" href="https://tiktok.com/@aresrpg.world" target="_blank" rel="noopener noreferrer" aria-label="tiktok")
      img.tiktok(src="../assets/tiktok.png")
    a(ref="a9" href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="twitch")
      img.twitch(src="../assets/twitch.png")
  .forum
    img(src="../assets/chat-bubble.png")
    span {{ t('forum') }}
  .msgs
    .first(ref="m1") {{ t('hire') }}
    .second(ref="m2") {{ t('buy') }}
    img.ares(src="../assets/logo.png")
    img.parrot(src="../assets/parrot.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  background url('../assets/background_noise.jpeg') center / cover
  position relative
  color white
  align-items center
  .top_img
    box-shadow inset -3px -3px 10px black
    width 100vw
    height 25vh
    display flex
    z-index 1
    background url('../assets/screenshot2.jpg') center / cover
  .title
    padding-top 2em
    font-weight 600
    font-size 1.3em
    text-align center
  .socials
    display flex
    flex-flow row wrap
    padding 1em 2em
    justify-content center
    a
      width 60px
      height 60px
      padding .2em
      margin .25em .5em
      filter drop-shadow(1px 2px 3px black)
      img
        width 100%
        height 100%
        object-fit contain
  .forum
    font-family 'Roboto Condensed'
    font-size 16px
    font-weight 100
    display flex
    z-index 1
    flex-flow row nowrap
    justify-content center
    align-items center
    padding 1em
    span
      padding-left 1em
    >img
      width 34px
  .msgs
    font-family 'Roboto Condensed'
    font-weight 100
    display flex
    margin-top 3em
    flex-flow column nowrap
    width 100%
    >div
      border-radius 24px
      backdrop-filter blur(20px)
      box-shadow 1px 2px 3px #212121
      padding 1em
      position relative
      background rgba(black, .4)
      font-size 16px
      z-index 1
      opacity .9
      margin .5em
      // width max-content
      color rgba(white, .6)
      &.first
        margin-top 1em
        border-top-right-radius 0
        align-self flex-end
      &.second
        border-top-left-radius 0
        width max-content
    img
      position absolute
      z-index 0
      &.ares
        width 35vw
        max-width 100px
        bottom 1em
        left 50%
        transform translateX(-50%)
        opacity .65
      &.parrot
        width 50px
        right 2em
        bottom 1em
</style>

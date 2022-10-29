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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template lang="pug">
.frame
  .top_img
  .title {{ t('title') }}
  .socials
    a(href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
      img.yt(src="src/assets/youtube.png")
    a(href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
      img.tw(src="src/assets/twitter.png")
    a(href="https://discord.gg/kpzNeCW" target="_blank" rel="noopener noreferrer" aria-label="discord")
      img.discord(src="src/assets/discord.png")
    a(href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
      img.github(src="src/assets/github_square.png")
    a(href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="src/assets/telegram.png")
    a(href="https://www.reddit.com/r/aresrpg/" target="_blank" rel="noopener noreferrer" aria-label="reddit")
      img.reddit(src="src/assets/reddit.png")
    a(href="https://instagram.com/ares_rpg" target="_blank" rel="noopener noreferrer" aria-label="instagram")
      img.insta(src="src/assets/instagram.png")
    a(href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="medium")
      img.medium(src="src/assets/medium.png")
    a(href="https://tiktok.com/@aresrpg.world" target="_blank" rel="noopener noreferrer" aria-label="tiktok")
      img.tiktok(src="src/assets/tiktok.png")
    a(href="https://twitch.tv" target="_blank" rel="noopener noreferrer" aria-label="twitch")
      img.twitch(src="src/assets/twitch.png")
  .forum
    img(src="src/assets/chat-bubble.png")
    span {{ t('forum') }}
  .msgs
    .first {{ t('hire') }}
    .second {{ t('buy') }}
    img.ares(src="src/assets/logo.png")
    img.parrot(src="src/assets/parrot.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  background url('src/assets/background_noise.jpeg') center / cover
  position relative
  color white
  font-family 'Montserrat'
  align-items center
  .top_img
    box-shadow inset -3px -3px 10px black
    width 100vw
    height 25vh
    display flex
    z-index 1
    background url('src/assets/screenshot2.jpg') center / cover
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
      margin .5em
      // width max-content
      color rgba(white, .6)
      &.first
        margin-top 1em
        border-top-right-radius 0
        align-self flex-end
      &.second
        border-top-left-radius 0
    img
      position absolute
      z-index 0
      &.ares
        width 35vw
        bottom 1em
        left 50%
        transform translateX(-50%)
        opacity .65
      &.parrot
        width 50px
        right 2em
        bottom 1em
</style>

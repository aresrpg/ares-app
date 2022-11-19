<i18n>
fr:
  title: Premier arrivé, premier servi
  desc: Les places pour la bêta du serveur sont limitées. Rejoint vite la liste d'attente pour ne rien manquer !
  trailer: Trailer Officiel
en:
  title: First come, first serve
  desc: Beta slots are limited, join the list asap to not miss anything !
  trailer: Official Trailer
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

import mail from './mail_input.vue'
const { t } = useI18n()
</script>

<template lang="pug">
.container
  .fog
  .cta
    .social_left
      a(ref="a0" href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
        img.yt(src="../assets/youtube.png")
      a(ref="a1" href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
        img.twitter(src="../assets/twitter.png")
      a(ref="a2" href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="discord")
        img.discord(src="../assets/discord.png")
      a(ref="a3" href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
        img.github(src="../assets/github_square.png")
    .input_container
      mail
      .title {{ t('title') }}
      .desc {{ t('desc') }}
    .social_right
    a(ref="a4" href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="../assets/telegram.png")
    a(ref="a5" href="https://www.reddit.com/r/aresrpg/" target="_blank" rel="noopener noreferrer" aria-label="reddit")
      img.reddit(src="../assets/reddit.png")
    a(ref="a6" href="https://instagram.com/ares_rpg" target="_blank" rel="noopener noreferrer" aria-label="instagram")
      img.insta(src="../assets/instagram.png")
    a(ref="a8" href="https://tiktok.com/@aresrpg.world" target="_blank" rel="noopener noreferrer" aria-label="tiktok")
      img.tiktok(src="../assets/tiktok.png")
  .trailer
    .text {{ t('trailer') }}
    iframe(width="560" height="315" src="https://www.youtube.com/embed/oqUz8cXZTIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .video
    .text {{ t('trailer') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
classic = 1px 2px 3px black

.container
  width 100%
  height 100vh
  background url('../assets/ice_gradient.jpeg') center / cover
  font-family 'DM Sans'
  display flex
  flex-flow column nowrap
  color white
  align-items center
  position relative
  padding-top 100px
  .trailer
    display flex
    flex-flow row nowrap
    flex 1
    justify-content center
    align-items center
    position relative
    width 100%
    z-index 1
    padding 2em
    .text
      text-transform uppercase
      width max-content
      height max-content
      color rgba(#2C3E50, .2)
      -webkit-text-stroke-width 1px
      -webkit-text-stroke-color black
      letter-spacing 5px
      line-height 60px
      font-weight 900
      font-size 3.3em
      writing-mode vertical-lr
    iframe
      border-radius 12px
      overflow hidden
      object-fit contain
      width 70vw
      height 100%
      max-width 1200px
      max-height 600px
  .cta
    display flex
    flex-flow row nowrap
    position relative
    z-index 2
    img
      width 50px
      margin 0 1em
      object-fit contain
      filter drop-shadow(classic)
      opacity .7
      @media screen and (max-width: 1378px)
        margin 0.35em
    .input_container
      margin 0 2em
      display flex
      flex-flow column nowrap
      justify-content center
      align-items center
      position relative
      .input_box
        border 1px solid white
        position relative
        border-radius 30px
        width 100%
        max-width 350px
        margin-bottom .5em
        box-shadow 1px 2px 3px rgba(#212121, .5)
        input
          padding 1em
          background none
          color white
          border none
        .icon
          position absolute
          top 50%
          right .75em
          transform translateY(-50%)
      .title
        text-transform uppercase
        font-weight 500
        font-size 1em
        filter material-2
        padding .5em
      .desc
        font-weight 100
        text-align center
        font-size .9em
        max-width 400px
  .fog
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    z-index 1
    background url('../assets/fog.png') top / cover
    transform rotate(180deg)
</style>

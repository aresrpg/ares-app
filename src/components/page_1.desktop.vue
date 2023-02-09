<i18n>
fr:
  title: Se connecter
  desc: Connecte ton compte Minecraft et récupère tes récompenses Mastery
  trailer: Trailer Officiel
en:
  title: Launch app
  desc: Connect your Minecraft account and claim your Mastery rewards
  trailer: Official Trailer
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import app_button from './app_button.vue'

import { rotate_in, fade_in } from '../core/anime'

const a0 = ref()
const a1 = ref()
const a2 = ref()
const a3 = ref()
const a4 = ref()
const a5 = ref()
const a6 = ref()
const a8 = ref()
const trailer1 = ref()
const trailer2 = ref()
const { t } = useI18n()
const animations = [
  rotate_in(a0, 100),
  rotate_in(a1, 200),
  rotate_in(a2, 300),
  rotate_in(a3, 400),
  rotate_in(a4, 500),
  rotate_in(a5, 600),
  rotate_in(a6, 700),
  rotate_in(a8, 800),
  fade_in(trailer1, 700),
  fade_in(trailer2, 700),
]
onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))

const open_app = () => {
  window.open('https://app.aresrpg.world', '_blank')
}
</script>

<template lang="pug">
.container
  .fog
  .cta
    a(ref="a0" href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
      img.yt(src="../assets/youtube.png")
    a(ref="a1" href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
      img.twitter(src="../assets/twitter.png")
    a(ref="a2" href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="discord")
      img.discord(src="../assets/discord.png")
    a(ref="a3" href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
      img.github(src="../assets/github_square.png")
    .input_container
      app_button(
        clickable="true"
        @click="open_app"
        )
        template(#content)
          span.button {{ t('title') }}
          img.button(src="../assets/treasure-chest.png")
      .desc {{ t('desc') }}
    a(ref="a4" href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="../assets/telegram.png")
    a(ref="a5" href="https://www.reddit.com/r/aresrpg/" target="_blank" rel="noopener noreferrer" aria-label="reddit")
      img.reddit(src="../assets/reddit.png")
    a(ref="a6" href="https://instagram.com/ares_rpg" target="_blank" rel="noopener noreferrer" aria-label="instagram")
      img.insta(src="../assets/instagram.png")
    a(ref="a8" href="https://tiktok.com/@aresrpg.world" target="_blank" rel="noopener noreferrer" aria-label="tiktok")
      img.tiktok(src="../assets/tiktok.png")
  .trailer
    .text(ref="trailer1") {{ t('trailer') }}
    //- img(src="../assets/comingsoon.jpeg")
    iframe(width="560" height="315" src="https://www.youtube.com/embed/_vSGW0Je-Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .video
    .text(ref="trailer2") {{ t('trailer') }}
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
  border-bottom-left-radius 30px
  border-bottom-right-radius 30px
  min-height 900px
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
      @media screen and (max-width: 1384px)
        letter-spacing 0
    img
      border-radius 12px
      object-fit contain
      width 70vw
      max-width 1200px
      filter material-2
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
    a>img
      width 50px
      margin 0 1.5em
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

      img.button
        width 25px
        filter drop-shadow(1px 2px 3px black)
        margin-right .75em
        object-fit contain
      span.button
        margin 0 .5em 0 .75em
        color #34495E
      .title
        text-transform uppercase
        font-weight 500
        font-size 1em
        filter material-2
        padding .5em
      .desc
        font-weight 900
        padding-top .5em
        text-align center
        font-size .6em
        max-width 300px
        text-transform uppercase
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

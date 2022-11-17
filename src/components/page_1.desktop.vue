<i18n>
fr:
  placeholder: Participer a la bêta..
  title: Premier arrivé, premier servi
  desc: Les places pour la bêta du serveur sont limitées. Rejoint vite la liste d'attente pour ne rien manquer !
  trailer: Trailer Officiel
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template lang="pug">
.container
  .fog
  .cta
    .social_left
      img.yt(src="../assets/youtube.png")
      img.twitter(src="../assets/twitter.png")
      img.discord(src="../assets/discord.png")
      img.github(src="../assets/github.png")
    .input_box
      input
      .title {{ t('title') }}
      .desc {{ t('desc') }}
    .social_right
      img.telegram(src="../assets/telegram.png")
      img.reddit(src="../assets/reddit.png")
      img.insta(src="../assets/instagram.png")
      img.tiktok(src="../assets/tiktok.png")
  .trailer
    .text {{ t('trailer') }}
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
  .cta
    display flex
    flex-flow row nowrap
    img
      width 70px
      object-fit contain
  .fog
    position absolute
    top 0
    left 0
    width 100%
    height 100vh
    z-index 1
    background url('../assets/fog.png')
    transform rotate(180deg)
</style>

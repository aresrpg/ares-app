<i18n>
fr:
  mods: Aucun Mods
  mods_desc: Vous pouvez rejoindre le serveur avec le client Minecraft officiel
  metaverse: METAVERSE
  metaverse_desc: Les ArtWork et assets communautaires sous forme de NFT pourront être utilisés en jeu et parfaire votre style
  guild: Guildes
  guild_desc: Jouez en groupe pour raid les donjons, ou fondez votre guilde pour contrôler les terres d'AresRPG en communauté
  instance: UNE INSTANCE
  instance_desc: Le serveur est développé entièrement en JavaScript pour supporter des milliers de joueurs sur la même map
  open: Open source
  open_desc: AresRPG est open-source, vous pouvez meme lancer votre propre version du jeu
  immersive: immersif
  immersive_desc: Nous ajoutons une tonne de nouveaux son et models 3D
  server: Le serveur
  server_desc: AresRPG n'est pas juste un ensemble de plugins, c'est un serveur à part entière qui communique avec le client Minecraft en utilisant uniquement le protocole. À la différence des implémentations comme Spigot, seuls les mécaniques qui nous sont utiles sont implémentées.
en:
  mods: No mods
  mods_desc: You can join the server with the official Minecraft client
  metaverse: Metaverse
  metaverse_desc: Artworks and community NFT assets will be able to be used in game as cosmetics
  guild: Guilds
  guild_desc: Play in group to raid dungeons, or create your own guild to control lands on AresRPG
  instance: Single instance
  instance_desc: The server is written entirely in JavaScript to support thousands of concurrent players on the same world
  open: Open Source
  open_desc: AresRPG is open-source, you can even launch your own version of the game
  immersive: Immersive
  immersive_desc: We add a ton of new musics and 3D models
  server: The Server
  server_desc: AresRPG isn't just a pack of plugins, It's a fully fledged server which communicate with the Minecraft client through its protocol only. Unlike implementations like Spigot, only our own RPG mechanics are added

</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

import bg from '../assets/page4bg.jpeg'
import box from '../assets/open-box.png'
import metaverse from '../assets/metaverse.png'
import guild from '../assets/guild.png'
import feathers from '../assets/feathers.png'
import github from '../assets/github.png'
import earth from '../assets/earth.png'

import feature_card from './feature_card.inline.vue'
import page_container from './page_container.desktop.vue'

const { t } = useI18n()
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .left
      feature_card(:icon="box" :title="t('mods')" :desc="t('mods_desc')")
      feature_card(:icon="metaverse" :title="t('metaverse')" :desc="t('metaverse_desc')")
      feature_card(:icon="guild" :title="t('guild')" :desc="t('guild_desc')")
      feature_card(:icon="feathers" :title="t('instance')" :desc="t('instance_desc')")
      feature_card(:icon="github" :title="t('open')" :desc="t('open_desc')")
      feature_card(:icon="earth" :title="t('immersive')" :desc="t('immersive_desc')")
    .center
      img.circle(src="../assets/circle.png")
      img.helmet(src="../assets/spartan.png")
    .right
      .title
        .lines
        .text {{ t('server') }}
      .desc {{ t('server_desc') }}
      img.code(src='../assets/code.png')
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow row nowrap
  padding 2em 2em 0 1em
  .left
    display flex
    flex-flow column nowrap
    justify-content space-evenly
    align-items center
    place-self center
    // width 30vw
    flex 1 1 30%
    >div
      margin 1em 0
  .center
    display flex
    justify-content center
    align-items center
    position relative
    flex 1 2 30%
    @media screen and (max-width: 1250px)
      display none
    .helmet
      mix-blend-mode multiply
      max-width 600px
      width 100%
      height auto
      z-index 1
      object-fit contain
    .circle
      position absolute
      width 800px
      top 50%
      left 50%
      mix-blend-mode luminosity
      transform translateY(-50%) translateX(-50%)
      @media screen and (max-width: 1300px)
        display none
  .right
    position relative
    display flex
    flex-flow column nowrap
    justify-content center
    flex 1 1 30%
    .title
      font-size 3em
      font-weight 600
      display flex
      flex-flow row nowrap
      align-items center
      .lines
        border 1px solid white
        border-bottom 0
        border-right 0
        width 70px
        height 50px
        margin 1em .25em .1em 2em
        filter drop-shadow(1px 2px 3px black)
    .desc
      text-align end
      padding-right 2em
    img
      object-fit contain
      min-width 550px
      width 100%
      margin-top 2em
      mix-blend-mode lighten
      align-self flex-end
</style>

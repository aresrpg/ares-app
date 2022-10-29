<i18n>
fr:
  title: Une Aventure vanilla
  desc: mais sous
  mods: Aucun Mods
  mods_desc: Vous pouvez rejoindre le serveur avec le client Minecraft officiel
  instance: Une Instance
  instance_desc: Le serveur est développé entièrement en JavaScript pour supporter des milliers de joueurs sur la même map
  source: Open Source
  source_desc: AresRPG est open-source, vous pouvez meme lancer votre propre version du jeu
  immersif: Immersif
  immersif_desc: Nous ajoutons une tonne de nouveaux son et models 3D
  meta: Metaverse
  meta_desc: Les ArtWork et assets communautaires sous forme de NFT pourront être utilisés en jeu et parfaire votre style
  guilds: Guildes
  guilds_desc: Jouez en groupe pour raid les donjons, ou fondez votre guilde pour contrôler les terres d’AresRPG en communauté
en:
  title: A vanilla Adventure
  desc: but on
  mods: No Mods
  mods_desc: You can join the server with the official Minecraft client
  instance: Seamless
  instance_desc: The server is written entirely in JavaScript to support thousands of players on the same map
  source: Open Source
  source_desc: AresRPG is open source, you can even run your own fork of the server
  immersif: Immersive
  immersif_desc: We add a ton of new sounds and 3D models
  meta: Metaverse
  meta_desc: Artworks and communautary assets will have the possibility of being used in game to show off
  guilds: Guilds
  guilds_desc: Play in groups to raid dungeons, or create your own guild and control AresRPG's lands with your community
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';

import card from './feature_card.big.vue';
import feature from './feature_card.vue';

const { t } = useI18n();
</script>

<template lang="pug">
.frame
  .title {{ t('title') }}
  .desc {{ t('desc') }} #[b steroids]
  .cards
    card(
      img="src/assets/open-box.png"
      :title="t('mods')"
      :desc="t('mods_desc')"
    )
    card(
      img="src/assets/feathers.png"
      :title="t('instance')"
      :desc="t('instance_desc')"
    )
    card(
      img="src/assets/github.png"
      :title="t('source')"
      :desc="t('source_desc')"
    )
    card(
      img="src/assets/earth.png"
      :title="t('immersif')"
      :desc="t('immersif_desc')"
    )
    card(
      img="src/assets/metaverse.png"
      :title="t('meta')"
      :desc="t('meta_desc')"
    )
    card(
      img="src/assets/guild.png"
      :title="t('guilds')"
      :desc="t('guilds_desc')"
    )
  img.tree(src="src/assets/tree.png")
</template>

<style lang="stylus" scoped>
.frame
  background url('src/assets/background_noise.reverse.jpg') center / cover
  font-family 'Montserrat'
  color white
  display flex
  flex-flow column nowrap
  align-items center
  position relative
  .title
    font-size 30px
    font-weight 800
    margin-top 2em
    text-shadow 1px 2px 3px rgba(black, .5)
  .desc
    font-size 20px
    font-weight 100
    opacity .65
    letter-spacing 2px
    margin-bottom 2em
    b
      color #F39C12
      font-weight 100
  .cards
    display grid
    grid-template-rows 1fr 1fr 1fr
    grid-template-columns 1fr 1fr
    place-items baseline
    z-index 2
    >div
      padding 1em
  img.tree
    position absolute
    bottom 0
    right 3vw
    z-index 1
    width 200px
    filter drop-shadow(1px 2px 3px rgba(black, .5))
</style>

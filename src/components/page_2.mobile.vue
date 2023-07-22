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
import { ref, onMounted, onBeforeUnmount } from 'vue';

import open_box from '../assets/open-box.png';
import feathers from '../assets/feathers.png';
import github from '../assets/github.png';
import earth from '../assets/earth.png';
import metaverse from '../assets/metaverse.png';
import guild from '../assets/guild.png';
import { fade_up } from '../core/anime';

import feature from './feature_card.vue';
import card from './feature_card.big.vue';

const { t } = useI18n();
const c1 = ref();
const c2 = ref();
const c3 = ref();
const c4 = ref();
const c5 = ref();
const c6 = ref();

const animations = [
  fade_up(c1, 100),
  fade_up(c2, 200),
  fade_up(c3, 300),
  fade_up(c4, 400),
  fade_up(c5, 500),
  fade_up(c6, 600),
];

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.frame
  .title {{ t('title') }}
  .desc {{ t('desc') }} #[b steroids]
  .cards
    card(
      :img="open_box"
      :title="t('mods')"
      :desc="t('mods_desc')"
      ref="c1"
    )
    card(
      :img="feathers"
      :title="t('instance')"
      :desc="t('instance_desc')"
      ref="c2"
    )
    card(
      :img="github"
      :title="t('source')"
      :desc="t('source_desc')"
      ref="c3"
    )
    card(
      :img="earth"
      :title="t('immersif')"
      :desc="t('immersif_desc')"
      ref="c4"
    )
    card(
      :img="metaverse"
      :title="t('meta')"
      :desc="t('meta_desc')"
      ref="c5"
    )
    card(
      :img="guild"
      :title="t('guilds')"
      :desc="t('guilds_desc')"
      ref="c6"
    )
  img.tree(src="../assets/tree.png")
</template>

<style lang="stylus" scoped>
.frame
  background url('../assets/background_noise.reverse.jpg') center / cover
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
    font-family 'Montserrat'
    letter-spacing 2px
    margin-bottom 2em
    b
      color #F39C12
      font-weight 100
  .cards
    display grid
    grid-template-rows 1fr 1fr 1fr
    grid-template-columns 1fr 1fr
    place-items baseline center
    z-index 2
    >div
      padding 1em
  img.tree
    transform translateX(20%)
    z-index 1
    width 200px
    filter drop-shadow(1px 2px 3px rgba(black, .5))
</style>

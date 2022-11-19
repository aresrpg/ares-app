<i18n>
  fr:
    music: Les Musiques
    music_desc: Une bande originale créée spécialement pour AresRPG
    items: Les Items
    items_desc: Une multitude de modèles pour les armes et armures sont intégrées au jeu, le flex devient réel
  en:
    music: The Musics
    music_desc: An original soundtrack made specially for AresRPG
    items: The Items
    items_desc: A bunch of 3D models for weapons and armors are integrated in the game, the flex is real
  </i18n>

<script setup>
import { useI18n } from 'vue-i18n'

import bg from '../assets/page6bg.jpeg'

import page_container from './page_container.desktop.vue'

const { t } = useI18n()
</script>

<template lang="pug">
mixin youtube(src)
  iframe(src=src title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

page_container(:img="bg")
  .page
    .musics_title
      .line
      .title {{ t('music') }}
      .line.l2
      .desc {{ t('music_desc') }}
    .musics
      .scrollable
        +youtube('https://www.youtube.com/embed/33NvvmzT74M')
        +youtube('https://www.youtube.com/embed/sY1NecAibRc')
        +youtube('https://www.youtube.com/embed/bxCMfOtlS08')
        +youtube('https://www.youtube.com/embed/rPQ9yM9BUW4')
    .items_title
      .desc {{ t('items_desc') }}
      .line
      .title {{ t('items') }}
      .line.l2
    .items
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  justify-content center
  overflow hidden
  .musics
    width 100%
    overflow-x scroll
    .scrollable
      position relative
      display flex
      flex-flow row nowrap
      width max-content
      iframe
        z-index 4
        width 500px
        height 280px
        padding 1.5em
        margin 0 1em
        filter drop-shadow(1px 2px 3px black)
        border-radius 50px
        overflow hidden
  .items_title
    display flex
    flex-flow row nowrap
    align-items center
    align-self flex-end
    .line
      height 1px
      width 100px
      background white
      box-shadow 1px 2px 3px black
      &.l2
        width 300px
        flex 1 3
    .title
      font-size 3em
      padding 0 1em
      max-width max-content
    .desc
      flex 1 2
      padding 0 1em
  .musics_title
    display flex
    flex-flow row nowrap
    align-items center
    .line
      width 200px
      height 1px
      background white
      box-shadow 1px 2px 3px black
      &.l2
        max-width 360px
        flex 1 3
    .title
      font-size 3em
      padding 0 1em
      max-width max-content
    .desc
      flex 1
      padding-left 1em
</style>

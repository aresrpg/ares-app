<i18n>
  fr:
    music: Les Musiques
    music_desc: Une bande originale créée spécialement pour AresRPG
    items: Les Items
    items_desc: Une multitude de modèles pour les armes et armures sont intégrées au jeu, {flex}
    flex: le flex devient réel
  en:
    music: The Musics
    music_desc: An original soundtrack made specially for AresRPG
    items: The Items
    items_desc: A bunch of 3D models for weapons and armors are integrated in the game, {flex}
    flex: the flex is real
  </i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { rotate_in, fade_down } from '../core/anime';
import bg from '../assets/page6bg.jpeg';

import page_container from './page_container.desktop.vue';

const { t } = useI18n();
const music = ref();
const items = ref();
const y1 = ref();
const y2 = ref();
const y3 = ref();
const y4 = ref();
const i1 = ref();
const i2 = ref();
const i3 = ref();
const i4 = ref();
const i5 = ref();
const i6 = ref();
const i7 = ref();

const animations = [
  fade_down(music, 100),
  fade_down(items, 200),
  rotate_in(y1, 100),
  rotate_in(y2, 200),
  rotate_in(y3, 300),
  rotate_in(y4, 400),
  rotate_in(i1, 100),
  rotate_in(i2, 200),
  rotate_in(i3, 300),
  rotate_in(i4, 400),
  rotate_in(i5, 500),
  rotate_in(i6, 600),
  rotate_in(i7, 700),
];

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
mixin youtube(src, ref)
  iframe(ref=ref src=src title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

page_container(:img="bg")
  .page
    .musics_title(ref="music")
      .line
      .title {{ t('music') }}
      .line.l2
      .desc {{ t('music_desc') }}
    .musics
      .scrollable
        +youtube('https://www.youtube.com/embed/33NvvmzT74M', 'y1')
        +youtube('https://www.youtube.com/embed/sY1NecAibRc', 'y2')
        +youtube('https://www.youtube.com/embed/bxCMfOtlS08', 'y3')
        +youtube('https://www.youtube.com/embed/rPQ9yM9BUW4', 'y4')
    .items_title(ref="items")
      .desc
        i18n-t(keypath="items_desc")
          template(#flex)
            b {{ t('flex') }}
      .line
      .title {{ t('items') }}
      .line.l2
    .items
      .scrollable
        img(ref="i1" src="../assets/bow_1.png")
        img(ref="i2" src="../assets/sword_3.png")
        img(ref="i3" src="../assets/axe_1.png")
        img(ref="i4" src="../assets/staff2.png")
        img(ref="i5" src="../assets/bow_2.png")
        img(ref="i6" src="../assets/axe_2.png")
        img(ref="i7" src="../assets/sword_2.png")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  justify-content space-evenly
  overflow hidden
  .musics, .items
    width 100%
    overflow-x scroll
    .scrollable
      position relative
      display flex
      flex-flow row nowrap
      width max-content
      img
        width 300px
        object-fit contain
        filter drop-shadow(1px 2px 3px black)
      iframe
        background #212121
        z-index 4
        width 450px
        height 220px
        margin 1.5em
        // margin 0 1em
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
      font-family 'Montserrat'
      font-weight 100
      b
        font-weight 300
        text-shadow 1px 2px 3px rgba(black .4)
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
      font-family 'Montserrat'
      font-weight 100
</style>

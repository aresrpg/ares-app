<i18n>
en:
  title: The World
  desc: |
    In the infinite, procedurally generated world of AresRPG,
    players explore diverse biomes and encounter unique creatures.
    Each journey offers new landscapes, from lush forests to arid deserts,
    along with community-designed structures like ancient ruins and complex dungeons across multiple dimensions.
    These environments are filled with challenges and varied monsters, providing resources for crafting equipment
    and making each adventure distinct and immersive.
fr:
  title: Le Monde
  desc: |
    Dans le vaste monde procédurale d'AresRPG,
    les joueurs explorent des biomes divers et rencontrent des créatures uniques.
    Chaque voyage offre de nouveaux paysages, des forêts luxuriantes aux déserts arides,
    ainsi que des structures conçues par la communauté telles que des ruines anciennes et des donjons complexes à travers plusieurs dimensions.
    Ces environnements regorgent de défis et de monstres variés, fournissant des ressources pour fabriquer de l'équipement
    et rendant chaque aventure distincte et immersive.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted, onBeforeUnmount } from 'vue';

import { fade_down, fade_in, fade_right, fade_up } from '../core/anime';

const { t } = useI18n();
const s1 = ref();
const s2 = ref();
const s3 = ref();

const c1 = ref();
const c2 = ref();
const c3 = ref();

const animations = [
  fade_in(s1, 100),
  fade_right(s2, 200),
  fade_right(s3, 300),
  fade_down(c1, 100),
  fade_down(c2, 200),
  fade_down(c3, 300),
];

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
section.frame.world
  .image(ref="s1")
  .title(ref="s2") {{ t('title') }}
  .desc(ref="s3") {{ t('desc') }}
  .keys
    img.sword(ref="c1" src="../assets/fire_sword.png")
    img.gold_key(ref="c2" src="../assets/gold_key.png")
    img.silver_key(ref="c3" src="../assets/silver_key.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  overflow hidden
  color white
  background url('../assets/background_noise.reverse.jpg') center / cover
  align-items center
  text-align center
  position relative
  .image
    box-shadow inset -3px -3px 10px black
    width 100vw
    height 25vh
    display flex
    z-index 1
    width 100%
    object-fit cover
    background url('../assets/art/openworld-1.jpeg') center / cover
    border-top 1px solid white
    border-bottom 1px solid white
  .title
    font-family 'Montserrat'
    font-size 28px
    font-weight 900
    padding-top 2em
    background-image linear-gradient(45deg, #80DEEA, #1976D2, #eee)
    background-size 100%;
    background-clip text;
    color transparent;
  .desc
    font-family 'DM Sans'
    text-align center
    font-size .8em
    margin-bottom 50px
    padding 1em
  .keys
    height 200px
    img
      position absolute
      bottom 1em
    .sword
      left 1em
    .gold_key
      left 50%
      transform translateX(-30%)
    .silver_key
      right 1em
      bottom 4em
</style>

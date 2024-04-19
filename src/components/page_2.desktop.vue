<i18n>
fr:
  discover: Découvrez les possibilités infinies des mondes procéduraux
  procedural: Le monde d'AresRPG est une vaste toile de nombreux biomes, chacun étant conçu de manière unique pour offrir un environnement diversifié et captivant. Cet univers infini est généré de manière procédurale, garantissant que chaque exploration offre de nouveaux paysages et aventures. Aventurez-vous à travers tout, des forêts luxuriantes aux déserts arides, chaque biome s'intégrant de manière transparente au suivant pour créer un monde sans fin et en constante évolution.
  structures: Dans AresRPG, l'aventure s'étend au-delà des paysages naturels avec des structures procédurales conçues par la communauté. Des ruines anciennes aux donjons complexes, chaque structure est générée de manière unique, remplie de salles et de défis aléatoires qui garantissent que aucune exploration n'est la même. De plus, le jeu propose plusieurs dimensions, chacune offrant un univers distinct avec son propre ensemble de défis et d'esthétiques. Ces dimensions offrent une nouvelle perspective sur le gameplay, plongeant les joueurs dans des environnements divers qui vont des étendues célestes aux royaumes sombres et mystiques. Ensemble, les structures procédurales et les dimensions variées enrichissent le gameplay, rendant chaque voyage à travers AresRPG captivant de manière unique.
  creatures: En explorant le vaste monde, vous rencontrerez des créatures et des monstres uniques. Combattez-les pour collecter des ressources que vous pourrez utiliser pour fabriquer votre équipement. Chaque biome apporte de nouveaux défis et récompenses, rendant votre aventure excitante et enrichissante à mesure que vous collectez des matériaux et améliorez votre équipement.
en:
  discover: Discover the infinite possibilities of procedural worlds
  procedural: |
    The world of AresRPG is a vast tapestry of many biomes, each uniquely crafted to provide a diverse and engaging environment.
    This infinite universe is procedurally generated, ensuring that every exploration offers new landscapes and adventures.
    Venture through everything from lush forests to arid deserts, each biome seamlessly integrating into the next to create a boundless and ever-evolving world.
  structures: |
    In AresRPG, adventure extends beyond the natural landscapes with community designed procedural structures.
    From ancient ruins to complex dungeons, each structure is uniquely generated,
    filled with random rooms and challenges that ensure no two explorations are the same.
    Additionally, the game features multiple dimensions, each offering a distinct universe with its own set of challenges and aesthetics.
    These dimensions provide a fresh perspective on gameplay, immersing players in diverse environments that range from celestial expanses to dark,
    mystical realms. Together, the procedural structures and varied dimensions enrich the gameplay,
    making each journey through AresRPG uniquely captivating.
  creatures: |
    As you explore the vast world, you'll encounter unique creatures and monsters.
    Fight them to collect resources that you can use to craft your equipment.
    Each biome brings new challenges and rewards, making your adventure exciting and rewarding as you gather materials and enhance your gear.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import bg from '../assets/art/openworld-1.jpeg';
import { minimal_fade_up, appear_right } from '../core/anime';

import page_container from './page_container.desktop.vue';

const { t } = useI18n();
const div1 = ref();
const div2 = ref();
const div3 = ref();

const i1 = ref();
const i2 = ref();

const animations = [
  minimal_fade_up(div1),
  minimal_fade_up(div2, 200),
  minimal_fade_up(div3, 300),
  appear_right(i1, 100),
  appear_right(i2, 200),
];

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .title(ref="title") Za Warudo
    .subtitle(ref="desc") {{ t('discover') }}
    .content
      img.sword-block(ref="img" src="../assets/art/voxel-logo.png")
      .points
        div(ref="div1") {{ t('procedural') }}
        div(ref="div2") {{ t('structures') }}
        div(ref="div3") {{ t('creatures') }}
        span.icons
          img(src="../assets/svg-icon/spider.svg" ref="i1")
          img(src="../assets/svg-icon/map.svg" ref="i2")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))

.page
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  .title
    font-size 4em
    font-weight 500
    font-family 'Montserrat'
  .subtitle
    font-size 1.5em
    font-weight 300
    font-family 'DM Sans'
  .content
    display flex
    flex-flow row nowrap
    padding 100px
    justify-content center
    align-items center
    >img
      bottom 1em
      left 1em
      width 400px
      filter material-2
      animation float 2s infinite alternate
      margin-right 50px
    .points
      display flex
      flex-flow column nowrap
      span.icons
        display flex
        flex-flow row nowrap
        justify-content center
      img
        width 75px
        margin-top 60px
        filter drop-shadow(1px 2px 3px black)
      >div
        font-size .9em
        font-family 'Montserrat'
        font-weight 100
        max-width 1000px
        margin-top 30px
        border 4px double rgba(#eee, 1)
        border-top-left-radius 5px
        border-bottom none
        border-right none
        border-top none
        padding .5em 1em

@keyframes float
  0%
    transform translateY(-15px) rotate(-5deg)
  100%
    transform translateY(15px) rotate(-5deg)
</style>

<i18n>
fr:
  ip: play.aresrpg.world
  desc: AresRPG est un serveur minecraft sans mods dans lequel votre objectif est d'obtenir les reliques des 6 dieux. Le monde est infesté de créatures que vous devrez réduire en poussière pour améliorer votre équipement et vos compétences
  title: Entrez dans La Legende
  trailer: Trailer
  class: Classes
  game: Jeu
  server: Serveur
  assets: Assets
  layers: Mondes
  copy: adresse copiée
en:
  desc: AresRPG is a no-mods mmorpg minecraft server in which your goal is to find all 6 relics from the gods. The world is infested of creatures that you will need to fight and destroy in order to upgrade your equipment and stats
  title: A Delightful RP Adventure
  trailer: Trailer
  class: Classes
  game: Game
  server: Server
  assets: Assets
  layers: Worlds
  copy: copied to clipboard
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

import {
  anime,
  appear_left,
  appear_right,
  minimal_fade_up,
} from '../core/anime';

const toast = useToast();
const { t } = useI18n();
const props = defineProps(['page', 'scroller']);

const on_copy = () => toast.info(t('copy'));

const ip = ref();
const logo = ref();
const nav = ref();
const desc = ref();
const title = ref();
const animations = [
  anime({ translateY: ['-100%', 0], translateX: ['-50%', '-50%'] })(ip, 200),
  appear_left(logo, 100),
  appear_right(nav, 2000),
  minimal_fade_up(desc, 400),
  minimal_fade_up(title, 800),
];

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template>
  <div class="hero">
    <img class="logo" src="../assets/logo.svg" alt="">
    <div class="iron-grid"></div>
    <div class="fog"></div>
    <div class="text-content">
      <div>
        <h1>A Delightful RP Adventure</h1>
        <p>AresRPG is a no-mods mmorpg minecraft server in which your goal is to find all 6 relics from the gods. The world is infested of creatures that you will need to fight and destroy in order to upgrade your equipment and stats</p>
      </div>
    </div>
    <img class="flying-dragon" src="../assets/ice_dragon.dragon.gif" alt="">

  </div>
</template>

<style scoped>
  .logo{
    position: absolute;
    z-index: 10;
    top: 20px;
    left: 1%;
  }
  .hero{
    height: 100%;
    min-height: 100vh;
    background: url('../assets/ice_dragon.gif') no-repeat center center/cover;
    position: relative;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;

    display: flex;
    align-items: center;
  }
  .iron-grid{
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../assets/iron-grid.png');
    opacity: 25%;
  }
  .fog{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: url('../assets/fog.png') no-repeat center center/cover;
    opacity: 85%;
  }
  .flying-dragon{
    position: absolute;
    max-width: 100%;
    right: 3rem;
  }
  .text-content{
    width: 80%;
    margin: 0 auto;
    margin-top: 1.5rem;
    z-index: 5;
  }
  .text-content > div{
    width: 52%;
  }
  .text-content h1{
    color: #8787F4;
    font-size:  clamp(3.75rem, 5vw, 5.5rem);
    text-shadow: 
        -1.5px -1.5px 0 black,  
        1.5px -1.5px 0 black,
        -1.5px 1.5px 0 black,
        1.5px 1.5px 0 black;
    /* stroke: 1.5px black;
    -webkit-text-stroke: 1.5px black; */
  }
  .text-content p{
    font-size: 1.15rem;
    line-height: 37px;
    color: #261F48;
    opacity: 75%;
    stroke: 0.5px black;
    -webkit-text-stroke: 0.5px black;
    margin-top: 0.4rem;
  }
 /* material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
classic = 1px 2px 3px black  */

/* .container
  width 100%
  min-height 100vh
  border-top-left-radius 30px
  border-top-right-radius 30px
  background url('../assets/ice_dragon.gif') center / cover
  font-family 'Roboto Condensed'
  display flex
  flex-flow row nowrap
  color white
  align-items center
  position relative
  overflow hidden
  background-attachment: fixed;
  .right
    position absolute
    top 0
    left 0
    width 100%
    bottom 0
    z-index 1
    >img
      width 100%
      height 100%
      object-fit contain

  .left
    position relative
    flex 1 1 50%
    display flex
    flex-flow column nowrap
    margin-left 130px
    z-index 2
    .desc
      max-width 600px
      text-align right
      text-shadow 1px 2px 6px black
      position relative
      z-index 2
      &::after
        content ''
        position absolute
        width 1px
        height 150px
        bottom -@height - 10px
        left 60%
        box-shadow classic
        background white
    .title
      padding-top 200px
      max-width 700px
      font-size 7em
      font-weight 900
      filter material-2
      z-index 1
  .grain
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background url('../assets/iron-grid.png') repeat
    opacity .3
    z-index 2
  .logo
    position absolute
    top 2em
    left 2.5em
    mix-blend-mode luminosity
    width 65px
    z-index 2
    filter drop-shadow(1px 2px 3px black)
    object-fit contain
  nav
    position fixed
    top 5em
    right 1em
    text-transform uppercase
    align-items flex-end
    font-size .7em
    display flex
    flex-flow column nowrap
    z-index 10
    text-shadow 1px 2px 3px black
    >div
      cursor pointer
      opacity .7
    .selected
      position relative
      opacity 1
      &::before
        content ''
        position absolute
        top 50%
        left -50px
        transform translateY(-50%)
        width 40px
        height 1px
        box-shadow 1px 2px 3px black
        background white
  .ip
    position fixed
    top 1em
    font-family 'DM Sans'
    left 50%
    transform translateX(-50%)
    text-shadow classic
    letter-spacing 7px
    font-weight 900
    mix-blend-mode exclusion
    text-transform uppercase
    z-index 50
    cursor pointer
  .fog
    pointer-events none
    position absolute
    bottom 0
    left 0
    width 100%
    height 100vh
    z-index 3
    display flex
    opacity .85
    background url('../assets/fog.png') bottom / cover */
</style>

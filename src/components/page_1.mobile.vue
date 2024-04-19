<i18n>
en:
  inspiration: Inspiration
  inspiration_desc: Our vision is to recreate the nostalgic essence of the MMORPGs from our childhood, combining their best elements into one captivating game. Inspired by the breathtaking diversity of Japanese landscapes, we aim to infuse similar aesthetic richness into our design. Our primary influences include iconic games such as Minecraft, Dofus, Trove, and Cube World.
  sui: Why Sui?
  sui_desc: Sui represents the forefront of blockchain technology, offering an ideal platform for developing substantial projects. Known for its lightning-fast performance, cost-efficiency, and remarkable scalability, Sui enables us to concentrate fully on crafting an engaging game experience. It mitigates concerns about architectural limitations or expenses, and it simplifies the user experience, requiring no prior blockchain knowledge from the players.
fr:
  inspiration: Inspiration
  inspiration_desc: Notre vision est de recréer l'essence nostalgique des MMORPG de notre enfance, en combinant leurs meilleurs éléments en un seul jeu captivant. Inspirés par la diversité époustouflante des paysages japonais, nous visons à insuffler une richesse esthétique similaire dans notre conception. Nos principales influences incluent des jeux emblématiques tels que Minecraft, Dofus, Trove et Cube World.
  sui: Pourquoi Sui ?
  sui_desc: Sui représente l'avant-garde de la technologie blockchain, offrant une plateforme idéale pour le développement de projets substantiels. Connu pour sa performance ultra-rapide, son efficacité en termes de coûts et sa remarquable évolutivité, Sui nous permet de nous concentrer pleinement sur la création d'une expérience de jeu engageante. Elle atténue les préoccupations concernant les limitations architecturales ou les dépenses, et simplifie l'expérience utilisateur, ne nécessitant aucune connaissance préalable de la blockchain de la part des joueurs.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { fade_up, fade_left, fade_in, appear_top } from '../core/anime';

import app_button from './app_button.vue';

const t1 = ref();
const t2 = ref();
const t3 = ref();
const t4 = ref();
const t5 = ref();
const t6 = ref();

const kanji = ref();

const { t } = useI18n();
const animations = [
  fade_in(kanji, 200),
  fade_up(t1, 300),
  fade_left(t2, 400),
  fade_left(t3, 500),
  fade_left(t4, 500),
  fade_left(t5, 500),
  fade_left(t6, 500),
];
onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));

const open_app = () => {
  window.open('https://app.aresrpg.world', '_blank');
};
</script>

<template lang="pug">
.container
  .kanji(ref="kanji") 美しい景色
  .title(ref="t1") {{ t('inspiration') }}
  img(src="../assets/art/shrine-2.jpeg" ref="t2")
  .desc(ref="t3") {{ t('inspiration_desc') }}
  .title(ref="t4") {{ t('sui') }}
  img(src="../assets/art/underwater-2.jpeg" ref="t5")
  .desc(ref="t6") {{ t('sui_desc') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
classic = 1px 2px 3px black

.container
  border-top 1px solid #eee
  display flex
  flex-flow column nowrap
  background url('../assets/background_noise.jpeg') center / cover
  position relative
  color #eee
  align-items center
  padding 1em
  >*
    margin-bottom .5em
  .kanji
    display flex
    width 100%
    letter-spacing 10px
    justify-content center
    font-size 2em
    font-family "Noto Serif JP", serif
    background: linear-gradient(45deg,#032741, #00B0FF,#013254, #6acdf1);
    background-size: 240% 240%;
    background-clip text;
    opacity .8
    color transparent;
    filter drop-shadow(1px 2px 1px rgba(#212121, .5))
    font-weight 100
    animation gradientBG 20s ease-in-out infinite
  .title
    font-weight 700
    font-size 1.5em
    text-shadow 1px 1px 2px #212121
  .desc
    font-family 'DM Sans'
    text-align center
    font-size .8em
    margin-bottom 50px
  img
    object-fit cover
    border-radius 12px
    width 100%
    overflow hidden
    filter material-2

@keyframes gradientBG
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%
</style>

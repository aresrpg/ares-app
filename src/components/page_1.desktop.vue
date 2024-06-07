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
import Parallaxy from '@lucien144/vue3-parallaxy';

import { rotate_in, fade_up, fade_left, fade_in } from '../core/anime';

import app_button from './app_button.vue';

const a0 = ref();
const a1 = ref();
const a2 = ref();
const a3 = ref();
const a4 = ref();
const a5 = ref();
const a6 = ref();
const a8 = ref();

const section_1 = ref();
const section_2 = ref();

const kanji = ref();

const { t } = useI18n();
const animations = [
  rotate_in(a0, 100),
  rotate_in(a1, 200),
  rotate_in(a2, 300),
  rotate_in(a3, 400),
  rotate_in(a4, 500),
  rotate_in(a5, 600),
  rotate_in(a6, 700),
  rotate_in(a8, 800),
  fade_up(section_1, 300),
  fade_left(section_2, 500),
  fade_in(kanji, 1000),
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
  .cta
    a(ref="a0" href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
      img.yt(src="../assets/youtube.png")
    a(ref="a1" href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
      img.twitter(src="../assets/twitter.png")
    a(ref="a2" href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="discord")
      img.discord(src="../assets/discord.png")
    a(ref="a3" href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
      img.github(src="../assets/github_square.png")
    a(ref="a4" href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="../assets/telegram.png")
  .kanji(ref="kanji") 美しい景色
  section.inspiration(ref="section_1")
    .text
      .title {{ t('inspiration') }}
      .desc {{ t('inspiration_desc') }}
    img.a(src="../assets/art/shrine-2.jpeg")
  section.sui(ref="section_2")
    img.b(src="../assets/art/underwater-2.jpeg")
    .text
      .title {{ t('sui') }}
      .desc {{ t('sui_desc') }}
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
  justify-content center
  position relative
  padding-top 100px
  border-bottom-left-radius 30px
  border-bottom-right-radius 30px
  min-height 900px
  .kanji
    position absolute
    font-size 1.5em
    bottom 50px
    left 50%
    transform translateX(-50%)
    font-family "Noto Serif JP", serif
    color #eee
    text-shadow 1px 1px 2px #212121
  >section
    display flex
    flex-flow row nowrap
    justify-content center
    align-items center
    padding 2em
    border-radius 10px
    width 90%
    height 50%
    .text
      display flex
      flex-flow column nowrap
      padding 1em
      position relative
      width 60%
      &:last-child::after
        content 'The art here is an inspiration and not the current game look, we wish to achieve a similar aesthetic richness.'
        display flex
        position absolute
        top -10px
        z-index 1
        font-size .6em
        font-style italic
        opacity .5
      .title
        font-weight 700
        padding-bottom .5em
      .desc
        font-weight 100
        font-family 'Montserrat'
        text-align justify
        color #eee
    img
      object-fit cover
      margin .25em
      border-radius 12px
      overflow hidden
      filter material-2
      height 100%
      &.a
        transform translateY(100px)
      &.b
        transform translateY(-100px)
  .cta
    display flex
    flex-flow row nowrap
    position relative
    z-index 2
    position absolute
    top 50px
    a
      margin 0 1.5em
      >img
        width 50px
        object-fit contain
        filter drop-shadow(classic)
        opacity .7
        @media screen and (max-width: 1378px)
          margin 0.35em
</style>

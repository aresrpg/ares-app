<i18n>
fr:
  play: Jouer
  desc: AresRPG est un MMORPG web, situé dans un monde voxel procédural infini construit sur la blockchain {0}. Lancez-vous dans une quête qui s'étend au-delà de l'horizon, où le destin vous appelle à combattre des créatures redoutables et à déterrer des reliques anciennes. Dans cette étendue sans limites, chaque aventure est enregistrée sur la blockchain, garantissant que votre héritage soit gravé dans l'éternité. Forgez votre chemin vers la gloire dans un royaume où vos choix façonnent le monde.
  title: Entrez dans La Legende
  motivation: Motivation
  gameplay: Gameplay
  worlds: Mondes
  economy: Economie
  technology: Technologie
  assets: Assets
  copy: adresse copiée
en:
  play: Play now
  desc: AresRPG is a web MMORPG, set in an infinite procedural voxel world built on the cutting-edge {0} blockchain. Embark on a quest that stretches beyond the horizon, where destiny calls you to battle formidable creatures and unearth ancient relics. In this boundless expanse, every adventure is recorded on the blockchain, ensuring your legacy is etched in eternity. Forge your path to glory in a realm where your choices shape the world.
  title: A Delightful RP Adventure
  motivation: Motivation
  gameplay: Gameplay
  worlds: Worlds
  economy: Economy
  technology: Technology
  assets: Assets
  copy: copied to clipboard
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import {
  anime,
  appear_left,
  appear_right,
  minimal_fade_up,
} from '../core/anime';

import app_button from './app_button.vue';

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

const open_app = () => {
  window.open('https://app.aresrpg.world', '_blank');
};

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.container
  .grain
  img.logo(ref="logo" src="../assets/logo.png")
  app_button.ip(
    ref="ip"
    clickable="true"
    @click="open_app"
    )
    template(#content)
      span.button {{ t('play') }}
  nav(ref="nav")
    .motivation(@click="props.scroller.motivation" :class="{ selected: props.page === 'motivation' }") {{ t('motivation') }}
    .worlds(@click="props.scroller.worlds" :class="{ selected: props.page === 'worlds' }") {{ t('worlds') }}
    .gameplay(@click="props.scroller.gameplay" :class="{ selected: props.page === 'gameplay' }") {{ t('gameplay') }}
    .economy(@click="props.scroller.economy" :class="{ selected: props.page === 'economy' }") {{ t('economy') }}
    .technology(@click="props.scroller.technology" :class="{ selected: props.page === 'technology' }") {{ t('technology') }}
    .assets(@click="props.scroller.assets" :class="{ selected: props.page === 'assets' }") {{ t('assets') }}
  .left
    i18n-t.desc(keypath="desc" tag="div" ref="desc")
      a(href="https://sui.io" target="_blank") Sui
    .title(ref="title") {{ t('title') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
classic = 1px 2px 3px black

.container
  width 100%
  height 100vh
  border-top-left-radius 30px
  border-top-right-radius 30px
  background url('../assets/art/shrine-1.jpeg') center / cover
  font-family 'Roboto Condensed'
  display flex
  flex-flow row nowrap
  color white
  align-items center
  position relative
  overflow hidden
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
      text-align justify
      text-shadow 1px 2px 6px black
      backdrop-filter blur(10px)
      padding .5em
      border-radius 12px
      position relative
      color #eee
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
      a
        color white
        text-decoration underline
    .title
      padding-top 200px
      max-width 700px
      font-size 7em
      font-weight 900
      filter material-2
      z-index 1
    @media screen and (max-height: 1100px)
      .title
        padding-top 0
  @media screen and (max-height: 1100px)
    .desc
      .title
        padding-top 0
      &::after
        display none
  .grain
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background url('../assets/iron-grid.png') repeat
    opacity .2
    z-index 2
  .logo
    position absolute
    top 2em
    left 2.5em
    width 200px
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
    mix-blend-mode hard-light
    text-transform uppercase
    z-index 50
    cursor pointer
    border-radius 12px
    .button
      padding .5em
      color black
</style>

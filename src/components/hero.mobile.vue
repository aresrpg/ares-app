<i18n>
en:
  launch: Play now
  title: |
    {explore} the infinite lands of {aresrpg}
  explore: Explore
  desc: |
    AresRPG is a web MMORPG, set in an infinite procedural voxel world built on the cutting-edge {0} blockchain.
    Embark on a quest that stretches beyond the horizon, where destiny calls you to battle formidable
    creatures and unearth ancient relics. In this boundless expanse, every adventure is recorded on the blockchain,
    ensuring your legacy is etched in eternity. Forge your path to glory in a realm where your choices shape the world.
fr:
  launch: Jouer
  title: |
    {explore} les terres infinies d'{aresrpg}
  explore: Explorez
  discover: Découvrir
  desc: |
    AresRPG est un MMORPG web, situé dans un monde voxel procédural infini construit sur la blockchain {0}.
    Lancez-vous dans une quête qui s'étend au-delà de l'horizon, où le destin vous appelle à combattre des créatures redoutables
    et à déterrer des reliques anciennes. Dans cette étendue sans limites, chaque aventure est enregistrée sur la blockchain,
    garantissant que votre héritage soit gravé dans l'éternité. Forgez votre chemin vers la gloire dans un royaume où vos choix façonnent le monde.
</i18n>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { fade_up, fade_down, fade_in } from '../core/anime';

import app_button from './app_button.vue';

const { t } = useI18n();
const scroll_down = () =>
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
const twitter = ref();
const telegram = ref();
const discord = ref();
const logo = ref();
const title = ref();
const btn = ref();
const txt = ref();

const animations = [
  fade_down(logo, 100),
  fade_down(title, 200),
  fade_down(btn, 300),
  fade_in(txt, 400),
  fade_up(twitter, 300),
  fade_up(telegram, 400),
  fade_up(discord, 600),
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
.frame
  img.logo(src="../assets/text_logo.png" ref="logo")
  .title(ref="title")
    i18n-t(keypath="title")
      template(#explore)
        b {{ t('explore') }}
      template(#aresrpg)
        b AresRPG
  app_button.app_button(
    clickable="true"
    @click="open_app"
    height="60px"
    ref="btn"
  )
    template(#content)
      span.button {{ t('launch') }}
      img.button(src="../assets/treasure-chest.png")
  a.twitter(href="https://twitter.com/AresRPG" target="_blank" rel="noopener noreferrer" aria-label="Twitter" ref="twitter")
    fa.icon(:icon="['fab', 'twitter']" size="2x")
  a.telegram(href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Telegram" ref="telegram")
    fa.icon(:icon="['fab', 'telegram']" size="2x")
  a.discord(href="https://discord.gg/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Discord" ref="discord")
    fa.icon(:icon="['fab', 'discord']" size="2x")
  .blur(ref="txt")
    i18n-t(keypath="desc" tag="div" ref="desc")
      a(href="https://sui.io" target="_blank") Sui
  .discover(@click="scroll_down")
    span {{t('discover')}}
    img(src="../assets/chevron.svg")
</template>

<style lang="stylus" scoped>
.frame
  display grid
  grid 'logo logo logo' 2fr 'title title title' 2.5fr 'mail mail mail' 70px 'wip wip wip' max-content 'twitter telegram github' 1fr 'disc disc disc' 2fr / 1fr 1fr 1fr
  width 100%
  height 100vh
  background url('../assets/pixel_shrine.jpg') bottom / cover
  color #eee
  font-family 'Roboto Condensed'
  place-items center center
  // padding 2em
  padding-bottom 1em
  grid-row-gap 1em
  scroll-snap-align start

  .blur
    grid-area wip
    text-transform uppercase
    text-align center
    font-size .7em
    position relative
    text-shadow 1px 2px 5px #212121
    font-weight 900
    z-index 1
    padding 1em
    backdrop-filter blur(20px)
    b
      display inline
    a
      color white
      text-decoration underline

  .logo
    grid-area logo
    object-fit contain
    width 100%
    height 100%
    max-width 300px
  .title
    grid-area title
    text-transform uppercase
    text-align center
    font-size 2em
    background-image radial-gradient(circle, #80DEEA, #1976D2, #eee)
    background-size 100%;
    background-clip text;
    color transparent;
    place-self start center
    filter drop-shadow(1px 2px 1px black)
    b
      font-family 'Montserrat'
      background-image radial-gradient(circle, #80DEEA, #1976D2, #eee)
      background-size 100%;
      background-clip text;
      color transparent;

  .description
    grid-area desc
    font-size .75em
    text-align center
    font-weight 100
    color #ECF0F1
    display flex
    flex-flow column nowrap
    place-self start center
    b
      margin-top 1em
      font-weight @font-weight

  .app_button
    grid-area mail
    img.button
      width 25px
      filter drop-shadow(1px 2px 3px black)
      margin-right .5em
    span.button
      margin 0 .25em 0 .5em
      color #34495E

  >a
    color white
    display flex
    align-items baseline
    .icon
      filter drop-shadow(1px 2px 3px black)
  .twitter
    grid-area twitter
  .telegram
    grid-area telegram
  .github
    grid-area github
  .discover
    grid-area disc
    display flex
    flex-flow column
    place-self end center
    font-size .9em
    text-shadow 1px 2px 2px black
    animation bounce 7s ease-in infinite
    img
      height 10px

@keyframes bounce
  from, 20%, 53%, 80%, to
    animation-timing-function cubic-bezier(.215, .61, .355, 1)
    transform translate3d(0, 0, 0)
  40%, 43%
    animation-timing-function cubic-bezier(.755, .05, .855, .06)
    transform translate3d(0, -30px, 0)
  70%
    animation-timing-function cubic-bezier(.755, .05, .855, .06)
    transform translate3d(0, -15px, 0)
  90%
    transform translate3d(0, -4px, 0)
</style>

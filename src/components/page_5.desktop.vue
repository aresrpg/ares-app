<i18n>
en:
  sui: Suuuuuuuuii
  sui_desc: |
    We chose the Sui chain as our server-side database for its unparalleled speed,
    cost efficiency, and scalability. Sui isn't just technically advanced—it's a leap forward in blockchain technology.
    Here are some key features of Sui that we are leveraging to revolutionize GameFi
  enoki_desc: |
    Playing AresRPG doesn't require any blockchain knowledge.
    We leverage ZkLogin and sponsored transactions to ensure a seamless and accessible gaming experience for everyone.
  metaverse: Metaverse
  metaverse_desc: |
    Until now, a truly integrated metaverse in Web3 has been elusive.
    We are changing that by incorporating multiple communities into our game through unique elements like pets, titles, and equipment.
    This approach creates a more connected and dynamic metaverse experience.
  nodb: No Database
  nodb_desc: There is nothing stored on our servers, Sui is the only database and allows true ownership of your progression
  open: Open Source
  open_desc: AresRPG is open-source, you can even run the game locally and connect to our servers through your own client
fr:
  sui_desc: |
    Nous avons choisi la chaine Sui comme base de données côté serveur pour sa vitesse, son efficacité et sa scalabilité inégalée.
    Sui n'est pas seulement techniquement avancé, c'est un bond en avant dans la technologie blockchain.
    Voici quelques fonctionnalités clés de Sui que nous exploitons pour révolutionner le GameFi
  enoki_desc: Vous n'avez pas besoin de connaissance en blockchain pour jouer à AresRPG
  metaverse: Métavers
  metaverse_desc: |
    Jusqu'à présent, aucun métavers vraiment intégré en Web3 n'a été créé.
    Nous changeons cela en incorporant plusieurs communautés dans notre jeu à travers des éléments uniques comme les familiers, les titres et l'équipement.
    Cette approche crée une expérience de métavers plus connectée et dynamique.
  nodb: Pas de base de données
  nodb_desc: Rien n'est stocké sur nos serveurs, Sui est la seule base de données et permet une véritable propriété de votre progression
  open: Open Source
  open_desc: AresRPG est open-source, vous pouvez même exécuter le jeu localement et vous connecter à nos serveurs via votre propre client
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import bg from '../assets/art/aether.jpeg';
import hammer from '../assets/hammer.png';
import metaverse from '../assets/metaverse.png';
import shield from '../assets/sword-shield.png';
import feathers from '../assets/feathers.png';
import github from '../assets/github.png';
import earth from '../assets/earth.png';
import { fade_down } from '../core/anime';

import feature_card from './feature_card.inline.vue';
import page_container from './page_container.desktop.vue';

const { t } = useI18n();
const f1 = ref();
const f2 = ref();
const f3 = ref();
const f5 = ref();
const title = ref();
const desc = ref();

const animations = [
  fade_down(f1, 100),
  fade_down(f2, 200),
  fade_down(f3, 300),
  fade_down(f5, 500),
  fade_down(title),
  fade_down(desc, 100),
];

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .left
      feature_card(ref="f1" :icon="hammer" :desc="t('enoki_desc')")
      feature_card(ref="f3" :icon="shield" :title="t('nodb')" :desc="t('nodb_desc')")
      feature_card(ref="f2" :icon="metaverse" :title="t('metaverse')" :desc="t('metaverse_desc')")
      feature_card(ref="f5" :icon="github" :title="t('open')" :desc="t('open_desc')")
    .center
      img.helmet(src="../assets/art/sui-art.png")
    .right
      .title(ref="title")
        .lines
        .text {{ t('sui') }}
      .desc(ref="desc") {{ t('sui_desc') }}
      img.code(src='../assets/code.jpeg')
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow row nowrap
  padding 2em 2em 0 1em
  overflow hidden
  .left
    display flex
    flex-flow column nowrap
    justify-content space-evenly
    align-items center
    place-self center
    // width 30vw
    flex 1 1 30%
    >div
      margin 1em 0
  .center
    display flex
    justify-content center
    align-items center
    position relative
    flex 1 2 30%
    @media screen and (max-width: 1250px)
      display none
    .helmet
      max-width 600px
      width 100%
      height auto
      z-index 1
      object-fit contain
      opacity .5
      animation float 10s infinite alternate ease-in-out
    .circle
      position absolute
      width 800px
      top 50%
      left 50%
      opacity .4
      transform translateY(-50%) translateX(-50%)
      animation rotate 30s linear infinite, disapear 5s ease-in-out 5s infinite alternate
      mix-blend-mode screen
      &.second
        mix-blend-mode luminosity
        animation rotate 25s linear infinite, disapear 5s ease-in-out infinite alternate
      &.third
        mix-blend-mode luminosity
        animation rotate 35s linear infinite reverse
      @media screen and (max-width: 1300px)
        display none
  .right
    position relative
    display flex
    flex-flow column nowrap
    justify-content center
    flex 1 1 30%
    height 100%
    .title
      font-size 3em
      font-weight 600
      display flex
      margin-top 1em
      flex-flow row nowrap
      align-items center
      font-family 'Montserrat'

      .lines
        border 1px solid white
        border-bottom 0
        border-right 0
        width 70px
        height 50px
        margin 1em .25em .1em 2em
        filter drop-shadow(1px 2px 3px black)
    .desc
      text-align end
      padding-right 2em
      font-family 'Montserrat'
      font-weight 100
    img.code
      object-fit contain
      width 100%
      margin-top 2em
      mix-blend-mode lighten
      align-self flex-end
      transform translate3d(0,0,0)

@keyframes disapear
  from
    opacity .5
  to
    opacity 0

@keyframes float
  0%
    transform translateY(30px)
  100%
    transform translateY(0)

@keyframes rotate
  from
    transform translateY(-50%) translateX(-50%) rotate(0)
  to
    transform translateY(-50%) translateX(-50%) rotate(360deg)
</style>

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
  nodb_desc: |
    There is nothing stored on our servers, Sui is the only database and allows true ownership of your progression
  open: Open Source
  open_desc: |
    AresRPG is open-source, you can even run the game locally and connect to our servers through your own client
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
import { ref, onMounted, onBeforeUnmount } from 'vue';

import hammer from '../assets/hammer.png';
import metaverse from '../assets/metaverse.png';
import shield from '../assets/sword-shield.png';
import github from '../assets/github.png';
import { appear_left, fade_up } from '../core/anime';

import feature from './feature_card.vue';
import card from './feature_card.big.vue';

const { t } = useI18n();
const c1 = ref();
const c2 = ref();
const c3 = ref();
const c4 = ref();

const s1 = ref();
const s2 = ref();

const animations = [
  appear_left(s1, 100),
  appear_left(s2, 200),
  fade_up(c1, 100),
  fade_up(c2, 200),
  fade_up(c3, 300),
  fade_up(c4, 400),
];

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.frame
  .title(ref="s1") {{ t('sui') }}
  .desc(ref="s2") {{ t('sui_desc') }}
  .cards
    card(
      :img="hammer"
      :desc="t('enoki_desc')"
      ref="c1"
    )
    card(
      :img="shield"
      :title="t('nodb')"
      :desc="t('nodb_desc')"
      ref="c2"
    )
    card(
      :img="metaverse"
      :title="t('metaverse')"
      :desc="t('metaverse_desc')"
      ref="c3"
    )
    card(
      :img="github"
      :title="t('open')"
      :desc="t('open_desc')"
      ref="c4"
    )
  img.tree(src="../assets/tree.png")
</template>

<style lang="stylus" scoped>
.frame
  background url('../assets/background_noise.reverse.jpg') center / cover
  color white
  display flex
  flex-flow column nowrap
  align-items center
  position relative
  .title
    font-size 30px
    font-weight 800
    margin-top 2em
    filter drop-shadow(1px 2px 3px rgba(black, .5))
    font-family 'Montserrat'
    background-image radial-gradient(#80DEEA, #1976D2, #eee)
    background-size 100%;
    background-clip text;
    color transparent;
  .desc
    font-family 'DM Sans'
    font-size .8em
    opacity .65
    letter-spacing 2px
    margin-bottom 2em
    text-align center
    margin-top .25em
    padding 0 .5em
    b
      color #F39C12
      font-weight 100
  .cards
    display flex
    flex-flow column nowrap
    z-index 2
    >div
      padding 1em
  img.tree
    transform translateX(20%)
    z-index 1
    width 200px
    filter drop-shadow(1px 2px 3px rgba(black, .5))
</style>

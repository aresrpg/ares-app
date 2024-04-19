<i18n>
en:
  title: An exclusive Gameplay
  desc: Choose your class, equip and forge your weapons according to your favorite element. Available synergies are practically infinite and fully customizable
  carac: statistics
  carac_desc: Each new level allows you to increase your stats
  items: items
  items_desc: Hundreds of items are available in game. You can get them by killing monsters, forging them, or buying them to other players
  fights: fights
  fights_desc: AresRPG combines 3D voxel aesthetics with a unique isometric, turn-based combat system, allowing for strategic, deeply tactical battles and synergistic gameplay.
  class: classes
  class_desc: In AresRPG, start your adventure by selecting from diverse character classes with unique abilities, advancing to unlock spells and enhance stats tailored to your combat style.
  spells: spells
  spells_desc: During your progression, you will unlock spells when your hero reaches new levels
  titles: Titles
  titles_desc: Earn prestigious titles in AresRPG by completing challenges and milestones, enhancing your reputation among players.
  guilds: Guilds
  guilds_desc: Players can form guilds to control areas and manage ownership through Sui objects and DAOs, adding strategic depth
  pets: Pets
  pets_desc: Discover and nurture pets to enhance your stats by consistently equipping and feeding them.
  relics: Relics
  relics_desc: Acquire powerful relics through exploration, each offering unique enhancements crucial for character development and strategy.
fr:
  title: Un Gameplay exclusif
  desc: Choisissez votre classe, équipez vous et forgez vos armes en fonction de votre élément favori. Les synergies possibles sont infinies et complètement personnalisables
  carac: CARACTÉRISTIQUES
  carac_desc: Chaque niveau supplémentaire vous permet d'augmenter vos compétences
  items: items
  items_desc: Des centaines d'items sont disponibles en jeux. Vous pouvez les obtenir en tuant des monstres, en les forgeant vous mêmes, ou bien grâce au commerce entre joueurs
  fights: combats
  fights_desc: AresRPG combine une esthétique voxel 3D avec un système de combat isométrique et tour par tour unique, permettant des batailles stratégiques, profondément tactiques et un jeu synergique.
  class: classes
  class_desc: Dans AresRPG, commencez votre aventure en choisissant parmi diverses classes de personnages aux capacités uniques, avancez pour débloquer des sorts et améliorer vos statistiques adaptées à votre style de combat.
  spells: SORTILÈGES
  spells_desc: Tout au long de votre progression, vous débloquerez des sorts quand votre personnage monte en niveau
  titles: Titres
  titles_desc: Gagnez des titres prestigieux dans AresRPG en relevant des défis et des jalons, améliorant votre réputation auprès des joueurs.
  guilds: Guildes
  guilds_desc: Les joueurs peuvent former des guildes pour contrôler des zones et gérer la propriété grâce à des objets Sui et des DAO, ajoutant une profondeur stratégique
  pets: Familiers
  pets_desc: Découvrez et élevez des familiers pour améliorer vos statistiques en les équipant et en les nourrissant régulièrement.
  relics: Reliques
  relics_desc: Acquérez de puissantes reliques grâce à l'exploration, chacune offrant des améliorations uniques cruciales pour le développement du personnage et la stratégie.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { appear_right, fade_in, fade_up } from '../core/anime';
import eagle from '../assets/eagle.png';
import helmet from '../assets/helmetsword.png';
import skullaxe from '../assets/skullaxe.png';
import barbarian from '../assets/barbarian.png';
import spells from '../assets/spells.png';
import cards from '../assets/cards.png';
import shield from '../assets/shield.png';
import wolf from '../assets/wolf.png';
import egg from '../assets/svg-icon/egg.svg';

import feature from './feature_card.vue';

const { t } = useI18n();

const s1 = ref();
const s2 = ref();
const s3 = ref();

const f1 = ref();
const f2 = ref();
const f3 = ref();
const f4 = ref();
const f5 = ref();
const f6 = ref();
const f7 = ref();
const f8 = ref();
const f9 = ref();

const arrows = ref();

const animations = [
  fade_up(s1, 100),
  fade_up(s2, 200),
  fade_up(s3, 300),
  appear_right(f1, 100),
  appear_right(f2, 200),
  appear_right(f3, 300),
  appear_right(f4, 400),
  appear_right(f5, 500),
  appear_right(f6, 600),
  appear_right(f7, 700),
  appear_right(f8, 800),
  appear_right(f9, 900),
  fade_in(arrows, 100),
];

onMounted(() => animations.forEach(animation => animation.mount()));
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
.frame
  .image(ref="s1")
  .text
    .title(ref="s2") {{ t('title') }}
    .desc(ref="s3") {{ t('desc') }}
  .features
    feature.f1(
      :title="t('carac')"
      :desc="t('carac_desc')"
      :img="eagle"
      ref="f1"
    )
    feature.f2(
      :title="t('items')"
      :desc="t('items_desc')"
      :img="helmet"
      ref="f2"
    )
    feature.f3(
      :title="t('fights')"
      :desc="t('fights_desc')"
      :img="skullaxe"
      ref="f3"
    )
    feature.f4(
      :title="t('class')"
      :desc="t('class_desc')"
      :img="barbarian"
      ref="f4"
    )
    feature.f5(
      :title="t('spells')"
      :desc="t('spells_desc')"
      :img="spells"
      ref="f5"
    )
    feature.f6(
      :title="t('titles')"
      :desc="t('titles_desc')"
      :img="cards"
      ref="f6"
    )
    feature.f7(
      :title="t('pets')"
      :desc="t('pets_desc')"
      :img="wolf"
      ref="f7"
    )
    feature.f8(
      :title="t('guilds')"
      :desc="t('guilds_desc')"
      :img="shield"
      ref="f8"
    )
    feature.f9(
      :title="t('relics')"
      :desc="t('relics_desc')"
      :img="egg"
      ref="f9"
    )
  img.arrows(ref="arrows" src="../assets/double_arrow_down.svg")
  img.back.ruby(src="../assets/ruby.png")
  img.back.emerald(src="../assets/emerald.png")
  img.back.opale(src="../assets/opale.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  flex-flow column nowrap
  background url('../assets/background_noise.jpeg') center / cover
  position relative
  >.image
    box-shadow inset -3px -3px 10px black
    width 100vw
    height 25vh
    display flex
    z-index 1
    width 100%
    object-fit cover
    background url('../assets/art/snow-sakura.jpg') center / cover
    border-top 1px solid white
    border-bottom 1px solid white
  .arrows
    width 20px
    padding-top 1em
    align-self center
  img.back
    object-fit contain
    position absolute
    &.ruby
      width 210px
      left 1em
      bottom 18em
      animation float 5s infinite alternate ease-in-out
    &.emerald
      width 180px
      bottom 20vh
      right .5vw
      animation float 4.5s 2s infinite alternate ease-in-out
    &.opale
      width 220px
      bottom .5vh
      left -.5vw
      animation float 7s 1s infinite alternate ease-in-out

  .text
    display flex
    flex-flow column nowrap
    align-items center
    padding 1em
    color white
    .title
      font-family 'Montserrat'
      font-size 1.5em
      font-weight 600
      text-align center
      background-image linear-gradient(90deg, #80DEEA, #1976D2, #eee)
      background-size 100%;
      background-clip text;
      color transparent;
    .desc
      font-family 'DM Sans'
      text-align center
      opacity .5
      font-size .75em
      padding-top 1em

@keyframes float
  0%
    transform translateY(30px)
  100%
    transform translateY(0)
</style>

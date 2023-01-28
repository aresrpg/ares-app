<i18n>
  fr:
    title: Un Gameplay exclusif
    desc: Choisissez votre classe, équipez vous et forgez vos armes en fonction de votre élément favori. Les synergies possibles sont infinies et complètement personnalisables
    carac: CARACTÉRISTIQUES
    carac_desc: Chaque niveau supplémentaire vous permet d'augmenter vos compétences
    items: items
    items_desc: Des centaines d'items sont disponibles en jeux. Vous pouvez les obtenir en tuant des monstres, en les forgeant vous mêmes, ou bien grâce au commerce entre joueurs
    fights: combats
    fights_desc: Le système de combat inédit d'AresRPG est un hybride entre les combos d'armes au corps à corps, et les sorts de classe.
    class: classes
    class_desc: 4 classes sont disponibles sur AresRPG et définissent le style de jeu ainsi que les sorts de votre héro
    spells: SORTILÈGES
    spells_desc: Tout au long de votre progression, vous débloquerez des sorts quand votre personnage monte en niveau
    achev: ACHÈVEMENTS
    achev_desc: Les achèvements vous permettent de gagner toute sorte de bonus, items, titres, et plus encore !
  en:
    title: An exclusive Gameplay
    desc: Choose your class, equip and forge your weapons according to your favorite element. Available synergies are practically infinite and fully customizable
    carac: statistics
    carac_desc: Each new level allows you to increase your stats
    items: items
    items_desc: Hundreds of items are available in game. You can get them by killing monsters, forging them, or buying them to other players
    fights: fights
    fights_desc: AresRPG's unique fighting system is an hybrid between close combats combos and classes's spells
    class: classes
    class_desc: 4 classes are available on AresRPG and dictate the playing style along with your hero's spells
    spells: spells
    spells_desc: During your progression, you will unlock spells when your hero reaches new levels
    achev: achievments
    achev_desc: Achievements allows you to win all kind of bonus, items, titles, and more !
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { appear_right } from '../core/anime'
import eagle from '../assets/eagle.png'
import helmet from '../assets/helmetsword.png'
import skullaxe from '../assets/skullaxe.png'
import barbarian from '../assets/barbarian.png'
import spells from '../assets/spells.png'
import cards from '../assets/cards.png'

import feature from './feature_card.vue'

const { t } = useI18n()
const f1 = ref()
const f2 = ref()
const f3 = ref()
const f4 = ref()
const f5 = ref()
const f6 = ref()

const animations = [
  appear_right(f1, 100),
  appear_right(f2, 200),
  appear_right(f3, 300),
  appear_right(f4, 400),
  appear_right(f5, 500),
  appear_right(f6, 600),
]

onMounted(() => animations.forEach(animation => animation.mount()))
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.frame
  iframe.trailer(width="560" height="315" src="https://www.youtube.com/embed/_vSGW0Je-Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  .text
    .title {{ t('title') }}
    .desc {{ t('desc') }}
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
      :title="t('achev')"
      :desc="t('achev_desc')"
      :img="cards"
      ref="f6"
    )
  img.arrows(src="../assets/double_arrow_down.svg")
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
  .trailer
    box-shadow inset -3px -3px 10px black
    width 100vw
    height 25vh
    display flex
    background url('../assets/screenshot1.jpeg') center / cover

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
    .desc
      text-align center
      font-family 'Roboto Condensed'
      opacity .5
      font-size .75em
      padding-top 1em

@keyframes float
  0%
    transform translateY(30px)
  100%
    transform translateY(0)
</style>

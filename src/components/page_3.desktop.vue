<i18n>
fr:
  game: Le Jeu
  desc: Vous commencez votre aventure dans la ville de Thèbes avec votre arme de classe pour seule possession, votre but est de devenir suffisamment fort pour affronter le gardien de l'antre dans les montagnes. Par chance, la ville est infestée de poules et de rats, ils vous serviront à obtenir vos premiers équipements
  stats: CARACTÉRISTIQUES
  stats_desc: Chaque niveau suplementaire vous permets d'augmenter vos stats
  fights: COMBATS
  fights_desc: Le système de combat inédit d'AresRPG est un hybride entre les combos d'armes au corps à corps, et les sorts de classe.
  items: ITEMS
  items_desc: Des centaines d'items sont disponibles en jeux. Vous pouvez les obtenir en tuant des monstres, en les forgeant vous mêmes, ou bien grâce au commerce entre joueurs
  spells: SORTILÈGES
  spells_desc: Tout au long de votre progression, vous débloquerez des sorts quand votre personnage monte en niveau
  achievments: ACHÈVEMENTS
  achievments_desc: Les achèvements vous permettent de gagner toute sorte de bonus, items, titres, et plus encore !
  dj: DONJONS
  dj_desc: Seul ou en groupe, vous pouvez entrer dans une multitude de donjons et confronter des créatures plus puissantes. Les donjons sont instanciés avec un système de salles.
en:
  game: The Game
  desc: You start in the city of Thebes with nothing but your base weapon, your goal is to become strong enough to vanquish the terrific dragon behind the gates in the mountains. It's your lucky day! the town is infested with chickens and rats, which will help you gather your first set of armor
  stats: characteristics
  stats_desc: Each new level allows you to increase your stats
  fights: Fights
  fights_desc: AresRPG's unique fighting system is an hybrid between close combats combos and classes's spells
  items: Items
  items_desc: Hundreds of items are available in game. You can get them by killing monsters, forging them, or buying them to other players
  spells: Spells
  spells_desc: During your progression, you will unlock spells when your hero reaches new levels
  achievments: Achievements
  achievments_desc: Achievements allows you to win all kind of bonus, items, titles, and more !
  dj: Dungeons
  dj_desc: In team or alone, you will be able to progress through multiple dungeons and face more powerful creatures. Dungeons have an instantiated rooms system
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

import bg from '../assets/page3_bg.jpeg'
import eagle from '../assets/eagle.png'
import skull from '../assets/skullaxe.png'
import helmet from '../assets/helmetsword.png'
import spells from '../assets/spells.png'
import cards from '../assets/cards.png'
import dj from '../assets/dj.png'

import feature_card from './feature_card.big.desktop.vue'
import page_container from './page_container.desktop.vue'

const { t } = useI18n()
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .top
      .title {{ t('game') }}
      .line
      .desc {{ t('desc') }}
    img.sword(src="../assets/skullsword.png")
    .bottom
      feature_card(:img="eagle" :title="t('stats')" :desc="t('stats_desc')")
      feature_card(:img="skull" :title="t('fights')" :desc="t('fights_desc')")
      feature_card(:img="helmet" :title="t('items')" :desc="t('items_desc')")
      feature_card(:img="spells" :title="t('spells')" :desc="t('spells_desc')")
      feature_card(:img="cards" :title="t('achievments')" :desc="t('achievments_desc')")
      feature_card(:img="dj" :title="t('dj')" :desc="t('dj_desc')")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  position relative
  overflow hidden
  .sword
    position absolute
    width 800px
    object-fit contain
    right -200px
    bottom 0
    transform rotate(43deg)
    z-index 1
    mix-blend-mode luminosity
    opacity .5
  .bottom
    display flex
    flex-flow row wrap
    justify-content space-evenly
    align-items center
    z-index 2
    flex 1
    margin 0 400px 0 100px
    @media screen and (max-width: 1710px)
      margin 0 100px 0
    @media screen and (max-width: 1400px)
      margin 0
  .top
    display flex
    flex-flow row nowrap
    padding 3em 0 0 150px
    z-index 2
    position relative
    .title
      font-size 3em
    .line
      width 100px
      margin 1em
      margin-top 45px
      background white
      height 1px
      box-shadow 1px 2px 3px black
    .desc
      margin-top 25px
      width 500px
      font-size .9em
      font-weight 100
      font-family 'Montserrat'
</style>

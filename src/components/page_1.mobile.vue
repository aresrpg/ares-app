<script setup>
import feature from './feature_card.vue';
</script>

<template lang="pug">
.frame
  .trailer
  .text
    .title Un Gameplay exclusif
    .desc Choisissez votre classe, équipez vous et forgez vos armes en fonction de votre élément favori. Les synergies possibles sont infinies et complètement personnalisables
  .features
    feature(
      title="CARACTÉRISTIQUES"
      desc="Chaque niveau suplementaire vous permets d’augmenter vos stats"
      img="src/assets/eagle.png"
    )
    feature(
      title="items"
      desc="Des centaines d’items sont disponibles en jeux. Vous pouvez les obtenir en tuant des monstres, en les forgeant vous mêmes, ou bien grâce au commerce entre joueurs"
      img="src/assets/helmetsword.png"
    )
    feature(
      title="combats"
      desc="Le système de combat inédit d’AresRPG est un hybride entre les combos d’armes au corps à corps, et les sorts de classe."
      img="src/assets/skullaxe.png"
    )
    feature(
      title="classes"
      desc="4 classes sont disponibles sur AresRPG et définissent le style de jeu ainsi que les sorts de votre héro"
      img="src/assets/barbarian.png"
    )
    feature(
      title="SORTILÈGES"
      desc="Tout au long de votre progression, vous débloquerez des sorts quand votre personnage monte en niveau"
      img="src/assets/spells.png"
    )
    feature(
      title="ACHÈVEMENTS"
      desc="Les achèvements vous permettent de gagner toute sorte de bonus, items, titres, et plus encore !"
      img="src/assets/cards.png"
    )
  img.arrows(src="src/assets/double_arrow_down.svg")
  img.back.ruby(src="src/assets/ruby.png")
  img.back.emerald(src="src/assets/emerald.png")
  img.back.opale(src="src/assets/opale.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  width 100%
  height 100vh
  flex-flow column nowrap
  background url('src/assets/background_noise.jpeg') center / cover
  position relative
  .arrows
    position absolute
    bottom .6em
    left 50%
    transform translateX(-50%)
  img.back
    object-fit contain
    position absolute
    &.ruby
      width 210px
      left 1em
      bottom 35vh
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
    background url('src/assets/screenshot1.jpeg') center / cover

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

<script setup>
import card from './feature_card.big.vue';
</script>

<template lang="pug">
.frame
  .title Une Aventure vanilla
  .desc mais sous #[b steroids]
  .cards
    card(
      img="src/assets/open-box.png"
      title="Aucun Mods"
      desc="Vous pouvez rejoindre le serveur avec le client Minecraft officiel"
    )
    card(
      img="src/assets/feathers.png"
      title="Une Instance"
      desc="Le serveur est développé entièrement en JavaScript pour supporter des milliers de joueurs sur la même map"
    )
    card(
      img="src/assets/github.png"
      title="Open Source"
      desc="AresRPG est open-source, vous pouvez meme lancer votre propre version du jeu"
    )
    card(
      img="src/assets/earth.png"
      title="Immersif"
      desc="Nous ajoutons une tonne de nouveaux son et models 3D"
    )
    card(
      img="src/assets/metaverse.png"
      title="Metaverse"
      desc="Les ArtWork et assets communautaires sous forme de NFT pourront être utilisés en jeu et parfaire votre style"
    )
    card(
      img="src/assets/guild.png"
      title="Guildes"
      desc="Jouez en groupe pour raid les donjons, ou fondez votre guilde pour contrôler les terres d’AresRPG en communauté"
    )
  img.tree(src="src/assets/tree.png")
</template>

<style lang="stylus" scoped>
.frame
  width 100%
  height 100vh
  background url('src/assets/background_noise.reverse.jpg') center / cover
  font-family 'Montserrat'
  color white
  display flex
  flex-flow column nowrap
  align-items center
  position relative
  .title
    font-size 30px
    font-weight 800
    margin-top 2em
    text-shadow 1px 2px 3px rgba(black, .5)
  .desc
    font-size 20px
    font-weight 100
    opacity .65
    letter-spacing 2px
    margin-bottom 2em
    b
      color #F39C12
      font-weight 100
  .cards
    display grid
    grid-template-rows 1fr 1fr 1fr
    grid-template-columns 1fr 1fr
    place-items baseline
    z-index 2
    >div
      padding 1em
  img.tree
    position absolute
    bottom 0
    right 3vw
    z-index 1
    width 200px
    filter drop-shadow(1px 2px 3px rgba(black, .5))
</style>

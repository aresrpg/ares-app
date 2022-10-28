<template lang="pug">
.frame
  .images
    div
    div
    div
    div
  .title Les Paliers
  .desc Le monde d’AresRPG est constitué de 6 paliers. Un palier est une ile volante représentant un univers miniature et gardé par un redoutable dragon. Pour passer au palier suivant, vous devez trouver et affronter son gardien
  .keys
    img.sword(src="../assets/fire_sword.png")
    img.gold_key(src="../assets/gold_key.png")
    img.silver_key(src="../assets/silver_key.png")
</template>

<style lang="stylus" scoped>
.frame
  display flex
  width 100%
  height 100vh
  flex-flow column nowrap
  overflow hidden
  color white
  background url('src/assets/background_noise.reverse.jpg') center / cover
  align-items center
  text-align center
  padding 1em
  position relative
  .title
    font-family 'Montserrat'
    font-size 28px
    font-weight 900
    padding-top 2em
  .desc
    font-family 'DM Sans'
    font-size 15px
    opacity .65
    padding 1em
  .images
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 1em
    width 100%
    div
      box-shadow 1px 2px 3px black
      width 100%
      height 200px
      border-radius 12px
    :nth-child(1)
      background url('src/assets/ss1.jpg') center / cover
      z-index 4
    :nth-child(2)
      background url('src/assets/ss2.jpg') center / cover
      z-index 3
    :nth-child(3)
      background url('src/assets/ss3.jpg') center / cover
      z-index 2
    :nth-child(4)
      background url('src/assets/ss4.jpg') center / cover
  .keys
    img
      position absolute
      bottom 1em
    .sword
      left 1em
    .gold_key
      left 50%
      transform translateX(-30%)
    .silver_key
      right 1em
      bottom 4em
</style>

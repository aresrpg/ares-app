<template lang="pug">
mixin srcType(type)
  source(src=`../assets/trailer.${type}` type=`video/${type}`)

.hero__container
  video(poster="../assets/snow-background.jpg" preload autoplay muted loop)
    +srcType('webm')
    +srcType('mp4')
  .left

  img.logo(src="../assets/logo.png" alt="logo")
  .title
    h1 A Delightful
    h1.gold MMORPG Experience
  .action
    span.top This project is under development
    span.desc To start playing on the demo server, please open this website on desktop
</template>

<style lang="stylus" scoped>
.hero__container
  position relative
  width 100%
  height 100vh
  display flex
  flex-flow column nowrap
  overflow hidden
  justify-content space-evenly
  align-items center
  padding 2em

  .action
    display flex
    flex-flow column nowrap
    position relative
    color #ECF0F1
    margin-top 2em
    z-index 2
    filter drop-shadow(1px 2px 3px black)
    span
      &.top
        font-size 1.3em
        padding-bottom .5em
        text-decoration underline
      &.desc
        text-align justify
        font-size .875em
        max-width 600px

  .title
    display flex
    flex-flow column nowrap
    font-size 1.5em
    line-height 45px
    position relative
    text-transform uppercase
    color #ECF0F1
    z-index 2
    h1
      filter drop-shadow(1px 2px 3px black)

      &.gold
        color #F1C40F
        padding-left 47px

  video
    width 100%
    height 100%
    object-fit cover
    position absolute
    top 0
    left 0
    z-index 0

  &::after
    content ''
    position absolute
    width 100%
    height @width
    top 0
    left 0
    background url('../assets/loggedbar.png'), rgba(#212121, .3)
    z-index 1

  img
    width 50vw
    right 5%
    bottom 5%
    mix-blend-mode color-dodge
    z-index 4
    animation grow 20s ease-in-out infinite alternate

@keyframes logo
  from
    opacity 1

  to
    opacity 0

@keyframes grow
  0%
    filter grayscale(1) blur(10px)

  10%
    filter grayscale(1) blur(3px)

  15%
    filter grayscale(0) blur(10px) brightness(.5)

  20%
    filter grayscale(1) blur(5px)

  40%
    filter grayscale(1) blur(2px)

  75%
    filter grayscale(.2) blur(2px)

  80%
    filter grayscale(1) blur(5px)

  100%
    filter grayscale(1) blur(1px)

@keyframes float
  from
    transform translateY(-5px) scale(.7)

  to
    transform translateY(5px) scale(.7)
</style>

<template lang="pug">
mixin srcType(type)
  source(src=`../assets/trailer.${type}` type=`video/${type}`)

.hero__container
  video(poster="../assets/snow-background.jpg" preload autoplay muted loop)
    +srcType('webm')
    +srcType('mp4')
  img.logo(src="../assets/logo.png" alt="logo")
</template>

<style lang="stylus" scoped>
.hero__container
  position relative
  width 100%
  height 100vh
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  overflow hidden

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
    width 300px
    mix-blend-mode color-dodge
    position relative
    z-index 4
    transform translateX(10px)
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

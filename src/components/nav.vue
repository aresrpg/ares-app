<template lang="pug">
.nav__container
  .title
    h1 Ares
    h1.rpg RPG
</template>

<style lang="stylus" scoped>
.nav__container
  width 100%
  display flex
  padding 1em
  align-items center
  position absolute
  top 0
  left 0
  z-index 2

  .title
    display flex
    flex-flow row nowrap
    font-size 1em
    line-height 45px
    position relative
    text-transform uppercase
    color #ECF0F1
    z-index 2
    margin-right auto

    h1
      filter drop-shadow(1px 2px 3px black)

      &.rpg
        font-weight 400
        color white
        opacity .7
        font-size 2.5em
</style>

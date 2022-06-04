<template lang="pug">
.nav__container
  .connect.wallet Connect Wallet
  .connect.minecraft Connect Minecraft
    //- fa(icon="bars")
</template>

<style lang="stylus" scoped>
.nav__container
  width 100%
  display flex
  flex-flow row nowrap
  padding 1em
  align-items center
  position absolute
  top 0
  left 0
  z-index 2

  .connect
    margin-right 1em
    color #ECF0F1
    border 1px solid @color
    // background #292827
    padding .5em 1em
    border-radius 3px
    opacity .7
    box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
    font-size .8em
    width max-content
    display flex
    cursor pointer
</style>

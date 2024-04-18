<i18n>
en:
  first: The First {0} MMORPG
fr:
  first: Le Premier MMORPG sur {0}
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template lang="pug">
.container
    i18n-t.first(keypath="first" ref="title")
      b #Sui
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
text-color = #eee
.container
  width 100%
  position absolute
  z-index 6
  color text-color
  top 100vh
  left 0
  transform translateY(-50%)
  backdrop-filter blur(50px)
  border-top 1px solid rgba(#a4b5c1, .7)
  border-bottom @border-top
  // font-family 'Montserrat'
  display flex
  flex-flow column nowrap
  padding .25em 10%
  flex-flow row nowrap
  align-items center
  justify-content center
  font-weight 900
  text-shadow 1px 2px 1px rgba(#eee .4)
  font-size 2em
  text-transform uppercase
  background-image radial-gradient(circle, #80DEEA, #1976D2, #eee)
  background-size 100%;
  background-clip text;
  color transparent;
  b
    margin 0 .2em
    font-family 'Montserrat'
    font-weight 900
    // color #4FC3F7
</style>

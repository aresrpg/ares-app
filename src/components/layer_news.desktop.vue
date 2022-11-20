<i18n>
fr:
  title: News
  news: LE SERVEUR EST EN DÉVELOPPEMENT ET PROPOSERA UN {kickstarter} TRÈS PROCHAINEMENT, {joinus} POUR ÊTRE PRIORITAIRE !
  kickstarter: KICKSTARTER
  joinus: REJOINT LE DISCORD
en:
  title: News
  news: The serveur is currently under development and will launch a {kickstarter} campaign real soon, {joinus} to secure your slot
  joinus: JOIN THE DISCORD
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { appear_right, minimal_fade_up } from '../core/anime'

const title = ref()
const { t } = useI18n()
const animations = [appear_right(title, 100)]
onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.container
  .title(ref="title") {{ t('title') }}
  .news
    i18n-t(keypath="news")
      template(#kickstarter)
        span.kick {{ t('kickstarter') }}
      template(#joinus)
        a.join(href="https://discord.gg/aresrpg" target="_blank") {{ t('joinus') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
text-color = rgba(#2C3E50, .9)
.container
  width 100%
  position absolute
  z-index 6
  color text-color
  top 100vh
  left 0
  transform translateY(-50%)
  backdrop-filter blur(50px)
  font-family 'DM Sans'
  display flex
  flex-flow column nowrap
  padding 1.5em 10%
  .title
    font-weight 900
    position relative
    width max-content
    margin-bottom 1em
    &::after
      content ''
      position absolute
      height 1px
      width 500px
      top 50%
      right -@width - 10px
      transform translateY(-50%)
      filter material-2
      background text-color
  .news
    justify-self center
    text-align center
    .kick
      color #27AE60
      font-weight 900
    .join
      color inherit
      text-decoration underline
</style>

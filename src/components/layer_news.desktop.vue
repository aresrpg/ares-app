<i18n>
fr:
  title: News
  news: LE SERVEUR EST EN DÉVELOPPEMENT ET PROPOSERA UN {kickstarter} TRÈS PROCHAINEMENT, {joinus} POUR ÊTRE PRIORITAIRE !
  kickstarter: KICKSTARTER
  joinus: REJOIGNEZ LE DISCORD
en:
  title: News
  news: The serveur is currently under development and will launch a {kickstarter} campagin soon, {joinus} to secure your slot
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template lang="pug">
.container
  .title {{ t('title') }}
  .news
    i18n-t(keypath="news")
      template(#kickstarter)
        span.kick {{ t('kickstarter') }}
      template(#joinus)
        span.join {{ t('joinus') }}
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
  display flex
  flex-flow column nowrap
  padding 1.5em 10%
  .title
    font-weight 900
    position relative
    width max-content
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
    .join
      text-decoration underline
</style>

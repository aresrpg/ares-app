<i18n>
  fr:
    nothing: Il n'y a rien ici..
    take: Ramène moi vers l'acceuil
  en:
    nothing: There is nothing here..
    take: Take me back
</i18n>

<template lang="pug">
.container
  h1 404
  span {{ t('nothing') }}
  app_button(
        clickable="true"
        @click="$router.push('/')"
        color="#000"
        border="#000"
        )
        template(#content)
          span.button {{ t('take') }} 🤗
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import app_button from '../components/app_button.vue';

const { t } = useI18n();
</script>

<style lang="stylus" scoped>
.container
  font-family 'DM Sans'
  display flex
  flex-flow column nowrap
  width 100vw
  height 100vh
  justify-content center
  align-items center
  color #fff
  h1
    font-size 10rem
  >span
    margin-bottom 1rem
  span.button
    margin 0 .5em 0 .75em
    color #34495E
</style>

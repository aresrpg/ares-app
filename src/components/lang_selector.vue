<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import france from '../assets/france.png'
import usa from '../assets/usa.png'

const langs = [
  { locale: 'fr', flag: france },
  { locale: 'en', flag: usa },
]
const i18n = useI18n()
const selected = ref(langs.find(lang => i18n.locale.value === lang.locale))
const select = ({ locale }) => {
  i18n.locale.value = locale
  selected.value = langs.find(lang => locale === lang.locale)
}
</script>

<template lang="pug">
.langs(@click="click")
  img.flag(:src="selected.flag")
  .dropdown
    img(v-for="lang in langs.filter(l => l.locale !== selected.locale)" :key="lang.locale" :src="lang.flag" @click="() => select(lang)")
</template>

<style lang="stylus" scoped>
.langs
  position fixed
  z-index 10
  top .25em
  right .5em
  padding .25em
  border-radius 5px
  img
    width 20px
  >img
    filter drop-shadow(1px 2px 3px black)
  .dropdown
    display none
  &:hover
    transition all 300ms ease-in-out
    background rgba(black, .3)
    .dropdown
      display flex
</style>

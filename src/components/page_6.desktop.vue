<i18n>
fr:
  palier: Les Paliers
en:
  palier: The Worlds
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

import bg from '../assets/page6bg.jpeg'

import page_container from './page_container.desktop.vue'

const { t } = useI18n()
</script>

<template lang="pug">
page_container(:img="bg")
  .page
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
</style>

<template lang="pug">
.root_sm(v-if="breakpoints.mobile.matches" ref="root")
  lang_selector
  scroll_indicator(:count="8" :selected="scrolled_index")
  hero_mobile
  page_1_mobile
  page_2_mobile
  page_3_mobile
  page_4_mobile
  page_5_mobile
  page_6_mobile
  page_7_mobile
.root(v-else)
  lang_selector
  .gold_line
  hero
  news_layer
  page_1_desktop
  page_2_desktop
  page_3_desktop
  page_4_desktop
  page_5_desktop
  page_6_desktop
</template>

<script setup>
import useBreakpoints from 'vue-next-breakpoints'
import { provide, ref, onMounted, onBeforeUnmount } from 'vue'

import hero from '../components/hero.desktop.vue'
import hero_mobile from '../components/hero.mobile.vue'
import page_1_mobile from '../components/page_1.mobile.vue'
import page_2_mobile from '../components/page_2.mobile.vue'
import page_3_mobile from '../components/page_3.mobile.vue'
import page_4_mobile from '../components/page_4.mobile.vue'
import page_5_mobile from '../components/page_5.mobile.vue'
import page_6_mobile from '../components/page_6.mobile.vue'
import page_7_mobile from '../components/page_7.mobile.vue'
import lang_selector from '../components/lang_selector.vue'
import scroll_indicator from '../components/scroll_indicator.vue'
import news_layer from '../components/layer_news.desktop.vue'
import page_1_desktop from '../components/page_1.desktop.vue'
import page_2_desktop from '../components/page_2.desktop.vue'
import page_3_desktop from '../components/page_3.desktop.vue'
import page_4_desktop from '../components/page_4.desktop.vue'
import page_5_desktop from '../components/page_5.desktop.vue'
import page_6_desktop from '../components/page_6.desktop.vue'

const logged = ref(false)
const wallet = ref({})
const root = ref()
const scrolled_index = ref(0)

const icon_size = '2x'

provide('logged', logged)
provide('wallet', wallet)

const breakpoints = useBreakpoints({
  mobile: 1000,
})

const on_scroll = () =>
  (scrolled_index.value = Math.ceil(window.scrollY / window.innerHeight))

onMounted(() => window.addEventListener('scroll', on_scroll))
onBeforeUnmount(() => window.removeEventListener('scroll', on_scroll))
</script>

<style lang="stylus" scoped>
.root_sm
  width 100vw
  overflow hidden
  display flex
  flex-flow column nowrap
  font-family 'Roboto Condensed'
  .frame
    width 100%
    min-height 700px
    scroll-snap-align start
.root
  width 100vw
  display flex
  flex-flow column nowrap
  position relative
  font-family 'DM Sans'
  .gold_line
    position absolute
    opacity .3
    width 50px
    top -2em
    bottom 0
    left 2em
    background url('../assets/goldline2.png') repeat-y
    mix-blend-mode luminosity
    z-index 5
</style>

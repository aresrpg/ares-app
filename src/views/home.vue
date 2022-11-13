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
  // min-width 300px
  width 100vw
  // height 100vh
  overflow hidden
  // overflow-y auto
  // scroll-snap-type y proximity
  display flex
  flex-flow column nowrap
  .frame
    width 100%
    min-height 700px
    scroll-snap-align start
.root
  width 100vw
  display flex
  flex-flow column nowrap
  .gold_line
    background url('../assets/goldline2.png') repeat-x
</style>

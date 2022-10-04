<template lang="pug">
.root__container
  navbar
  hero_sm(v-if="breakpoints.mobile.matches")
  hero(v-else)
  footer
    .socials
      a(href="https://twitter.com/AresRPG" target="_blank" rel="noopener noreferrer" aria-label="Twitter")
        fa(:icon="['fab', 'twitter']" :size="icon_size")
      a(href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="Youtube")
        fa(:icon="['fab','youtube']" :size="icon_size")
      a(href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Github")
        fa(:icon="['fab','github']" :size="icon_size")
      a(href="https://discord.gg/kpzNeCW" target="_blank" rel="noopener noreferrer" aria-label="Discord")
        fa(:icon="['fab','discord']" :size="icon_size")
      a(href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Telegram")
        fa(:icon="['fab','telegram']" :size="icon_size")
    .bottom
      span Open for contributions !
</template>

<script setup>
import useBreakpoints from 'vue-next-breakpoints';
import { provide, ref } from 'vue';

import navbar from '../components/navbar.vue';
import hero from '../components/hero.vue';
import hero_sm from '../components/hero.sm.vue';

const logged = ref(false);
const wallet = ref({});

const icon_size = '2x';

provide('logged', logged);
provide('wallet', wallet);

const breakpoints = useBreakpoints({
  mobile: 1000,
});
</script>

<style lang="stylus" scoped>
.root__container
  display flex
  flex-flow column nowrap

footer
  width 100%
  background #212121
  display flex
  flex-flow column nowrap
  align-items center
  .socials
    width 100%
    height 100%
    display flex
    flex-flow row wrap
    justify-content space-evenly
    align-items center
    padding 50px 0
    >*
      filter drop-shadow(1px 2px 3px black)
      color #f1c40f
    // >:first-child
    //   color #3498DB
    // >:nth-child(2)
    //   color #E74C3C
    // >:nth-child(3)
    //   color white
    // >:nth-child(4)
    //   color #8E44AD
    // >:nth-child(5)
    //   color #2980B9
  .bottom
    width 100%
    background darken(#212121, 20%)
    font-size .7em
    color silver
    text-align center
    padding 1em
    a
      text-decoration none
      color #F9A825
</style>

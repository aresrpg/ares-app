<template lang="pug">
.nav__container
  .title
    h1 Ares
    h1.rpg RPG
  .account(v-if="username") @{{ username }}
</template>

<script setup>
import { inject, onMounted, onRenderTriggered, ref } from 'vue';

import { VITE_API_URL } from '../env';

const username = ref();
const logged = inject('logged');

onMounted(() => {
  fetch(`${VITE_API_URL}/me`, {
    credentials: 'include',
  })
    .then(result => result.json())
    .then(({ username: name }) => {
      username.value = name;
      if (name) logged.value = true;
    });
});
</script>

<style lang="stylus" scoped>
.nav__container
  width 100%
  display flex
  padding 1em
  align-items center
  position absolute
  top 0
  left 0
  z-index 2

  .account
    display flex
    flex-flow row nowrap
    color #2ECC71
    font-weight 900
    font-size .875em
    align-items baseline
    text-shadow 1px 2px 3px black

  .title
    display flex
    flex-flow row nowrap
    font-size 1em
    line-height 45px
    position relative
    text-transform uppercase
    color #ECF0F1
    z-index 2
    margin-right auto

    h1
      filter drop-shadow(1px 2px 3px black)

      &.rpg
        font-weight 400
        color white
        opacity .7
        font-size 2.5em
</style>

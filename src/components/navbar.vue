<template lang="pug">
.nav__container
  .title
    h1 Ares
    h1.rpg RPG
  .account(v-if="username") @{{ username }}
  .wallet(v-if="wallet.public_key" :class="{ verified: wallet.verified }") @{{ display_key(wallet.public_key) }}
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'

import fetch from '../fetch.js'

const username = ref()
const wallet = inject('wallet')
const logged = inject('logged')
const display_key = key => {
  const reduced = `${key.substring(0, 5)}..${key.substring(key.length - 5)}`
  return wallet.value.verified ? reduced : `${reduced} (unverified)`
}

onMounted(() => {
  fetch(`/secure/me`).then(name => {
    if (name) {
      username.value = name
      logged.value = true
    }
  })
})
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

  .account, .wallet
    display flex
    flex-flow row nowrap
    color #2ECC71
    font-weight 900
    font-size .875em
    align-items baseline
    text-shadow 1px 2px 3px black
    padding-right 1em
    &.wallet
      color #95A5A6
      opacity .5
    &.verified
      color #9B59B6 !important
      opacity 1

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

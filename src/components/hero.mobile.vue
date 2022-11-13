<i18n>
  fr:
    title: UNE {adventure} INCROYABLE DANS UN UNIVERS {unique}
    adventure: AVENTURE
    unique: UNIQUE
    desc: AresRPG est un serveur minecraft sans mods dans lequel votre objectif est de réunir les 6 œufs de dragon. {desc_2}
    desc_2: Le monde est infesté de créatures que vous devrez réduire en poussière pour améliorer votre équipement et vos compétences
    discover: Découvrir
    placeholder: Participe à la Bêta..
    wip: Le serveur est en développement et proposera un {kick} très prochainement, rejoignez le discord pour être prioritaire !
    email: Enregistrement réussi !
  en:
    title: A {adventure} MMORPG EXPERIENCE IN {unique}
    adventure: DELIGHTFUL
    unique: MINECRAFT
    desc: AresRPG is a no mods minecraft mmorpg server in which your goal is to find all 6 dragon eggs. {desc_2}
    desc_2: The world is full of diverse creatures that you can reduce to atoms in order to upgrade your stuff and skills
    discover: Discover
    placeholder: 'Join the Beta..'
    wip: The server is under construction and will launch a {kick} campaign very soon, join the discord to skip the line !
    email: Sign up sucess !
</i18n>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReCaptcha } from 'vue-recaptcha-v3'

import { fade_up, fade_down } from '../core/anime'

const { executeRecaptcha, recaptchaLoaded, instance } = useReCaptcha()

const { t } = useI18n()
const scroll_down = () =>
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
const twitter = ref()
const telegram = ref()
const discord = ref()
const logo = ref()

const animations = [
  fade_down(logo, 100),
  fade_up(twitter, 200),
  fade_up(telegram, 300),
  fade_up(discord, 600),
]

const mail = ref('')
const email_regex = /[\w-]+@([\w-]+\.)+[\w-]+/gm

const submit_mail = async () => {
  const token = await executeRecaptcha('submit')
  if (!mail.value.match(email_regex)) alert('Email seems invalid!')
  else {
    await fetch('/.netlify/functions/save_email', {
      method: 'POST',
      body: JSON.stringify({
        email: mail.value,
        token,
      }),
    })
    alert(t('email'))
    mail.value = ''
  }
}

onMounted(() => {
  recaptchaLoaded().then(() => instance.value.hideBadge())
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
.frame
  img.logo(src="../assets/text_logo_fr.png" ref="logo")
  .title
    i18n-t(keypath="title")
      template(#adventure)
        b {{ t('adventure') }}
      template(#unique)
        b {{ t('unique') }}
  .description
    i18n-t(keypath="desc")
      template(#desc_2)
        b {{ t('desc_2')}}
  .mail
    input(:placeholder="t('placeholder')" @keyup.enter="submit_mail" v-model="mail")
    svg(
      @click="submit_mail"
      width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M19.632 0.532017H2.36803C1.26787 0.532017 0.376038 1.42385 0.376038 2.52401V14.476C0.376038 15.5762 1.26787 16.468 2.36803 16.468H19.632C20.7322 16.468 21.624 15.5762 21.624 14.476V2.52401C21.624 1.42385 20.7322 0.532017 19.632 0.532017ZM19.632 2.52401V4.21742C18.7015 4.97516 17.218 6.15343 14.0466 8.63674C13.3477 9.18649 11.9633 10.5072 11 10.4918C10.0369 10.5074 8.65199 9.18628 7.95338 8.63674C4.7825 6.1538 3.29867 4.97529 2.36803 4.21742V2.52401H19.632ZM2.36803 14.476V6.77352C3.31896 7.53094 4.6675 8.59379 6.72295 10.2033C7.63002 10.9173 9.21851 12.4935 11 12.4839C12.7728 12.4935 14.3411 10.9402 15.2767 10.2037C17.3321 8.59416 18.681 7.53102 19.632 6.77356V14.476H2.36803Z" fill="black")
  a.twitter(href="https://twitter.com/AresRPG" target="_blank" rel="noopener noreferrer" aria-label="Twitter" ref="twitter")
    fa.icon(:icon="['fab', 'twitter']" size="2x")
  a.telegram(href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Telegram" ref="telegram")
    fa.icon(:icon="['fab', 'telegram']" size="2x")
  a.discord(href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="Discord" ref="discord")
    fa.icon(:icon="['fab', 'discord']" size="2x")
  .wip
    i18n-t(keypath="wip")
      template(#kick)
        b Kickstarter
  .discover(@click="scroll_down")
    span {{t('discover')}}
    img(src="../assets/chevron.svg")
</template>

<style lang="stylus" scoped>
.frame
  display grid
  grid 'logo logo logo' 2fr 'title title title' 1.5fr 'desc desc desc' 2.5fr 'mail mail mail' 1fr 'twitter telegram github' 1fr 'wip wip wip' 1fr 'disc disc disc' 4fr / 1fr 1fr 1fr
  width 100%
  height 100vh
  background url('../assets/mobile_bg_v1.png') bottom / cover
  color #eee
  font-family 'Roboto Condensed'
  place-items center center
  padding 2em
  padding-bottom 1em
  grid-row-gap 1em
  scroll-snap-align start

  .wip
    grid-area wip
    text-transform uppercase
    text-align center
    font-size .7em
    width 100%
    position relative
    text-shadow 1px 2px 5px #212121
    font-weight 900
    z-index 1
    b
      color #09B83E
      text-shadow 1px 2px 5px black
    &::before
      content ''
      position absolute
      width 200vw
      height 150%
      // background crimson
      top -25%
      left -50%
      z-index -1
      backdrop-filter blur(20px)
      // opacity .5
  .logo
    grid-area logo
    object-fit contain
    width 100%
    height 100%
    max-width 400px
  .title
    grid-area title
    text-transform uppercase
    text-align center
    font-size 1.5em
    text-shadow 1px 2px 3px black
    place-self end center
    b
      color #F39C12

  .description
    grid-area desc
    font-size .75em
    text-align center
    font-weight 100
    color #ECF0F1
    display flex
    flex-flow column nowrap
    place-self start center
    b
      margin-top 1em
      font-weight @font-weight
  .mail
    grid-area mail
    border 2px solid white
    border-radius 30px
    display flex
    position relative
    height 40px
    max-width 400px
    width 85%
    input
      background none
      width 100%
      margin 0 .5em
      color white
      border none
      padding 0 5em 0 1em
    svg
      position absolute
      top 50%
      right 0
      transform translateY(-50%)
      background white
      width 60px
      height 105%
      padding .6em
      border-radius 30px
      path
        fill #212121

  a
    color white
    display flex
    align-items baseline
    .icon
      filter drop-shadow(1px 2px 3px black)
  .twitter
    grid-area twitter
  .telegram
    grid-area telegram
  .github
    grid-area github
  .discover
    grid-area disc
    display flex
    flex-flow column
    place-self end center
    font-size .9em
    text-shadow 1px 2px 2px black
    animation bounce 7s ease-in infinite
    img
      height 10px

@keyframes bounce
  from, 20%, 53%, 80%, to
    animation-timing-function cubic-bezier(.215, .61, .355, 1)
    transform translate3d(0, 0, 0)
  40%, 43%
    animation-timing-function cubic-bezier(.755, .05, .855, .06)
    transform translate3d(0, -30px, 0)
  70%
    animation-timing-function cubic-bezier(.755, .05, .855, .06)
    transform translate3d(0, -15px, 0)
  90%
    transform translate3d(0, -4px, 0)
</style>

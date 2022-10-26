<template lang="pug">
mixin srcType(type)
  source(src=`../assets/trailer.${type}` type=`video/${type}`)

.home
  navbar
  .hero__container
    video(poster="../assets/snow-background.jpg" preload="auto" autoplay muted loop)
      +srcType('webm')
      +srcType('mp4')
    img.logo(src="../assets/logo.png" alt="logo")
    .title
      h1 A Delightful
      h1.gold MMORPG Experience
    .action
      span.top This project is under development
      //- span.desc
      //- span.desc To start playing on the demo server once it is released (), please connect your microsoft minecraft account and your solana wallet
      //- .buttons
      //-   .button(@click="handle_microsoft" :class="{ logged }") {{ logged ? 'Logout' : 'Connect Minecraft' }}
      //-   .button(@click="handle_wallet" :class="{ disabled: !logged , connected: wallet.public_key }") {{ wallet.public_key ? 'Disconnect wallet' : 'Connect Wallet' }}
    Modal(
      v-model="modal"
      :close="() => modal = false"
      )
      .modal__content
        .phantom(@click="connect_phantom")
          img(src="../assets/phantom.png")
          span Phantom
        .solflare(@click="connect_solflare")
          img(src="../assets/solflare.png")
          span Solflare
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
</template>

<script setup>
// @ts-nocheck

import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import bs58 from 'bs58';

import fetch from '../fetch.js';
import { VITE_MICROSOFT_REDIRECT_URI } from '../env.js';

const logged = inject('logged');
const azure_client = 'f1b65b61-2f11-42b4-96bf-ce7479d1c85f';
const microsoft_login = `https://login.live.com/oauth20_authorize.srf
?client_id=${azure_client}
&response_type=code
&redirect_uri=${VITE_MICROSOFT_REDIRECT_URI}
&scope=XboxLive.signin%20offline_access`;
const router = useRouter();
const modal = ref(false);
const wallet = inject('wallet');
const toast = useToast();

const find_phantom = () => window.solana?.isPhantom && window.solana;
const find_solflare = () => window.solflare?.isSolflare && window.solflare;

const connect_provider =
  ({ provider, type, link }) =>
  async () => {
    if (!provider) window.open(link, '_blank');
    else
      provider
        .connect()
        .then(() => {
          return fetch(`/secure/signing-message-code`, {
            method: 'POST',
          });
        })
        .then(wallet_signing_message =>
          provider.signMessage(
            new TextEncoder().encode(wallet_signing_message),
            'utf8'
          )
        )
        .then(({ signature }) => {
          const public_key = provider.publicKey.toBase58();
          wallet.value = { type, public_key };
          return fetch('/secure/verify-message', {
            method: 'POST',
            body: JSON.stringify({
              public_key,
              signature: bs58.encode(signature),
            }),
          });
        })
        .then(() => {
          wallet.value = { ...wallet.value, verified: true };
          toast('Verification sucessful', { type: 'success' });
        })
        .catch(error => {
          toast(error?.message, { type: 'error' });
          console.error(error);
        })
        .finally(() => (modal.value = false));
  };

const connect_phantom = connect_provider({
  provider: find_phantom(),
  type: 'phantom',
  link: 'https://phantom.app/',
});

const connect_solflare = connect_provider({
  provider: find_solflare(),
  type: 'solflare',
  link: 'https://solflare.com',
});

const handle_wallet = () => {
  if (!logged.value) return;

  const { type } = wallet.value;
  if (!type) modal.value = true;
  else {
    wallet.value = {};
    switch (type) {
      case 'phantom':
        find_phantom().disconnect();
        break;
      case 'solflare':
        find_solflare().disconnect();
        break;
    }
  }
};

const handle_microsoft = () => {
  if (logged.value) fetch(`/logout`).then(router.go);
  else {
    window.location.href = microsoft_login;
  }
};
</script>

<style lang="stylus" scoped>

.modal__content
  color white
  background #212121
  border-radius 12px
  padding 1em
  display flex
  flex-flow column nowrap
  >div
    display flex
    flex-flow row nowrap
    align-items center
    cursor pointer
    background #282828
    padding-right 1em
    border-radius 5px
    box-shadow 1px 2px 3px black

    &:first-child
      margin-bottom 1em

    span
      padding-left 1em
      font-size .875em
      opacity .7a
      user-select none

    img
      object-fit contain
      width 50px
      border-radius 5px
      box-shadow 1px 1px 1px rgba(black, .3)

.hero__container
  position relative
  width 100%
  height 100vh
  display flex
  flex-flow column nowrap
  overflow hidden
  justify-content center
  padding 2em

  .action
    display flex
    flex-flow column nowrap
    position relative
    color #ECF0F1
    padding-left 47px
    margin-top 2em
    z-index 2
    filter drop-shadow(1px 2px 3px black)
    span
      &.top
        font-size 1.3em
        padding-bottom .5em
        text-decoration underline
      &.desc
        font-size .875em
        max-width 600px
    .buttons
      display flex
      flex-flow row nowrap
      margin-top 3em
      text-transform uppercase
      font-size .7em
      font-weight 800
      .button
        padding 1em 1.5em
        margin 0 1em
        border-radius 5px
        box-shadow 1px 2px 3px black
        background #282929
        color #ECF0F1
        border-radius: 5px;
        cursor pointer
        user-select pointer

        &.connected
          background #9B59B6

        &.logged
          background #2ECC71

        &.disabled
          opacity .4
          cursor not-allowed

  .title
    display flex
    flex-flow column nowrap
    font-size 1.5em
    line-height 45px
    position relative
    text-transform uppercase
    color #ECF0F1
    z-index 2
    h1
      filter drop-shadow(1px 2px 3px black)

      &.gold
        color #F1C40F
        padding-left 47px

  video
    width 100%
    height 100%
    object-fit cover
    position absolute
    top 0
    left 0
    z-index 0

  &::after
    content ''
    position absolute
    width 100%
    height @width
    top 0
    left 0
    background url('../assets/loggedbar.png'), rgba(#212121, .3)
    z-index 1

  img
    width 300px
    right 5%
    bottom 5%
    mix-blend-mode color-dodge
    position absolute
    z-index 4
    animation grow 20s ease-in-out infinite alternate

@keyframes logo
  from
    opacity 1

  to
    opacity 0

@keyframes grow
  0%
    filter grayscale(1) blur(10px)

  10%
    filter grayscale(1) blur(3px)

  15%
    filter grayscale(0) blur(10px) brightness(.5)

  20%
    filter grayscale(1) blur(5px)

  40%
    filter grayscale(1) blur(2px)

  75%
    filter grayscale(.2) blur(2px)

  80%
    filter grayscale(1) blur(5px)

  100%
    filter grayscale(1) blur(1px)

@keyframes float
  from
    transform translateY(-5px) scale(.7)

  to
    transform translateY(5px) scale(.7)
</style>

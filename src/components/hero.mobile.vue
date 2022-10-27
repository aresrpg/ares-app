<template lang="pug">
.frame
  img.logo(src="src/assets/text_logo_fr.png")
  .title UNE #[b AVENTURE] INCROYABLE DANS UN UNIVERS #[b UNIQUE]
  .description AresRPG est un serveur minecraft sans mods dans lequel votre objectif est de réunir les 6 œufs de dragon. #[b Le monde est infesté de créatures que vous devrez réduire en poussière pour améliorer votre équipement et vos compétences]
  .mail
    input(placeholder="Participe à la Bêta..")
    svg(width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M19.632 0.532017H2.36803C1.26787 0.532017 0.376038 1.42385 0.376038 2.52401V14.476C0.376038 15.5762 1.26787 16.468 2.36803 16.468H19.632C20.7322 16.468 21.624 15.5762 21.624 14.476V2.52401C21.624 1.42385 20.7322 0.532017 19.632 0.532017ZM19.632 2.52401V4.21742C18.7015 4.97516 17.218 6.15343 14.0466 8.63674C13.3477 9.18649 11.9633 10.5072 11 10.4918C10.0369 10.5074 8.65199 9.18628 7.95338 8.63674C4.7825 6.1538 3.29867 4.97529 2.36803 4.21742V2.52401H19.632ZM2.36803 14.476V6.77352C3.31896 7.53094 4.6675 8.59379 6.72295 10.2033C7.63002 10.9173 9.21851 12.4935 11 12.4839C12.7728 12.4935 14.3411 10.9402 15.2767 10.2037C17.3321 8.59416 18.681 7.53102 19.632 6.77356V14.476H2.36803Z" fill="black")
  a.twitter(href="https://twitter.com/AresRPG" target="_blank" rel="noopener noreferrer" aria-label="Twitter")
    img(src="src/assets/twitter.svg")
  a.telegram(href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="Twitter")
    img(src="src/assets/telegram.svg")
  a.discord(href="https://discord.gg/kpzNeCW" target="_blank" rel="noopener noreferrer" aria-label="Twitter")
    img(src="src/assets/discord.svg")
  .discover
    span DÉCOUVRIR
    img(src="src/assets/chevron.svg")
</template>

<style lang="stylus" scoped>
.frame
  display grid
  grid 'logo logo logo' 2fr 'title title title' 1.5fr 'desc desc desc' 2.5fr 'mail mail mail' 1fr 'twitter telegram github' 1fr 'disc disc disc' 4fr / 1fr 1fr 1fr
  width 100%
  height 100vh
  background url('src/assets/mobile_bg_v1.png') left / cover
  color #eee
  font-family 'Roboto Condensed'
  place-items center center
  padding 2em
  padding-bottom 1em
  grid-row-gap 1em
  .logo
    grid-area logo
    object-fit containx
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
    img
      // margin 1em
      // width 90%
      filter drop-shadow 1px 2px 3px black
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
    font-weight 1.3em
    img
      height 10px
</style>

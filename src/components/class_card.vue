<i18n>
fr:
  bonus: Bonus d'arme
en:
  bonus: Weapon bonus
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps(['icon', 'title', 'weapon', 'desc', 'color'])
const { t } = useI18n()
</script>

<template lang="pug">
.card
  img.border(src="../assets/card_border.png")
  img.icon(:src="props.icon")
  .texts
    .title {{ props.title }}
    .badge
      .badge_title {{ t('bonus') }}
      .badge_value(:style="{ background: props.color }") {{ props.weapon }}
    .desc {{ props.desc }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))

.card
  display flex
  flex-flow row nowrap
  width 400px
  height max-content
  position relative
  margin-left 120px
  img
    filter material-2
    object-fit contain
    &.border
      mix-blend-mode luminosity
      height 190px
      position absolute
      top 45%
      transform rotate(-45deg) translateY(-60%)
    &.icon
      width 120px
      margin-right 1em

  @media screen and (max-width: 1200px)
    margin-left 0
    img.border
      display none

  .texts
    display flex
    flex-flow column nowrap
    .title
      text-transform uppercase
      letter-spacing 3px
      font-size 2em
      font-weight 500
    .badge
      display flex
      flex-flow row nowrap
      font-size .55em
      text-transform uppercase
      border-radius 3px
      justify-content center
      align-items center
      width max-content
      overflow hidden
      font-weight 100
      box-shadow 1px 2px 3px rgba(black, .6)
      >div
        padding .3em .5em
      .badge_title
        background rgba(#2C3E50, .9)
        padding-left 1em
      .badge_value
        padding-right 1em
    .desc
      font-size .65em
      padding-top 1em
      font-weight 100
</style>

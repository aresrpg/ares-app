<i18n>
fr:
  palier: Les Paliers
  desc: Le monde d'AresRPG est constitué de 6 paliers, chacun majoritairement incarnant un biome spécifique.
  desc_2: Un palier est similaire à une ile volante qui représente un univers miniature et dangereusement gardé par un redoutable dragon.
  desc_3: Pour passer au palier suivant, vous devrez trouver, affronter, et vaincre son gardien.
en:
  palier: The Worlds
  desc: AresRPG's realm is made of 6 worlds, each having its own biome.
  desc_2: A world is similar to a floating island which contains an entire miniature universe dangerously guarded by a dreadful dragon.
  desc_3: To move up a world, you will need to find, face, and eradicate its keeper
</i18n>

<script setup>
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'

import bg from '../assets/page6bg.jpeg'
import { minimal_fade_up } from '../core/anime'

import page_container from './page_container.desktop.vue'

const { t } = useI18n()
const title = ref()
const img = ref()
const desc = ref()

const animations = [
  minimal_fade_up(title),
  minimal_fade_up(img, 200),
  minimal_fade_up(desc, 300),
]

onMounted(() => {
  animations.forEach(animation => animation.mount())
})
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()))
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .title(ref="title") {{ t('palier') }}
    .layers
      img(ref="img" src="../assets/island.png")
      .descs(ref="desc")
        .desc {{ t('desc') }}
        .desc {{ t('desc_2') }}
        .desc {{ t('desc_3') }}
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  border-bottom-left-radius 0
  border-bottom-right-radius 0
  .title
    font-size 4em
    font-weight 500
    font-family 'Montserrat'
  .layers
    display flex
    flex-flow row nowrap
    justify-content space-evenly
    align-items center

    img
      width 40%
      object-fit contain
      mix-blend-mode hard-light
      filter material-2
      animation float 4s infinite alternate ease-in-out
    .descs
      width 500px
      font-size 1.2em
      font-weight 100
      display flex
      flex-flow column nowrap
      font-family 'Montserrat'
      .desc
        padding 1em 0

@keyframes float
  0%
    transform translateY(-15px) rotate(-5deg)
  100%
    transform translateY(15px) rotate(-5deg)
</style>

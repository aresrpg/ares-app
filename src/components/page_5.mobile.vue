<template lang="pug">
.frame
  div
  div
  div
  div
</template>

<style lang="stylus" scoped>
.frame
  display flex
  width 100%
  overflow hidden
  height 100vh
  flex-flow column nowrap
  background url('src/assets/background_noise.jpeg') center / cover
  div
    width 100%
    min-height 30vh
    box-shadow 1px 2px 3px black
  :nth-child(1)
    background url('src/assets/s1.jpeg') center / cover
    z-index 4
  :nth-child(2)
    background url('src/assets/s2.jpeg') center / cover
    z-index 3
  :nth-child(3)
    background url('src/assets/s3.jpeg') center / cover
    z-index 2
  :nth-child(4)
    background url('src/assets/s4.jpeg') center / cover
</style>

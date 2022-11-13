<i18n>
fr:
  ip: play.aresrpg.world
  desc: AresRPG est un serveur minecraft sans mods dans lequel votre objectif est de réunir les 6 œufs de dragon. Le monde est infesté de créatures que vous devrez réduire en poussière pour améliorer votre équipement et vos compétences
  title: Entrez dans La Legende
  play: Jouer
  commu: Communauté
</i18n>

<template lang="pug">
.container
  .logo
  .ip
  nav
    .play
    .commu
  .left
    .desc
    .title
  .right
</template>

<style lang="stylus" scoped>
.container
  width 100%
  height 100vh
  background url('../assets/ice_dragon.jpeg') center/cover
  display flex
</style>

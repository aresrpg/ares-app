<i18n>
fr:
  home: Home
  support: Support
  careers: Recrutement
  play: Jouer
  copy: play.aresrpg.world copié
en:
  home: Home
  support: Support
  careers: Careers
  play: Play
  copy: play.aresrpg.world copied
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { useToast } from 'vue-toastification';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { rotate_in, minimal_fade_up } from '../core/anime';

const { t } = useI18n();
const toast = useToast();
const scroll_top = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
const on_copy = () => toast.info(t('copy'));
const a0 = ref();
const a1 = ref();
const a2 = ref();
const a3 = ref();
const a4 = ref();
const a5 = ref();
const a6 = ref();
const a8 = ref();
const texts = ref();
const designed = ref();

const animations = [
  rotate_in(a0, 100),
  rotate_in(a1, 200),
  rotate_in(a2, 300),
  rotate_in(a3, 400),
  rotate_in(a4, 500),
  rotate_in(a5, 600),
  rotate_in(a6, 700),
  rotate_in(a8, 800),
  minimal_fade_up(texts, 1000),
  minimal_fade_up(designed, 1200),
];
onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
footer
  .socials
    a(ref="a0" href="https://www.youtube.com/channel/UC9YFBFi_jrBYIc449Io7adQ" target="_blank" rel="noopener noreferrer" aria-label="youtube")
      img.yt(src="../assets/youtube.png")
    a(ref="a1" href="https://twitter.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="twitter")
      img.twitter(src="../assets/twitter.png")
    a(ref="a2" href="https://discord.gg/gbkvVJq" target="_blank" rel="noopener noreferrer" aria-label="discord")
      img.discord(src="../assets/discord.png")
    a(ref="a3" href="https://github.com/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="github")
      img.github(src="../assets/github_square.png")
    a(ref="a4" href="https://t.me/aresrpg" target="_blank" rel="noopener noreferrer" aria-label="telegram")
      img.telegram(src="../assets/telegram.png")
    a(ref="a5" href="https://www.reddit.com/r/aresrpg/" target="_blank" rel="noopener noreferrer" aria-label="reddit")
      img.reddit(src="../assets/reddit.png")
    a(ref="a6" href="https://instagram.com/ares_rpg" target="_blank" rel="noopener noreferrer" aria-label="instagram")
      img.insta(src="../assets/instagram.png")
    a(ref="a8" href="https://tiktok.com/@aresrpg.world" target="_blank" rel="noopener noreferrer" aria-label="tiktok")
      img.tiktok(src="../assets/tiktok.png")
  .texts(ref="texts")
    .home(@click="scroll_top") {{ t('home') }}
    a.support(href="mailto:contact@aresrpg.fr") {{ t('support') }}
    a.carrers(href="https://discord.com/channels/265104803531587584/1032277246616014961" target="_blank") {{ t('careers') }}
    .play(
    v-clipboard:copy="'play.aresrpg.world'"
    v-clipboard:success="on_copy"
    ) {{ t('play') }}
  .designed(ref="designed") Designed & Integrated by #[a(href="https://sceat.xyz/" target="_blank") Sceat]
</template>

<style lang="stylus" scoped>
footer
  height 200px
  width 100%
  border-bottom-left-radius 30px
  border-bottom-right-radius 30px
  bottom 0
  background rgba(#2C3E50, .9)
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  box-shadow inset 1px 2px 5px rgba(black .4)
  position relative
  .designed
    position absolute
    right 1.5em
    color white
    bottom .5em
    font-size 1.2em
    font-family 'Marck Script', cursive
    text-shadow 1px 2px 3px rgba(black, .5)
    a
      cursor pointer
      color #2ECC71
      text-decoration none
  .texts
    display flex
    flex-flow row nowrap
    text-transform uppercase
    font-size .7em
    font-weight 900
    >div, a
      text-decoration none
      color white
      cursor pointer
      padding 0 2em
      opacity .65
  .socials
    display flex
    flex-flow row nowrap
    justify-content center
    align-items center
    width 100%
    img
      width 50px
      margin 1em
      object-fit contain
      filter drop-shadow(1px 2px 3px #212121)
</style>

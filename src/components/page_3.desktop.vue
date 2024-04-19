<i18n>
en:
  title: An {exclusive} gameplay
  exclusive: exclusive
  desc: |
    We are everlasting fans of Ankama's games, and we are proud to present you our own vision of a turn-based MMORPG
    inspired by Dofus and Wakfu, what we believe could have been a perfect crossover between Dofus 1.29 and Cube World.
  classes: The classes
  stats: Statistics
  fights: About Fights
  spells: Unique spells
  classes_desc: |
    As you begin your journey in AresRPG, you will create your character by choosing from a variety of classes, each offering a
    unique playstyle and abilities. Whether you prefer the resilience of a tank, the support of a healer, or the firepower
    of a damage dealer, there's a class that suits your style. As you advance, you'll unlock new spells and enhance your stats,
    allowing you to tailor your character to match your preferred approach to combat
  stats_desc: |
    In AresRPG, the universe is governed by four elements, water, fire, air, and earth.
    Each element is linked to a specific stat that influences your character's abilities in distinct ways. Below, we describe the role of each
  stat_health: |
    {stat_health_title} directly affects your character's life points. Each level up increases your health points by 5
  stat_health_title: Health
  stat_ap: |
    {stat_ap_title} points determine how many actions your character can perform in a turn
  stat_ap_title: Action
  stat_mp: |
    {stat_mp_title} points dictate how far your character can move in a turn
  stat_mp_title: Movement
  stat_range: |
    The {stat_range_title} determines how far your character can attack from
  stat_range_title: Range
  stat_damage: |
    {stat_damage_title} are added to your attacks
  stat_damage_title: Raw Damages
  stat_crit: |
    {stat_crit_title} points increase your chances of landing a critical hit
  stat_crit_title: Critical
  stat_wisdom: |
    {stat_wisdom_title} increases the amount of experience you get after a fight along with your ability to regenerate health
  stat_wisdom_title: Wisdom
  stat_strength: |
    {stat_strength_title} increases your earth damages
  stat_strength_title: Strength
  stat_intelligence: |
    {stat_intelligence_title} increases your fire damages and healing abilities
  stat_intelligence_title: Intelligence
  stat_chance: |
    {stat_chance_title} increases your water damages and drop chances
  stat_chance_title: Chance
  stat_agility: |
    {stat_agility_title} increases your air damages and critical chances
  stat_agility_title: Agility
  fights_desc: |
    This is where the excitement and innovation come into play, although the game shares the 3D voxel aesthetics of Trove,
    the combat system is uniquely isometric and turn-based. This strategic approach allows for slow-paced,
    deeply tactical battles with incredible depth and potential for synergies.
  spells_desc: |
    As you progress through the game, you will unlock new spells by leveling up your character.
    Additionally, you can further enhance these spells by leveling them up, increasing their effectiveness, power, and range.
fr:
  title: Un gameplay {exclusive}
  exclusive: exclusif
  desc: |
    Nous sommes des fans inconditionnels des jeux Ankama, et nous sommes fiers de vous présenter notre propre vision d'un MMORPG
    au tour par tour inspiré de Dofus et Wakfu, ce que nous croyons être un crossover parfait entre Dofus 1.29 et Cube World.
  classes: Les classes
  stats: Statistiques
  fights: À propos des combats
  spells: Sorts uniques
  classes_desc: |
    Au début de votre aventure dans AresRPG, vous créerez votre personnage en choisissant parmi une variété de classes,
    chacune offrant un style de jeu et des capacités uniques. Que vous préfériez la résilience d'un tank,
    le soutien d'un soigneur ou la puissance d'un barbare, il y a une classe qui correspond à votre style.
    Au fur et à mesure que vous avancez, vous débloquerez de nouveaux sorts et améliorerez vos statistiques,
    vous permettant de personnaliser votre personnage pour correspondre à votre approche préférée du combat.
  stats_desc: |
    Dans AresRPG, l'univers est gouverné par quatre éléments, l'eau, le feu, l'air et la terre. Chaque élément est lié à une statistique spécifique qui influence les capacités de votre personnage de manière distincte. Ci-dessous, nous décrivons le rôle de chaque statistique
  stat_health: |
    La {stat_health_title} affecte directement les points de vie de votre personnage. Chaque niveau augmente vos points de vie de 5
  stat_health_title: Vitalité
  stat_ap: |
    Les points d'{stat_ap_title} déterminent le nombre d'actions que votre personnage peut effectuer en un tour
  stat_ap_title: Action
  stat_mp: |
    Les points de {stat_mp_title} dictent à quelle distance votre personnage peut se déplacer en un tour
  stat_mp_title: Mouvement
  stat_range: |
    La {stat_range_title} détermine à quelle distance votre personnage peut attaquer
  stat_range_title: Portée
  stat_damage: |
    Les {stat_damage_title} bruts sont ajoutés à vos attaques
  stat_damage_title: Damage
  stat_crit: |
    Les coups {stat_crit_title} augmentent vos chances de réaliser un coup critique
  stat_crit_title: Critique
  stat_wisdom: |
    La {stat_wisdom_title} augmente la quantité de points d'expérience que vous obtenez après un combat ainsi que votre capacité à régénérer la santé
  stat_wisdom_title: Sagesse
  stat_strength: |
    La {stat_strength_title} augmente vos dégâts de terre
  stat_strength_title: Force
  stat_intelligence: |
    L'{stat_intelligence_title} augmente vos dégâts de feu et vos capacités de guérison
  stat_intelligence_title: Intelligence
  stat_chance: |
    La {stat_chance_title} augmente vos dégâts d'eau et vos chances de drop
  stat_chance_title: Chance
  stat_agility: |
    L'{stat_agility_title} augmente vos dégâts d'air et vos chances critiques
  stat_agility_title: Agilité
  fights_desc: |
    C'est là que l'excitation et l'innovation entrent en jeu, bien que le jeu partage l'esthétique 3D voxel de Trove,
    le système de combat est un hybride unique entre les combats au corps à corps et les sorts de classe.
    Cette approche stratégique permet des batailles lentes, profondément tactiques avec une profondeur incroyable et un potentiel de synergies.
  spells_desc: |
    Au fur et à mesure que vous progressez dans le jeu, vous débloquerez de nouveaux sorts en montant de niveau votre personnage.
    De plus, vous pouvez améliorer davantage ces sorts en les montant de niveau, en augmentant leur efficacité, leur puissance et leur portée.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { fade_left } from '../core/anime';
import snow from '../assets/art/snow-sakura.jpg';

import spellCard from './spell_card.vue';
import page_container from './page_container.desktop.vue';

const { t } = useI18n();
const title = ref();
const bar = ref();
const desc = ref();

const selected = ref(0);

const animations = [
  fade_left(title, 100),
  fade_left(bar, 200),
  fade_left(desc, 300),
];

onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
page_container(:img="snow")
  .page
    .top
      .choices
        .classes(:class="{ selected: selected === 0 }" @click="selected = 0")
          .title {{ t('classes') }}
          img(src="../assets/svg-icon/knight.svg")
        .stats(:class="{ selected: selected === 1 }" @click="selected = 1")
          .title {{ t('stats') }}
          img(src="../assets/svg-icon/stats.svg")
        .fights(:class="{ selected: selected === 2 }" @click="selected = 2")
          .title {{ t('fights') }}
          img(src="../assets/svg-icon/sword.svg")
        .spells(:class="{ selected: selected === 3 }" @click="selected = 3")
          .title {{ t('spells') }}
          img(src="../assets/svg-icon/spellbook.svg")
      .title(ref="title")
        i18n-t(keypath="title")
          template(#exclusive)
            b {{ t('exclusive') }}
      .bar(ref="bar")
      .desc(ref="desc") {{ t('desc') }}
    .bottom
      .classes(v-if="selected === 0")
        .desc {{ t('classes_desc') }}
        img(src="../assets/art/classes.jpeg")
      .stats(v-if="selected === 1")
        .desc {{ t('stats_desc') }}
        .stats_each
          .health
            img.icon(src="../assets/stats/health.png")
            i18n-t(keypath="stat_health" tag="span")
              template(#stat_health_title)
                b.health {{ t('stat_health_title') }}
          .ap
            img.icon(src="../assets/stats/action.png")
            i18n-t(keypath="stat_ap" tag="span")
              template(#stat_ap_title)
                b.ap {{ t('stat_ap_title') }}
          .mp
            img.icon(src="../assets/stats/movement.png")
            i18n-t(keypath="stat_mp" tag="span")
              template(#stat_mp_title)
                b.mp {{ t('stat_mp_title') }}
          .range
            img.icon(src="../assets/stats/range.png")
            i18n-t(keypath="stat_range" tag="span")
              template(#stat_range_title)
                b.range {{ t('stat_range_title') }}
          .damage
            img.icon(src="../assets/stats/raw_damage.png")
            i18n-t(keypath="stat_damage" tag="span")
              template(#stat_damage_title)
                b.damage {{ t('stat_damage_title') }}
          .crit
            img.icon(src="../assets/stats/crit.png")
            i18n-t(keypath="stat_crit" tag="span")
              template(#stat_crit_title)
                b.crit {{ t('stat_crit_title') }}
          .wisdom
            img.icon(src="../assets/stats/wisdom.png")
            i18n-t(keypath="stat_wisdom" tag="span")
              template(#stat_wisdom_title)
                b.wisdom {{ t('stat_wisdom_title') }}
          .strength
            img.icon(src="../assets/stats/strength.png")
            i18n-t(keypath="stat_strength" tag="span")
              template(#stat_strength_title)
                b.strength {{ t('stat_strength_title') }}
          .intelligence
            img.icon(src="../assets/stats/intelligence.png")
            i18n-t(keypath="stat_intelligence" tag="span")
              template(#stat_intelligence_title)
                b.intelligence {{ t('stat_intelligence_title') }}
          .chance
            img.icon(src="../assets/stats/chance.png")
            i18n-t(keypath="stat_chance" tag="span")
              template(#stat_chance_title)
                b.chance {{ t('stat_chance_title') }}
          .agility
            img.icon(src="../assets/stats/agility.png")
            i18n-t(keypath="stat_agility" tag="span")
              template(#stat_agility_title)
                b.agility {{ t('stat_agility_title') }}
      .fights(v-if="selected === 2")
        .desc {{ t('fights_desc') }}
        img(src="../assets/art/isometric.jpeg")
      .spells(v-if="selected === 3")
        spellCard
        .desc {{ t('spells_desc') }}
        img.small(src="../assets/art/spells.jpeg")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  .top
    display grid
    grid-row-gap 1em
    grid 'choices title title title' 1fr 'choices . middle .' max-content 'choices . desc desc' auto / 40% 1.5fr 80px 1fr
    padding 3em 100px 1em 100px
    @media screen and (max-width: 1300px)
      grid 'choices title title title' 1fr 'choices . middle .' max-content 'choices . desc desc' auto / 40% 1.5fr 80px 1fr
    >.title
      grid-area title
      font-size 3em
      text-transform uppercase
      filter material-2
      place-self center center
      font-weight 100
      b
        display inline
        color #2ECC71
        font-weight 900
    .desc
      font-weight 100
      place-self center start
      font-family 'Montserrat'
      font-size 1.1em
    .bar
      grid-area middle
      place-self center center
      width 1px
      height 50px
      background white
      filter material-2
    .desc
      grid-area desc
    .choices
      grid-area choices
      display flex
      flex-flow column nowrap
      place-self end center
      >div
        width 400px
        display flex
        flex-flow row nowrap
        justify-content space-between
        align-items center
        backdrop-filter blur(10px)
        border-radius 12px
        padding .5em 1em
        margin 0 .5em .5em 0
        cursor pointer
        height max-content
        opacity .3
        border 1px solid #eee
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        &.selected
          opacity .8
          box-shadow 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        &:hover
          box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        img
          width 40px
          object-fit contain
          filter drop-shadow(1px 2px 3px black)
        .title
          font-size 1em
          font-family 'Montserrat'
          filter material-2
  .bottom
    display flex
    justify-content center
    height 100%
    padding 0 0 0 100px
    .stats
      flex-flow column nowrap
    >div
      display flex
      flex-flow row nowrap
      justify-content center
      align-items center
      .desc
        font-family 'Montserrat'
        font-size 1.1em
        font-weight 100
        max-width 1000px
        text-align justify
        padding 50px
      >img
        width 100%
        max-width 1000px
        min-width 800px
        margin-right 50px
        filter material-2
        animation float 2s infinite alternate
        border-radius 12px
        overflow hidden
        object-fit contain
        &.small
          min-width 400px
      .stats_each
        display grid
        grid-template-columns 1fr 1fr 1fr
        padding-right 100px
        b
          font-weight 400
          &.health
            color #E91E63
          &.ap
            color #FFC107
          &.mp
            color #388E3C
          &.range
            color #eee
          &.damage
            color #eee
          &.crit
            color #eee
          &.wisdom
            color #AB47BC
          &.strength
            color #8D6E63
          &.intelligence
            color #EF5350
          &.chance
            color #42A5F5
          &.agility
            color #66BB6A
        >div
          display flex
          flex-flow row nowrap
          align-items center
          background rgba(#212121, .4)
          margin .25em .5em
          padding .25em .5em
          border-radius 12px
          border 1px solid #212121
          .icon
            width 35px
            padding .2em
            margin-right .5em
            object-fit contain
          span
            font-size .7em
            font-weight 100
            font-family 'Montserrat'
</style>

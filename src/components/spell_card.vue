<i18n>
en:
  flying_soul: Flying soul
  unlock: Unlock at level {0}
  desc: Sends out a soul projectile that deals damage to an enemy, effective at medium to long range.
  one_turn: 1 turn
  turns: turns
  on_yourself: on yourself
  all_ennemies: all ennemies
  all_allies: all allies
  trap_heals: Traps heals you
  trap_add_damage: Traps increases your damages
  trap_cancel_damage: You are immune to traps
fr:
  flying_soul: Âme volante
  unlock: Débloqué au niveau {0}
  desc: Envoie un projectile d'âme qui inflige des dégâts à un ennemi, efficace à moyenne et longue portée.
  one_turn: 1 tour
  turns: tours
  on_yourself: sur vous-même
  all_ennemies: tous les ennemis
  all_allies: tous les alliés
  trap_heals: Les pièges vous soignent
  trap_add_damage: Les pièges augmentent vos dégâts
  trap_cancel_damage: Vous êtes immunisé contre les pièges
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';

import agility from '../assets/stats/agility.png';
import chance from '../assets/stats/chance.png';
import intelligence from '../assets/stats/intelligence.png';
import wisdom from '../assets/stats/wisdom.png';
import raw_damage from '../assets/stats/raw_damage.png';
import strength from '../assets/stats/strength.png';
import vitality from '../assets/stats/health.png';
import flying_soul from '../assets/flying_soul.jpg';

import Tabs from './tabs.vue';

const spell = {
  name: 'Flying Soul',
  icon: 'sram_flying_soul',
  level: 1,
  description:
    'Sends out a soul projectile that deals damage to an enemy, effective at medium to long range.',
  levels: [
    {
      cost: 6,
      range: [2, 4],
      critical_chance: 100,
      area: 2,
      area_type: 'line',
      casts_per_turn: 0,
      casts_per_target: 0,
      turns_to_recast: 0,
      modifiable_range: true,
      line_of_sight: true,
      linear: true,
      free_cell: false,
      can_critical: true,
      base_effects: [
        {
          type: 'damage',
          min: 6,
          max: 11,
          target: 'cell',
          element: 'air',
          chance: 100,
        },
        {
          type: 'steal',
          min: 1,
          max: 4,
          target: 'cell',
          chance: 50,
          turns: 1,
          statistic: 'agility',
        },
      ],
      critical_effects: [
        {
          type: 'damage',
          min: 12,
          max: 15,
          target: 'cell',
          element: 'air',
          chance: 100,
        },
        {
          type: 'steal',
          min: 5,
          max: 5,
          target: 'cell',
          chance: 100,
          turns: 1,
          statistic: 'agility',
        },
      ],
    },
    {
      cost: 5,
      range: [2, 5],
      critical_chance: 80,
      area: 2,
      area_type: 'line',
      casts_per_turn: 0,
      casts_per_target: 0,
      turns_to_recast: 0,
      modifiable_range: true,
      line_of_sight: true,
      linear: true,
      free_cell: false,
      can_critical: true,
      base_effects: [
        {
          type: 'damage',
          min: 9,
          max: 14,
          target: 'cell',
          element: 'air',
          chance: 100,
        },
        {
          type: 'steal',
          min: 1,
          max: 4,
          target: 'cell',
          chance: 60,
          turns: 1,
          statistic: 'agility',
        },
      ],
      critical_effects: [
        {
          type: 'damage',
          min: 15,
          max: 118,
          target: 'cell',
          element: 'air',
          chance: 100,
        },
        {
          type: 'steal',
          min: 5,
          max: 5,
          target: 'cell',
          chance: 100,
          turns: 1,
          statistic: 'agility',
        },
      ],
    },
  ],
};

const { t } = useI18n();

const damage_text = effect => {
  return effect.min === effect.max
    ? `${effect.min} damages`
    : `${effect.min} to ${effect.max} damages`;
};

const heal_text = effect => {
  return effect.min === effect.max
    ? `${effect.min}`
    : `${effect.min} to ${effect.max}`;
};

const add_text = effect => {
  return effect.min === effect.max
    ? `${effect.min} ${effect.statistic}`
    : `${effect.min} to ${effect.max} ${effect.statistic}`;
};

const has_critical = data => data.can_critical;
const critical_chance = data => `1/${data.critical_chance}`;

const effects_tab = data => {
  if (!data.base_effects.length) return;
  return {
    Effects: data.base_effects,
    ...(has_critical(data) && { Critical: data.critical_effects }),
  };
};

const turn_text = turns => {
  if (!turns) return;
  if (turns === 1) return t('one_turn');
  return `${turns} ${t('turns')}`;
};

const target = ({ target }) => {
  if (target === 'self') return t('on_yourself');
  if (target === 'enemy') return t('all_ennemies');
  if (target === 'ally') return t('all_allies');
};

const trap_modifier = ({ modifier }) => {
  if (modifier === 'heal') return t('trap_heals');
  if (modifier === 'add_damage') return t('trap_add_damage');
  if (modifier === 'cancel_damage') return t('trap_cancel_damage');
};

const has_range = ({ range }) => !!range[1];

const element_to_icon = element => {
  switch (element) {
    case 'air':
      return agility;
    case 'water':
      return chance;
    case 'fire':
      return intelligence;
    case 'earth':
      return strength;
  }
};

const statistic_to_icon = statistic => {
  switch (statistic) {
    case 'agility':
      return agility;
    case 'chance':
      return chance;
    case 'intelligence':
      return intelligence;
    case 'strength':
      return strength;
    case 'wisdom':
      return wisdom;
    case 'vitality':
      return vitality;
    case 'damage':
      return raw_damage;
  }
};

const element_to_color = element => {
  switch (element) {
    case 'air':
      return '#66BB6A';
    case 'water':
      return '#42A5F5';
    case 'fire':
      return '#EF5350';
    case 'earth':
      return '#8D6E63';
    case 'raw':
      return '#EEEEEE';
  }
};

const statistic_to_color = statistic => {
  switch (statistic) {
    case 'agility':
      return '#66BB6A';
    case 'chance':
      return '#42A5F5';
    case 'intelligence':
      return '#EF5350';
    case 'strength':
      return '#8D6E63';
    case 'wisdom':
      return '#AB47BC';
    case 'vitality':
      return '#E91E63';
    case 'damage':
      return '#EEEEEE';
  }
};

const chance_text = ({ chance }) => {
  if (chance !== 100) return `${chance}% chance`;
};
</script>

<template lang="pug">
.content
  .top
    img(:src="flying_soul")
    .name {{ t('flying_soul') }}
    .level
      i18n-t(keypath="unlock")
        b 1
  .desc {{ t('desc') }}
  Tabs(
    :tabs="Object.fromEntries(spell.levels.map((level, index) => [index+1, level]))"
  )
    template(#before-tabs)
      span.spell-level Spell level
    template(#tab="{ tab }")
      span.spell-level-name {{ tab }}
    template(#content="{ data }")
      .head
        .ap
          img.icon(src="../assets/stats/action.png")
          span {{ data.cost }}
        .range
          img.icon(src="../assets/stats/range.png")
          span {{ data.range[0] }} - {{ data.range[1] }}
      .effects
        Tabs(
          v-if="effects_tab(data)"
          :tabs="effects_tab(data)"
        )
          template(#tab="{ tab }")
            span.title {{ tab }}
          template(#content="{ data: effects }")
            .effect(v-for="effect in effects")
              .effect-line(v-if="effect.type === 'damage'")
                img(:src="element_to_icon(effect.element)")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Deals #[b(:style="{ color: element_to_color(effect.element)}") {{ damage_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}]
              .effect-line(v-else-if="effect.type === 'poison'")
                img(:src="element_to_icon(effect.element)")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Poison #[b(:style="{ color: element_to_color(effect.element)}") {{ damage_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}] #[span.turns(v-if="effect.turns") {{ turn_text(effect.turns) }}]
              .effect-line(v-else-if="effect.type === 'add'")
                img(:src="statistic_to_icon(effect.statistic)")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] + #[b(:style="{ color: statistic_to_color(effect.statistic)}") {{ add_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}] #[span.turns(v-if="effect.turns") {{ turn_text(effect.turns) }}]
              .effect-line(v-else-if="effect.type === 'curse'")
                img(:src="element_to_icon(effect.element)")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Curse #[b(:style="{ color: element_to_color(effect.element)}") {{ damage_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}] #[span.turns(v-if="effect.turns") {{ turn_text(effect.turns) }}]
              .effect-line(v-else-if="effect.type === 'trap_modifier'")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] {{ trap_modifier(effect) }} #[span.turns(v-if="effect.turns") {{ turn_text(effect.turns) }}]
              .effect-line(v-else-if="effect.type === 'heal'")
                i.bx.bxs-heart
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Heals #[b(:style="{ color: element_to_color('fire')}") {{ heal_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}] #[span.turns(v-if="effect.turns") {{ turn_text(effect.turns) }}]
              .effect-line(v-else-if="effect.type === 'teleport'")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Teleport to a cell
              .effect-line(v-else-if="effect.type === 'push'")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Push #[b {{ effect.distance }}] cells
              .effect-line(v-if="effect.type === 'steal'")
                img(:src="statistic_to_icon(effect.statistic)")
                span #[span.chance(v-if="chance_text(effect)") {{ chance_text(effect) }}] Steal #[b(:style="{ color: statistic_to_color(effect.statistic)}") {{ add_text(effect) }}] #[span.target(v-if="target(effect)") {{ target(effect) }}]
      .attributes
        span.title Attributes
        .critical(v-if="has_critical(data)") Critical chance #[b {{ critical_chance(data) }}]
        .area(v-if="data.area > 1") Area #[b {{ data.area }} {{ data.area_type && data.area_type !== 'square' ? `(${data.area_type})` : '' }}]
        .cast-per-turn(v-if="data.casts_per_turn") Casts per turn #[b {{ data.casts_per_turn }}]
        .cast-per-target(v-if="data.casts_per_target") Casts per target #[b {{ data.casts_per_target }}]
        .turns_to_recast(v-if="data.turns_to_recast") Turns to recast #[b {{ data.turns_to_recast }}]
        .modifiable_range(v-if="has_range(data)") Modifiable range #[i.bx.bx-sm(:class="data.modifiable_range ? 'bx-check' : 'bx-x'")]
        .line-of-sight(v-if="has_range(data)") Line of sight #[i.bx.bx-sm(:class="data.line_of_sight ? 'bx-check' : 'bx-x'")]
        .linear(v-if="data.linear && has_range(data)") Linear #[i.bx.bx-sm.bx-check]
        .free-cell(v-if="data.free_cell && has_range(data)") Free cell #[i.bx.bx-sm.bx-check]
</template>

<style lang="stylus" scoped>
.bx-x
  color #EF5350
.bx-check
  color #66BB6A
.head
  display flex
  flex-flow row nowrap
  justify-content space-evenly
  >div
    display flex
    flex-flow row nowrap
    align-items center
    border-radius 6px
    img
      width 25px
      margin-right .2em
  .ap
    i
      color #3498DB

.effects, .attributes
  span.title
    text-transform uppercase
    font-size .8em
    font-weight bold
    opacity .7
    padding 0 .5em
  >div
    font-size .9em
    margin .5em 0
    .effect
      .effect-line
        display flex
        flex-flow row nowrap
        align-items center
        margin-left .5em
        i
          margin-right .5em
        >img
          width 20px
          height 20px
          margin-right .5em
        span
          width max-content
          font-size 1.1em
          b
            font-weight 900
          .crit
            color #eee
            background-color #000000
            border-radius 6px
            opacity .8
            font-size .9em
            margin-left .5em
            padding .1em .3em
        span.chance
          color #eee
          background-color #000000
          border-radius 6px
          opacity .8
          font-size .875em
          padding .1em .3em
          font-style italic
        span.target
          color #eee
          background-color #6A1B9A
          border-radius 6px
          opacity .8
          font-size .875em
          padding .1em .3em
          font-style italic
        span.turns
          color #eee
          background-color #000000
          border-radius 6px
          opacity .8
          font-size .875em
          padding .1em .3em
          font-style italic
.attributes
  >div
      padding 0em 2em
      height 1.5em
      font-size .9em
      display flex
      justify-content space-between
      margin 0
      align-items center
      b
        font-weight 900
        margin-left .5em
        color #eee
        background-color #37474F
        border-radius 6px
        font-size .9em
        padding .1em .3em
.content
  font-size .9rem
  display flex
  flex-flow column nowrap
  background rgba(#212121, .8)
  padding .5em
  border-radius 6px
  .top
    display grid
    grid "pic title" 1fr "pic level" 1fr / max-content 1fr
    img
      grid-area pic
      width 60px
      height @width
      object-fit cover
      margin-right 1em
      border-radius 6px
      overflow hidden
      border 2px solid black
    .name
      grid-area title
      font-weight bold
      font-size 1.2em
      text-transform uppercase
    .level
      grid-area level
      font-size .9em
      b
        text-decoration none
        color #F1C40F
        font-weight 900
  >div
    text-align start
  .desc
    font-size .9em
    text-align justify
    margin 1em
    font-style italic
    padding-bottom .5em
    border-bottom 1px solid #eee
  .spell-level
    text-transform uppercase
    font-size .7em
    font-weight bold
    opacity .7
    padding-right 1em
  .spell-level-name
    font-weight 900
    padding 0 .5em
</style>

<i18n>
en:
  economy: Economy
  desc: |
    The economy in AresRPG is completely player-driven, with all items,
    characters, relics, titles, and guilds securely recorded on the Sui blockchain.
    This ensures that nothing is stored server-side, giving players full ownership of their assets.
    Each character is a unique entity on Sui, capable of possessing equipment, pets, titles, and stats.
    Players and the server can modify these assets, leveraging blockchain technology to enhance gameplay.
    Additionally, any item can be freely exchanged or traded for Sui, adding a dynamic trading layer to the game.
  stats: Characteristics
  stats_desc: Each level you'll receive points to increase your stats, in the form of soul-bound tokens, which can be applied to your character's stats
  pets: Pets
  pets_desc: |
    During your adventure, you might discover pets. To benefit from their abilities,
    you must equip them and feed them consistently over time. As you nurture your pets,
    they will progressively provide you with enhanced stats, aiding you in your journey.
  items: Items
  items_desc: |
    In AresRPG, you can obtain items by defeating monsters, crafting, or trading with other players.
    Enhance these items with runes to boost their attributes, adding depth and strategy to your equipment choices.
  relics: Relics
  relics_desc: |
    In AresRPG, relics are powerful artifacts that you can acquire through challenging quests and significant achievements.
    Each relic provides unique enhancements and abilities, playing a crucial role in your character's development and strategy.
  achievments: Titles
  achievments_desc: |
    Titles are prestigious labels that appear above your character's name,
    symbolizing status or achievement. Earn titles by completing specific challenges or reaching notable milestones within the game.
    Each title not only represents your accomplishments but also enhances your reputation among other players.
  guild: Guilds
  guild_desc: |
    Guilds enable players to create factions and control entire areas.
    Each member can contribute to the guild's success in competitions.
    As guilds are also Sui objects, ownership can be transferred or even stored in a DAO,
    adding a strategic element to managing and leading your faction.
fr:
  economy: Économie
  desc: |
    L'économie d'AresRPG est entièrement dirigée par les joueurs, avec tous les items, personnages, reliques, titres,
    et guildes enregistrés sur la blockchain Sui. Rien n'est stocké côté serveur, garantissant que les joueurs ont une véritable propriété de leurs actifs.
    Chaque personnage que vous créez devient un objet distinct sur Sui, capable de posséder des équipements, des familiers, des titres et des statistiques.
    Les modifications apportées à ces actifs sont facilitées à la fois par le serveur et par les actions des joueurs,
    intégrant la technologie blockchain pour renforcer vos décisions de jeu.
  stats: Statistiques
  stats_desc: À chaque niveau, vous recevrez des points pour augmenter vos stats, sous forme de jetons liés, qui peuvent être appliqués aux stats de votre personnage
  pets: Familiers
  pets_desc: |
    Au cours de votre aventure, vous pourrez découvrir des familiers. Pour bénéficier de leurs capacités,
    vous devrez les équiper et les nourrir régulièrement. En prenant soin de vos familiers,
    ils vous fourniront progressivement des statistiques améliorées, vous aidant dans votre aventure.
  items: Items
  items_desc: |
    Dans AresRPG, vous pouvez obtenir des items en battant des monstres, en les fabriquant ou en les échangeant avec d'autres joueurs.
    Améliorez ces items avec des runes pour augmenter leurs attributs, ajoutant de la profondeur et de la stratégie à vos choix d'équipement.
  relics: Reliques
  relics_desc: |
    Dans AresRPG, les reliques sont de puissants artefacts que vous pouvez acquérir en accomplissant des quêtes difficiles et des réalisations significatives.
    Chaque relique fournit des améliorations et des capacités uniques, jouant un rôle crucial dans le développement et la stratégie de votre personnage.
  achievments: Titres
  achievments_desc: |
    Les titres sont des étiquettes prestigieuses qui apparaissent au-dessus du nom de votre personnage,
    symbolisant un statut ou une réalisation. Gagnez des titres en relevant des défis spécifiques ou en atteignant des jalons notables dans le jeu.
    Chaque titre représente non seulement vos accomplissements, mais renforce également votre réputation auprès des autres joueurs.
  guild: Guildes
  guild_desc: |
    Les guildes permettent aux joueurs de créer des factions et de contrôler des zones entières.
    Chaque membre peut contribuer au succès de la guilde dans les compétitions.
    Comme les guildes sont également des objets Sui, la propriété peut être transférée ou même stockée dans un DAO,
    ajoutant un élément stratégique à la gestion et au leadership de votre faction.
</i18n>

<script setup>
import { useI18n } from 'vue-i18n';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import bg from '../assets/art/voxel-beach.jpeg';
import eagle from '../assets/eagle.png';
import pet from '../assets/wolf.png';
import items from '../assets/helmetsword.png';
import relics from '../assets/relic.png';
import cards from '../assets/cards.png';
import shield from '../assets/shield.png';
import { fade_up } from '../core/anime';

import feature_card from './feature_card.big.desktop.vue';
import page_container from './page_container.desktop.vue';

const { t } = useI18n();

const title = ref();
const line = ref();
const desc = ref();

const animations = [
  fade_up(title, 100),
  fade_up(line, 200),
  fade_up(desc, 300),
];
onMounted(() => {
  animations.forEach(animation => animation.mount());
});
onBeforeUnmount(() => animations.forEach(animation => animation.unmount()));
</script>

<template lang="pug">
page_container(:img="bg")
  .page
    .top
      .title(ref="title") {{ t('economy') }}
      .line(ref="line")
      .desc(ref="desc") {{ t('desc') }}
    img.sword(src="../assets/skullsword.png")
    .bottom
      feature_card(:img="eagle" :title="t('stats')" :desc="t('stats_desc')")
      feature_card(:img="pet" :title="t('pets')" :desc="t('pets_desc')")
      feature_card(:img="items" :title="t('items')" :desc="t('items_desc')")
      feature_card(:img="relics" :title="t('relics')" :desc="t('relics_desc')")
      feature_card(:img="cards" :title="t('achievments')" :desc="t('achievments_desc')")
      feature_card(:img="shield" :title="t('guild')" :desc="t('guild_desc')")
</template>

<style lang="stylus" scoped>
material-2 = drop-shadow(0 2px 6px rgba(black .15)) drop-shadow(0 1px 2px rgba(black, .3))
.page
  display flex
  flex-flow column nowrap
  position relative
  overflow hidden
  .sword
    position absolute
    width 800px
    object-fit contain
    right -200px
    bottom 0
    transform rotate(43deg)
    z-index 1
    mix-blend-mode luminosity
    opacity .5
  .bottom
    display flex
    font-size .9rem
    flex-flow row wrap
    justify-content space-evenly
    align-items center
    z-index 2
    flex 1
    margin 0 400px 0 100px
    @media screen and (max-width: 1710px)
      margin 0 100px 0
    @media screen and (max-width: 1400px)
      // margin 0
  .top
    display flex
    flex-flow row nowrap
    padding 3em 0 0 150px
    z-index 2
    position relative
    .title
      font-size 3em
    .line
      width 100px
      margin 1em
      margin-top 45px
      background white
      height 1px
      box-shadow 1px 2px 3px black
    .desc
      margin-top 25px
      margin-right 100px
      // width 900px
      font-size .9em
      font-weight 100
      font-family 'Montserrat'
</style>

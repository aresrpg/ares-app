import { createApp } from 'vue';
import Toast from 'vue-toastification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import 'vue-toastification/dist/index.css';
import 'vue-universal-modal/dist/index.css';
import VueUniversalModal from 'vue-universal-modal';
import { VueClipboard } from '@soerenmartius/vue3-clipboard';
import { inject } from '@vercel/analytics';
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faTelegram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { createI18n } from 'vue-i18n';

import app from './app.vue';
import router from './router.js';

inject();

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
});

library.add(
  faGithub,
  faYoutube,
  faTwitter,
  faDiscord,
  faTelegram,
  faTwitterSquare,
  faEnvelope,
);

console.log(
  `%c You're curious, I like you 🤭🍑`,
  'color: #1565C0;font-weight:bold;font-size:22px;',
);
console.log(
  "%c but don't bother, i'm open-source!",
  'color: #E67E22;font-size:18px;',
);
console.log('%c https://github.com/aresrpg/website', 'font-size:15px;');

const vue_app = createApp(app);

vue_app
  .use(router)
  .use(VueUniversalModal, { teleportTarget: '#modals' })
  .use(i18n)
  .use(VueClipboard)
  .component('fa', FontAwesomeIcon)
  .use(Toast)
  .mount('#app');

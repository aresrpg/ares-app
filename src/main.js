import { createApp, provide } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import Toast, { useToast } from 'vue-toastification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import 'vue-toastification/dist/index.css';

import app from './app.vue';
import router from './router.js';

library.add(faBars, faUser);

console.log(
  `%c You're curious, i like you 😊`,
  'color: #1565C0;font-weight:bold;font-size:20px;'
);

const vue_app = createApp(app);
const toast = useToast();

vue_app.use(router).component('fa', FontAwesomeIcon).use(Toast).mount('#app');

const updateSW = registerSW({
  onOfflineReady() {
    toast('ready to work offline!', {});
  },
});

vue_app.config.compilerOptions.isCustomElement = tag => {
  if (tag.startsWith('el-')) return true;
  if (tag.startsWith('upload-')) return true;
  return false;
};

import { createApp, provide } from 'vue'
import { registerSW } from 'virtual:pwa-register'
import Toast, { useToast } from 'vue-toastification'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'vue-toastification/dist/index.css'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
import {
  faDiscord,
  faGithub,
  faTwitter,
  faYoutube,
  faTelegram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { createI18n } from 'vue-i18n'

import { VITE_RECAPTCHA_KEY } from './env'
import app from './app.vue'
import router from './router.js'

const i18n = createI18n({
  locale: 'fr',
  allowComposition: true, // you need to specify that!
})

library.add(
  faGithub,
  faYoutube,
  faTwitter,
  faDiscord,
  faTelegram,
  faTwitterSquare,
  faEnvelope
)

console.log(
  `%c You're curious, I like you 🤭🍑`,
  'color: #1565C0;font-weight:bold;font-size:22px;'
)
console.log(
  "%c but don't bother, i'm open-source!",
  'color: #E67E22;font-size:18px;'
)
console.log('%c https://github.com/aresrpg/ares-app', 'font-size:15px;')

const vue_app = createApp(app)
const toast = useToast()

vue_app
  .use(router)
  .use(VueReCaptcha, { siteKey: '6LfklcMiAAAAAG6KxHTI23ytDJz1Sow5sJvS4vab' })
  .use(VueUniversalModal, { teleportTarget: '#modals' })
  .use(i18n)
  .use(VueClipboard)
  .component('fa', FontAwesomeIcon)
  .use(Toast)
  .mount('#app')

const updateSW = registerSW({
  onOfflineReady() {
    toast('ready to work offline!', {})
  },
})

vue_app.config.compilerOptions.isCustomElement = tag => {
  if (tag.startsWith('el-')) return true
  if (tag.startsWith('upload-')) return true
  return false
}

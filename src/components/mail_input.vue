<i18n>
  fr:
    placeholder: Participe à la Bêta..
    email: Enregistrement réussi !
    email_invalid: L'email semble incorrect
  en:
    placeholder: Join the Beta..
    email: Sign up sucess !
    email_invalid: Email seems invalid!
</i18n>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { useToast } from 'vue-toastification'

const { executeRecaptcha, recaptchaLoaded, instance } = useReCaptcha()

const { t } = useI18n()
const toast = useToast()
const mail = ref('')
const email_regex = /[\w-]+@([\w-]+\.)+[\w-]+/gm

const submit_mail = async () => {
  const token = await executeRecaptcha('submit')
  if (!mail.value.match(email_regex)) alert(t('email_invalid'))
  else {
    await fetch('/.netlify/functions/save_email', {
      method: 'POST',
      body: JSON.stringify({
        email: mail.value,
        token,
      }),
    })
    toast.success(t('email'))
    mail.value = ''
  }
}
onMounted(() => {
  recaptchaLoaded().then(() => instance.value.hideBadge())
})
</script>

<template lang="pug">
.mail
  input(:placeholder="t('placeholder')" @keyup.enter="submit_mail" v-model="mail")
  fa(:icon="['fas', 'envelope']" @click="submit_mail")
</template>

<style lang="stylus" scoped>
.mail
  grid-area mail
  border 2px solid white
  border-radius 30px
  display flex
  position relative
  height 40px
  max-width 400px
  width 85%
  input
    background none
    width 100%
    margin 0 .5em
    color white
    border none
    padding 0 5em 0 1em
  svg
    position absolute
    top 50%
    right 1em
    transform translateY(-50%)
</style>

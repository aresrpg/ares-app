import { createClient } from 'redis'
import { request } from 'undici'

const { REDIS_ENDPOINT, GOOGLE_SECRET } = process.env
const client = createClient({ url: REDIS_ENDPOINT })
const connected = client.connect()

client.on('error', err => console.log('Redis Client Error', err))

const verify_captcha = async token => {
  const { body } = await request(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${GOOGLE_SECRET}&response=${token}`,
    }
  )
  return body.json()
}

export const handler = async ({ body }) => {
  if (!body) throw new Error('missing body')

  const { email, token } = JSON.parse(body)
  if (!email || !token) throw new Error('invalid body')

  const { success, action, score } = await verify_captcha(token)
  if (!success || action !== 'submit' || score < 0.5) {
    console.dir({ success, action, score })
    throw new Error('recaptcha failed')
  }

  // is redis connected ?
  await connected
  await client.SADD('mails', email)
  return {
    statusCode: 200,
    body: 'true',
  }
}

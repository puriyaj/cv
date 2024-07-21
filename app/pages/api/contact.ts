"use server"

import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData : FormData) => {
  const message = formData.get('message')
  const sender = formData.get('email')
  if(!message || typeof message !== "string"){
    return {
      error:"Invalid message"
    }
  }
resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'puriyaj@gmail.com',
  subject: 'Hello World',
  reply_to: sender as string,
  html: message
})
}

'use server'
import dataFetch from '@/utils/dataFetch'
export async function signup(formData) {
  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }
  const user = await dataFetch.login(rawFormData.email, rawFormData.password)
  if (user) {
    return user
  } else {
    return null
  }
}

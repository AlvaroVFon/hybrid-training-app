'use server'
import { getUser } from '../database/getUser'
import { redirect } from 'next/navigation'
const login = async (formdata) => {
  const email = formdata.get('email')
  const password = formdata.get('password')

  const isRegistered = await getUser(email, password)
  if (isRegistered) {
    const { rol } = isRegistered
    if (rol === 'admin') {
      redirect('/admin')
    }
    redirect('/entrenamientos')
  } else {
    redirect('/loginError')
  }
}

export { login }

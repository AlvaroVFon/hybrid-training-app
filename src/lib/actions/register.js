'use server'
import { insertUser } from '../database/insertUser'
import { redirect } from 'next/navigation'

const register = async (formdata) => {
  const nombre = formdata.get('nombre')
  const apellido = formdata.get('apellido')
  const email = formdata.get('email')
  const password = formdata.get('password')

  const user = await insertUser(nombre, apellido, email, password).then(
    (res) => {
      if (res.rowCount === 1) {
        redirect('/login')
      } else {
        redirect('/registerError')
      }
    }
  )
}

export { register }

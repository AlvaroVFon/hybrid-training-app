'use server'
import { getUser } from '../database/getUser'
const login = async (formadata) => {
  const email = formadata.get('email')
  const password = formadata.get('password')

  const user = await getUser(email, password).then((res) => console.log(res))
}

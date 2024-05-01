'use server'
import { getUser } from '../database/getUser'
const login = async (email, password) => {
  const registered = await getUser(email, password)
  if (registered) {
    const { email, rol } = registered
    const user = { email, rol }
    return user
  } else {
    return false
  }
}
export { login }

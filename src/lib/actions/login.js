'use server'
import { getUser } from '../database/getUser'
const login = async (email, password) => {
  const registered = await getUser(email, password)
  if (registered) {
    console.log(registered)
    const { userID, email, rol } = registered
    const user = { userID, email, rol }
    console.log(user)
    return user
  } else {
    return false
  }
}
export { login }
